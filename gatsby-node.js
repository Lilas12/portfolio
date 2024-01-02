const path = require("path");
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Define a template for blog post

  const blogPost = path.resolve("./src/templates/blog-post.js");
  const result = await graphql(
    `
      {
        allContentfulBlog {
          nodes {
            title
            slug
          }
        }
      }
    `
  );
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    );
    return;
  }
  const posts = result.data.allContentfulBlog.nodes;
  if (posts.length > 0) {
    posts.forEach((post) => {
      createPage({
        path: `/Projects/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
        },
      });
    });
  }
};
