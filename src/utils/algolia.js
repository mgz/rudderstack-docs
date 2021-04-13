const indexName = 'dev_gatsby_blog';

const pageQuery = `{
  pages: allSanityBlog {
    edges {
      node {
        title
        blogdate(formatString: "MM-DD-YYYY")
        author_position
        author_name
        author_desc
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

function pageToAlgoliaRecord({ node: { _id, title, blog_image,author_name,author_desc,weight, slug, blogdate, blog_category } }) {

  let blogimage = '';
  if(blog_image) {
    blogimage = blog_image.asset.fluid;
  }
  return {
    objectID: _id,
    title,
    author_name,
    author_desc,
    blogimage,
    weight,
    slug,
    blogdate,
    blog_category
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: {},
  },
]

module.exports = queries