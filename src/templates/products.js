import React from "react"
import { graphql } from "gatsby"
//import "../lib/font-awesome"
//import loadable from "@loadable/component"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import MiddleBanner from "../components/middle-banner"
import ProductHeroBanner from "../components/productHeroBanner"
import ProductImageWithListOfText from "../components/productImageWithListOfText"
import LeftRightImgCnt_V2 from "../components/left-right-image-content-v2"
import Testimonial from "../components/testimonial"
import TestimonialCardWithLeftHeading from "../components/testimonialCardWithLeftHeading"
import clientConfig from "../../client-config"
// const Layout = loadable(() => import("../components/layout"))
// const MiddleBanner = loadable(() => import("../components/middle-banner"))
// const ProductHeroBanner = loadable(() => import("../components/productHeroBanner"))
// const ProductImageWithListOfText = loadable(() => import("../components/productImageWithListOfText"))
// const LeftRightImgCnt = loadable(() => import("../components/left-right-image-content"))
// const Testimonial = loadable(() => import("../components/testimonial"))

const Products = ({ data, location }) => {
  // console.log("data", data)
  return (
    <Layout location={location}>
      <Helmet>
        <title>{data.product.meta_title || data.product.title}</title>
        <meta
          property="og:title"
          content={data.product.meta_title || data.product.title}
        />
        <meta
          property="twitter:title"
          content={data.product.meta_title || data.product.title}
        />
        <meta name="description" content={data.product.meta_desc} />
        <meta property="og:description" content={data.product.meta_desc} />
        <meta property="twitter:description" content={data.product.meta_desc} />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="font-custom">
        {(data.product._rawPagebuildersectionarray || []).map((row, idx) => {
          if (row._type === "product_banner") {
            return <ProductHeroBanner key={row._id} {...row} />
          } else if (row._type === "image_with_list_of_text") {
            return <ProductImageWithListOfText key={row._id} {...row} />
          } else if (row._type === "leftrightcontentimagesection") {
            return (
              <div
                key={row._key}
                className="section-gradient py-10 md:py-20 relative px-4 sm:px-8"
              >
                <span class="section-border block absolute top-0 left-0 w-full"></span>
                <LeftRightImgCnt_V2 applyGradientColorTheme={true} {...row} />
                <span class="section-border block absolute bottom-0 left-0 w-full"></span>
              </div>
            )
          } else if (row._type === "testimonial_card_with_left_heading") {
            return (
              <div key={row._key} className="">
                <TestimonialCardWithLeftHeading {...row} />
              </div>
            )
          } else if (row._type === "ref_section_get_started") {
            let l_section_info = data.section_get_started.edges.find(
              kl => kl.node._id === row._ref
            )
            return (
              <section key={row._key} id="get_started">
                <MiddleBanner {...l_section_info.node._rawGetStarted} />
              </section>
            )
          } else if (row._type === "ref_section_testimonials") {
            let l_section_info = data.section_testimonials.edges.find(
              kl => kl.node._id === row._ref
            )
            return (
              <section key={row._key} id="testimonial">
                <Testimonial
                  applyGradientColorTheme={true}
                  isForDemoPage={true}
                  {...l_section_info.node._rawTestimonials}
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

export default Products

export const pageQuery = graphql`
  query GetSingleProductPage($slug: String) {
    product: sanityProductPage(slug: { current: { eq: $slug } }) {
      _rawPagebuildersectionarray
      title
      slug {
        current
      }
      _id
      meta_title
      meta_desc
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
