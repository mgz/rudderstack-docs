import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../lib/font-awesome"
import MiddleBanner from "../components/middle-banner"
import ProductHeroBanner from "../components/productHeroBanner"
import ProductImageWithListOfText from "../components/productImageWithListOfText"
import LeftRightImgCnt from "../components/left-right-image-content"
import Testimonial from "../components/testimonial"



const Products = ({ data, location}) => {

  const lv_testimonialsection = (
  data.sanityFrontpageblock._rawPagebuildersectionarray || []
).filter(ii => ii._type === "testimonialsection")
  // console.log('graphqldata',data.product)
  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")

  return (
    <Layout location={location}>
      <div className="font-custom">
        {(data.product._rawPagebuildersectionarray || []).map(
          (row, idx) => {
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
          }
        )}

        <section id="testimonials">
          <Testimonial {...lv_testimonialsection[0]} isForDemoPage={true} />
        </section>

        <section id="footer_section_for_demo">
          <MiddleBanner {...lv_middlebannersection[0]} />
        </section>
      </div>
    </Layout>
  )
}

export default Products

export const pageQuery = graphql`
  query GetSingleProductPage($slug: String) {
    product: sanityProductPage(slug: {current: {eq: $slug}}) {
      _rawPagebuildersectionarray
      title
      slug {
        current
      }
      _id
    }
    sanityFrontpageblock {
      _rawPagebuildersectionarray
    }
  }
`
