import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import algoliasearch from "algoliasearch/lite"
import "../lib/font-awesome"
import MiddleBanner from "../components/middle-banner"
import Faq from "../components/faq"
import Testimonial from "../components/testimonial"
import SimilarInt1 from "../images/int1.svg"
import SimilarInt2 from "../images/int2.svg"
import SimilarInt3 from "../images/int3.svg"
import EventFilter from "../images/event-filtring.svg"
import SourceInt from "../images/sdk-source-int.svg"
import SourceBg from "../images/source-int-bg.svg"

const SourceIntegration = ({ data }) => {
  const lv_testimonialsection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "testimonialsection")

  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_APIKEY
  )
  const accordions = [
    {
      title: "What does the RudderStack JavaScript SDK do?",
      content: "The RudderStack JavaScript API makes it easy for you to send your customer event data from your website to any destination in no time. After integrating this SDK, you will also be able to connect your website to multiple destinations such as Google Analytics, Hotjar, Amplitude, and more, to send your event data in real-time."
    },
    {
      title: "What are the different JavaScript SDK APIs?",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "How do I load analytics.js correctly?",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];

  return (
    <Layout>

      <div className="pt-10 font-custom">
        <section className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-40 mx-auto relative banner-section">
          <div className="flex flex-col items-center md:gap-1 justify-center mx-auto lg:flex-row lg:p-0">
            <div className="relative z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
              <h2 className="mb-8 md:my-4 md:text-6xl text-5xl  font-bold leading-tight">
                JavaScript SDK Source Integration
              </h2>
              <p>RudderStack’s open-source JavaScript SDK lets you start sending event data from your website to a wide range of common, popular marketing, sales, and product tools such as Amplitude, Google Analytics, and more, without having to test or implement a new API every single time.</p>
              <div className="relative block sm:flex mt-12">
                <a className="btn-primary-lg sm:mr-4 md:mb-0 mb-6" href="#">Try this in RudderStack</a>
              </div>
            </div>
            <div className="relative w-full px-5 rounded-lg flex-grow justify-items-end lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0">
              <div className="relative rounded-md group sm:px-0 sm:items-center lg:items-start">
                <div className="w-full">
                  <img src={SourceBg} alt="Source Integration" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>{/*banner*/}
        <section className="md:mb-24 sm:mb-20 sm:mt-0 mt-20 mb-10">
          <div className="max-w-6xl px-4 md:px-3 mx-auto">
            <div className="flex flex-col w-full justify-center items-start md:text-left max-w-screen-md">
              <h3 className="md:mt-2 text-4xl md:text-5xl text-primary font-bold leading-tight">What You Can Do with JavaScript SDK Source</h3>
            </div>
            <div className="flex items-start flex-wrap sm:flex-row mt-6 md:mt-20">
              <div className="w-full sm:w-1/2 sm:p-6 sm:pl-0">
                <div className="relative w-full what-can-do text-xl leading-8 pl-11 mb-7 sm:mb-0">
                  <span className="font-bold">Track, capture, and send</span> your customer event data from your website to a wide range of common, popular marketing, sales, and product tools as well as a variety of cloud data warehouses.
                </div>
                <div className="relative w-full what-can-do text-xl leading-8 pl-11 sm:mt-14 mb-7 sm:mb-0">
                  <span className="font-bold">Send event payloads</span> to multiple destinations with a single JavaScript SDK, reducing the negative impact to website performance that comes from using multiple SDKs..
                </div>
              </div>
              <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0">
                <div className="relative w-full what-can-do text-xl leading-8 pl-11 sm:pb-2 mb-7 sm:mb-0">
                  <span className="font-bold">Automatically capture</span> certain event-specific and user-specific information which highlight a customer’s unique behavioral traits.
                </div>
                <div className="relative w-full what-can-do text-xl leading-8 pl-11 sm:mt-20 mb-7 sm:mb-0">
                  <span className="font-bold">Determine</span> what percentage of your web pages are affected by ad-blockers.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-backgroundsecondary 100% left-right-section sm:pt-24 sm:pb-20 py-11">
          <div className="max-w-6xl px-4 md:px-3 mx-auto">
            <div className="flex items-center flex-wrap">
              <div className="w-full justify-center items-start md:text-left max-w-screen-md">
                <h3 className="md:mt-2 text-4xl md:text-5xl text-primary font-bold leading-tight">How to Set up JavaScript SDK Source Integration?</h3>
              </div>

              <div className="flex flex-col items-center lg:gap-60 xl:gap-80 justify-center mx-auto sm:flex-row">
                <div className="sm:w-1/2 pt-10 sm:p-6 sm:pt-11 sm:pl-0">

                  <div className="text-secondary leading-7 text-sm sm:text-lg">
                    <p>It's quite simple! Refer to our step-by-step guide and start using the JavaScript SDK in no time!</p>
                  </div>
                  <div className="relative block sm:flex mt-14">
                    <a className="btn-primary-lg" href="#">View the documentation</a>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0 mt-14 sm:mt-0">
                  <img src={SourceInt} alt="event stream" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="100% bg-whiteColor-custom">
          <div className="max-w-6xl px-4 md:px-3 mx-auto pt-24 pb-28 pb-0 lg:py-24">
            <div className="flex items-center flex-wrap">
              <div className="w-full justify-center items-start md:text-left max-w-screen-md">
                <h3 className="md:mt-2 text-4xl md:text-5xl text-primary font-bold leading-tight">Get more out of RudderStack's JavaScript SDK</h3>
              </div>
              <div className="sm:w-1/2 sm:p-6 sm:pl-0 sm:pt-0 sm:mt-6 md:pr-0">

                <div className="text-secondary leading-7 text-sm sm:text-lg">
                  <p className="mt-8"><span className="text-blueNew-custom font-bold">The RudderStack JavaScript SDK</span> also enables you to filter and load your preferred destinations, and disable sending your events to other destinations. This way, you have full control over which third-party tools get access to your data.</p>
                  <p className="mt-8">For example, you can send a specific set of events only to Google Analytics and Intercom, and disable sending those events to other destinations. The JavaScript SDK also enables sending a page view containing markers that indicate whether a page is ad-blocked or not. </p>
                  <p className="mt-8">This way, you can analyze the data to find what percent of your site's page views are affected by ad-blockers. For more information, visit RudderStack's JavaScript SDK on GitHub. </p>
                </div>
                <span className="mt-11 sm:mt-14 font-bold leading-normal text-sm relative inline-flex sm:inline-block hover:text-blueNew-custom">
                  Ready to Get Started?
                </span>
                <div className="relative block sm:flex sm:mt-14 mt-16">
                  <a className="btn-primary-lg sm:mr-4 md:mb-0 mb-6" href="#">Try this in RudderStack</a>
                </div>
              </div>
              <div className="w-full sm:w-1/2 sm:p-6 md:pl-16 sm:pr-0 mt-12 sm:mt-0">
                <img src={EventFilter} alt="event stream" className="w-full" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-grayColor-BgGray md:pt-32 md:pb-24 sm:pt-16 sm:pb-12 pt-11 pb-12 relative font-custom">
          <Faq accordions={accordions} />
        </section>
        <section className="100% bg-whiteColor-custom">
          <div className="max-w-6xl px-4 md:px-3 mx-auto flex flex-wrap pb-24">
            <h3 className="w-full my-2 text-4xl md:text-5xl text-primary font-bold leading-tight mb-8 md:mb-20 mt-6 md:mt-28">
              Similar Integrations
         </h3>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
              <div className="flex justify-between flex-col border border-grayColor-priceCardBorder rounded-3xl shadow-md overflow-hidden h-full">
                <div className="int-img md:py-16 lg:px-24 md:px-16 p-10 flex justify-center items-center">
                  <img src={SimilarInt1} alt="event stream" className="w-full" />
                </div>
                <div className="flex items-center px-10 py-5">
                  <span className="font-bold leading-normal text-sm lr-icon relative sm:inline-block hover:text-blueNew-custom">
                    <a href="#">See more</a></span>
                </div>
              </div>
              <div className="border border-grayColor-priceCardBorder rounded-3xl shadow-md overflow-hidden h-full">
                <div className="int-img md:py-16 lg:px-24 md:px-16 p-10 flex justify-center items-center">
                  <img src={SimilarInt2} alt="event stream" className="w-full" />
                </div>
                <div className="flex items-center px-10 py-5">
                  <span className="font-bold leading-normal text-sm lr-icon relative sm:inline-block hover:text-blueNew-custom">
                    <a href="#">See more</a></span>
                </div>
              </div>
              <div className="border border-grayColor-priceCardBorder rounded-3xl shadow-md overflow-hidden h-full">
                <div className="int-img md:py-16 lg:px-24 md:px-16 p-10 flex justify-center items-center">
                  <img src={SimilarInt3} alt="event stream" className="w-full" />
                </div>
                <div className="flex items-center px-10 py-5">
                  <span className="font-bold leading-normal text-sm lr-icon relative sm:inline-block hover:text-blueNew-custom">
                    <a href="#">See more</a></span>
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default SourceIntegration

export const pageQuery = graphql`
  query {
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