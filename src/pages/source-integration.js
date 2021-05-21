import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import algoliasearch from "algoliasearch/lite"
import "../lib/font-awesome"
import MiddleBanner from "../components/middle-banner"
import Integrationschart from "../images/Integrations-chart.svg"
import ProductVideo from "../images/product-video-view.svg"
import VideoChart from "../images/video-hero-chart.svg"
import VideoPlayBtn from "../images/video_play-btn.svg"
import WareHouse from "../images/warehouse.svg"
import OpenSource from "../images/open-source.svg"
import Pricing from "../images/pricing.svg"
import EventStream from "../images/cloud-event-stream.png"
import CloudExtract from "../images/cloud-extract.png"
import WarehouseActions from "../images/warehouse-actions-chart.svg"
import Transformations from "../images/cloud-icon1.svg"
import DataAPI from "../images/cloud-icon2.svg"
import DbtModals from "../images/cloud-icon3.svg"
import SourceBg from "../images/source-int-bg.svg"

const SourceIntegration = ({ data }) => {
  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_APIKEY
  )

  return (
    <Layout>
      <section className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-40 mx-auto relative banner-section">
        <div className="flex flex-col items-center md:gap-1 justify-center mx-auto lg:flex-row lg:p-0">
          <div className="relative z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
            <h2 className="mb-8 md:my-4 md:text-6xl text-5xl  font-bold leading-tight">
              JavaScript SDK Source Integration
      </h2>
            <p>RudderStack’s open-source JavaScript SDK lets you start sending event data from your website to a wide range of common, popular marketing, sales, and product tools such as Amplitude, Google Analytics, and more, without having to test or implement a new API every single time.</p>
            <div class="relative block sm:flex mt-12">
              <a class="btn-primary-lg sm:mr-4 md:mb-0 mb-6" href="#">Try this in RudderStack</a>
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
      <section>
        <div className="max-w-6xl px-4 md:px-3 mx-auto">
          <div className="flex flex-col w-full justify-center items-start md:text-left max-w-screen-md">
            <h3 className="md:mt-2 text-4xl md:text-5xl text-primary font-bold leading-tight">What You Can Do with JavaScript SDK Source</h3>
          </div>
          <div className="flex items-center flex-wrap flex-col-reverse sm:flex-row mt-6 md:mt-16">

            

            <div className="w-full sm:w-1/2  sm:p-6 sm:pl-0 mt-12 sm:mt-0">

            </div>
          </div>
        </div>
      </section>
{/* 
      <section>
        <div className="w-full">
          <div className="pb-0 pt-12 max-w-6xl mx-auto px-4 md:px-3 lg:pt-20 flex flex-col justify-center text-center">
            <div class="sm:mb-24 mb-10"><span class="text-3xl md:text-5xl font-bold">The RudderStack Advantage</span></div>
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
      </section> */}
 {/*<section className="bg-backgroundsecondary 100% left-right-section sm:py-24 py-11">
        <div className="max-w-6xl px-4 md:px-3 mx-auto">
          <div className="flex flex-col w-full justify-center items-center">
            <h3 className="md:mt-2 text-4xl md:text-5xl text-primary font-bold leading-tight text-center max-w-screen-sm">
              Build a complete customer data stack
            </h3>
            <h3 className="md:mt-20 mt-10 text-4xl md:text-5xl text-blue font-bold leading-tight text-center">
              Collect your data
            </h3>
          </div>
          <div className="flex items-center flex-wrap sm:flex-row mt-6 md:mt-16">{
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
                  <a href="#/">More about Event Stream</a>
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0 mt-12 sm:mt-0">
              <img src={EventStream} alt="event stream" className="w-full" />
            </div>
          </div>
          <div className="flex items-center flex-wrap flex-col-reverse sm:flex-row mt-6 md:mt-16">
            <div className="w-full sm:w-1/2 sm:p-6 sm:pl-0 mt-12 sm:mt-0">
              <img src={CloudExtract} alt="cloud extract" className="w-full" />
            </div>
            <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0">
              <h3 className="mt-2 mb-4 pb-2 text-2xl md:text-3xl text-primary font-bold leading-tight">
                Cloud Extract
              </h3>
              <div className="text-secondary leading-7 text-sm sm:text-lg">
                <p>Cloud Extract goes beyond event streaming. It enables you to build cloud-to-warehouse ELT pipelines from popular cloud applications like Salesforce, ZenDesk, and Customer.io (even Google Sheets) to your data warehouse, so you can use all of your customer data.</p>
              </div>
              <div class="flex items-center mt-4">
                <span class="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block hover:text-blueNew-custom">
                  <a href="#">More about Cloud Extract </a>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <h3 className="mt-24 text-4xl md:text-5xl text-blue font-bold leading-tight text-center">
              Put your data to work
            </h3>
          </div>
          <div className="flex items-center flex-wrap sm:flex-row mt-6 md:mt-16">
            <div className="sm:w-1/2 sm:p-6 sm:pl-0 md:pr-20">
              <h3 className="mt-2 mb-4 pb-2 text-2xl md:text-3xl text-primary font-bold leading-tight">
                Warehouse Actions
              </h3>
              <div className="text-secondary leading-7 text-sm sm:text-lg">
                <p>The most valuable analysis is done in your data warehouse. Warehouse Actions lets you send this post-analysis data - and any data in your warehouse - to all the tools your teams use, by inserting it into their event streams.</p>
              </div>
              <div className="event-stream-list my-5">
                <ul>
                  <li className="text-sm sm:text-lg relative pl-8 pb-3">Support for all the major warehouses</li>
                  <li className="text-sm sm:text-lg relative pl-8 pb-3">Update keys to ensure the payload is correct</li>
                  <li className="text-sm sm:text-lg relative pl-8 pb-3">Configurable sync schedule</li>
                </ul>
              </div>
              <div class="flex items-center">
                <span class="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block hover:text-blueNew-custom">
                  <a href="#">More about Warehouse Actions</a>
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0 mt-12 sm:mt-">
              <img src={WarehouseActions} alt="event stream" className="w-full" />
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <h3 className="mt-24 text-4xl md:text-5xl text-blue font-bold leading-tight text-center">
              Govern, enrich, and understand your data
            </h3>
            <h3 className="mt-10 mb-4 pb-2 text-2xl md:text-3xl text-primary text-center font-bold leading-tight">
              RudderStack helps you achieve a seamless data workflow
              </h3>
          </div>
          <div className="max-w-5xl px-0 md:px-3 mx-auto">
            <div className="flex flex-wrap flex-row">
              <div className="w-full sm:w-1/2 sm:px-5 mt-10">
                <div className="h-full flex flex-col justify-start items-center text-center bg-white py-10 px-8 rounded-2xl">
                  <div className="h-20">
                    <img src={Transformations} alt="cloud desktop" className="w-full" />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6 mt-2">Transformations</div>
                  <div class="text-grayColor-custom text-lg"><p>Write custom JavaScript to transform and enrich your data as it passes through RudderStack. Use cases range from PII masking to enrichment.</p></div>
                  <div class="flex items-center mt-8">
                    <span class="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block hover:text-blueNew-custom">
                      <a href="#">More from Rudderstack docs</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 sm:px-5 mt-10">
                <div className="h-full flex flex-col justify-start items-center text-center bg-white py-10 px-8 rounded-2xl">
                  <div className="h-20">
                    <img src={DataAPI} alt="cloud desktop" className="w-full" />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6 mt-2">Data Governance API</div>
                  <div class="text-grayColor-custom text-lg"><p>Diagnose and fix data consistency issues with easy access to your events and their metadata.</p></div>
                  <div class="flex items-center mt-8">
                    <span class="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block hover:text-blueNew-custom">
                      <a href="#">More from Rudderstack docs</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 sm:px-5 mt-10">
                <div className="h-full flex flex-col justify-start items-center text-center bg-white py-10 px-8 rounded-2xl">
                  <div className="h-20">
                    <img src={DbtModals} alt="cloud desktop" className="w-full" />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6 mt-2">Pre-built DBT models</div>
                  <div class="text-grayColor-custom text-lg"><p>Take the work out of use cases like customer journey analysis and sessionization.</p></div>
                  <div class="flex items-center mt-8">
                    <span class="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block hover:text-blueNew-custom">
                      <a href="#">More from Rudderstack docs</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 sm:px-5 mt-10">
                <div className="h-full flex flex-col justify-start items-center text-center bg-white py-10 px-8 rounded-2xl">
                  <div className="h-20">
                   
                  </div>
                  <div class="text-2xl-2 font-bold mb-6 mt-2">Grafana Dashboards</div>
                  <div class="text-grayColor-custom text-lg"><p>Get full visibility into the health of your infrastructure via pre-configured Grafana dashboards.</p></div>
                  <div class="flex items-center mt-8">
                    <span class="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block hover:text-blueNew-custom">
                      <a href="#">More from Rudderstack docs</a>
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="100% bg-whiteColor-custom">
        <div className="max-w-6xl px-4 md:px-3 mx-auto">
          <div className="flex items-center flex-wrap sm:flex-row mb-6 md:mt-16">
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
      </section> */}

      <section id="footer_section_for_demo">
        <MiddleBanner {...lv_middlebannersection[0]} />
      </section>

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
