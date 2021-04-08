import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Herobanner from "../components/herobanner"
import BlockContent from '@sanity/block-content-to-react'


const Singleblog = ({data}) => {
  const blog = data.blog
  return (
    <Layout>
      <Herobanner title={blog.title} date={blog.blogdate} author={blog.author_name} image={blog.blog_image} />
      <div className="pt-16 max-w-4xl m-auto">
        <BlockContent blocks={blog._rawDescription} />
        <div className="pt-8 flex bg-gray-200 rounded-2xl bg-opacity-40">
          <div><img src={blog.author_image.asset.fluid.src} className="rounded-full h-24" /></div>
          <div>
            <div>About the author</div>
            <div>{blog.author_name}</div>
            <div>{blog.author_desc}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: sanityBlog(slug: { eq: $slug }) {
      title
      _rawDescription
      blogdate(formatString: "MMMM DD, Y")
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

export default Singleblog