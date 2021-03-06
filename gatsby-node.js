const path = require('path');
const { withoutSpecialChars } = require('./src/utils');

exports.createPages = async ({ graphql, actions }) => {
  const blogTemplate = path.resolve(`src/templates/blog-post.js`);
  const queryResults = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            id
            updatedAt
            title
            seoDescription
          }
        }
      }
    }
  `);

  queryResults.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    actions.createPage({
      path: `/blog/${withoutSpecialChars(node.title)}`,
      component: blogTemplate,
      context: {
        blog: node,
      },
    });
  });
};