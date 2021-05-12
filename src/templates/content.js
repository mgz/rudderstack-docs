import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Herobanner from "../components/herobanner"
// import BlockContent from "@sanity/block-content-to-react"
import PortableText from "../components/portableText"
import BlogModule from "../components/latest-blog-module"
import Link from "gatsby-link"
import Subscription from '../components/Subscription'
import BlogHeroChart from "../images/blog-hero_chart.svg"



const Singleblog = ({ data, ...props }) => {
  const blog = data.blog
  const blogAuthors = data.blog.blog_authors
  // console.log("blog details", blog, blogAuthors)
  const maintitle = props.maintitle
  const viewalltext = props.viewalltext
  const viewallpostslink = props.viewallpostslink
  const viewexternallink = props.viewexternallink

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
      <div className="max-w-6xl px-4 md:px-3 mx-auto flex flex-wrap pt-3 pb-12">
        <h3 className="w-full my-2 text-4xl md:text-5xl text-primary font-bold leading-tight mb-8 md:mb-20 mt-6 md:mt-12">
          {maintitle}
        </h3>
        <BlogModule />
        <div className="w-full text-center items-center mt-10 md:mt-12">
          <p className="w-full my-2 text-black font-bold text-sm leading-tight text-center post-arrow right-image flex justify-center items-center hover:text-blueNew-custom">
            <a
              href={viewallpostslink}
              class="font-bold leading-normal text-sm lr-icon"
            >
              {(() => {
                if (viewexternallink === true) {
                  return <a href={viewallpostslink}>{viewalltext}</a>
                } else {
                  return <Link to={viewallpostslink}>{viewalltext}</Link>
                }
              })()}
            </a>
          </p>
        </div>
      </div>
    
      <section className="bg-backgroundsecondary 100% left-right-section">
        <div className="max-w-6xl px-4 md:px-3 mx-auto flex items-center flex-wrap">
          <div className="sm:w-1/2 sm:p-6 sm:pl-0 md:pr-20">
            <p className="mt-20 mb-2 text-blue text-sm uppercase">
              SIGN UP
            </p>
            <h3 className="text-3xl text-primary font-bold leading-tight">
              Explore RudderStack Today
            </h3>
            <p className="text-secondary leading-7 text-sm sm:text-lg mt-7 mb-10">Our Free plan includes 500,000 events per month so you can explore and test the product. Install an SDK, connect a destination, and see data start to flow.</p>

            <button class="btn-primary-lg">
              Sign up free
            </button>
          </div>
          <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0">
            <img
              src={BlogHeroChart}
              alt="Data Masking"
              className="w-full"
            />
          </div>
        </div>
      </section>
      <Subscription />

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
