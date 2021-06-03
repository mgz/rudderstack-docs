import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
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
      <Helmet>
        <title>{data.integration.meta_title || data.integration.title}</title>
        <meta property="og:title" content={data.integration.meta_title || data.integration.title} />
        <meta
          property="twitter:title"
          content={data.integration.meta_title || data.integration.title}
        />
        <meta name="description" content={data.integration.meta_desc} />
        <meta property="og:description" content={data.integration.meta_desc} />
        <meta property="twitter:description" content={data.integration.meta_desc} />
        <meta property="og:type" content="article" />
      </Helmet>

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

        {data.integration.similarDestination && (
          <IntegrationSimilar
            data={data.integration.similarDestination}
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
      similarDestination {
        sd_maintitle
        sd_integrations {
          integrationLogo {
            asset {
              _id
            }
          }
          slug {
            _key
            _type
            current
          }
        }
      }
      _rawSlug
      _id
      _key
      title
      weight
      is_coming_soon
      meta_title
      meta_desc
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
  }
`

export default Singleintegration
