import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import MiddleBanner from "../components/middle-banner"
import loadable from "@loadable/component"
import HeroBannerVerticalLanding from "../components/heroBannerVerticalLandingPage"
import LeftRightImgCnt from "../components/left-right-image-content"

const OurLogo = loadable(() => import("../components/ourlogo"))
const Testimonial = loadable(() => import("../components/testimonial"))

const VerticalLandingPageContent = ({ data, location }) => {
  // console.log("VerticalLandingPageContent", data)
  return (
    <Layout location={location}>
      <Helmet>
        <title>{data.pagedata.meta_title || data.pagedata.title}</title>
        {data.pagedata.enable_no_follow_no_index === true && (
          <meta name="robots" content="noindex" data-react-helmet="true" />
        )}
        {data.pagedata.enable_no_follow_no_index === true && (
          <meta name="robots" content="nofollow" data-react-helmet="true" />
        )}
        <meta
          property="og:title"
          content={data.pagedata.meta_title || data.pagedata.title}
        />
        <meta
          property="twitter:title"
          content={data.pagedata.meta_title || data.pagedata.title}
        />
        <meta name="description" content={data.pagedata.meta_desc} />
        <meta property="og:description" content={data.pagedata.meta_desc} />
        <meta
          property="twitter:description"
          content={data.pagedata.meta_desc}
        />
      </Helmet>
      <div className="font-custom">
        {data.pagedata._rawPagebuildersection.map(section => {
          if (section._type === "herobanner") {
            return <HeroBannerVerticalLanding key={section._key} {...section} />
          } else if (section._type === "leftrightcontentimagesection") {
            return (
              <div className={`100%`}>
                <LeftRightImgCnt
                  key={section._key}
                  {...section}
                  applyGradientColorTheme={false}
                />
              </div>
            )
          } else if (section._type === "ref_section_testimonials") {
            let l_section_info = data.section_testimonials.edges.find(
              kl => kl.node._id === section._ref
            )
            return (
              <section key={section._key} id="testimonial">
                <Testimonial
                  applyGradientColorTheme={true}
                  {...l_section_info.node._rawTestimonials}
                />
              </section>
            )
          } else if (section._type === "ref_section_get_started") {
            let l_section_info = data.section_get_started.edges.find(
              kl => kl.node._id === section._ref
            )
            return (
              <section key={section._key} id="get_started">
                <MiddleBanner {...l_section_info.node._rawGetStarted} />
              </section>
            )
          } else if (section._type === "ref_section_ourlogos") {
            let l_ourLogo_info = data.section_our_logos.edges.find(
              kl => kl.node._id === section._ref
            )

            return (
              <section key={section._key} id="our_logos">
                <OurLogo
                  key={section._key}
                  {...l_ourLogo_info.node._rawOurLogos}
                  removeSectionVerticalMargin={true}
                />
              </section>
            )
          } else {
            return null
          }
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleVerticalPage($slug: String) {
    pagedata: sanityVerticalLandingPage(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      meta_title
      meta_desc
      id
      enable_no_follow_no_index
      _rawPagebuildersection
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
    section_our_logos: allSanitySectionOurlogos {
      edges {
        node {
          _id
          section_name
          _rawOurLogos
        }
      }
    }
    section_sign_up: allSanitySectionSignup {
      edges {
        node {
          _id
          section_name
          _rawSignup
        }
      }
    }
    section_testimonials: allSanitySectionTestimonials {
      edges {
        node {
          _id
          section_name
          _rawTestimonials
        }
      }
    }
    all_images: allSanityImageAsset {
      edges {
        node {
          url
          _id
        }
      }
    }
  }
`

export default VerticalLandingPageContent
