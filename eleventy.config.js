import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

import childProcess from "child_process";

import { DateTime } from "luxon";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
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
}
