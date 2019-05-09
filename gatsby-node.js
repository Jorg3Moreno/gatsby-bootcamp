const path = require('path');

// add a new node field, named 'slug' on all nodes where
// internal type is MarkdownRemark
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // get path to template component
  const postTemplate = path.resolve('./src/templates/post.js');

  // get markdown data (filename)
  const res = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // create the new page
  res.data.allMarkdownRemark.edges.map(edge => {
    createPage({
      component: postTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
};
