import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"

import Layout from "../components/layout"
import algoliasearch from "algoliasearch/lite"
import "../lib/font-awesome"
import MiddleBanner from "../components/middle-banner"
import JoinOurTeam from "../components/joinOurTeam"

import Integrationschart from "../images/illustration-integrations.svg"

import WareHouse from "../images/spot-illustrations-warehouse.svg"
import OpenSource from "../images/spot-illustrations-open-source.svg"
import Pricing from "../images/spot-illustrations-pricing.svg"

import EventStream from "../images/illustration-event-stream-identify-call.svg"
import CloudExtract from "../images/illustration-cloud-extract-white-bg.svg"
import WarehouseActions from "../images/illustration-warehouse-actions.svg"

import Transformations from "../images/spot-illustrations-transformations.svg"
import DataAPI from "../images/spot-illustrations-data-governance.svg"
import DbtModals from "../images/spot-illustrations-dbt-model.svg"
import Grafana from "../images/spot-illustrations-dashboard.svg"

const CloudDesktop = ({ data, location }) => {
  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_APIKEY
  )

  return (
    <Layout location={location}>
      <section className="w-full product-page_banner text-white lg:py-0 py-10 flex justify-center items-center relative overflow-hidden">
        <div className="max-w-6xl sm:pb-20 pb-4 p1-16 px-4 md:px-3 mx-auto">
          <div className="flex flex-col items-center justify-center mx-auto lg:flex-row lg:p-0">
            <div className="z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-3/5 sm:px-0sm:items-center lg:items-start lg:mb-0 hero-content">
              <h2 className="mb-8 md:mt-4 md:mb-0 md:text-6xl text-5xl  font-bold leading-none">
                RudderStack Cloud
              </h2>
              <h3 className="text-3xl leading-10 font-bold md:mt-5 mb-8">
                The CDP for developers
              </h3>
              <p className="text-white text-lg leading-6 lg:pr-36">
                Build customer data pipelines that connect your whole stack,
                then activate the data in your warehouse and business tools.
              </p>
              <p className="text-white text-lg leading-6 lg:pr-40 mt-8">
                Test every feature in RudderStack Cloud Free and send up to
                500,000 events per month (no credit card required, no time
                limit).
              </p>
              <div className="block sm:flex justify-center items-center mt-12">
                <a
                  className="btn-primary-lg bg-white text-dark hover:bg-blueNew-midnight hover:text-white sm:mr-4 md:mb-0 mb-6 border-transparent"
                  href="https://app.rudderstack.com/signup?type=freetrial"
                >
                  Sign up for free
                </a>
                <a
                  className="btn-secondary-lg sm:mr-4 md:mb-0 mb-4"
                  href="/request-demo"
                >
                  Get a demo
                </a>
              </div>
            </div>
            <div className="relative w-full px-5 rounded-lg flex-grow justify-items-end lg:w-2/5 sm:px-0 sm:items-center lg:items-start lg:mb-0">
              {/* <div className="relative rounded-md sm:px-0 items-center flex justify-center bg-white product-video">
                <img src={ProductVideo} alt="Product Video" className="w-full" />
                <div className="absolute left-0 right-0 mx-auto z-0">
                  <img src={VideoChart} alt="Product Video" className="w-100 p-20 mx-auto" />
                </div>
                <button className="absolute left-0 right-0 mx-auto" type="button"><img src={VideoPlayBtn} alt="Product Video" className="w-full" /></button>
              </div> */}
              <div class="iframe-container">
                <iframe
                  src={"https://www.youtube.com/embed/bmU2AmlmZmA"}
                  frameborder="0"
                  allowfullscreen
                  class="video"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*banner*/}
      <section>
        {/*Advantage*/}
        <div className="w-full">
          <div className="pb-0 pt-12 max-w-6xl mx-auto px-4 md:px-3 lg:pt-28 flex flex-col justify-center text-center">
            <div class="sm:mb-24 mb-10">
              <span class="text-3xl md:text-5xl font-bold text-blueNew-midnight">
                The RudderStack advantage
              </span>
            </div>
            <div className="flex flex-wrap flex-row">
              <div className="w-full sm:w-1/2">
                <div className="flex flex-col justify-center items-center text-center mx-7 mb-20">
                  <div className="m-2">
                    <img
                      src={WareHouse}
                      alt="cloud desktop"
                      className="w-full"
                    />
                  </div>
                  <div className="text-2xl-2 font-bold mb-6">
                    Warehouse-first
                  </div>
                  <div className="text-grayColor-custom text-lg">
                    <p>
                      No more silos! RudderStack builds your customer data lake
                      on your data warehouse, giving you all the functionality
                      of a CDP while you maintain full ownership of your data.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="flex flex-col justify-center items-center text-center mx-7 mb-20">
                  <div className="m-2">
                    <img
                      src={OpenSource}
                      alt="cloud desktop"
                      className="w-full"
                    />
                  </div>
                  <div className="text-2xl-2 font-bold mb-6">Open-source</div>
                  <div className="text-grayColor-custom text-lg">
                    <p>
                      We're open-source and API-first, so RudderStack can be
                      easily integrated into your existing development
                      processes. You can see all of our code, so you don’t have
                      to worry about vendor lock-in or black-boxes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-0 sm:px-12 lg:px-40">
                <div className="flex flex-col justify-center items-center text-center mx-7 mb-20">
                  <div className="m-2">
                    <img src={Pricing} alt="cloud desktop" className="w-full" />
                  </div>
                  <div className="text-2xl-2 font-bold mb-6">
                    Transparent pricing
                  </div>
                  <div className="text-grayColor-custom text-lg">
                    <p>
                      Stop paying your CDP a premium to store your data.
                      RudderStack’s warehouse-first architecture is efficient,
                      because we don’t have to own storage of your data. This
                      means we don’t need to build and maintain components most
                      products do - like a big, elastic database - so we don’t
                      have to charge for them.
                    </p>
                    <p className="mt-5">
                      RudderStack is free up to 500,000 events and our
                      usage-based pricing scales transparently from there.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Advantage*/}
      <section className="bg-backgroundsecondary 100% left-right-section sm:py-24 py-11">
        {/*Collect your data*/}
        <div className="max-w-6xl px-4 md:px-3 mx-auto">
          <div className="flex flex-col w-full justify-center items-center">
            <h3 className="md:mt-2 text-4xl md:text-5xl text-blueNew-midnight font-bold leading-tight text-center max-w-screen-sm">
              Build a complete customer data stack
            </h3>
            <h3 className="md:mt-20 mt-10 text-4xl md:text-5xl text-blueNew-eastbay font-bold leading-tight text-center">
              Collect your data
            </h3>
          </div>
          <div className="flex items-center flex-wrap sm:flex-row mt-6 md:mt-16">
            {/*Event Stream*/}
            <div className="sm:w-1/2 sm:p-6 sm:pl-0 md:pr-20">
              <h3 className="mt-2 mb-4 pb-2 text-2xl md:text-3xl text-dark font-bold leading-tight">
                Event Stream
              </h3>
              <div className="text-secondary leading-7 text-sm sm:text-lg">
                <p>
                  Event Stream gives you out-of-the-box SDKs and plugins that
                  make it easy to stream event data from your website, mobile
                  apps, and server-side sources, then send that data to all of
                  your downstream tools and your data warehouse.
                </p>
              </div>
              <div className="event-stream-list my-5">
                <ul>
                  <li className="text-sm sm:text-lg relative pl-8 pb-3">
                    12+ SDKs for event streaming
                  </li>
                  <li className="text-sm sm:text-lg relative pl-8 pb-3">
                    150+ cloud and warehouse destinations
                  </li>
                  <li className="text-sm sm:text-lg relative pl-8 pb-3">
                    Segment source and destination (for simple migration)
                  </li>
                </ul>
              </div>
              <div class="flex items-center">
                <span class="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block ">
                  <Link to="/product/event-stream">More about Event Stream</Link>
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0 mt-12 sm:mt-0">
              <img src={EventStream} alt="event stream" className="w-full" />
            </div>
          </div>
          <div className="flex items-center flex-wrap flex-col-reverse sm:flex-row mt-6 md:mt-16">
            {/*Cloud Extract*/}
            <div className="w-full sm:w-1/2 sm:p-6 sm:pl-0 mt-12 sm:mt-0">
              <img src={CloudExtract} alt="cloud extract" className="w-full" />
            </div>
            <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0">
              <h3 className="mt-2 mb-4 pb-2 text-2xl md:text-3xl text-dark font-bold leading-tight">
                Cloud Extract
              </h3>
              <div className="text-secondary leading-7 text-sm sm:text-lg">
                <p>
                  Cloud Extract goes beyond event streaming. It enables you to
                  build cloud-to-warehouse ELT pipelines from popular cloud
                  applications like Salesforce, ZenDesk, and Customer.io to your
                  data warehouse, so you can use all of your customer data.
                </p>
              </div>
              <div class="flex items-center mt-4">
                <span class="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block ">
                  <Link to="/product/cloud-extract">More about Cloud Extract</Link>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <h3 className="mt-24 text-4xl md:text-5xl text-blueNew-eastbay font-bold leading-tight text-center">
              Put your data to work
            </h3>
          </div>
          <div className="flex items-center flex-wrap sm:flex-row mt-6 md:mt-16">
            {/*Warehouse Actions*/}
            <div className="sm:w-1/2 sm:p-6 sm:pl-0 md:pr-20">
              <h3 className="mt-2 mb-4 pb-2 text-2xl md:text-3xl text-dark font-bold leading-tight">
                Warehouse Actions
              </h3>
              <div className="text-secondary leading-7 text-sm sm:text-lg">
                <p>
                  With Warehouse Actions, you can pull enriched audience and
                  event data from your warehouse through RudderStack and send it
                  to all of your customer tools by inserting it into their event
                  streams - enabling lead scoring, personalization, and other
                  advanced use cases.
                </p>
              </div>
              <div className="event-stream-list my-5">
                <ul>
                  <li className="text-sm sm:text-lg relative pl-8 pb-3">
                    Support for all the major warehouses
                  </li>
                  <li className="text-sm sm:text-lg relative pl-8 pb-3">
                    Update keys to ensure the payload is correct
                  </li>
                  <li className="text-sm sm:text-lg relative pl-8 pb-3">
                    Configurable sync schedule
                  </li>
                </ul>
              </div>
              <div class="flex items-center">
                <span class="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block ">
                  <Link to="/product/warehouse-actions">
                    More about Warehouse Actions
                  </Link>
                </span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0 mt-12 sm:mt-">
              <img
                src={WarehouseActions}
                alt="event stream"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <h3 className="mt-24 text-4xl md:text-5xl text-blueNew-eastbay font-bold leading-tight text-center">
              Govern, enrich, and understand your data
            </h3>
            <h3 className="mt-10 mb-4 pb-2 text-2xl md:text-3xl text-blueNew-midnight text-center font-bold leading-tight">
              RudderStack helps you achieve a seamless data workflow
            </h3>
          </div>
          <div className="max-w-5xl px-0 md:px-3 mx-auto">
            {/*Data WorkFlow*/}
            <div className="flex flex-wrap flex-row">
              <div className="w-full sm:w-1/2 sm:px-5 mt-10">
                <div className="h-full flex flex-col justify-start items-center text-center bg-white py-10 px-8 rounded-2xl">
                  <div className="h-20">
                    <img
                      src={Transformations}
                      alt="cloud desktop"
                      className="w-full"
                    />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6 mt-2">
                    Transformations
                  </div>
                  <div class="text-grayColor-custom text-lg">
                    <p>
                      Write custom JavaScript to transform and enrich your data
                      as it passes through RudderStack. Use cases range from PII
                      masking to enrichment.
                    </p>
                  </div>
                  <div class="flex items-center mt-8">
                    <span class="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block ">
                      <a href="https://docs.rudderstack.com/adding-a-new-user-transformation-in-rudderstack">
                        Learn more in the docs
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 sm:px-5 mt-10">
                <div className="h-full flex flex-col justify-start items-center text-center bg-white py-10 px-8 rounded-2xl">
                  <div className="h-20">
                    <img src={DataAPI} alt="cloud desktop" className="w-full" />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6 mt-2">
                    Data Governance API
                  </div>
                  <div class="text-grayColor-custom text-lg">
                    <p>
                      Diagnose and fix data consistency issues with easy access
                      to your events and their metadata.
                    </p>
                  </div>
                  <div class="flex items-center mt-8">
                    <span class="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block ">
                      <a href="https://docs.rudderstack.com/data-governance">
                        Learn more in the docs
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 sm:px-5 mt-10">
                <div className="h-full flex flex-col justify-start items-center text-center bg-white py-10 px-8 rounded-2xl">
                  <div className="h-20">
                    <img
                      src={DbtModals}
                      alt="cloud desktop"
                      className="w-full"
                    />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6 mt-2">
                    Pre-built DBT models
                  </div>
                  <div class="text-grayColor-custom text-lg">
                    <p>
                      Take the work out of use cases like customer journey
                      analysis and sessionization.
                    </p>
                  </div>
                  <div class="flex items-center mt-8">
                    <span class="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block ">
                      <a href="https://hub.getdbt.com/">
                        See modesl on the DBT hub
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 sm:px-5 mt-10">
                <div className="h-full flex flex-col justify-start items-center text-center bg-white py-10 px-8 rounded-2xl">
                  <div className="h-20">
                    <img src={Grafana} alt="cloud desktop" className="w-full" />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6 mt-2">
                    Grafana Dashboards
                  </div>
                  <div class="text-grayColor-custom text-lg">
                    <p>
                      Get full visibility into the health of your infrastructure
                      via pre-configured Grafana dashboards.
                    </p>
                  </div>
                  <div class="flex items-center mt-8">
                    <span className="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block ">
                      <a href="https://docs.rudderstack.com/user-guides/administrators-guide/rudderstack-dashboard">
                        More from Rudderstack docs
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Data WorkFlow*/}
        </div>
      </section>
      <section className="100% bg-whiteColor-custom">
        <div className="max-w-6xl px-4 md:px-3 mx-auto">
          <div className="flex items-center flex-wrap sm:flex-row mb-6 md:mt-16">
            <div className="w-full sm:w-3/5 sm:p-6 sm:pl-0 mt-12 sm:mt-0">
              <h2 className="text-3xl-4 md:text-5xl text-dark font-bold leading-tight">
                Integrate your entire stack
              </h2>
              <p className="text-secondary leading-7 text-sm sm:text-lg py-6">
                Rudderstack supports 150+ out of the box integrations, and we
                add more every month. Connect your customer data to all the
                tools your team uses to drive growth. Spend less time on vendor
                SDK implementations and third-party code management.
              </p>
              <div className="flex items-center">
                <span className="font-bold leading-normal text-sm lr-icon relative inline-flex sm:inline-block">
                  <a href="https://rudderstack.com/integration/">
                    See all integrations
                  </a>
                </span>
              </div>
            </div>
            <div className="w-full sm:w-2/5 sm:p-6 sm:pr-0 list-stream">
              <img src={Integrationschart} alt="product" className="w-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
        {/*Join Our Team*/}
        <JoinOurTeam />
        {/* <div className="testimonials bg-white px-7 py-10 sm:py-20 -mx-2.5 text-primary margin-top-xl bg-hero-pattern-mobile sm:bg-hero-pattern bg-no-repeat bg-cover">
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
        </div> */}
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
