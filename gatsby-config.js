require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Rudderstack`,
    description: `RudderStack is the smart customer data pipeline. Connect your whole customer data stack. Warehouse-first, open source Segment alternative.`,
    author: `@gatsbyjs`,
    siteUrl: 'https://rudderstack.com'
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output:`/`,
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.RS_SITE_URL,
        sitemap: 'https://rudderstack.com/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', allow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: ['/'] }]
          }
        }
      }
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
        projectId: process.env.RS_SANITY_PROJECTID,
        dataset: process.env.RS_SANITY_DATASET,
        token: process.env.RS_SANITY_TOKEN,
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
        indexName: process.env.RS_GATSBY_ALGOLIA_INTEGRATIONINDEX,
        queries: require("./src/utils/integration-algolia"),
        enablePartialUpdates: true,
        matchFields: ["slug"],
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
        icon: `src/images/RudderStackLogo.png`, // This path is relative to the root of the site.
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
        host: `https://rudderstack-dataplane.rudderstack.com`,
        trackPage: true,
        // delayLoad: true,
        // delayLoadTime: 1000
      },
    },
  ],
}
