import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Link from "gatsby-link"
// import loadable from "@loadable/component"
import { StaticImage } from "gatsby-plugin-image"

import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from "react-share"

import Layout from "../components/layout"
import Herobanner from "../components/herobanner"
import PortableText from "../components/portableText"
import BlogModule from "../components/latest-blog-module"
import Image from "../components/image"
import Subscription from "../components/Subscription"
import MiddleBanner from "../components/middle-banner"
import SignupV1 from "../components/signup_v1"
import clientConfig from "../../client-config"
import { rudderslabTrackOnClick } from "../utils/common"

// const Layout = loadable(() =>  import("../components/layout"))
// const Herobanner = loadable(() =>  import("../components/herobanner"))
// const PortableText = loadable(() =>  import("../components/portableText"))
// const BlogModule = loadable(() =>  import("../components/latest-blog-module"))
// const Image = loadable(() =>  import("../components/image"))
// const Subscription = loadable(() =>  import("../components/Subscription"))
// const MiddleBanner = loadable(() =>  import("../components/middle-banner"))
// const SignupV1 = loadable(() =>  import("../components/signup_v1"))

const Singleblog = ({ data, location, ...props }) => {
  const blog = data.blog
  const blogAuthors = data.blog.blog_authors
  // const maintitle = props.maintitle
  const viewalltext = "See all posts"
  const viewallpostslink = "https://rudderstack.com/blog/"
  const viewexternallink = false
  // const [items] = useState([1, 2]); {/*Array Blog Author For Test Purpose*/ }

  let author_names = ""
  blogAuthors.forEach(row => {
    author_names += (author_names.length > 0 ? ", " : "") + row.author_name
  })

  const lv_middlebannersection = data.section_get_started.edges.filter(
    ii => ii.node._id === clientConfig.defaultCommonSection_Ids.getStarted
  )

  // console.log("data", data)
  return (
    <Layout location={location}>
      <Helmet>
        <title>{blog.meta_title || blog.title}</title>
        <meta property="og:title" content={blog.meta_title || blog.title} />

        <meta name="description" content={blog.meta_desc} />
        <meta property="og:description" content={blog.meta_desc} />
        <meta
          property="twitter:title"
          content={blog.meta_title || blog.title}
        />
        <meta property="og:type" content="article" />
        <meta property="twitter:description" content={blog.meta_desc} />

        {/* added by Hari on 2021-06-21 to show share card across twitter, linkedin and facebook */}
        {location && <meta property="og:url" content={location.href} />}

        <meta property="og:image" content={blog.blog_image.asset.url} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content={author_names || blog.title} />
        <meta property="twitter:image:alt" content={blog.title} />
      </Helmet>
      <div className="blog_banner">
        <Herobanner
          title={blog.title}
          date={blog.blogdate}
          author={author_names}
          image={blog.blog_image}
          blog={blog}
        />
      </div>
      <div>
      <div className="social-icon_blog lg:hidden md:hidden flex gap-4 max-w-2xl sm:justify-start justify-center  items-center">
          <TwitterShareButton url={`https://rudderstack.com/blog/${blog.slug}`}>
            {/* <a className="block" href="#"> */}
            <StaticImage
              src={"../images/icon-twitter.svg"}
              placeholder="tracedSVG"
              className="text-blueNew-midnight"
              alt="twitter"
              width={40}
              height={40}
            />
            {/* </a> */}
          </TwitterShareButton>
          <FacebookShareButton
            url={`https://rudderstack.com/blog/${blog.slug}`}
          >
            <span className="my-3 block">
              <StaticImage
                src={"../images/icon-fb.svg"}
                placeholder="tracedSVG"
                alt="Facebook"
                width={40}
                height={40}
              />
            </span>
          </FacebookShareButton>
          <LinkedinShareButton
            url={`https://rudderstack.com/blog/${blog.slug}`}
          >
            <span className="block">
              <StaticImage
                src={"../images/icon-linkedin.svg"}
                placeholder="tracedSVG"
                alt="linkdin"
                width={40}
                height={40}
              />
            </span>
          </LinkedinShareButton>
        </div>
      </div>
      <div className="block-description relative pt-4 max-w-4xl m-auto px-4 md:px-16">
        {/*Blog Content*/}
        <div className="social-icon_blog absolute hidden md:flex  justify-center items-center flex-col pt-8 mt-3 top-0 lg:left-0 md:left-0">
          <TwitterShareButton url={`https://rudderstack.com/blog/${blog.slug}`}>
            {/* <a className="block" href="#"> */}
            <StaticImage
              src={"../images/icon-twitter.svg"}
              placeholder="tracedSVG"
              className="text-blueNew-midnight"
              alt="twitter"
              width={40}
              height={40}
            />
            {/* </a> */}
          </TwitterShareButton>
          <FacebookShareButton
            url={`https://rudderstack.com/blog/${blog.slug}`}
          >
            <span className="my-3 block">
              <StaticImage
                src={"../images/icon-fb.svg"}
                placeholder="tracedSVG"
                alt="Facebook"
                width={40}
                height={40}
              />
            </span>
          </FacebookShareButton>
          <LinkedinShareButton
            url={`https://rudderstack.com/blog/${blog.slug}`}
          >
            <span className="block">
              <StaticImage
                src={"../images/icon-linkedin.svg"}
                placeholder="tracedSVG"
                alt="linkdin"
                width={40}
                height={40}
              />
            </span>
          </LinkedinShareButton>
        </div>
        <PortableText blocks={blog._rawDescription} />
        <>
          {/*Array Blog Author For Test Purpose*/}
          {blogAuthors.map(item => {
            return (
              <div
                key={item.author_name}
                className="my-8 py-12 px-8 bg-blueNew-lighter rounded-2xl bg-opacity-50 flex items-center mx-auto pb-10 mb-10  flex-row"
              >
                <div className="sm:w-32 sm:h-32 h-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                  {/* <div className= "rounded-full"> */}
                  <Image
                    props={
                      item.author_image.asset._id
                        ? item.author_image.asset._id
                        : item.author_image.asset._ref
                    }
                    classes="w-24 h-24 rounded-full"
                  />
                  {/* </div> */}

                  {/* <img
                    alt="author"
                    src={item.author_image.asset.fluid.src}
                    className="w-24 h-24 rounded-full"
                  /> */}
                </div>
                <div className="flex-grow text-left ml-4 sm:ml-0 md:ml-0 lg:text-center mt-6  sm:mt-0">
                  <div className="text-xs font-bold uppercase text-blueNew-eastbay">
                    About the author
                  </div>
                  <div className="leading-4 text-lg font-bold sm:mt-4 lg:mt-4 mt-2">
                    {item.author_name}
                  </div>
                  <div className="lg:mt-6 sm:mt-6 mt-2 text-sm">{item.author_desc}</div>
                </div>
              </div>
            )
          })}
        </>
        {/*Array Blog Author For Test Purpose*/}
      </div>
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
                onClick={e => rudderslabTrackOnClick("link", "Recent Posts", e)}
                className="font-bold leading-normal text-sm lr-icon seeall-icon"
              >
                {(() => {
                  if (viewexternallink === true) {
                    return (
                      <a
                        onClick={e =>
                          rudderslabTrackOnClick("link", "Recent Posts", e)
                        }
                        href={viewallpostslink}
                      >
                        {viewalltext}
                      </a>
                    )
                  } else {
                    return (
                      <Link
                        onClick={e =>
                          rudderslabTrackOnClick("link", "Recent Posts", e)
                        }
                        to={viewallpostslink}
                      >
                        {viewalltext}
                      </Link>
                    )
                  }
                })()}
              </a>
            </p>
          </div>
        </div>
      </section>
      {/*Blog Post*/}
      {/* <SignupV1 /> */}
      {/*Sign Up Section*/}
      <div className="max-w-6xl px-4 md:px-3 mx-auto flex items-center flex-wrap">
        {/*Subscription Component*/}
        <Subscription formId={"Blog-detail-footer-Subscribe-form"} />
      </div>
      <section id="footer_section_for_demo">
        <MiddleBanner {...lv_middlebannersection[0].node._rawGetStarted} />
      </section>
      {/*Subscription Component*/}
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    section_get_started: allSanitySectionGetStarted {
      edges {
        node {
          _id
          section_name
          _rawGetStarted
        }
      }
    }
    blog: sanityBlog(slug: { current: { eq: $slug } }) {
      id
      blog_category
      title
      slug {
        current
      }
      meta_title
      meta_desc
      _rawDescription
      blogdate(formatString: "MMMM DD, Y")
      blog_authors {
        author_name
        author_desc
        author_image {
          asset {
            _id
            url
          }
          _key
        }
        author_position
      }
      weight
      blog_image {
        asset {
          url
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
