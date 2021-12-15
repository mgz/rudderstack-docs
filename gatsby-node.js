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
      /* plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
        }),
      ], */
      //devtool: "eval-source-map"
    })
  } else {
    /* actions.setWebpackConfig({
      plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
        }),
      ],
      //devtool: "eval-source-map"
    }) */
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
    if (edge.node.from_path !== "/docs") {
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
    const path = `/blog/${edge.node.slug.current}/`

    createPage({
      path,
      component: require.resolve("./src/templates/content.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  const products_result = await graphql(`
    {
      allSanityNewThemeProductPage {
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

  const products = products_result.data.allSanityNewThemeProductPage.edges || []
  products.forEach((edge, index) => {
    const path = `/product/${edge.node.slug.current}/`

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
    const path = `/integration/${edge.node.slug.current}/`
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
    const path = `/video-library/${edge.node.slug.current}/`

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
    let path = `${edge.node.slug.current}/`

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
    const path = `/customers/${edge.node.slug.current}/`

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
    const path = `/${edge.node.slug.current}/`

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
    const path = `/${edge.node.slug.current}/`

    createPage({
      path,
      component: require.resolve("./src/templates/pageContent.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  // const docPages_query = await graphql(`
  //   {
  //     allMdx {
  //       nodes {
  //         slug
  //       }
  //     }
  //   }
  // `)
  // const docPages = docPages_query.data.allMdx.nodes || []
  // docPages.forEach((edge, index) => {
  //   const path = edge.slug == "" ? "/docs/" : `${edge.slug}`
  //   //console.log('docsPath', edge.frontmatter.slug);

  //   createPage({
  //     path,
  //     component: require.resolve(
  //       "./src/@rocketseat/gatsby-theme-docs/components/Layout/index.js"
  //     ),
  //     context: { slug: edge.slug },
  //   })
  // })

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
    const path = `/guides/${edge.node.slug}/`
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
    const path = `/${edge.node.slug.current}/`

    createPage({
      path,
      component: require.resolve(
        "./src/templates/verticalLandingPageContent.js"
      ),
      context: { slug: edge.node.slug.current },
    })
  })

  const INTEGRATION_CONN_EXCLUDED_IDS = [
    "1|48",
    "1|49",
    "1|71",
    "1|75",
    "1|79",
    "1|80",
    "1|82",
    "1|83",
    "1|84",
    "1|91",
    "1|104",
    "1|105",
    "1|121",
    "2|26",
    "2|32",
    "2|37",
    "2|44",
    "2|51",
    "2|62",
    "2|72",
    "2|73",
    "2|82",
    "2|83",
    "2|84",
    "2|85",
    "2|86",
    "2|87",
    "2|88",
    "2|89",
    "2|91",
    "2|100",
    "2|101",
    "2|103",
    "2|107",
    "2|108",
    "2|109",
    "2|111",
    "2|114",
    "2|117",
    "2|127",
    "2|128",
    "2|130",
    "2|138",
    "2|141",
    "2|145",
    "2|147",
    "3|26",
    "3|32",
    "3|37",
    "3|44",
    "3|51",
    "3|62",
    "3|72",
    "3|73",
    "3|82",
    "3|83",
    "3|84",
    "3|85",
    "3|86",
    "3|87",
    "3|88",
    "3|89",
    "3|91",
    "3|100",
    "3|101",
    "3|103",
    "3|107",
    "3|108",
    "3|109",
    "3|111",
    "3|114",
    "3|117",
    "3|127",
    "3|128",
    "3|130",
    "3|138",
    "3|141",
    "3|145",
    "3|147",
    "4|24",
    "4|26",
    "4|32",
    "4|37",
    "4|44",
    "4|45",
    "4|48",
    "4|49",
    "4|51",
    "4|54",
    "4|60",
    "4|62",
    "4|71",
    "4|72",
    "4|73",
    "4|75",
    "4|79",
    "4|80",
    "4|82",
    "4|83",
    "4|84",
    "4|85",
    "4|86",
    "4|87",
    "4|88",
    "4|89",
    "4|91",
    "4|100",
    "4|101",
    "4|103",
    "4|105",
    "4|107",
    "4|108",
    "4|109",
    "4|111",
    "4|114",
    "4|117",
    "4|121",
    "4|127",
    "4|128",
    "4|130",
    "4|138",
    "4|141",
    "4|145",
    "4|147",
    "5|24",
    "5|26",
    "5|32",
    "5|37",
    "5|44",
    "5|45",
    "5|48",
    "5|49",
    "5|51",
    "5|54",
    "5|60",
    "5|62",
    "5|71",
    "5|72",
    "5|73",
    "5|75",
    "5|79",
    "5|80",
    "5|82",
    "5|83",
    "5|84",
    "5|85",
    "5|86",
    "5|87",
    "5|88",
    "5|89",
    "5|91",
    "5|100",
    "5|101",
    "5|103",
    "5|105",
    "5|107",
    "5|108",
    "5|109",
    "5|111",
    "5|114",
    "5|117",
    "5|121",
    "5|127",
    "5|128",
    "5|130",
    "5|138",
    "5|141",
    "5|145",
    "5|147",
    "6|24",
    "6|26",
    "6|32",
    "6|37",
    "6|44",
    "6|45",
    "6|48",
    "6|49",
    "6|51",
    "6|54",
    "6|60",
    "6|62",
    "6|71",
    "6|72",
    "6|73",
    "6|75",
    "6|79",
    "6|80",
    "6|82",
    "6|83",
    "6|84",
    "6|85",
    "6|86",
    "6|87",
    "6|88",
    "6|89",
    "6|91",
    "6|100",
    "6|101",
    "6|103",
    "6|105",
    "6|107",
    "6|108",
    "6|109",
    "6|111",
    "6|114",
    "6|117",
    "6|121",
    "6|127",
    "6|128",
    "6|130",
    "6|138",
    "6|141",
    "6|145",
    "6|147",
    "7|24",
    "7|26",
    "7|32",
    "7|37",
    "7|44",
    "7|45",
    "7|48",
    "7|49",
    "7|51",
    "7|54",
    "7|60",
    "7|62",
    "7|71",
    "7|72",
    "7|73",
    "7|75",
    "7|79",
    "7|80",
    "7|82",
    "7|83",
    "7|84",
    "7|85",
    "7|86",
    "7|87",
    "7|88",
    "7|89",
    "7|91",
    "7|100",
    "7|101",
    "7|103",
    "7|105",
    "7|107",
    "7|108",
    "7|109",
    "7|111",
    "7|114",
    "7|117",
    "7|121",
    "7|127",
    "7|128",
    "7|130",
    "7|138",
    "7|141",
    "7|145",
    "7|147",
    "8|24",
    "8|26",
    "8|32",
    "8|37",
    "8|44",
    "8|45",
    "8|48",
    "8|49",
    "8|51",
    "8|54",
    "8|60",
    "8|62",
    "8|71",
    "8|72",
    "8|73",
    "8|75",
    "8|79",
    "8|80",
    "8|82",
    "8|83",
    "8|84",
    "8|85",
    "8|86",
    "8|87",
    "8|88",
    "8|89",
    "8|91",
    "8|100",
    "8|101",
    "8|103",
    "8|105",
    "8|107",
    "8|108",
    "8|109",
    "8|111",
    "8|114",
    "8|117",
    "8|121",
    "8|127",
    "8|128",
    "8|130",
    "8|138",
    "8|141",
    "8|145",
    "8|147",
    "9|24",
    "9|26",
    "9|32",
    "9|37",
    "9|44",
    "9|45",
    "9|48",
    "9|49",
    "9|51",
    "9|54",
    "9|60",
    "9|62",
    "9|71",
    "9|72",
    "9|73",
    "9|75",
    "9|79",
    "9|80",
    "9|82",
    "9|83",
    "9|84",
    "9|85",
    "9|86",
    "9|87",
    "9|88",
    "9|89",
    "9|91",
    "9|100",
    "9|101",
    "9|103",
    "9|105",
    "9|107",
    "9|108",
    "9|109",
    "9|111",
    "9|114",
    "9|117",
    "9|121",
    "9|127",
    "9|128",
    "9|130",
    "9|138",
    "9|141",
    "9|145",
    "9|147",
    "10|24",
    "10|26",
    "10|32",
    "10|37",
    "10|44",
    "10|45",
    "10|48",
    "10|49",
    "10|51",
    "10|54",
    "10|60",
    "10|62",
    "10|71",
    "10|72",
    "10|73",
    "10|75",
    "10|79",
    "10|80",
    "10|82",
    "10|83",
    "10|84",
    "10|85",
    "10|86",
    "10|87",
    "10|88",
    "10|89",
    "10|91",
    "10|100",
    "10|101",
    "10|103",
    "10|105",
    "10|107",
    "10|108",
    "10|109",
    "10|111",
    "10|114",
    "10|117",
    "10|121",
    "10|127",
    "10|128",
    "10|130",
    "10|138",
    "10|141",
    "10|145",
    "10|147",
    "11|24",
    "11|26",
    "11|32",
    "11|37",
    "11|44",
    "11|45",
    "11|48",
    "11|49",
    "11|51",
    "11|54",
    "11|60",
    "11|62",
    "11|71",
    "11|72",
    "11|73",
    "11|75",
    "11|79",
    "11|80",
    "11|82",
    "11|83",
    "11|84",
    "11|85",
    "11|86",
    "11|87",
    "11|88",
    "11|89",
    "11|91",
    "11|100",
    "11|101",
    "11|103",
    "11|105",
    "11|107",
    "11|108",
    "11|109",
    "11|111",
    "11|114",
    "11|117",
    "11|121",
    "11|127",
    "11|128",
    "11|130",
    "11|138",
    "11|141",
    "11|145",
    "11|147",
    "12|24",
    "12|26",
    "12|32",
    "12|37",
    "12|44",
    "12|45",
    "12|48",
    "12|49",
    "12|51",
    "12|54",
    "12|60",
    "12|62",
    "12|71",
    "12|72",
    "12|73",
    "12|75",
    "12|79",
    "12|80",
    "12|82",
    "12|83",
    "12|84",
    "12|85",
    "12|86",
    "12|87",
    "12|88",
    "12|89",
    "12|91",
    "12|100",
    "12|101",
    "12|103",
    "12|105",
    "12|107",
    "12|108",
    "12|109",
    "12|111",
    "12|114",
    "12|117",
    "12|121",
    "12|127",
    "12|128",
    "12|130",
    "12|138",
    "12|141",
    "12|145",
    "12|147",
    "13|24",
    "13|26",
    "13|32",
    "13|37",
    "13|44",
    "13|45",
    "13|48",
    "13|49",
    "13|51",
    "13|54",
    "13|60",
    "13|62",
    "13|71",
    "13|72",
    "13|73",
    "13|75",
    "13|79",
    "13|80",
    "13|82",
    "13|83",
    "13|84",
    "13|85",
    "13|86",
    "13|87",
    "13|88",
    "13|89",
    "13|91",
    "13|100",
    "13|101",
    "13|103",
    "13|105",
    "13|107",
    "13|108",
    "13|109",
    "13|111",
    "13|114",
    "13|117",
    "13|121",
    "13|127",
    "13|128",
    "13|130",
    "13|138",
    "13|141",
    "13|145",
    "13|147",
    "14|26",
    "14|32",
    "14|37",
    "14|44",
    "14|51",
    "14|62",
    "14|72",
    "14|73",
    "14|82",
    "14|83",
    "14|84",
    "14|85",
    "14|86",
    "14|87",
    "14|88",
    "14|89",
    "14|91",
    "14|100",
    "14|101",
    "14|103",
    "14|107",
    "14|108",
    "14|109",
    "14|111",
    "14|114",
    "14|117",
    "14|127",
    "14|128",
    "14|130",
    "14|138",
    "14|141",
    "14|145",
    "14|147",
    "15|24",
    "15|26",
    "15|32",
    "15|37",
    "15|44",
    "15|45",
    "15|48",
    "15|49",
    "15|51",
    "15|54",
    "15|60",
    "15|62",
    "15|71",
    "15|72",
    "15|73",
    "15|75",
    "15|79",
    "15|80",
    "15|82",
    "15|83",
    "15|84",
    "15|85",
    "15|86",
    "15|87",
    "15|88",
    "15|89",
    "15|91",
    "15|100",
    "15|101",
    "15|103",
    "15|105",
    "15|107",
    "15|108",
    "15|109",
    "15|111",
    "15|114",
    "15|117",
    "15|121",
    "15|127",
    "15|128",
    "15|130",
    "15|138",
    "15|141",
    "15|145",
    "15|147",
    "16|24",
    "16|26",
    "16|32",
    "16|37",
    "16|44",
    "16|45",
    "16|48",
    "16|49",
    "16|51",
    "16|54",
    "16|60",
    "16|62",
    "16|71",
    "16|72",
    "16|73",
    "16|75",
    "16|79",
    "16|80",
    "16|82",
    "16|83",
    "16|84",
    "16|85",
    "16|86",
    "16|87",
    "16|88",
    "16|89",
    "16|91",
    "16|100",
    "16|101",
    "16|103",
    "16|105",
    "16|107",
    "16|108",
    "16|109",
    "16|111",
    "16|114",
    "16|117",
    "16|121",
    "16|127",
    "16|128",
    "16|130",
    "16|138",
    "16|141",
    "16|145",
    "16|147",
    "17|24",
    "17|26",
    "17|32",
    "17|37",
    "17|44",
    "17|45",
    "17|48",
    "17|49",
    "17|51",
    "17|54",
    "17|60",
    "17|62",
    "17|71",
    "17|72",
    "17|73",
    "17|75",
    "17|79",
    "17|80",
    "17|82",
    "17|83",
    "17|84",
    "17|85",
    "17|86",
    "17|87",
    "17|88",
    "17|89",
    "17|91",
    "17|100",
    "17|101",
    "17|103",
    "17|105",
    "17|107",
    "17|108",
    "17|109",
    "17|111",
    "17|114",
    "17|117",
    "17|121",
    "17|127",
    "17|128",
    "17|130",
    "17|138",
    "17|141",
    "17|145",
    "17|147",
    "18|24",
    "18|26",
    "18|32",
    "18|37",
    "18|44",
    "18|45",
    "18|48",
    "18|49",
    "18|51",
    "18|54",
    "18|60",
    "18|62",
    "18|71",
    "18|72",
    "18|73",
    "18|75",
    "18|79",
    "18|80",
    "18|82",
    "18|83",
    "18|84",
    "18|85",
    "18|86",
    "18|87",
    "18|88",
    "18|89",
    "18|91",
    "18|100",
    "18|101",
    "18|103",
    "18|105",
    "18|107",
    "18|108",
    "18|109",
    "18|111",
    "18|114",
    "18|117",
    "18|121",
    "18|127",
    "18|128",
    "18|130",
    "18|138",
    "18|141",
    "18|145",
    "18|147",
    "19|24",
    "19|26",
    "19|32",
    "19|37",
    "19|44",
    "19|45",
    "19|48",
    "19|49",
    "19|51",
    "19|54",
    "19|60",
    "19|62",
    "19|71",
    "19|72",
    "19|73",
    "19|75",
    "19|79",
    "19|80",
    "19|82",
    "19|83",
    "19|84",
    "19|85",
    "19|86",
    "19|87",
    "19|88",
    "19|89",
    "19|91",
    "19|100",
    "19|101",
    "19|103",
    "19|105",
    "19|107",
    "19|108",
    "19|109",
    "19|111",
    "19|114",
    "19|117",
    "19|121",
    "19|127",
    "19|128",
    "19|130",
    "19|138",
    "19|141",
    "19|145",
    "19|147",
    "20|24",
    "20|26",
    "20|32",
    "20|37",
    "20|44",
    "20|45",
    "20|48",
    "20|49",
    "20|51",
    "20|54",
    "20|60",
    "20|62",
    "20|71",
    "20|72",
    "20|73",
    "20|75",
    "20|79",
    "20|80",
    "20|82",
    "20|83",
    "20|84",
    "20|85",
    "20|86",
    "20|87",
    "20|88",
    "20|89",
    "20|91",
    "20|100",
    "20|101",
    "20|103",
    "20|105",
    "20|107",
    "20|108",
    "20|109",
    "20|111",
    "20|114",
    "20|117",
    "20|121",
    "20|127",
    "20|128",
    "20|130",
    "20|138",
    "20|141",
    "20|145",
    "20|147",
  ]

  const integration_connections = await graphql(`
    {
      allGoogleSpreadsheetR1RedRudderstackIcData {
        edges {
          node {
            slug
            googleSpreadsheetId
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
    const path = `${edge.node.slug}/`
    let isExcluded = INTEGRATION_CONN_EXCLUDED_IDS.findIndex(
      oo => oo === edge.node.googleSpreadsheetId
    )

    if (isExcluded === -1) {
      createPage({
        path,
        component: require.resolve(
          "./src/templates/contentIntegrationConnectionSpreadSheets.js"
        ),
        context: { slug: edge.node.slug },
      })
    }
  })

  //Be A Hero Pages pages
  const l_BeAHeroPages = await graphql(`
    {
      allSanityNewThemeBeAHeroPage {
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

  const beAHeroPages = l_BeAHeroPages.data.allSanityNewThemeBeAHeroPage.edges || []
  beAHeroPages.forEach((edge, index) => {
    const path = `/${edge.node.slug.current}/`

    createPage({
      path,
      component: require.resolve("./src/templates/beAHeroPageContent.js"),
      context: { slug: edge.node.slug.current },
    })
  })
}
