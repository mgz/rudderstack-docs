const caseStudyQuery = `{
    casestudy: allSanityCaseStudies(sort: {fields: weight, order: ASC}) {
        edges {
          node {
            id
            listing_image {
              asset {
                url
              }
            }
            slug {
                current
              }
            title
            weight
            shortdescription
            category
          }
        }
      }
  }`

function caseStudiesToAlgoliaRecord({
  node: { id, listing_image, slug, title, weight, shortdescription, category },
}) {
  let logoimage = ""
  if (listing_image) {
    logoimage = listing_image.asset.url
  }

  return {
    objectID: id,
    title,
    weight,
    logoimage,
    category,
    slug: slug.current,
    shortdescription
  }
}

const queries = [
  {
    query: caseStudyQuery,
    transformer: ({ data }) => {
      // console.log("on map , ", data)
      return data.casestudy.edges.map(caseStudiesToAlgoliaRecord)
    },
    indexName:
      process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_case_studies",
    settings: {},
  },
]
module.exports = queries
