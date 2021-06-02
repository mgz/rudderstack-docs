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
            webinar_dttm
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
    webinar_dttm
  },
}) {
  let logoimage = ""
  if (listing_image) {
    logoimage = listing_image.asset.url
  }
  let category = ""
  let url_or_event_dttm = ""
  if (
    _rawVideoLibraryCategoryType &&
    _rawVideoLibraryCategoryType.condition === "live_option"
  ) {
    category = "Live"
    url_or_event_dttm = _rawVideoLibraryCategoryType.live_option
  } else if (
    _rawVideoLibraryCategoryType &&
    _rawVideoLibraryCategoryType.condition === "learn_option"
  ) {
    category = "Learn RudderStack"
    url_or_event_dttm = _rawVideoLibraryCategoryType.learn_option.url
  } else if (
    _rawVideoLibraryCategoryType &&
    _rawVideoLibraryCategoryType.condition === "usecase_option"
  ) {
    category = "Use cases"
    url_or_event_dttm = _rawVideoLibraryCategoryType.usecase_option.url
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
    url_or_event_dttm:url_or_event_dttm,
    logoimage,
    webinar_dttm
  }
}

const queries = [
  {
    query: videoLibraryQuery,
    transformer: ({ data }) => {
      // console.log("on map , ", data)
      return data.videolibrary.edges.map(videoLibraryToAlgoliaRecord)
    },
    indexName:
      process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_video_library",
    settings: {},
  },
]
module.exports = queries
