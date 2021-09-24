const docsQuery = `{
  docs:  allMdx {
    edges {
      node {
        slug
        headings(depth: h2) {
          value
        }
        tableOfContents(maxDepth: 1)
        excerpt(pruneLength: 50000)
      }
    }
  }
}`

function convertToSlug(pData) {
  return pData
    .toLowerCase()
    .replace(" ", "-")
    .replace(/ /g, "-")
    .replace(".", "-")
    .replace("?", "")
    .replace(/[^\w-]+/g, "")
}
 

const queries = [
  {
    query: docsQuery,
    transformer: ({ data }) => {
      let tmpData = []
      data.docs.edges.map(row => {
        let tmpString = row.node.excerpt

        //extract header paragraph
        let strPos = tmpString.indexOf(row.node.tableOfContents.items[0].title)
        let endPos = tmpString.indexOf(
          row.node.headings.length > 0 ? row.node.headings[0].value : ""
        )

        let content = tmpString.substring(strPos, endPos - 1)

        tmpString = tmpString.replace(content, "")
        tmpData.push({
          objectID:
            row.node.slug +
            "-" +
            convertToSlug(row.node.tableOfContents.items[0].title),
          pageSlug: row.node.slug.charAt(row.node.slug.length - 1) == '/' ? row.node.slug.replace(row.node.slug.charAt(row.node.slug.length - 1), '') : row.node.slug,
          //pageSlug: row.node.slug,
          pageTitle: row.node.tableOfContents.items[0].title,
          sectionId: convertToSlug(row.node.tableOfContents.items[0].title),
          SectionTitle: row.node.tableOfContents.items[0].title,
          sectionContent: content,
        })

        for (var i = 0; i <= row.node.headings.length - 1; i += 1) {
          strPos = 0
          endPos = 0
          content = ""

          strPos = tmpString.indexOf(row.node.headings[i].value)

          endPos =
            i === row.node.headings.length - 1
              ? tmpString.length
              : tmpString.indexOf(row.node.headings[i + 1].value)

          content = tmpString.substring(strPos, endPos - 1)
          tmpString = tmpString.replace(content, "")

          tmpData.push({
            objectID: row.node.slug + "-" + convertToSlug(row.node.headings[i].value),
            pageSlug: row.node.slug.charAt(row.node.slug.length - 1) == '/' ? row.node.slug.replace(row.node.slug.charAt(row.node.slug.length - 1), '') : row.node.slug,
            //pageSlug: row.node.slug,
            pageTitle: row.node.tableOfContents.items[0].title,
            sectionId: convertToSlug(row.node.headings[i].value),
            SectionTitle: row.node.headings[i].value,
            sectionContent: content,
          })
        }
      })
      return tmpData 
    },
    indexName: process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_docs",
    settings: {},
  },
]

module.exports = queries