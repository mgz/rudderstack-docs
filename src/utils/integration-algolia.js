const integrationQuery = `{
    integrations: allSanityIntegration (sort: {fields: weight, order: ASC}) {
      edges {
        node {
          id
          title
          weight
          is_coming_soon
          slug {
            current
          }
          integrationcategories {
            title
          }
          integrationtypes {
            title
          }
          integrationLogo {
            asset {
             url
            }
          }
        }
      }
    }
  }`

function integrationToAlgoliaRecord({
  node: {
    id,
    title,
    weight,
    is_coming_soon,
    slug,
    integrationcategories,
    integrationtypes,
    integrationLogo,
  },
}) {
  let logoimage = ""
  if (integrationLogo && integrationLogo.asset) {
    logoimage = integrationLogo.asset.url
  }
  return {
    objectID: id,
    title,
    weight,
    is_coming_soon,
    slug: slug.current,
    integration_category: integrationcategories
      ? integrationcategories.title
      : "",
    integration_type: integrationtypes ? integrationtypes.title : "",
    logoimage,
  }
}

const queries = [
  {
    query: integrationQuery,
    transformer: ({ data }) => {
      // console.log("on map , ", data)
      return data.integrations.edges.map(integrationToAlgoliaRecord)
    },
    indexName: process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_integration",
    settings: {},
  },
]
module.exports = queries
