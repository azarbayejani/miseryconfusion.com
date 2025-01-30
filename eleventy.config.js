import markdownItFootnote from "markdown-it-footnote";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { IdAttributePlugin } from "@11ty/eleventy";

import fs from "fs";
import childProcess from "child_process";
import { DateTime } from "luxon";

export default function (eleventyConfig) {
  // Copy static files
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("js/imageMapResizer.min.js");
  eleventyConfig.addPassthroughCopy("_redirects");

  // Add ID attributes to HTML elements
  eleventyConfig.addPlugin(IdAttributePlugin);

  // Image transforms
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["png", "svg"],
  });

  // Markdown
  eleventyConfig.amendLibrary("md", (mdLibrary) =>
    mdLibrary.use(markdownItFootnote)
  );

  // Add a shortcode to get the last commit date in DATE_FULL format
  eleventyConfig.addShortcode("lastCommitDate", function () {
    const lastUpdatedFromGit = childProcess
      .execSync(`git log -1 --format=%cd --date=short`)
      .toString()
      .trim();
    const formattedDate = DateTime.fromISO(lastUpdatedFromGit).toLocaleString(
      DateTime.DATE_FULL
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
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });
}
