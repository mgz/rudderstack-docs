/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
var webpack = require("webpack")
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /owl.carousel/,
            use: loaders.null(),
          },
        ],
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
        }),
      ],
      //devtool: "eval-source-map"
    })
  } else {
    actions.setWebpackConfig({
      plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
        }),
      ],
      //devtool: "eval-source-map"
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allSanityBlog {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const blogs = result.data.allSanityBlog.edges || []
  blogs.forEach((edge, index) => {
    const path = `/blog/${edge.node.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/content.js"),
      context: { slug: edge.node.slug },
    })
  })

  const products_result = await graphql(`
    {
      allSanityProductPage {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (products_result.errors) {
    throw products_result.errors
  }

  const products = products_result.data.allSanityProductPage.edges || []
  products.forEach((edge, index) => {
    const path = `/product/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/products.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  const integration = await graphql(`
    {
      allSanityIntegration {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (integration.errors) {
    throw integration.errors
  }

  const integrations = integration.data.allSanityIntegration.edges || []
  integrations.forEach((edge, index) => {
    const path = `/integration/${edge.node.slug.current}`
    try {
      if (1 === 2) {
      createPage({
        path,
        component: require.resolve("./src/templates/integrationContent.js"),
        context: { slug: edge.node.slug.current },
      })
      }
      console.log("page build successful ", path)
    } catch {
      console.warn("erro while building", path)
    } finally {
      console.log("done with  ", path)
    }
  })
}
