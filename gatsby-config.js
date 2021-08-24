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
     {
      resolve: `gatsby-plugin-rudderstack`,
      options: {
        prodKey: process.env.RS_PRODUCTION_WRITE_KEY,
        //devKey: process.env.RS_PRODUCTION_WRITE_KEY,
        //host: `https://rudderstack-dataplane.rudderstack.com`,
        loadType:'defer',
        trackPage: true,
        // loadAsync: true,
        // delayLoad: true,
        // delayLoadTime: 200,
        dataPlaneUrl: `https://rudderstack-dataplane.rudderstack.com`,
      },
    },
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
                  url: site.siteMetadata.siteUrl + "/blog/" + edge.node.slug.current,
                  guid: site.siteMetadata.siteUrl + "/blog/" + edge.node.slug.current,
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
  //  {
  //   resolve: `gatsby-plugin-purgecss`,
  //     options: {
  //       printRejected: true, // Print removed selectors and processed file names
  //       // develop: true, // Enable while using `gatsby develop`
  //       tailwind: true, // Enable tailwindcss support
  //       // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
  //       purgeOnly : ['/'], // Purge only these files/folders
  //       purgeCSSOptions: {
  //         // https://purgecss.com/configuration.html#options
  //          safelist: ['gradient-enable'], // Don't remove this selector
  //       },
  //     },
  //  },
    "gatsby-plugin-use-query-params",
    "gatsby-source-sanity-transform-images",
    `gatsby-plugin-meta-redirect`, // make sure to put last in the array
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
