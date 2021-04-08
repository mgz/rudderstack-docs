require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
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
        token: `skoSfz1i62D7DEEO0es1q457F6XhfTNBNh7qEazGbcCqKwcbecbGtLGDmmL9bNH4tGUO8xiu81WsPWPloO2X6YIB4nvV8v4sNpGnmgYTGXY00MnAEbqhhE1yvB1YE7W0VNThFzYBou5D8KJ8gTVm7H1DwrT2IgGJeG7Ri2WTYDOVRT1t1zZx`,
        //graphqlTag: 'default',
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: 'CXEE6UEOI8',
        apiKey: 'f7fe2af9be190727bf81933dd11703df',
        queries: require("./src/utils/algolia"),
        enablePartialUpdates: true,
        matchFields: ["title", "author_name", "author_desc", "blog_image", "weight", "slug", "blogdate", "blog_category"]
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
