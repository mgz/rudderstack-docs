import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Herobanner from "../components/herobanner"
import BlockContent from "@sanity/block-content-to-react"
import PortableText from "../components/portableText"

const Singleblog = ({ data }) => {
  const blog = data.blog
  const blogAuthors = data.blog.blog_authors
  // console.log("blog details", blog, blogAuthors)
  return (
    <Layout>
      <Herobanner
        title={blog.title}
        date={blog.blogdate}
        author={blog.blog_authors[0].author_name}
        image={blog.blog_image}
      />
      <div className="block-description pt-16 max-w-4xl m-auto">
        <PortableText blocks={blog._rawDescription} />
        <div className="my-8 py-12 px-8 bg-blueNew-lighter rounded-2xl bg-opacity-50 flex items-center mx-auto pb-10 mb-10 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
            <img
              src={blog.blog_authors[0].author_image.asset.fluid.src}
              className="w-24 h-24 rounded-full"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <div className="text-xs font-bold mb-2 uppercase">
              About the author
            </div>
            <div className="leading-relaxed text-lg font-bold mt-4">
              {blog.blog_authors[0].author_name}
            </div>
            <div className="mt-6 ">{blog.blog_authors[0].author_desc}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: sanityBlog(slug: { eq: $slug }) {
      id
      blog_category
      title
      _rawDescription
      blogdate(formatString: "MMMM DD, Y")
      blog_authors {
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
        author_position
      }
      weight
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

// export const query = graphql`
//   query GetSingleBlog($slug: String) {
//     blog: sanityBlog(slug: { eq: $slug }) {
//       title
//       _rawDescription
//       blogdate(formatString: "MMMM DD, Y")
//       blog_authors {
//         author_position
//         author_name
//         author_desc
//         author_image {
//           asset {
//             fluid {
//               src
//             }
//           }
//           _key
//         }
//       }

//       blog_image {
//         asset {
//           fluid {
//             src
//           }
//         }
//         _key
//       }
//       _key
//     }
//   }
// `

export default Singleblog
