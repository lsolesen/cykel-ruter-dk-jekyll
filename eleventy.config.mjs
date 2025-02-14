// Import main config
import mainConfig from './_config/mainConfig.mjs';

// Rss feed has options to set
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

// Main config
export default async function (eleventyConfig) {

  // Main config is here
  eleventyConfig.addPlugin(mainConfig);

  // RSS-feed
  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss", // 'atom' or "rss", "json"
		outputPath: "/feed.xml",
    eleventyExcludeFromCollections: true,
		collection: {
			name: "posts", // iterate over `collections.posts`
			limit: 0,     // 0 means no limit
		},
		metadata: {
			language: "da",
			title: "Cykel-ruter.dk",
			subtitle: "Alt om cykelruter og cykelferie.",
			base: "https://www.cykel-ruter.dk/",
			author: {
				name: "Lars Olesen - Cykel-ruter.dk",
				email: "", // Optional
			}
		}
  });

  // Collections
  // Posts are already hardcoded into the theme. So only add you own custom colletions.
  eleventyConfig.addCollection('posts', function(collection) {
    return collection.getFilteredByGlob('_posts/**/*.md');
  });

  eleventyConfig.addCollection('routes', function(collection) {
    return collection.getFilteredByGlob('_routes/**/*.md');
  });
  eleventyConfig.addCollection('pages', function(collection) {
    return collection.getFilteredByGlob('_pages/**/*.md');
  });

  // Pass through
  eleventyConfig.addPassthroughCopy("assets/css");
  eleventyConfig.addPassthroughCopy("assets/js");
  eleventyConfig.addPassthroughCopy("assets/images/");
  eleventyConfig.addPassthroughCopy("_redirects");

  // USE if you want to override one of the layouts and use your own version
  // eleventyConfig.addLayoutAlias("single", "../_layouts/splash.html");

  return {
    dir: {
      input: "./",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
      htmlTemplateEngine: "liquid",
      dataTemplateEngine: "html",
      output: "_site",
      pathPrefix: "/"
    },
  };
};
