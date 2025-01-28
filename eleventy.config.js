import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

import fs from "fs";

import childProcess from "child_process";

import { DateTime } from "luxon";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("js/imageMapResizer.min.js");
  eleventyConfig.addPassthroughCopy("_redirects");

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["png", "svg"],
  });

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
}
