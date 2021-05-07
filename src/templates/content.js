import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Herobanner from "../components/herobanner"
import BlockContent from '@sanity/block-content-to-react'


const Singleblog = ({ data }) => {
  const blog = data.blog
  return (
    <Layout>
      <Herobanner title={blog.title} date={blog.blogdate} author={blog.author_name} image={blog.blog_image} />
      <div className="block-description pt-16 max-w-4xl m-auto">
        <div>
          <p className="text-xl font-bold leading-6">
            Customer data pipelines play a critical role in the privacy of your customer data.
            They are one of the primary and most expansive collectors of your customers’ personally identifiable information (PII).
            They are also one of the most expansive sharers of customer data - with one of the primary use cases being event streaming to frequently large libraries of destination integrations.
          </p>
          <p className="text-xl leading-6">Due to their specialized role of collecting and sharing customer data, customer data pipelines can either help ensure your data privacy or wreak havoc on it.</p>
          <p className="text-xl leading-6">In this post, we’ll explain how your customer data pipeline can help improve your data privacy and how to ensure your data privacy with <span className="font-bold">RudderStack.</span>
          </p>
        </div>
        <div className="mt-16">
          <h2 className="font-bold leading-6 mb-10">Data Privacy vs. Data Security</h2>
          <p className="text-lg leading-6">To remove one common vector of confusion before we launch into this post, we want to make sure the difference between data privacy and data security is clear.</p>
          <p className="text-lg leading-6"><span className="font-bold">Data privacy</span> - the focus of this post - is about what data is collected, stored, and for how long it is retained; and what customer data is shared. What customer data are you collecting and storing, and how are you using that data?</p>
          <p className="text-lg leading-6"><span className="font-bold">Data security</span> is about how collected data is protected - where data is stored, who has access, whether data is encrypted, etc. How are you keeping the customer data you store safe?</p>
        </div>
        <BlockContent blocks={blog._rawDescription} />

        <div className="my-8 py-12 px-8 bg-blueNew-lighter rounded-2xl bg-opacity-50 flex items-center mx-auto pb-10 mb-10 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
            <img src={blog.author_image.asset.fluid.src} className="w-24 h-24 rounded-full" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <div className="text-xs font-bold mb-2 uppercase">About the author</div>
            <div className="leading-relaxed text-lg font-bold mt-4">{blog.author_name}</div>
            <div className="mt-6 ">{blog.author_desc}</div>
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