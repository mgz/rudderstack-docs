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
  const { createPage, createRedirect } = actions
 
  const redirects = await graphql(`
    {
      allSanitySiteRedirects {
        edges {
          node {
            _id
            to_path
            from_path
            is_permanenet
          }
        }
      }
    }
  `)

  if (redirects.errors) {
    throw redirects.errors
  }

  const site_redirects = redirects.data.allSanitySiteRedirects.edges || []
  site_redirects.forEach(edge => {
    if(edge.node.from_path !== "/docs"){
      createRedirect({
        fromPath: edge.node.from_path,
        toPath: edge.node.to_path,
        isPermanent: edge.node.is_permanenet ? edge.node.is_permanenet : true,
      })
    }
  })

  
  const result = await graphql(`
    {
      allSanityBlog {
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

  if (result.errors) {
    throw result.errors
  }

  const blogs = result.data.allSanityBlog.edges || []
  blogs.forEach((edge, index) => {
    // console.log('for each blog',edge.node.slug)
    const path = `/blog/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/content.js"),
      context: { slug: edge.node.slug.current },
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
      // if (1 === 2) {
      createPage({
        path,
        component: require.resolve("./src/templates/integrationContent.js"),
        context: { slug: edge.node.slug.current },
      })
      // }
      // console.log("page build successful ", path)
    } catch {
      console.warn("erro while building", path)
    } finally {
      // console.log("done with  ", path)
    }
  })

  const videoLib = await graphql(`
    {
      allSanityVideolibrary {
        edges {
          node {
            slug {
              current
            }
            title
          }
        }
      }
    }
  `)

  if (videoLib.errors) {
    throw videoLib.errors
  }

  const videoLibrary = videoLib.data.allSanityVideolibrary.edges || []
  videoLibrary.forEach((edge, index) => {
    const path = `/video-library/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/videoContent.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  const thankyou = await graphql(`
    {
      allSanityThankyoupages {
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

  if (thankyou.errors) {
    throw thankyou.errors
  }

  const thankyoupages = thankyou.data.allSanityThankyoupages.edges || []
  thankyoupages.forEach((edge, index) => {
    let path = edge.node.slug.current

    createPage({
      path,
      component: require.resolve("./src/templates/thankyou.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  const caseStudies = await graphql(`
    {
      allSanityCaseStudies {
        edges {
          node {
            slug {
              current
            }
            title
          }
        }
      }
    }
  `)

  if (caseStudies.errors) {
    throw caseStudies.errors
  }

  const case_studies = caseStudies.data.allSanityCaseStudies.edges || []
  case_studies.forEach((edge, index) => {
    const path = `/customers/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/caseStudyContent.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  const schDemos = await graphql(`
    {
      allSanitySchdemo {
        edges {
          node {
            slug {
              current
            }
            title
          }
        }
      }
    }
  `)

  if (schDemos.errors) {
    throw schDemos.errors
  }

  const sch_demo = schDemos.data.allSanitySchdemo.edges || []
  sch_demo.forEach((edge, index) => {
    const path = `/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/request-demo.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  //generic-pages
  const l_pages = await graphql(`
    {
      allSanityPage {
        edges {
          node {
            slug {
              current
            }
            title
          }
        }
      }
    }
  `)

  if (l_pages.errors) {
    throw l_pages.errors
  }

  const pages = l_pages.data.allSanityPage.edges || []
  pages.forEach((edge, index) => {
    const path = `/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/pageContent.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  const docPages_query = await graphql(`
    {
      allMdx {
        nodes {
          slug
        }
      }
    }
  `)
  const docPages = docPages_query.data.allMdx.nodes || []
  docPages.forEach((edge, index) => {
    const path = edge.slug == "" ? "/docs/" : `${edge.slug}`
    //console.log('docsPath', edge.frontmatter.slug);

    createPage({
      path,
      component: require.resolve(
        "./src/@rocketseat/gatsby-theme-docs/components/Layout/index.js"
      ),
      context: { slug: edge.slug },
    })
  })

  const guides = await graphql(`
    {
      allSanityContent {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  if (guides.errors) {
    throw guides.errors
  }

  const projects = guides.data.allSanityContent.edges || []
  projects.forEach((edge, index) => {
    const path = `/guides/${edge.node.slug}`
    createPage({
      path,
      component: require.resolve("./src/templates/contentGuides.js"),
      context: { slug: edge.node.slug },
    })
  })

  //vertical pages
  const l_VertialPages = await graphql(`
    {
      allSanityVerticalLandingPage {
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

  if (l_VertialPages.errors) {
    throw l_VertialPages.errors
  }

  const verticalPages =
    l_VertialPages.data.allSanityVerticalLandingPage.edges || []
  verticalPages.forEach((edge, index) => {
    const path = `/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve(
        "./src/templates/verticalLandingPageContent.js"
      ),
      context: { slug: edge.node.slug.current },
    })
  })

  /* const integration_connections = await graphql(`
    {
      allGoogleSpreadsheetR1RedRudderstackIcData {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (integration_connections.errors) {
    throw integration_connections.errors
  }

  const int_conn_pages =
    integration_connections.data.allGoogleSpreadsheetR1RedRudderstackIcData
      .edges || []
  int_conn_pages.forEach((edge, index) => {
    const path = `${edge.node.slug}`
    createPage({
      path,
      component: require.resolve(
        "./src/templates/contentIntegrationConnectionSpreadSheets.js"
      ),
      context: { slug: edge.node.slug },
    })
  })*/

  //Be A Hero Pages pages
  const l_BeAHeroPages = await graphql(`
    {
      allSanityBeAHeroPage {
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

  if (l_BeAHeroPages.errors) {
    throw l_BeAHeroPages.errors
  }

  const beAHeroPages = l_BeAHeroPages.data.allSanityBeAHeroPage.edges || []
  beAHeroPages.forEach((edge, index) => {
    const path = `/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/beAHeroPageContent.js"),
      context: { slug: edge.node.slug.current },
    })
  })
}
