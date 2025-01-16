import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("_redirects");

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["png", "svg"],
  });
}
