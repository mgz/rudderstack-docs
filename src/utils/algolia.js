let indexName = process.env.GATSBY_ALGOLIA_BLOGINDEX

const pageQuery = `{
  pages: allSanityBlog {
    edges {
      node {
        title
        blogdate(formatString: "MM-DD-YYYY")
        blog_authors {
          author_name
          author_desc
        }
        weight
        slug
        blog_category
        blog_image {
          asset {
            fluid {
              src
            }
          }
          _key
        }
        _id
      }
    }
  }
}`

function pageToAlgoliaRecord({
  node: {
    _id,
    title,
    blog_image,
    blog_authors,
    weight,
    slug,
    blogdate,
    blog_category,
  },
}) {
  let blogimage = ""
  if (blog_image) {
    blogimage = blog_image.asset.fluid
  }

  // console.log("algolia push ", blog_authors)
  return {
    objectID: _id,
    title,
    blog_authors,
    blogimage,
    weight,
    slug,
    blogdate,
    blog_category,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => {
      return data.pages.edges.map(pageToAlgoliaRecord)
    },
    indexName,
    settings: {},
  },
]

module.exports = queries
