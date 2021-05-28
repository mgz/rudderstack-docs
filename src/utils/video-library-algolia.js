const videoLibraryQuery = `{
    videolibrary: allSanityVideolibrary(sort: {fields: weight, order: ASC}) {
        edges {
          node {
            _rawVideoLibraryCategoryType
            id
            listing_image {
              asset {
                url
              }
            }
            slug {
              current
            }
            spekers {
              author_name
              author_desc
            }
            weight
            duration
            shortdescription
            title
          }
        }
      }
  }`

function videoLibraryToAlgoliaRecord({
  node: {
    _rawVideoLibraryCategoryType,
    id,
    listing_image,
    slug,
    spekers,
    weight,
    duration,
    shortdescription,
    title,
  },
}) {
  let logoimage = ""
  if (listing_image) {
    logoimage = listing_image.asset.url
  }
  let category=""
  if(_rawVideoLibraryCategoryType && _rawVideoLibraryCategoryType.condition === "live_option"){
    category = "Live"
  }else if(_rawVideoLibraryCategoryType && _rawVideoLibraryCategoryType.condition === "learn_option"){
    category = "Learn RudderStack"
  }else if(_rawVideoLibraryCategoryType && _rawVideoLibraryCategoryType.condition === "usecase_option"){
    category = "Use cases"
  }

  return {
    objectID: id,
    title,
    weight,
    slug: slug.current,
    spekers,
    duration,
    shortdescription,
    category: category,
    logoimage,
  }
}

const queries = [
  {
    query: videoLibraryQuery,
    transformer: ({ data }) => {
      // console.log("on map , ", data)
      return data.videolibrary.edges.map(videoLibraryToAlgoliaRecord)
    },
    indexName: process.env.GATSBY_ALGOLIA_VIDEO_LIBRARY_INDEX,
    settings: {},
  },
]
module.exports = queries
