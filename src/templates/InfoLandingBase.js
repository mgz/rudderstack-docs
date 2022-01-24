import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import InfoLandingHero from "../components/InfoLanding/InfoLandingHero/InfoLandingHero"
import InfoLandingAbout from "../components/InfoLanding/InfoLandingAbout/InfoLandingAbout"
import InfoLandingTestimonial from "../components/InfoLanding/InfoLandingTestimonial/InfoLandingTestimonial"
import InfoLandingKeyFeatures from "../components/InfoLanding/InfoLandingKeyFeatures/InfoLandingKeyFeatures"
import InfoLandingUseCase from "../components/InfoLanding/InfoLandingUseCase/InfoLandingUseCase"

import "../css/landingBase.css"

const InfoLandingBase = ({ data, location }) => {

  return (
      <div className="landing-main">
        {
          data.sanityInfoLandingPage._rawPagebuildersection.map((node, index) => {
            switch(node._type){
              case "left_right_content_with_image_and_bullet_items":
                return(
                  <InfoLandingHero data={node} key={node._key} />
                )
              case "left_right_content_and_bullet_items":
                return(
                  <InfoLandingAbout data={node} key={node._key} />
                )
              case "left_right_content_with_logos_and_testimonial":
                return(
                  <InfoLandingTestimonial data={node} key={node._key} />
                )
              case "title_with_card_items":
                return(
                  <InfoLandingKeyFeatures data={node} key={node._key} />
                )
              case "left_right_content_with_right_background_image":
                return(
                  <InfoLandingUseCase data={node} key={node._key} />
                )
              default:
                break;
            }
          })
        }
      </div>
  )
}

export const query = graphql`
  query GetLandingPage($slug: String) {
    sanityInfoLandingPage(slug: {current: {eq: $slug}}) {
      title
      slug {
        current
      }
      id
      meta_desc
      meta_title
      _rawPagebuildersection
      enable_no_follow_no_index
    }
  }
`

export default InfoLandingBase;
