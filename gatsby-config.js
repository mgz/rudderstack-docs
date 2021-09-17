require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Rudderstack`,
    description: `RudderStack is the smart customer data pipeline. Connect your whole customer data stack. Warehouse-first, open source Segment alternative.`,
    author: `@gatsbyjs`,
    siteUrl: "https://rudderstack.com",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: ["https://rudderstack.com", "http://localhost:8000"],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: process.env.RS_SITE_URL,
        sitemap: "https://rudderstack.com/sitemap-0.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", allow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: ["/"] }],
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: process.env.RS_SITE_URL,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECTID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.GATSBY_SANITY_TOKEN,
        graphqlTag: "default",
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "mwovquhr",
        dataset: "production",
        token:
          "skPnMsc9RbXpzOjYtOaEx8VjMdXJXurNLsTWpHN7rYl3XCNFpBgeeR8BjpZfiaxLgna1Fb1hPJdfVfx9erLWbWW3vmCazYhMhy0xXZr551SQ6cCJv8nnm91kG5xyhhSztyuZJoaZXg2vrlOkzQxephrO52ujahJq4Y7Zv56rpp5hhkHsqg69",
        graphqlTag: "default",
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.RS_GATSBY_ALGOLIA_APIKEY,
        queries: require("./src/utils/algolia"),
        enablePartialUpdates: true,
        matchFields: [
          "title",
          "blogimage",
          "weight",
          "slug",
          "blogdate",
          "blog_category",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.RS_GATSBY_ALGOLIA_APIKEY,
        indexName:
          process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_integration",
        queries: require("./src/utils/integration-algolia"),
        enablePartialUpdates: true,
        matchFields: [
          "slug",
          "title",
          "integration_category",
          "weight",
          "is_coming_soon",
          "logoimage",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.RS_GATSBY_ALGOLIA_APIKEY,
        indexName:
          process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_video_library",
        queries: require("./src/utils/video-library-algolia"),
        enablePartialUpdates: true,
        matchFields: [
          "slug",
          "category",
          "url_or_event_dttm",
          "title",
          "shortdescription",
          "spekers",
          "weight",
          "duration",
          "logoimage",
          "webinar_dttm",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.RS_GATSBY_ALGOLIA_APIKEY,
        indexName:
          process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_case_studies",
        queries: require("./src/utils/case-studies-algolia"),
        enablePartialUpdates: true,
        matchFields: [
          "slug",
          "category",
          "title",
          "shortdescription",
          "weight",
          "logoimage",
          "article_dttm",
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-plugin-rudderstack`,
    //   options: {
    //     prodKey: process.env.RS_PRODUCTION_WRITE_KEY,
    //     //devKey: process.env.RS_PRODUCTION_WRITE_KEY,
    //     //host: `https://rudderstack-dataplane.rudderstack.com`,
    //     loadType: "defer",
    //     trackPage: true,
    //     // loadAsync: true,
    //     //delayLoad: true,
    //     //delayLoadTime: 500,
    //     dataPlaneUrl: `https://rudderstack-dataplane.rudderstack.com`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
          siteMetadata {
            title
            description
            siteUrl
            site_url: siteUrl
          }
        }
        }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allSanityBlog } }) => {
              return allSanityBlog.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.meta_desc,
                  date: edge.node._createdAt,
                  url:
                    site.siteMetadata.siteUrl +
                    "/blog/" +
                    edge.node.slug.current,
                  guid:
                    site.siteMetadata.siteUrl +
                    "/blog/" +
                    edge.node.slug.current,
                  //  custom_elements: [{ "content:encoded": edge.node._rawDescription }],
                })
              })
            },
            query: `
            {
              allSanityBlog(sort: {fields: _createdAt, order: DESC}) {
                edges {
                  node {
                    slug{
                      current
                    }
                    title
                    _createdAt
                    meta_desc
                  }
                }
              }
            }
            `,
            output: "/blog/rss.xml",
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        // The `spreadsheetId` is required, it is found in the url of your document:
        // https://docs.google.com/spreadsheets/d/<spreadsheetId>/edit#gid=0
        spreadsheetId: "16JR0OQo5Mw6L8Jah7dfiA7PX2UBLDB-k6RrFzX02nTw",
    
        // The `spreadsheetName` is recommended, but optional
        // It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
        // If you are sourcing multiple sheets, you can set this to distringuish between the source data
        spreadsheetName: "red-rudderstack-ic-data",
    
        // The `typePrefix` is optional, default value is "GoogleSpreadsheet"
        // It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
        // It can be overridden to fully customize the root query
        typePrefix: "GoogleSpreadsheet",
    
        // The `credentials` are only needed when you need to be authenticated to read the document.
        // It's an object with the following shape:
        // {
        //   client_email: "<your service account email address>",
        //   private_key: "<the prive key for your service account>"
        // }
        //
        // Refer to googles own documentation to retrieve the credentials for your service account:
        //   - https://github.com/googleapis/google-api-nodejs-client#service-to-service-authentication
        //   - https://developers.google.com/identity/protocols/OAuth2ServiceAccount
        //
        // When you have generated your credentials, it's easiest to refer to them from an environment variable
        // and parse it directly:
        // credentials: JSON.parse(GOOGLE_SERVICE_ACCOUNT_CREDENTIALS),
    
        // Simple node transformation during node sourcing can be achieved by implementing the following functions
        // - `filterNode`
        // - `mapNode`
        //
        // By implementing a `filterNode(node): boolean` function, you can choose to eliminate some nodes before
        // they're added to Gatsby, the default behaviour is to include all nodes:
        filterNode: () => true,
    
        // By implementing a `mapNode(node): node` function, you can provide your own node transformations directly
        // during node sourcing, the default implementation is to return the node as is:
        mapNode: node => node
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,

    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //   },
    // },
    "gatsby-plugin-use-query-params",
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     analyzerMode: "server",
    //     analyzerPort: "8888",
    //     devMode: true,
    //   },
    // },
    "gatsby-source-sanity-transform-images",
    `gatsby-plugin-meta-redirect`,
    "gatsby-plugin-preload-fonts",
    // make sure to put last in the array
    // {
    //   resolve: `gatsby-plugin-remote-images`,
    //   options: {
    //     nodeType: 'sanityImageAsset',
    //     imagePath: 'sanityImages',
    //     name: 'allItemImages',
    //   },
    // },
  ],
}
