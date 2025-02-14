// blog posts
export const getPosts = collection => {
  return collection.getFilteredByGlob('_posts/**/*.md');
};
