import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Herobanner from "../components/herobanner"
import PortableText from "../components/portableText"
import BlogModule from "../components/latest-blog-module"
import Image from "../components/image"
import Link from "gatsby-link"
import Subscription from "../components/Subscription"
import BlogHeroChart from "../images/blog-hero_chart.svg"
import BlogTwitter from "../images/blogtwitter.svg"
import BlogFb from "../images/blogfb.svg"
import BlogIn from "../images/blogIn.svg"
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from "react-share"

const Singleblog = ({ data, ...props }) => {
  const blog = data.blog
  const blogAuthors = data.blog.blog_authors
  const maintitle = props.maintitle
  const viewalltext = "See all posts"
  const viewallpostslink = "https://rudderstack.com/blog/"
  const viewexternallink = true
  // const [items] = useState([1, 2]); {/*Array Blog Author For Test Purpose*/ }

  let author_names = ""
  blogAuthors.forEach(row => {
    author_names += (author_names.length > 0 ? ", " : "") + row.author_name
  })

  return (
    <Layout>
      <div className="blog_banner">
        <Herobanner
          title={blog.title}
          date={blog.blogdate}
          author={author_names}
          image={blog.blog_image}
        />
      </div>
      <div className="block-description relative pt-16 max-w-4xl m-auto px-4 md:px-12">
        {/*Blog Content*/}
        <div className="social-icon_blog absolute hidden md:flex justify-center items-center flex-col pt-24 mt-3 top-0 lg:left-0 md:left-4">
          <TwitterShareButton url={`https://rudderstack.com/blog/${blog.slug}`}>
            <a className="block" href="#">
              <img src={BlogTwitter} alt="twitter" />
            </a>
          </TwitterShareButton>
          <FacebookShareButton
            url={`https://rudderstack.com/blog/${blog.slug}`}
          >
            <a className="my-3 block" href="#">
              <img src={BlogFb} alt="Facebook" />
            </a>
          </FacebookShareButton>
          <LinkedinShareButton
            url={`https://rudderstack.com/blog/${blog.slug}`}
          >
            <a className="block" href="#">
              <img src={BlogIn} alt="linkdin" />
            </a>
          </LinkedinShareButton>
        </div>
        <PortableText blocks={blog._rawDescription} />
        <>
          {/*Array Blog Author For Test Purpose*/}
          {blogAuthors.map(item => {
            return (
              <div
                key={item.author_name}
                className="my-8 py-12 px-8 bg-blueNew-lighter rounded-2xl bg-opacity-50 flex items-center mx-auto pb-10 mb-10 sm:flex-row flex-col"
              >
                <div className="sm:w-32 sm:h-32 h-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                  {/* <div className= "rounded-full"> */}
                    <Image
                      props={item.author_image.asset._id}
                      classes="w-24 h-24 rounded-full"
                    />
                  {/* </div> */}

                  {/* <img
                    alt="author"
                    src={item.author_image.asset.fluid.src}
                    className="w-24 h-24 rounded-full"
                  /> */}
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <div className="text-xs font-bold uppercase text-blueNew-category">
                    About the author
                  </div>
                  <div className="leading-4 text-lg font-bold mt-4">
                    {item.author_name}
                  </div>
                  <div className="mt-6 text-sm">{item.author_desc}</div>
                </div>
              </div>
            )
          })}
        </>
        {/*Array Blog Author For Test Purpose*/}
      </div>{" "}
      {/*Blog Content*/}
      <section className="bg-white pb-0">
        {/*Blog Post*/}
        <div className="max-w-6xl px-4 md:px-3 mx-auto flex flex-wrap pt-3 pb-12">
          <h3 className="tracking-tight-2 w-full my-2 text-4xl md:text-5xl text-primary font-bold leading-tight mb-8 md:mb-20 mt-6 md:mt-12">
            Recent Posts
          </h3>
          <BlogModule />
          <div className="w-full text-center items-center mt-10 md:mt-12">
            <p className="w-full my-2 text-black font-bold text-sm leading-tight text-center post-arrow right-image flex justify-center items-center hover:text-blueNew-custom">
              <a
                href={viewallpostslink}
                className="font-bold leading-normal text-sm lr-icon"
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
      </section>
      {/*Blog Post*/}
      <section className="bg-backgroundsecondary 100% left-right-section">
        {/*Sign Up Section*/}
        <div className="max-w-6xl px-4 md:px-3 mx-auto flex items-center flex-wrap">
          <div className="sm:w-1/2 sm:p-6 sm:pl-0 md:pr-12">
            <p className="mt-4 sm:mt-0 text-blue text-sm uppercase">SIGN UP</p>
            <h3 className="mt-2 mb-4 pb-2 text-2xl md:text-3xl text-primary font-bold leading-tight">
              Explore RudderStack Today
            </h3>
            <p className="text-secondary leading-7 text-sm sm:text-lg mb-8">
              Our Free plan includes 500,000 events per month so you can explore
              and test the product. Install an SDK, connect a destination, and
              see data start to flow.
            </p>

            <a
              className="btn-primary-lg cursor-pointer w-full sm:w-44"
              href={"https://app.rudderstack.com/signup"}
            >
              Sign up free
            </a>
          </div>
          <div className="w-full sm:w-1/2 sm:pt-16 sm:pb-20 lg:pl-28">
            <img src={BlogHeroChart} alt="Data Masking" className="w-full" />
          </div>
        </div>
      </section>
      {/*Sign Up Section*/}
      <div className="max-w-6xl px-4 md:px-3 mx-auto flex items-center flex-wrap">
        {/*Subscription Component*/}
        <Subscription />
      </div>
      {/*Subscription Component*/}
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: sanityBlog(slug: { eq: $slug }) {
      id
      blog_category
      title
      slug
      _rawDescription
      blogdate(formatString: "MMMM DD, Y")
      blog_authors {
        author_name
        author_desc
        author_image {
          asset {
            _id
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
