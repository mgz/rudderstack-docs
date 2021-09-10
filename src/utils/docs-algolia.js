/* const docsSearchQuery = `{
    docsSearchGp: allMdx {
      edges {
        node {
          slug
          tableOfContents
        }
      }
    }
  }
`

function docsToAlgoliaRecord({ node: { slug, tableOfContents } }) {
  return {
    slug: slug,
    section: tableOfContents.items.url,
    title: tableOfContents.items.title,
  }
}

 function getSearchData(data) {
  let tempArr = [] //final data to be passed to Algolia
  let tempJson = {}
  if (data.items.length === 0) {
    tempJson["title"] = data.title
    tempJson["section"] = data.slug + data.url
    tempArr.push(tempJson)
  } else {
    data.items.map((item, i) => {
      let childTempJson = getSearchData(item)
      tempArr.push(childTempJson)
    })
  }
  return tempArr
}

//console.log("on map ", getSearchData(tempJsonData))

const queries = [
  {
    query: docsSearchQuery,
    transformer: ({ data }) => {
      //
      //return getSearchData(data).map(docsToAlgoliaRecord)
    },
    indexName: process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_docs",
    settings: {},
  },
]
module.exports = queries
 */
