const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/post.js`)

  return graphql(
    `
      query {
        allShopifyProduct {
          edges {
            node {
              handle
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const post = result.data.allShopifyProduct.edges

    post.forEach(post => {
      createPage({
        path: `${post.node.handle}`,
        component: blogPostTemplate,
        context: {
          handle: post.node.handle,
        },
      })
    })
  })
}
