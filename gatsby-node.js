const path = require(`path`)
const { graphql } = require("gatsby")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                slug
                template
                wordpress_id
              }
            }
          }

          allWordpressPost {
            edges {
              node {
                slug
              }
            }
          }

          allWordpressWpSpecialExhibit {
            edges {
              node {
                wordpress_id
                slug
              }
            }
          }

          allWordpressWpPastExhibits {
            edges {
              node {
                wordpress_id
                slug
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
      result.data.allWordpressPage.edges.forEach(edge => {
        if (edge.node.slug === "home") {
          createPage({
            path: `/`,
            component: path.resolve(`./src/pages/index.js`),
          })
        } else if (edge.node.template === "tpl-page-about.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/About.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-page-contact.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/Contact.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-page-experience.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/Experience.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-page-programs.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/Programs.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-page-stories.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/Stories.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-page-support.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/Support.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        } else if (edge.node.template === "tpl-page-privacy.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/Privacy.js`),
            context: {
              id: edge.node.wordpress_id,
            },
          })
        }
      })

      result.data.allWordpressPost.edges.forEach(edge => {
        createPage({
          path: `/stories/${edge.node.slug}`,
          component: path.resolve(`./src/templates/SinglePost.js`),
          context: {
            slug: edge.node.slug,
          },
        })
      })

      result.data.allWordpressWpSpecialExhibit.edges.forEach(edge => {
        createPage({
          path: `/special-exhibits/${edge.node.slug}`,
          component: path.resolve(`./src/templates/SpecialExhibit.js`),
          context: {
            slug: edge.node.slug,
          },
        })
      })

      result.data.allWordpressWpPastExhibits.edges.forEach(edge => {
        createPage({
          path: `/past-exhibits/${edge.node.slug}`,
          component: path.resolve(`./src/templates/PastExhibit.js`),
          context: {
            slug: edge.node.slug,
          },
        })
      })
    })
    resolve()
  })
}
