import markdownItFootnote from "markdown-it-footnote";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { IdAttributePlugin } from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

import fs from "fs";
import childProcess from "child_process";
import { DateTime } from "luxon";
import * as cheerio from "cheerio";

const WEBSITE_URL = "https://miseryconfusion.com";

export default function (eleventyConfig) {
  // Copy static files
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("js/imageMapResizer.min.js");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("_headers");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("images/*.mp4");
  eleventyConfig.addPassthroughCopy("files/**/*");
  eleventyConfig.addPassthroughCopy({ "blog/**/images/*.png": "blog/images" });
  eleventyConfig.addPassthroughCopy({ "images/favicon": "/" });

  eleventyConfig.addGlobalData("site.url", WEBSITE_URL);

  // Ignore drafts
  eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
    if (
      data.draft &&
      (process.env.ELEVENTY_RUN_MODE === "build" ||
        process.env.PREVIEW_PROD === "true")
    ) {
      return false;
    }
  });

  // Add ID attributes to HTML elements
  eleventyConfig.addPlugin(IdAttributePlugin);

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: {
      name: "blog", // iterate over `collections.blog`
      limit: 0, // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "miseryconfusion",
      subtitle: "The blog of Bobby Azarbayejani (aka 'nohup')",
      base: "https://miseryconfusion.com/",
      author: {
        name: "Bobby Azarbayejani",
        email: "contact@miseryconfusion.com",
      },
    },
  });

  // Image transforms
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["png"],
  });

  function render_footnote_anchor_name(tokens, idx, options, env /*, slf */) {
    const n = Number(tokens[idx].meta.id + 1).toString();
    let prefix = "";

    // Add file's slug as a prefix so that we don't have duplicate tokens
    if (typeof env?.page?.fileSlug === "string")
      prefix = `-${env.page.fileSlug}-`;

    return prefix + n;
  }

  // Markdown
  eleventyConfig.amendLibrary("md", (mdLibrary) => {
    const md = mdLibrary.use(markdownItFootnote);
    md.renderer.rules.footnote_anchor_name = render_footnote_anchor_name;
    return md;
  });

  // Add a shortcode to get the last commit date in DATE_FULL format
  eleventyConfig.addShortcode("lastCommitDate", function () {
    const lastUpdatedFromGit = childProcess
      .execSync(`git log -1 --format=%cd --date=short`)
      .toString()
      .trim();
    const formattedDate = DateTime.fromISO(lastUpdatedFromGit).toLocaleString(
      DateTime.DATE_FULL,
    );
    return formattedDate;
  });

  // Adds a shortcode to get the current page's created date
  eleventyConfig.addShortcode("created", function () {
    return this.page?.inputPath
      ? fs.statSync(this.page.inputPath).birthtime
      : undefined;
  });

  // Adds a shortcode to get the current page's modified date
  eleventyConfig.addShortcode("modified", function () {
    return this.page?.inputPath
      ? fs.statSync(this.page.inputPath).mtime
      : undefined;
  });

  eleventyConfig.addFilter("sortDataByDate", (obj) => {
    const sorted = {};
    Object.keys(obj)
      .sort((a, b) => {
        return obj[a].date > obj[b].date ? 1 : -1;
      })
      .forEach((name) => (sorted[name] = obj[name]));
    return sorted;
  });

  // Add a ?v=timestamp to the end of any url to bust the cache
  // use like {{ "/style.css" | bust }}
  eleventyConfig.addFilter("bust", (url) => {
    const [urlPart, paramPart] = url.split("?");
    const params = new URLSearchParams(paramPart || "");
    const relativeUrl =
      urlPart.charAt(0) == "/" ? urlPart.substring(1) : urlPart;

    try {
      const fileStats = fs.statSync(relativeUrl);
      const dateTimeModified = new DateTime(fileStats.mtime).toFormat("X");

      params.set("v", dateTimeModified);
    } catch (error) {}

    return `${urlPart}?${params}`;
  });

  // Formats a date object as e.g. October 17, 2022
  // use like {{ post.date | fullDate }}
  eleventyConfig.addFilter("fullDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toLocaleString(
      DateTime.DATE_FULL,
    );
  });

  eleventyConfig.addTransform("og-image", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const $ = cheerio.load(content);
      const $ogImage = $("img.og-image");

      // Don't modify if no og-image
      if ($ogImage.length === 0) return content;

      $("head")
        .find('meta[name="og:image"]')
        .replaceWith(
          `<meta name="og:image" content="${WEBSITE_URL}${$ogImage.attr("src")}">`,
        );
      return $.html();
    }

    // Don't modify otherwise
    return content;
  });
}
