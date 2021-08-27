import React from "react"
import { graphql } from "gatsby"
import "../lib/font-awesome"
//import loadable from "@loadable/component"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import MiddleBanner from "../components/middle-banner"
import ProductHeroBanner from "../components/productHeroBanner"
import ProductImageWithListOfText from "../components/productImageWithListOfText"
import LeftRightImgCnt from "../components/left-right-image-content"
import Testimonial from "../components/testimonial"
import clientConfig from "../../client-config"
// const Layout = loadable(() => import("../components/layout"))
// const MiddleBanner = loadable(() => import("../components/middle-banner"))
// const ProductHeroBanner = loadable(() => import("../components/productHeroBanner"))
// const ProductImageWithListOfText = loadable(() => import("../components/productImageWithListOfText"))
// const LeftRightImgCnt = loadable(() => import("../components/left-right-image-content"))
// const Testimonial = loadable(() => import("../components/testimonial"))

const Products = ({ data, location }) => {
  const lv_testimonialsection = data.section_testimonials.edges.filter(
    ii => ii.node._id === clientConfig.defaultCommonSection_Ids.testimonials
  )

  const lv_middlebannersection = data.section_get_started.edges.filter(
    ii => ii.node._id === clientConfig.defaultCommonSection_Ids.getStarted
  )

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
              // <div key={row._key} className="bg-gradiantsecondary 100%">
              //   <LeftRightImgCnt applyGradientColorTheme={false} {...row} />
              // </div>
              <div key={row._key} className="100%">
                <LeftRightImgCnt applyGradientColorTheme={false} {...row} />
              </div>
            )
          }
        })}

        <section id="testimonials">
          <Testimonial
            {...lv_testimonialsection[0].node._rawTestimonials}
            applyGradientColorTheme={true}
            isForDemoPage={true}
          />
        </section>

        <section id="footer_section_for_demo">
          <MiddleBanner {...lv_middlebannersection[0].node._rawGetStarted} />
        </section>
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
