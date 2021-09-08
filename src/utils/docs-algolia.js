const docsSearchQuery = `
    docsSearch: allMdx(sort: {fields: slug, order: ASC}) {
            edges {
                node {
                    slug
                    headings(depth: h2) {
                    value
                    }
                }
            }
        }
    `

function docsToAlgoliaRecord({ node: { slug, headings } }) {
  return {
    slug: slug,
    headings: headings,
  }
}

const queries = [
  {
    query: docsSearchQuery,
    transformer: ({ data }) => {
      console.log("on map , ", data)
      return data.integrations.edges.map(docsToAlgoliaRecord)
    },
    indexName: process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_docs",
    settings: {},
  },
]
module.exports = queries
