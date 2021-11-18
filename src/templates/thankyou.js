import React from "react"
import { graphql } from "gatsby"
import { useLocation } from "@reach/router"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import PortableText from "../components/portableText"
import MiddleBanner from "../components/middle-banner"
import clientConfig from "../../client-config"

// const Layout = loadable(() => import("../components/layout"))
// const PortableText = loadable(() => import("../components/PortableText"))
// const MiddleBanner = loadable(() => import("../components/middle-banner"))

const TrankYou = ({ data, htmlId }) => {
  const location = useLocation()
  const lv_thankyoucontent = data.thankyou._rawPagebuildersectionarray || []

  const lv_middlebannersection = data.section_get_started.edges.filter(
    ii => ii.node._id === clientConfig.defaultCommonSection_Ids.getStarted
  )
  // console.log('path debug 1', location && location.pathname.startsWith("/careers"))
  // console.log('path debug 2', location && location.pathname.startsWith("careers"))
  // console.log('path debug 3', location && location.pathname)

  function resizeIframe(obj) {
    // console.log(
    //   "obj",
    //   obj.target,
    //   // obj.target.contentWindow.document.body.scrollHeight + "px"
    // )
    // obj.target.style.height = 0
    // obj.target.style.height = obj.target.contentWindow.document.body.scrollHeight + "px"
  }

  return (
    <Layout>
      <Helmet>
        <title>{data.thankyou.meta_title || data.thankyou.title}</title>
        <meta
          property="og:title"
          content={data.thankyou.meta_title || data.thankyou.title}
        />
        <meta
          property="twitter:title"
          content={data.thankyou.meta_title || data.thankyou.title}
        />
        <meta name="description" content={data.thankyou.meta_desc} />
        <meta property="og:description" content={data.thankyou.meta_desc} />
        <meta
          property="twitter:description"
          content={data.thankyou.meta_desc}
        />
        <meta property="og:type" content="article" />
        {location &&
          (location.pathname.startsWith("/careers/") ||
            location.pathname.startsWith("/careers")) && (
            <script src="https://boards.greenhouse.io/embed/job_board/js?for=rudderstack"></script>
          )}
      </Helmet>

      <div className="font-custom">
        <section id="demo_submit_hdr">
          <div className="w-full demo-submit-background">
            <div
              className={`${
                lv_thankyoucontent[0].content_type === "agreement"
                  ? "max-w-6xl"
                  : "max-w-3xl"
              } pt-24 mt-0 sm:mt-16 m-auto py-4 px-4`}
            >
              <h1
                className={`${
                  lv_thankyoucontent[0].content_type === "agreement"
                    ? "text-4xl md:text-6xl"
                    : "text-6xl"
                } font-bold`}
              >
                {lv_thankyoucontent[0].thankyou_header_text}
              </h1>
            </div>
          </div>
          {lv_thankyoucontent[0].thankyou_content && (
            <div
              className={`${
                lv_thankyoucontent[0].content_type === "agreement"
                  ? "max-w-6xl"
                  : "max-w-3xl"
              } pb-32 sm:pb-44 m-auto px-4`}
            >
              <div
                className={`text-grayColor-custom text-xl-2 ${
                  lv_thankyoucontent[0].content_type === "agreement"
                    ? "agreement-description"
                    : ""
                } `}
              >
                <PortableText blocks={lv_thankyoucontent[0].thankyou_content} />
              </div>
            </div>
          )}
          {location &&
            (location.pathname.startsWith("/careers/") ||
              location.pathname.startsWith("/careers")) && (
              <div className="max-w-6xl mx-auto" id="grnhse_app"></div>
              // <iframe
              //   src={
              //     "https://boards.greenhouse.io/embed/job_board?for=rudderstack"
              //   }
              //   width="100%"
              //   frameborder="0"
              //   // scrolling="no"
              //   title="Rudderstack - Greenhouse Job Board"
              //   scrolling="auto"
              //   height="1200px"
              //   // class="iframe-full-height"
              //   // onLoad={resizeIframe}
              // ></iframe>
            )}
        </section>

        <section id="footer_section_for_demo">
          <MiddleBanner {...lv_middlebannersection[0].node._rawGetStarted} />
        </section>
      </div>
      {/* <Helmet>
        <script src="https://boards.greenhouse.io/embed/job_board/js?for=rudderstack" />
      </Helmet> */}
    </Layout>
  )
}

export default TrankYou

export const pageQuery = graphql`
  query GetSingleTrankYouPage($slug: String) {
    thankyou: sanityThankyoupages(slug: { current: { eq: $slug } }) {
      _rawPagebuildersectionarray
      meta_title
      meta_desc
      title
    }
    section_get_started: allSanitySectionGetStarted {
      edges {
        node {
          _id
          section_name
          _rawGetStarted
        }
      }
    }
  }
`
