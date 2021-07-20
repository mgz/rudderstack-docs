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

  createRedirect({
    fromPath: "/blog/why-it-needs-to-own-the-cdp",
    toPath: "/blog/why-engineering-and-it-need-to-own-the-cdp",
    isPermanent: true,
  })

  createRedirect({
    fromPath: "/case-studies",
    toPath: "/blog",
    isPermanent: true,
  })

  createRedirect({
    fromPath: "/blog/why-you-dont-want-a-customer-data-platform",
    toPath: "/blog/why-you-dont-want-a-cdp-made-for-marketers",
    isPermanent: true,
  })

  // added by hari on 2021-06-22
  createRedirect({
    fromPath: "/blog/rudderstack-adds-pendo-and-marketo-as-destinations",
    toPath: "/integration/marketo/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-adds-support-for-google-analytics-4-as-a-destination",
    toPath: "/integration/google-analytics-4/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/rudderstack-adds-support-for-posthog-as-a-destination/",
    toPath: "/integration/posthog-analytics",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-adds-zendesk-and-zendesk-chat-as-cloud-extract-sources",
    toPath: "/integration/zendesk-source/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/rudderstack-supports-ab-testing-platform-vwo",
    toPath: "/integration/vwo/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/rudderstack-supports-advertising-platform-google-ads",
    toPath: "/integration/google-ads/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-support-for-analytics-platforms-google-analytics-amplitude-firebase-kissmetrics-mixpanel-keenio",
    toPath: "/integration/google-analytics/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-releases-support-for-aws-services-amazon-kinesis-amazon-eventbridge-aws-personalize",
    toPath: "/integration/amazon-eventbridge/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/rudderstack-supports-business-messaging-platform-intercom",
    toPath: "/integration/intercom/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-cloud-data-storage-platforms-amazon-s3-microsoft-azure-blob-storage-minio",
    toPath: "/integration/amazon-s3/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-releases-support-for-confluent-cloud-and-lytics",
    toPath: "/integration/confluent-cloud/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/rudderstack-supports-content-analytics-platform-chartbeat",
    toPath: "/integration/chartbeat/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-customer-engagement-platforms-customerio-leanplum-braze",
    toPath: "/integration/customer-io/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-releases-support-for-customer-io-slack-webhooks-and-azure-event-hubs",
    toPath: "/integration/webhooks/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-releases-support-for-digitalocean-spaces-tvsquared-and-heap-io/",
    toPath: "/integration/heap-analytics/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/rudderstack-supports-email-marketing-platform-mailchimp",
    toPath: "/integration/mailchimp/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-releases-support-for-google-pub-sub-and-monetate/",
    toPath: "/integration/google-pub-sub/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-support-for-mobile-attribution-platforms-kochava-branch-adjust-appsflyer",
    toPath: "/integration/appsflyer/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/rudderstack-releases-support-for-salesforce-integration",
    toPath: "/integration/salesforce/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-releases-support-for-source-integrations-looker-and-auth0/",
    toPath: "/integration/looker/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-tag-management-platform-google-tag-manager",
    toPath: "/integration/google-tag-manager/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-website-recording-platforms-fullstory-hotjar",
    toPath: "/integration/hotjar/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-activecampaign-and-app-center-as-destinations/",
    toPath: "/integration/activecampaign/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-amazon-s3-and-redshift-as-warehouse-actions",
    toPath: "/integration/amazon-redshift-source/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-appcues-and-userlist-Destinations-and-appsflyer-source/",
    toPath: "/integration/appcues/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-clevertap-kustomer-and-bing-ads-as-destinations",
    toPath: "/integration/bing-ads/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-data-warehouses-redshift-bigquery-snowflake",
    toPath: "/integration/google-bigquery-source",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-event-streaming-platform-apache-kafka",
    toPath: "/integration/apache-kafka/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-google-analytics-as-a-cloud-extract-source/",
    toPath: "/integration/google-analytics-source/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-marketo-pipedrive-and-facebook-ads-as-cloud-extract-sources",
    toPath: "/integration/facebook-ads-source/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-mixpanel-and-intercom-as-cloud-extract-sources",
    toPath: "/integration/intercom-source/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-netsuite-and-xero-as-cloud-extract-sources",
    toPath: "/integration/netsuite-source/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-new-google-services-as-cloud-extract-sources/",
    toPath: "/integration/google-ads-source/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-postgresql-google-bigquery-and-clickhouse-as-warehouse-actions",
    toPath: "/integration/postgresql-source/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/rudderstack-supports-salesforce-as-a-cloud-extract-source",
    toPath: "/integration/salesforce-source/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-salesforce-marketing-cloud-and-klaviyo-as-destinations",
    toPath: "/integration/salesforce-marketing-cloud/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/rudderstack-supports-salesforce-pardot-as-cloud-extract-and-google-sheets-as-destination",
    toPath: "/integration/salesforce-pardot-source/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/rudderstack-supports-segment-as-a-source-integration",
    toPath: "/integration/segment/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/rudderstack-supports-snowflake-as-warehouse-actions",
    toPath: "/integration/snowflake-source/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/rudderstack-supports-stripe-as-a-cloud-extract-source",
    toPath: "/integration/stripe-source/",
    isPermanent: true,
  })

  //migration
  createRedirect({
    fromPath:
      "/blog/access-and-query-your-amazon-redshift-data-using-python-and-r",
    toPath:
      "/guides/access-and-query-your-amazon-redshift-data-using-python-and-r",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/how-to-access-and-query-your-bigquery-data-using-python-and-r",
    toPath:
      "/guides/how-to-access-and-query-your-bigquery-data-using-python-and-r",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/six-steps-to-sending-data-to-any-destination-using-rudderstack",
    toPath:
      "/guides/six-steps-to-sending-data-to-any-destination-using-rudderstack",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/what-is-a-customer-data-pipeline",
    toPath: "/guides/what-is-a-customer-data-pipeline",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/what-is-customer-event-data-and-how-businesses-use-it-to-their-advantage",
    toPath:
      "/guides/what-is-customer-event-data-and-how-businesses-use-it-to-their-advantage",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/what-is-event-driven-machine-learning",
    toPath: "/guides/what-is-event-driven-machine-learning",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/how-to-simplify-data-warehouse-integration",
    toPath: "/guides/how-to-simplify-data-warehouse-integration",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/how-to-event-stream-data-from-your-nuxtjs-app-using-rudderstack",
    toPath:
      "/guides/how-to-event-stream-data-from-your-nuxtjs-app-using-rudderstack",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/how-to-event-stream-from-your-gatsby-website-using-open-source-rudderstack",
    toPath:
      "/guides/how-to-event-stream-from-your-gatsby-website-using-open-source-rudderstack",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/how-to-event-stream-from-your-nextjs-app-using-open-source-rudderstack",
    toPath:
      "/guides/how-to-event-stream-from-your-nextjs-app-using-open-source-rudderstack",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/data-warehouse-integration-refining-your-customer-data-stack/",
    toPath:
      "/guides/data-warehouse-integration-refining-your-customer-data-stack/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/customer-data-pipeline-and-data-processing-types-importance-and-benefits",
    toPath:
      "/guides/customer-data-pipeline-and-data-processing-types-importance-and-benefits",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/different-types-of-data-companies-collect-whats-the-catch",
    toPath: "/guides/different-types-of-data-companies-collect-whats-the-catch",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/find-the-best-way-to-load-data-in-a-data-warehouse",
    toPath: "/guides/find-the-best-way-to-load-data-in-a-data-warehouse",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/metadata-what-is-it-and-how-does-it-boost-your-business",
    toPath: "/guides/metadata-what-is-it-and-how-does-it-boost-your-business",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/acquiring-data-from-data-warehouse-an-overview",
    toPath: "/guides/acquiring-data-from-data-warehouse-an-overview",
    isPermanent: true,
  })

  //addeed by hari on 2021-07-09

  // createRedirect({
  //   fromPath: "/blog/rss.xml",
  //   toPath: "/blog/",
  //   isPermanent: true,
  // })
  
  createRedirect({
    fromPath: "/integration/aws-s3/",
    toPath: "https://rudderstack.com/integration/amazon-s3/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/video-library/video-library",
    toPath: "/video-library/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/rudder-an-open-source-alternative-to-segment",
    toPath:
      "https://resources.rudderstack.com/open-source-segment-alternative-free-trial",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/rudderstack-v0-1-9-release",
    toPath: "/blog/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/podcast-roundUp-january-2021",
    toPath: "/blog/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/snowplow-alternatives/",
    toPath: "https://resources.rudderstack.com/rudderstack-vs-snowplow",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/introducing-rudderstack-cloud-the-warehouse-first-cdp-for-developers-2",
    toPath: "/blog/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/inew-feature-roundup-2021-03-3",
    toPath: "/blog/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/how-proposify-leverages-real-time-data-for-inbound-attribution-marketing-and-analytics",
    toPath: "/blog/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/blog/RudderStack-gitHub-sponsors-making-open-source-more-sustainable-for-developers",
    toPath: "/blog/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/blog/RudderStacks-licensing-explained",
    toPath: "/blog/",
    isPermanent: true,
  })
  createRedirect({
    fromPath:
      "/resources/watch-now-how-pachyderm-streamlines-lead-qualification-with-rudderstack-warehouse-actions/",
    toPath: "/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/request-a-demo",
    toPath: "/request-demo",
    isPermanent: true,
  })

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
    const path = `/case-studies/${edge.node.slug.current}`

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

  // const l_count = await graphql(`
  //   {
  //     allSanityImageAsset {
  //       totalCount
  //       nodes {
  //         _id
  //         url
  //         localFile {
  //           childImageSharp {
  //             fluid {
  //               src
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // if (l_count.errors) {
  //   throw l_count.errors
  // }
  // console.log("image count", l_count.data.allSanityImageAsset)
  // const pageCount = l_count.data.allSanityImageAsset.totalCount
  // const PAGINATION = 50
  // let tmpRowsCount = 0
  // while (tmpRowsCount < pageCount) {
  //   const l_images = `
  //   {
  //     allSanityImageAsset(skip: ${tmpRowsCount}, limit: ${PAGINATION}) {
  //       totalCount
  //       nodes {
  //         _id
  //         url
  //         localFile {
  //           childImageSharp {
  //             fluid {
  //               src
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  //   `

  //   tmpRowsCount += pageCount

  //   console.log("for each batch", l_images.data.allSanityImageAsset)
  // }
}
