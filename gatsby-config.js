require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `Rudderstack`,
    description: `RudderStack is the smart customer data pipeline. Connect your whole customer data stack. Warehouse-first, open source Segment alternative.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
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
        projectId: `97bpcflt`,
        dataset: `production`,

        //token: process.env.SANITY_TOKEN,
        token: process.env.RS_GATSBY_TOKEN,
        //graphqlTag: 'default',
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options:
      {
        appId: process.env.RS_GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.RS_GATSBY_ALGOLIA_APIKEY,
        queries: require("./src/utils/algolia"),
        enablePartialUpdates: true,
        matchFields: ["title", "author_name", "author_desc", "blog_image", "weight", "slug", "blogdate", "blog_category"]
      },
      // {
      //   appId: '4K4TPPS0OQ',
      //   apiKey: '0a5e12672bfb6f5c1076f7266bfed56d',
      //   indexName: 'dev_gatsby_integration',
      //   queries: require("./src/utils/integration-algolia"),
      //   enablePartialUpdates: true,
      //   matchFields: ["title", "author_name", "author_desc", "blog_image", "weight", "slug", "blogdate", "blog_category"]
      // },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
