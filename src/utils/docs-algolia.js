const docsQuery = `{
  docs: allMdx {
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

  allSanityDocsSearchAlias {
    edges {
      node {
        search_alias
        search_text
        id
      }
    }
  }
}`

function convertToSlug(pData) {
  return pData
    .toLowerCase()
    .replace(" ", "-")
    .replace(/ /g, "-")
    .replace(".", "")
    .replace("?", "")
    .replace(/[^\w-]+/g, "")
}

const queries = [
  {
    query: docsQuery,
    transformer: ({ data }) => {
      let tmpData = []
      let ignorePaths = ["LICENSE", "contributing"]
      data.docs.edges.map(row => {
        let tmpString = row.node.excerpt
        //extract header paragraph
        let strPos =
          ignorePaths.indexOf(row.node.slug) === -1 &&
          row.node.tableOfContents !== {}
            ? tmpString.indexOf(row.node.tableOfContents.items[0].title)
            : ""
        let endPos = tmpString.indexOf(
          row.node.headings.length > 0 ? row.node.headings[0].value : ""
        )

        let content = tmpString.substring(strPos, endPos - 1)

        let tttmp = data.allSanityDocsSearchAlias.edges.find(
          kk =>
            kk.node.search_alias ===
            convertToSlug(
              ignorePaths.indexOf(row.node.slug) === -1
                ? row.node.tableOfContents.items[0].title
                : ignorePaths[ignorePaths.indexOf(row.node.slug)]
            )
        )

        let searchAlias = ""
        if (tttmp) {
          
          searchAlias = tttmp.node.search_text
        }

        tmpString = tmpString.replace(content, "")
        tmpData.push({
          objectID:
            row.node.slug +
            "-" +
            convertToSlug(
              ignorePaths.indexOf(row.node.slug) === -1
                ? row.node.tableOfContents.items[0].title
                : "0"
            ),
          //pageSlug: row.node.slug.charAt(row.node.slug.length - 1) == '/' ? row.node.slug.replace(row.node.slug.charAt(row.node.slug.length - 1), '') : row.node.slug,
          pageSlug: row.node.slug,
          pageTitle:
            ignorePaths.indexOf(row.node.slug) === -1
              ? row.node.tableOfContents.items[0].title
              : ignorePaths[ignorePaths.indexOf(row.node.slug)],
          sectionId: convertToSlug(
            ignorePaths.indexOf(row.node.slug) === -1
              ? row.node.tableOfContents.items[0].title
              : ignorePaths[ignorePaths.indexOf(row.node.slug)]
          ),
          SectionTitle: convertToSlug(
            ignorePaths.indexOf(row.node.slug) === -1
              ? row.node.tableOfContents.items[0].title
              : ignorePaths[ignorePaths.indexOf(row.node.slug)]
          ),
          searchAlias: searchAlias,
          sectionContent: content,
          idx: 1,
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

          let tttmp = data.allSanityDocsSearchAlias.edges.find(
            kk => kk.node.search_alias === row.node.headings[i].value
          )

          let searchAlias = ""
          if (tttmp) {
            searchAlias = tttmp.node.search_text
          }

          tmpData.push({
            objectID:
              row.node.slug + "-" + convertToSlug(row.node.headings[i].value),
            //pageSlug: row.node.slug.charAt(row.node.slug.length - 1) == '/' ? row.node.slug.replace(row.node.slug.charAt(row.node.slug.length - 1), '') : row.node.slug,
            pageSlug: row.node.slug,
            pageTitle:
              ignorePaths.indexOf(row.node.slug) === -1
                ? row.node.tableOfContents.items[0].title
                : ignorePaths[ignorePaths.indexOf(row.node.slug)],
            sectionId: convertToSlug(row.node.headings[i].value),
            SectionTitle: row.node.headings[i].value,
            sectionContent: content,
            searchAlias: searchAlias,
            idx: i + 2,
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
