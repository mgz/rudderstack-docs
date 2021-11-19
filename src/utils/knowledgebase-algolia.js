let indexName =
  process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_rudderstack_gatsby_knowledge_base"

const pageQuery = `{
  pages: allSanityKnowledgeBase {
    edges {
      node {
        title
        short_description
        tutorial_date(formatString: "MM-DD-YYYY")
        blog_authors {
          author_name
          author_desc
          author_position
          author_image {
            asset {
              url
            }
          }
        }
        weight
        slug {
          current
        }
        knowledge_base_category
        knowledge_base_image {
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
    short_description,
    knowledge_base_image,
    blog_authors,
    weight,
    slug,
    tutorial_date,
    knowledge_base_category,
  },
}) {
  let blogimage = ""
  if (knowledge_base_image) {
    blogimage = { src: knowledge_base_image.asset.url }
  }

  if (!knowledge_base_category) {
    knowledge_base_category = ""
    console.warn("knowledgebase category not defined for ", title)
  }
  if (blog_authors.length === 0) {
    blog_authors.push({ author_name: "", author_desc: "" })
    console.warn("knowledge base author not defined for ", title)
  }
  //
  if(!slug.current){
    console.warn("knowledge base author not defined for ", slug)
  }
  return {
    objectID: _id,
    title,
    short_description,
    blog_authors,
    knowledge_base_image,
    weight,
    slug: slug.current,
    tutorial_date,
    knowledge_base_category,
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
