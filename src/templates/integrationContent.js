import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import IntegrationHero from "../components/integrationHero"
import IntegrationLeftRightContent from "../components/IntegrationLeftRightContent"
import IntegrationHowToSetUp from "../components/IntegrationHowToSetUp"
import IntegrationGetMoreOutOf from "../components/IntegrationGetMoreOutOf"
import IntegrationSimilar from "../components/IntegrationSimilar"

import "../lib/font-awesome"
import MiddleBanner from "../components/middle-banner"
import Faq from "../components/faq"
import Testimonial from "../components/testimonial"

const Singleintegration = ({ data }) => {
  // console.log("integration-data", data._rawIntegrationHeroSection.herotitle)
  const lv_testimonialsection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "testimonialsection")

  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")

  const [faqData, setFaqData] = React.useState()
  useEffect(() => {
    if (data.integration._rawFaqSection) {
      let tmp = []
      data.integration._rawFaqSection.faqcontent.forEach(rr => {
        tmp.push({ title: rr.faq_question, content: rr.faq_answer })
      })
      setFaqData({
        faqTitle: data.integration._rawFaqSection.faqtitle,
        faqSubTitle: data.integration._rawFaqSection.faqsubtitle,
        content: tmp,
      })
    }
  }, [])

  return (
    <Layout>
      <div className="pt-10 font-custom">
        {data.integration._rawIntegrationHeroSection && (
          <IntegrationHero data={data.integration._rawIntegrationHeroSection} />
        )}

        {data.integration._rawIntegrationLeftRightsection && (
          <IntegrationLeftRightContent
            data={data.integration._rawIntegrationLeftRightsection}
          />
        )}
        {data.integration._rawHowtosetupsection && (
          <IntegrationHowToSetUp
            data={data.integration._rawHowtosetupsection}
          />
        )}

        {data.integration._rawGetmoreoutofsection && (
          <IntegrationGetMoreOutOf
            data={data.integration._rawGetmoreoutofsection}
          />
        )}

        {faqData && (
          <section className="bg-grayColor-BgGray md:pt-32 md:pb-24 sm:pt-16 sm:pb-12 pt-11 pb-12 relative font-custom">
            <Faq
              title={faqData.faqTitle}
              subTitle={faqData.faqSubTitle}
              accordions={faqData.content}
              isBlockContent={true}
            />
          </section>
        )}

        {data.integration._rawSimilarDestination && (
          <IntegrationSimilar
            data={data.integration._rawSimilarDestination}
            allIntegrationData={data.allSanityIntegration}
          />
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

export const query = graphql`
  query GetSingleIntegration($slug: String) {
    integration: sanityIntegration(slug: { current: { eq: $slug } }) {
      _rawFaqSection
      _rawGetmoreoutofsection
      _rawHowtosetupsection
      _rawIntegrationHeroSection
      _rawIntegrationLeftRightsection
      _rawIntegrationLogo
      _rawSimilarDestination
      _rawSlug
      _id
      _key
      title
      weight
      is_coming_soon
    }
    allSanityBlog(limit: 13, sort: { fields: [weight], order: [ASC] }) {
      pageInfo {
        currentPage
        itemCount
        hasPreviousPage
        hasNextPage
        pageCount
        perPage
        totalCount
      }
    }
    sanityFrontpageblock {
      _rawPagebuildersectionarray
    }
    allSanityIntegration {
      edges {
        node {
          _id
          _key
          _rawIntegrationLogo
          title
          weight
          is_coming_soon
          slug {
            current
          }
        }
      }
    }
  }
`

export default Singleintegration
