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

const SingleTutorial = ({ data, location, ...props }) => {
  const tutorial = data.tutorial
  const blogAuthors = data.tutorial.blog_authors
  // const maintitle = props.maintitle
  const viewalltext = "See all posts"
  const viewallpostslink = "https://rudderstack.com/tutorials/"
  const viewexternallink = false
  // const [items] = useState([1, 2]); {/*Array Blog Author For Test Purpose*/ }

  let author_names = ""
  blogAuthors.forEach(row => {
    author_names += (author_names.length > 0 ? ", " : "") + row.author_name
  })

  /* const lv_middlebannersection = data.section_get_started.edges.filter(
    ii => ii.node._id === clientConfig.defaultCommonSection_Ids.getStarted
  ) */

  // console.log("data", data)
  return (
    <Layout location={location}>
      <Helmet>
        <title>{tutorial.meta_title || tutorial.title}</title>
        <meta
          property="og:title"
          content={tutorial.meta_title || tutorial.title}
        />
        {tutorial.enable_no_follow_no_index === true && (
          <meta name="robots" content="noindex" data-react-helmet="true" />
        )}
        {tutorial.enable_no_follow_no_index === true && (
          <meta name="robots" content="nofollow" data-react-helmet="true" />
        )}
        <meta name="description" content={tutorial.meta_desc} />
        <meta property="og:description" content={tutorial.meta_desc} />
        <meta
          property="twitter:title"
          content={tutorial.meta_title || tutorial.title}
        />
        <meta property="og:type" content="article" />
        <meta property="twitter:description" content={tutorial.meta_desc} />

        {/* added by Hari on 2021-06-21 to show share card across twitter, linkedin and facebook */}
        {location && <meta property="og:url" content={location.href} />}

        <meta
          property="og:image"
          content={tutorial.knowledge_base_image.asset.url}
        />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:creator"
          content={author_names || tutorial.title}
        />
        <meta property="twitter:image:alt" content={tutorial.title} />
      </Helmet>
      <div className="blog_banner md:mt-12">
        <Herobanner
          title={tutorial.title}
          date={tutorial.tutorial_date}
          author={author_names}
          image={tutorial.knowledge_base_image}
          blog={tutorial}
        />
      </div>

      <div className="block-description relative pt-4 max-w-5xl m-auto">
        <div className="social-icon-sticky">
          <div className="items-center flex gap-2 sm:justify-start md:justify-start justify-center social-icon_blog top-0">
            <TwitterShareButton
              url={`https://rudderstack.com/tutorials/${tutorial.slug}`}
            >
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

            <LinkedinShareButton
              url={`https://rudderstack.com/tutorials/${tutorial.slug}`}
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
        <PortableText blocks={tutorial._rawDescription} />
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
                <div className="flex-grow text-left ml-4 sm:ml-0 md:ml-0 mt-6  sm:mt-0">
                  <div className="text-xs font-bold uppercase text-blueNew-eastbay">
                    About the author
                  </div>
                  <div className="leading-4 text-lg font-bold sm:mt-4 lg:mt-4 mt-2">
                    {item.author_name}
                  </div>
                  <div className="lg:mt-6 sm:mt-6 mt-2 text-sm">
                    {item.author_desc}
                  </div>
                </div>
              </div>
            )
          })}
        </>
        {/*Array Blog Author For Test Purpose*/}
      </div>
      {/*Blog Content*/}

      {/*Blog Post*/}
      {/* <SignupV1 /> */}
      {/*Sign Up Section*/}
      <div className="max-w-6xl px-4 md:px-3 mx-auto flex items-center flex-wrap">
        {/*Subscription Component*/}
        <Subscription formId={"Tutorials-detail-footer-Subscribe-form"} />
      </div>
      <section id="footer_section_for_demo">
        {/* <MiddleBanner {...lv_middlebannersection[0].node._rawGetStarted} /> */}
      </section>
      {/*Subscription Component*/}
    </Layout>
  )
}

export const query = graphql`
  query GetSingleTutorial($slug: String) {
    tutorial: sanityKnowledgeBase(slug: { current: { eq: $slug } }) {
      id
      knowledge_base_category
      title
      slug {
        current
      }
      meta_title
      meta_desc
      enable_no_follow_no_index
      _rawDescription
      tutorial_date(formatString: "MMMM DD, Y")
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
      knowledge_base_image {
        asset {
          url
        }
        _key
      }
      _key
    }
  }
`

export default SingleTutorial
