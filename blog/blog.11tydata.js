import slugify from "@sindresorhus/slugify";
import { DateTime } from "luxon";

export default function (configData) {
  return {
    layout: "blog-post",
    permalink: function ({ title, page }) {
      if (!title) {
        // don't do anything special (it's probably /index.njk)
        return;
      }

      // setting date to false will give the option to disable the date for some blog posts
      if (page.date === false) {
        return `/blog/${slugify(title)}/`;
      }

      const parsedDate = DateTime.fromJSDate(page.date, {
        // see https://www.11ty.dev/docs/dates/#dates-off-by-one-day
        zone: "utc",
      });
      const formattedDate = parsedDate.toISO().split("T")[0].replace(/-/g, "/");
      return `/blog/${formattedDate}/${slugify(title)}/`;
    },
  };
}
