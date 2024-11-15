const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

// Setting up Markdownify
const markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require('markdown-it-anchor');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownItFootnote = require("markdown-it-footnote");

let markdownitOptions = {
  html: true,
  breaks: true,
  linkify: true,
};
const md = new markdownIt(markdownitOptions);

md.use(markdownItAttrs, {
  // optional, these are default options
  leftDelimiter: '{',
  rightDelimiter: '}',
  allowedAttributes: ["class", "rel"]  // empty array = all attributes are allowed
});
md.use(markdownItAnchor);
md.use(markdownItFootnote);

// Allow for data files to be in yaml
const yaml = require("js-yaml");

module.exports = async function (eleventyConfig) {

  eleventyConfig.addFilter('where2', function where(array, key, value) {
    return array.filter(item => {
      let itemValue;
      
      // Check if the key is in item.data
      if (item.data && key in item.data) {
        itemValue = item.data[key];
      } 
      // Check if the key is directly in item
      else if (key in item) {
        itemValue = item[key];
      } 
      // If key is not found, return false to filter out this item
      else {
        return false;
      }

      // Handle undefined value (check for key existence)
      if (typeof value === 'undefined') {
        return true;
      }

      // Handle array values
      if (Array.isArray(itemValue)) {
        return itemValue.includes(value);
      } 
      // Handle string and other types
      else {
        return itemValue === value;
      }
    });
  });

  // https://saadbess.com/blog/creating-a-content-recommendation-plugin-in-11ty/
  eleventyConfig.addCollection("relatedPosts", function (collection) {
    return collection
      .getAll()
      .filter((item) => !item.data.draft)
      .map((post) => {
        let related = [];

        if (post.data.tags) {
          post.data.tags.forEach((tag) => {
            collection.getFilteredByTag(tag).forEach((item) => {
              if (
                item.url !== post.url &&
                !related.includes(item) &&
                !item.data.draft
              ) {
                related.push(item);
              }
            });
          });
        }
        // Remove duplicates and limit to a specific number of related posts, for instance, 3
        related = [...new Set(related)].slice(0, 4);
        post.data.relatedPosts = related;
        return post;
      });
  });

  // Make it possible to have the site served in a sub directory
  const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Automatically improve images
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // which file extensions to process
    extensions: 'html',
    // optional, output image formats
    formats: ['jpg', 'png', 'webp'],
    // optional, output image widths
    widths: ['auto', 400, 800],
    // optional, attributes assigned on <img> override these values.
    defaultAttributes: {
      loading: 'lazy',
      sizes: '100vw',
      decoding: 'async',
    },
  });

  // Syntax highlighting with prism
  // TODO Missing copy button
  eleventyConfig.addPlugin(syntaxHighlight);

  // Collections
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
  
  // Setup shortcodes and filters
  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addFilter("markdownify", (markdownString) =>
    md.render(markdownString),
  );
  
  // Create titles for posts without a title in frontmatter
  eleventyConfig.addGlobalData("eleventyComputed.title", () => (data) => {
 
    // If property is explicitly set, use that
    if (data.title) {
      return data.title;
    }
    
    let slug = data.fileSlug;
    let words = slug.split('-');

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    return words.join(' ');
  });

  // Create computed excerpts per page if none has been explicitly set
  eleventyConfig.addGlobalData("eleventyComputed.excerpt", () => (data) => {

    if (JSON.stringify(data) === '{}') {
      return "";
    }

    // If property is explicitly set, use that
    if (data.excerpt) {
      return data.excerpt;
    }

    // Grab raw page content
    let content = data.page.rawInput;

    // If template uses Markdown, render it
    if (data.page.templateSyntax.includes('md')) {
      content = md.render(content);
    }

    // Vanilla paragraphs ending in period, question or exclamation
    const matches = content.match(/<p>(.+[\.\?\!])<\/p>/);

    // If found, return content
    if (matches) {
      return matches[1];
    }

    return null;
  });

  // absolute_url is deprecated - hardcode to your liking
  // @deprecated
  eleventyConfig.addFilter("absolute_url", (url) => {
      return url;
    }
  );

  // Relative url is deprecated
  // @deprecated
  eleventyConfig.addFilter("relative_url", (url) => {
      return url;
    }
  );

  /**
   * Define a post_url Liquid tag for cross-referencing
   * 
   * Original creator: https://rusingh.com/articles/2020/04/24/implement-jekyll-post-url-tag-11ty-shortcode/
   * Adapted by me to work with filename instead of slug.
   * 
   * @param {*} collection 
   * @param {*} filename 
   * @returns 
   */
  eleventyConfig.addShortcode("post_url", (collection, filename) => {
    if (collection.length < 1) {
      throw "Collection appears to be empty";
    }
    if (!Array.isArray(collection)) {
      throw "Collection is an invalid type - it must be an array!";
    }
    if (typeof filename !== "string") {
      throw "Filename is an invalid type - it must be a string!";
    }
    const found = collection.find(p => p.template.inputPath.indexOf(filename) > -1);
    if (found === 0 || found === undefined) {
      // When nothing was found, throw an error to break the build.
      // Broken links should not be allowed!
      throw new Error(`File ${this.inputPath} wants to link to ${filename}, but it does not exist.`);
    } else {
      return found.url;
    }
  });

  /**
   * Define a post_url Liquid tag for cross-referencing
   * 
   * Original creator: https://rusingh.com/articles/2020/04/24/implement-jekyll-post-url-tag-11ty-shortcode/
   * Adapted by me to work with filename instead of slug.
   * 
   * @param {*} collection 
   * @param {*} filename 
   * @returns 
   */
  eleventyConfig.addShortcode("link", (collection, filename) => {
    if (collection.length < 1) {
      throw "Collection appears to be empty";
    }
    if (!Array.isArray(collection)) {
      throw "Collection is an invalid type - it must be an array!";
    }
    if (typeof filename !== "string") {
      throw "Filename is an invalid type - it must be a string!";
    }
    const found = collection.find(p => p.template.inputPath.indexOf(filename) > -1);
    if (found === 0 || found === undefined) {
      // When nothing was found, throw an error to break the build.
      // Broken links should not be allowed!
      throw new Error(`File ${this.inputPath} wants to link to ${filename}, but it does not exist.`);
    } else {
      return found.url;
    }
  });

  // @source https://24ways.org/2018/turn-jekyll-up-to-eleventy/
  // TODO: Might be better to turn off in the future, but for now this makes i way easier
  eleventyConfig.setLiquidOptions({
    jekyllInclude: true, // allow to use jekyll style include
    extname: ".liquid", // Use .liquid if not specified
    dynamicPartials: false, // allow to use feature_row without quotes
    strictFilters: true
  });

  // Make it possible to use yaml as settings
  eleventyConfig.addDataExtension("yaml, yml", (contents) => yaml.load(contents));

  // Configure excerpt
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true
  });

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
