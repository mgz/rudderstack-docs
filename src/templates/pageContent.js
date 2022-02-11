import React, {useEffect, useState} from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import MiddleBanner from "../components/middle-banner"
import loadable from "@loadable/component"
import CentredContentWithButton from "../components/centredContentWithButton"
import MigrationSpecialists from "../components/MigrationSpecialists"
import HeroSegment from "../components/heroSegment"
import FourCardsWithTitle from "../components/fourCardsWithTitle"
import FourCardsWithTitleLeftAligned from "../components/fourCardsWithTitleLeftAligned"
import ThreeCardsWithTitle from "../components/threeCardsWithTitle"
import SegmentComparisonComponent from "../components/segmentComparisonComponent"
import PricingComparisonComponentV2 from "../components/PricingComparisonComponentV2"
import HeroBannerCloud from "../components/heroBannerCloud"
import HeroBannerAboutUs from "../components/heroBannerAboutUs"
import Leadership from "../components/leadership"
import AdvisorsAndInvestor from "../components/advisorsAndInvestors"
import Faq from "../components/faq"
import LeftRightImgCnt from "../components/left-right-image-content"
import LeftRightImgCntWithCentedHeading from "../components/left-right-image-content-with-centered-heading"
import PricingCalculator from "../components/pricingCalculator"
import HeroBannerPricing from "../components/heroBannerPricing"
import HeroBannerContactUs from "../components/heroBannerContactUs"
import TwoCardsLeftAligned from "../components/twoCardsLeftAligned"
import HeroBanner404 from "../components/heroBanner404"
import AgreementContent from "../components/agreement_content"

const Testimonial = loadable(() => import("../components/testimonial"))

const PageContent = ({ data, location }) => {
  // console.log("data", data)

  let [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let checkDarkMode = document.getElementById('main-container');
    if(checkDarkMode.classList.contains('hero-section')){
      setDarkMode(true);
    }else{
      setDarkMode(false);
    }
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray('.triggers');
    /* console.log('Sections', sections); */
    sections.forEach(section => {
      gsap.set(section, {autoAlpha: 0});
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        markers: false,
        toggleActions: "play none none none",
        onEnter: function () {
          gsap.fromTo(
            section,
            { y: 100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              stagger: 0.2,
              ease: "back",
              overwrite: "auto"
            }
          );
        },
        onLeave: function () {
          gsap.fromTo(section, { autoAlpha: 1 }, { autoAlpha: 1, overwrite: "auto" });
        },
        /* onEnterBack: function () {
          gsap.fromTo(
            section,
            { y: -100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto"
            }
          );
        },
        onLeaveBack: function () {
          gsap.fromTo(section, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        } */
      })
    });
  }, [])

  return (
    <Layout location={location} darkTheme={location.pathname.startsWith('/pricing') || location.pathname.startsWith('/about') ? true : false}>
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
        {/* <meta property="og:type" content="article" /> */}
      </Helmet>
      <div className="font-custom">
        {data.pagedata._rawPagebuildersection.map(section => {
          if (section._type === "hero_banner_segment") {
            let imgInfo
            if (section.herobanner_media.condition === "imageoption") {
              imgInfo = data.all_images.edges.find(
                kk =>
                  kk.node._id ===
                  section.herobanner_media.imageoption.asset._ref
              )
            }
            return (
              <section
                key={section._key}
                className="w-full segment-desktop-banner lg:py-0 py-10 flex justify-center items-center relative overflow-hidden"
              >
                {section.herobanner_media.condition === "imageoption" && (
                  <div
                    className="comparison-banner"
                    style={{
                      backgroundImage: `url("${
                        imgInfo ? imgInfo.node.url : ""
                      }")`,
                    }}
                  >
                    <HeroSegment {...section} />
                  </div>
                )}
                {section.herobanner_media.condition === "videooption" && (
                  <div className="comparison-banner">
                    <HeroSegment {...section} />
                  </div>
                )}
              </section>
            )
          } else if (section._type === "hero_banner_cloud") {
            return <HeroBannerCloud key={section._key} {...section} />
          } else if (section._type === "hero_banner_about") {
            return <HeroBannerAboutUs key={section._key} {...section} />
          } else if (section._type === "hero_banner_pricing") {
            return <HeroBannerPricing key={section._key} {...section} />
          } else if (section._type === "hero_banner_contactus") {
            return <HeroBannerContactUs key={section._key} {...section} />
          } else if (section._type === "four_card_with_title") {
            return <FourCardsWithTitle key={section._key} {...section} />
          } else if (section._type === "leadership_section") {
            return <Leadership key={section._key} {...section} />
          } else if (section._type === "advisors_and_investors_section") {
            return <AdvisorsAndInvestor key={section._key} location={location} {...section} />
          } else if (section._type === "pricing_calculate") {
            return <PricingCalculator key={section._key} {...section} />
          } else if (section._type === "hero_banner_404") {
            return <HeroBanner404 key={section._key} {...section} />
          } else if (section._type === "four_cards_left_aligned") {
            return (
              <FourCardsWithTitleLeftAligned key={section._key} {...section} />
            )
          } else if (section._type === "agreement_content") {
            return <AgreementContent key={section._key} {...section} />
          } else if (section._type === "two_cards_left_aligned") {
            return <TwoCardsLeftAligned key={section._key} {...section} />
          } else if (section._type === "leftrightcontentimagesection") {
            return (
              <div className={`100%`}>
                <LeftRightImgCnt
                  key={section._key}
                  {...section}
                  applyGradientColorTheme={false}
                  location={location}
                />
              </div>
            )
          } else if (
            section._type === "left_right_content_with_centered_heading"
          ) {
            return (
              <div className={`100%`}>
                <LeftRightImgCntWithCentedHeading
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
                  applyGradientColorTheme={false}
                  {...l_section_info.node._rawTestimonials}
                />
              </section>
            )
          } else if (section._type === "three_card_with_title") {
            let extraBottomMargin = false
            let greyBackground = false
            if (data.pagedata.slug.current.includes("rudderstack-vs")) {
              extraBottomMargin = true
              greyBackground = true
            }
            return (
              <section
                id="liked_feature_section"
                className={`${
                  greyBackground
                    ? "bg-grayColor-BgGray"
                    : "bg-whiteColor-custom"
                } ${extraBottomMargin ? "pb-40 md:pb-48" : "pb-8"} `}
              >
                <ThreeCardsWithTitle key={section._key} {...section} />
              </section>
            )
          } else if (section._type === "comparision_with_title") {
            return (
              <SegmentComparisonComponent key={section._key} {...section} darkMode={darkMode} />
            )
          } else if (section._type === "pricing_comparision_with_title") {
            return (
              <PricingComparisonComponentV2 key={section._key} {...section} />
            )
          } else if (section._type === "faq") {
            let tmp = []

            section.faqcontent.forEach(rr => {
              tmp.push({ title: rr.faq_question, content: rr.faq_answer })
            })

            return (
              <section
                className="section-gradient py-10 relative font-custom"
                key={section._key}
              >
                <span className="section-border absolute top-0 left-0 w-full block"></span>
                <MigrationSpecialists />
                <Faq
                  title={section.faqtitle}
                  subTitle={section.faqsubtitle}
                  accordions={tmp}
                  isBlockContent={true}
                />
                <span className="section-border absolute bottom-0 left-0 w-full block"></span>
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
          } else if (section._type === "centered_content_with_button") {
            return (
              <section key={section._key} id="explorerudderstack_section">
                <CentredContentWithButton {...section} darkMode={darkMode} />
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
  query GetSinglePage($slug: String) {
    pagedata: sanityPage(slug: { current: { eq: $slug } }) {
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

export default PageContent
