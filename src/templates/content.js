import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"


const Singlecontent = ({data}) => {
  const section = data.section
  return (
    <Layout>
      Blog content
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    section: sanityBlog(slug: { eq: $slug }) {
      title
      _rawDescription
      blogdate(formatString: "MM-DD-YYYY")
      author_position
      author_name
      author_desc
      author_image {
        asset {
          fluid {
            src
          }
        }
        _key
      }
      blog_image {
        asset {
          fluid {
            src
          }
        }
        _key
      }
      _key      
    }
  }
`

export default Singlecontent