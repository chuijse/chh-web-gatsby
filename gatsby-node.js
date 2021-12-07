const path = require("path");

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        return result;
      })
    );
  });

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getBlogArticles = makeRequest(
    graphql,
    `
    {
      allSanityPost {
        edges {
          node {
            id
            slug{
              current
            }
          }
        }
      }
    }
    `
  ).then((result) => {
    // Create pages for each article.
    result.data.allSanityPost.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.slug.current}`,
        component: path.resolve("src/templates/article.js"),
        context: {
          id: node.id,
        },
      });
    });
  });

  const getCourse = makeRequest(
    graphql,
    `
    {
      allSanityCourses {
        edges {
          node {
            imageGallery {
              slug {
                current
              }
            }
            id
            slug{
              current
            }

          }
        }
      }
    }
    `
  ).then((result) => {
    // Create pages for each article.
    result.data.allSanityCourses.edges.forEach(({ node }) => {
      createPage({
        path: `/teaching/${node.slug.current}`,
        component: path.resolve("src/templates/course.js"),
        context: {
          id: node.id,
        },
      });
      for (let i = 0; i < node.imageGallery.length; i++) {
        const l = node.imageGallery.length;
        node.imageGallery &&
          createPage({
            path: `/teaching/${node.slug.current}/${i}/${node.imageGallery[i]?.slug.current}`,
            component: path.resolve("src/templates/coursePhoto.js"),
            context: {
              id: node.id,
              index: i,
              totalLenghtIndex: l,
            },
          });
      }
    });
  });

  // Query for articles nodes to use in creating pages.
  return getBlogArticles, getCourse;
};
