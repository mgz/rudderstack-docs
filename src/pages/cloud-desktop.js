import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import algoliasearch from "algoliasearch/lite"
import "../lib/font-awesome"
import MiddleBanner from "../components/middle-banner"
import SourceData from "../images/stearm.svg"
import Integrationschart from "../images/Integrations-chart.svg"
import DriveChart from "../images/drive-chart.svg"
import StreamData from "../images/stream-data.svg"
import DataControl from "../images/data-control.svg"
import ProductVideo from "../images/product-video-view.svg"
import VideoPlayBtn from "../images/video_play-btn.svg"
import WareHouse from "../images/warehouse.svg"
import OpenSource from "../images/open-source.svg"
import Pricing from "../images/pricing.svg"


const CloudDesktop = ({ data }) => {
  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_APIKEY
  )

  return (
    <Layout>

      <section className="w-full product-page_banner text-white lg:py-0 py-10 flex justify-center items-center relative overflow-hidden">
        <div className="max-w-6xl sm:pb-20 pb-4 p1-16 px-4 md:px-3 mx-auto">
          <div className="flex flex-col items-center justify-center mx-auto lg:flex-row lg:p-0">
            <div className="z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-3/5 sm:px-0sm:items-center lg:items-start lg:mb-0 hero-content">
              <h2 className="mb-8 md:mt-4 md:mb-0 md:text-6xl text-5xl  font-bold leading-none">RudderStack Cloud</h2>
              <h3 className="text-3xl leading-10 font-bold md:mt-5 mb-8">The complete customer data stack</h3>
              <p className="text-white text-lg leading-6 lg:pr-36">Build customer data pipelines that connect your whole stack, then make them smarter by ingesting and activating enriched data from your warehouse.</p>
              <p className="text-white text-lg leading-6 lg:pr-40 mt-8">Start with RudderStack Cloud Free today and send up to 500,000 events per month. No credit card required, no time limit.</p>
              <div class="block sm:flex justify-center items-center mt-12">
                <a class="btn-primary-lg bg-white text-primary sm:mr-4 md:mb-0 mb-6" href="#">Sign up for free</a>
                <a class="btn-secondary-lg sm:mr-4 md:mb-0 mb-4" href="/request-demo">Get a demo</a>
              </div>
            </div>

            <div className="relative w-full px-5 rounded-lg flex-grow justify-items-end lg:w-2/5 sm:px-0 sm:items-center lg:items-start lg:mb-0">
              <div class="relative rounded-md sm:px-0 items-center flex justify-center bg-white product-video">
                <img src={ProductVideo} alt="Product Video" className="w-full" />
                <button className="absolute left-0 right-0 mx-auto" type="button"><img src={VideoPlayBtn} alt="Product Video" className="w-full" /></button>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full">
          <div className="pb-0 pt-12 max-w-6xl mx-auto px-4 md:px-3 lg:pt-20 flex flex-col justify-center text-center">
            <div class="mb-24"><span class="text-3xl md:text-5xl font-bold">The RudderStack Advantage</span></div>
            <div className="flex flex-wrap flex-row">
              <div className="w-full sm:w-1/2">
                <div className="flex flex-col justify-center items-center text-center mx-7 mb-20">
                  <div className="m-2">
                    <img src={WareHouse} alt="cloud desktop" className="w-full" />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6">Warehouse-first</div>
                  <div class="text-grayColor-custom text-lg"><p>No more silos! RudderStack builds your customer data lake on your data warehouse, giving you all the functionality of a CDP while you maintain full ownership of your data.</p></div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="flex flex-col justify-center items-center text-center mx-7 mb-20">
                  <div className="m-2">
                    <img src={OpenSource} alt="cloud desktop" className="w-full" />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6">Open-source</div>
                  <div class="text-grayColor-custom text-lg"><p>We're open-source and API-first, so RudderStack can be easily integrated into your existing development processes. You can see all of our code, so you don’t have to worry about vendor lock-in or black-boxes.</p></div>
                </div>
              </div>
              <div className="w-full px-0 sm:px-12 lg:px-40">
                <div className="flex flex-col justify-center items-center text-center mx-7 mb-20">
                <div className="m-2">
                    <img src={Pricing} alt="cloud desktop" className="w-full" />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6">Transparent pricing</div>
                  <div class="text-grayColor-custom text-lg">
                  <p>Stop paying your CDP a premium to store your data. RudderStack’s warehouse-first architecture is efficient, because we don’t have to own storage of your data. This means we don’t need to build and maintain components most products do - like a big, elastic database - so we don’t have to charge for them.</p>
                  <p className="mt-5">RudderStack is free up to 500,000 events and our usage-based pricing scales transparently from there.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-backgroundsecondary 100% left-right-section sm:py-24 py-11">
        <div className="max-w-6xl px-4 md:px-3 mx-auto">
          <div className="flex flex-col w-full justify-center items-center">
          <h3 className="md:mt-2 text-4xl md:text-5xl text-primary font-bold leading-tight text-center max-w-screen-sm">
            Build a complete customer data stack
            </h3>
            <h3 className="mt-20 text-4xl md:text-5xl text-blue font-bold leading-tight text-center">
            Collect your data
            </h3>
          </div>
          <div className="flex items-center flex-wrap mt-6">
            <div className="sm:w-1/2 sm:p-6 sm:pl-0 md:pr-20">
              <h3 className="mt-2 mb-4 pb-2 text-2xl md:text-3xl text-primary font-bold leading-tight">
                Event stream
              </h3>
              <div className="text-secondary leading-7 text-sm sm:text-lg">
                <p>Event Stream gives you out-of-the-box SDKs and plugins that make it easy to stream event data from your website, mobile apps, and server-side sources, then send that data to all of your downstream tools and your data warehouse.</p>
              </div>
              <div className="event-stream-list my-5">
              <ul>
                <li className="text-sm sm:text-lg relative pl-8 pb-3">12+ SDKs for event streaming</li>
                <li className="text-sm sm:text-lg relative pl-8 pb-3">100+ cloud and warehouse destinations</li>
                <li className="text-sm sm:text-lg relative pl-8 pb-3">Segment source and destination (for simple migration)</li>
              </ul>
              </div>
              <div class="flex items-center">
                <span class="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block hover:text-blueNew-custom">
                  <a href="https://rudderstack.com/integration/">More about Event Stream</a>
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0">

            </div>
          </div>


        </div>
      </section>
       {/* <section className="100% bg-whiteColor-custom">
        <div className="max-w-6xl px-4 md:px-3 mx-auto">
          <div className="flex flex-col sm:flex-row items-center md:gap-12 justify-center mx-auto lg:p-0 md:mt-11 ">
            <div className="w-full sm:w-3/5 sm:p-6 sm:pl-0 mt-12 sm:mt-0">
              <h2 className="text-3xl-4 md:text-5xl text-primary font-bold leading-tight">
                Integrate your entire stack
            </h2>
              <p className="text-secondary leading-7 text-sm sm:text-lg py-6">Rudderstack supports 100+ out of the box integrations, and we add more every month. Connect your customer data to all the tools your team uses to drive growth. Spend less time on vendor SDK implementations and third-party code management.</p>
              <div class="flex items-center">
                <span class="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block hover:text-blueNew-custom">
                  <a href="https://rudderstack.com/integration/">See all integrations</a>
                </span>
              </div>
            </div>
            <div className="w-full sm:w-2/5 sm:p-6 sm:pr-0 list-stream">
              <img src={Integrationschart} alt="product" className="w-full" />
            </div>
          </div>
        </div>

        <div className="max-w-6xl px-4 md:px-3 mx-auto">
          <div className="flex flex-col-reverse sm:flex-row items-center md:gap-12 justify-center mx-auto lg:p-0 md:mt-11 ">
            <div className="w-full sm:w-2/5 sm:p-6 sm:pr-0 list-stream">
              <img src={DriveChart} alt="product" className="w-full" />
            </div>
            <div className="w-full sm:w-3/5 sm:p-6 sm:pl-0 mt-12 sm:mt-0">
              <h2 className="text-3xl-4 md:text-5xl text-primary font-bold leading-tight">
                Let your customer data drive your business
            </h2>
              <p className="text-secondary leading-7 text-sm sm:text-lg py-6">Events are a fine-grained description of a customer’s behavior. Event Stream identifies users across devices and delivers events in real-time to the software and infrastructure your teams use, like marketing automation platforms, product analytics tools, and internal streaming infrastructure.</p>
              <p className="text-secondary leading-7 text-sm sm:text-lg">Your teams can use your event data in these tools for analysis - like building more specific audiences - or they can even automate the execution of tactics - like behavior-triggered emails.</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl px-4 md:px-3 mx-auto">
          <div className="flex flex-col sm:flex-row items-center md:gap-12 justify-center mx-auto lg:p-0 md:mt-11 ">
            <div className="w-full sm:w-3/5 sm:p-6 sm:pl-0 mt-12 sm:mt-0">
              <h2 className="text-3xl-4 md:text-5xl text-primary font-bold leading-tight">
                Event streaming for your entire customer data stack
            </h2>
              <p className="text-secondary leading-7 text-sm sm:text-lg py-6">Event Stream gives your teams the flexibility to choose the tools they want to use without worrying about how to connect your customer data.</p>
              <p className="text-secondary leading-7 text-sm sm:text-lg">Use RudderStack’s SDKs to instrument the front-end and back-end of your websites and mobile applications and stream events to 100+ destinations and your data warehouse.</p>
            </div>
            <div className="w-full sm:w-2/5 sm:p-6 sm:pr-0 list-stream">
              <img src={StreamData} alt="product" className="w-full" />
            </div>
          </div>
        </div>

        <div className="max-w-6xl px-4 md:px-3 mx-auto">
          <div className="flex flex-col-reverse sm:flex-row items-center md:gap-12 justify-center mx-auto lg:p-0 mb-10 md:mt-11">
            <div className="w-full sm:w-2/5 sm:p-6 sm:pr-0 list-stream">
              <img src={DataControl} alt="product" className="w-full" />
            </div>
            <div className="w-full sm:w-3/5 sm:p-6 sm:pl-0 mt-12 sm:mt-0">
              <h2 className="text-3xl-4 md:text-5xl text-primary font-bold leading-tight">
                Keep control of your customer data
            </h2>
              <p className="text-secondary leading-7 text-sm sm:text-lg py-6">RudderStack’s warehouse-first architecture builds your customer data lake and your identity graph on your data warehouse, not our infrastructure. We don’t persist any of the data you send through RudderStack.</p>
              <p className="text-secondary leading-7 text-sm sm:text-lg">So you don’t have to rely on us to protect your sensitive data. It’s in your data warehouse, and you have control of its security and privacy.</p>
            </div>
          </div>
        </div>

      </section>  */}
      <section className="overflow-hidden">
        <div className="testimonials bg-white px-7 py-10 sm:py-20 -mx-2.5 text-primary margin-top-xl bg-hero-pattern-mobile sm:bg-hero-pattern bg-no-repeat bg-cover">
          <div className="w-full text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-xl-2 sm:text-2xl-2 text-grayColor-custom mt-4 mb-8">
              Help us make data engineers the heroes of their companies.
            </p>
            <p className="mt-16 md:mt-16 flex justify-center">
              <a
                className="bg-black-custom text-whiteColor-custom text-sm sm:text-lg py-4 px-4 sm:px-12 rounded-lg hover:bg-blueNew-custom  w-full sm:w-72"
                href="https://www.linkedin.com/company/rudderlabs/jobs/"
              >
                View Open Positions
              </a>
            </p>
          </div>
        </div>
      </section>
      <section id="footer_section_for_demo">
        <MiddleBanner {...lv_middlebannersection[0]} />
      </section>

    </Layout>
  )
}

export default CloudDesktop

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
