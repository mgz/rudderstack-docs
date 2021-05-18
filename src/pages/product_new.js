import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../lib/font-awesome"
import MiddleBanner from "../components/middle-banner"

import ProductHeroBanner from "../components/productHeroBanner"
import ProductImageWithListOfText from "../components/productImageWithListOfText"
import LeftRightImgCnt from "../components/left-right-image-content"
import JoinOurTeam from "../components/joinOurTeam"

const Product_new = ({ data }) => {
  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")

  return (
    <Layout>
      <div className="pt-10 font-custom">
        {(data.sanityProductPage._rawPagebuildersectionarray || []).map(
          (row, idx) => {
            if (row._type === "product_banner") {
              return <ProductHeroBanner key={row._id} {...row} />
            } else if (row._type === "image_with_list_of_text") {
              return <ProductImageWithListOfText key={row._id} {...row} />
            } else if (row._type === "leftrightcontentimagesection") {
              return (
                <div key={row._key} className="100% bg-whiteColor-custom">
                  <LeftRightImgCnt {...row} />
                </div>
              )
            }
          }
        )}
        <section className="overflow-hidden">
          <JoinOurTeam />
        </section>
        <section id="footer_section_for_demo">
          <MiddleBanner {...lv_middlebannersection[0]} />
        </section>
      </div>
    </Layout>
  )
}

export default Product_new

export const pageQuery = graphql`
  query {
    sanityFrontpageblock {
      _rawPagebuildersectionarray
    }
    sanityProductPage {
      _id
      slug {
        current
      }
      title
      _rawPagebuildersectionarray
    }
  }
`
