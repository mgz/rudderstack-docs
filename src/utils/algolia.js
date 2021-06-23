let indexName = process.env.GATSBY_ALGOLIA_INDEX_PREFIX + '_rudderstack_gatsby_blog'

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
            url
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
    blogimage = { src: blog_image.asset.url }
  }

  if (!blog_category) {
    blog_category = ""
    console.warn("blog category not defined for ", title)
  }
  if (blog_authors.length === 0) {
    blog_authors.push({ author_name: "", author_desc: "" })
    console.warn("blog author not defined for ", title)
  }
  //
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
