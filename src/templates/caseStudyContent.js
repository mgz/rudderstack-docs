import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import loadable from "@loadable/component"

import Layout from "../components/layout"
import LeftRightImgCnt from "../components/left-right-image-content"
import LeftRightContentWithTitle from "../components/leftRightContentWithTitle"
import HeroBannerWithCenterTextAndImage from "../components/heroBannerWithCenterTextAndImage"
import CaseStuduiesPersonalize from "../components/caseStuduiesPersonalize"
import Image from "../components/image"

// const Layout = loadable(() =>
//   import("../components/layout")
// )
// const LeftRightImgCnt = loadable(() =>
//   import("../components/left-right-image-content")
// )
// const LeftRightContentWithTitle = loadable(() =>
//   import("../components/leftRightContentWithTitle")
// )
// const HeroBannerWithCenterTextAndImage = loadable(() =>
//   import("../components/heroBannerWithCenterTextAndImage")
// )
// const CaseStuduiesPersonalize = loadable(() =>
//   import("../components/caseStuduiesPersonalize")
// )
// const Image = loadable(() => import("../components/image"))

const Testimonial = loadable(() => import("../components/testimonial"))
const MiddleBanner = loadable(() => import("../components/middle-banner"))

const CaseStudyContent = ({ data }) => {
 
  return (
    <Layout>
      <Helmet>
        <title>{data.casestudy.meta_title || data.casestudy.title}</title>
        <meta
          property="og:title"
          content={data.casestudy.meta_title || data.casestudy.title}
        />
        <meta
          property="twitter:title"
          content={data.casestudy.meta_title || data.casestudy.title}
        />
        <meta name="description" content={data.casestudy.meta_desc} />
        <meta property="og:description" content={data.casestudy.meta_desc} />
        <meta
          property="twitter:description"
          content={data.casestudy.meta_desc}
        />
        <meta property="og:type" content="article" />
      </Helmet>

      {data.casestudy._rawPagebuildersectionarray.map(section => {
        if (section._type === "leftrightcontentimagesection") {
          return (
            <div className="100%" key={section._key}>
              <LeftRightImgCnt applyGradientColorTheme={false} {...section} />{" "}
            </div>
          )
        } else if (section._type === "banner_center_image") {
          return (
            <div className="100%" key={section._key}>
              <HeroBannerWithCenterTextAndImage
                title={data.casestudy.title}
                {...section}
              />
            </div>
          )
        } else if (section._type === "two_column_content_with_title") {
          return (
            <div className="100% mb-4 md:mb-32" key={section._key}>
              <LeftRightContentWithTitle {...section} />
            </div>
          )
        } else if (section._type === "image") {
          return (
            <div
              className="100% max-w-6xl flex flex-col justify-center mx-auto"
              key={section._key}
            >
              <div className=" px-4 py-8 md:px-36 md:py-8">
                <Image props={section.asset._ref} classes="mx-auto" />
              </div>
            </div>
          )
        } else if (section._type === "case_studies_personalization") {
          return (
            <div className="100% mb-28" key={section._key}>
              <CaseStuduiesPersonalize {...section} />
            </div>
          )
        } else if (section._type === "ref_section_get_started") {
          let l_section_info = data.section_get_started.edges.find(
            kl => kl.node._id === section._ref
          )
          return (
            <section key={section._key} id="footer_section_for_case_studies">
              <MiddleBanner {...l_section_info.node._rawGetStarted} />
            </section>
          )
        } else if (section._type === "ref_section_signup") {
          let l_section_info = data.section_sign_up.edges.find(
            kl => kl.node._id === section._ref
          )
          return (
            <div className="bg-backgroundsecondary 100%" key={section._key}>
              <LeftRightImgCnt
                applyGradientColorTheme={false}
                {...l_section_info.node._rawSignup}
              />
            </div>
          )
        } else if (section._type === "ref_section_testimonials") {
          let l_section_info = data.section_testimonials.edges.find(
            kl => kl.node._id === section._ref
          )
          return (
            <Testimonial
              key={section._key}
              applyGradientColorTheme={false}
              {...l_section_info.node._rawTestimonials}
            />
          )
        } else {
          return <div key={section._key}>{section._type}</div>
        }
      })}
    </Layout>
  )
}

export const query = graphql`
  query GetSingleCaseStudies($slug: String) {
    casestudy: sanityCaseStudies(slug: { current: { eq: $slug } }) {
      id
      listing_image {
        asset {
          url
        }
      }
      meta_desc
      meta_title
      shortdescription
      title
      weight
      article_dttm
      category
      _rawPagebuildersectionarray
    }

    sanityFrontpageblock {
      _rawPagebuildersectionarray
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
  }
`

export default CaseStudyContent
