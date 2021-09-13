const docsSearchQuery = `{
    docsSearch: allMdx {
      edges {
        node {
          slug
          headings(depth: h2) {
            value
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

function docsToAlgoliaRecord({ node: { slug, title } }) {
  return {
    slug: slug,
    title: title,
  }
}

function makeSectionUrl(str) {
  str = str.toLowerCase()
  str =
    "#" +
    str
      .replace("/", "")
      .replace("?", "")
      .replace(".", "")
      .replace(" ", "-")
      .replace("  ", "--")
  return str
}

let tempArr = [] //final data to be passed to Algolia
function getSearchData(data) {
  let elSlug = data.node.slug
  data.node.headings.map((i, k) => {
    let tempJson = {}
    tempJson["slug"] = elSlug + makeSectionUrl(i.value)
    tempJson["title"] = i.value
    tempArr.push(tempJson)
    //console.log("Temp Json", tempArr)
    return tempArr
  })
}

/* function getSearchData(data) {
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
} */

//console.log("on map ", getSearchData(tempJsonData))

const queries = [
  {
    query: docsSearchQuery,
    transformer: ({ data }) => {
      console.log("Temp Json", data)
      return data.docsSearch.edges.map(node => getSearchData(node))
    },
    indexName: process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_docs",
    settings: {},
  },
]
module.exports = queries
