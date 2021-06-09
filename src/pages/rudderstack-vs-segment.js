import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import IconPC from "../images/spot-illustrations-developer-laptop.svg"
import IconStack from "../images/spot-illustrations-warehouse.svg"
import IconLock from "../images/spot-illustrations-security-control.svg"
import IconLeaf from "../images/spot-illustrations-pricing.svg"

import IconTransformation from "../images/spot-illustrations-transformations.svg"
import IconDataGovernce from "../images/spot-illustrations-data-governance.svg"
import IconRichGrafana from "../images/spot-illustrations-dashboard.svg"

import MiddleBanner from "../components/middle-banner"
import loadable from "@loadable/component"
import ExploreRudderStack from "../components/ExploreRudderStack"
import { StaticImage } from "gatsby-plugin-image"
import SegmentSpecialistV2 from "../components/SegmentSpecialistV2"

import SegmentLogo from "../images/segment-logo.png"
import Logo from "../images/logo-2x.png"
const Testimonial = loadable(() => import("../components/testimonial"))

const SegmentDesktop = ({ data, location }) => {
  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")

  const lv_testimonialsection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "testimonialsection")

  const [sticky, setSticky] = useState(true)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => {
    if (
      document.getElementsByClassName("cover-table")[0].offsetHeight +
        document.getElementsByClassName("cover-table")[0].offsetTop -
        window.scrollY >
      150
    ) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  let segmentComparisionData = []
  SEGMENT_COMPARISION_DATA.forEach(row => {
    let idx = segmentComparisionData.findIndex(oo => oo.group === row.group)
    if (idx >= 0) {
      segmentComparisionData[idx].nodes.push({
        title: row.title,
        rudderstack_val: row.rudderstack_val,
        segment_val: row.segment_val,
      })
    } else {
      segmentComparisionData.push({
        group: row.group,
        nodes: [
          {
            title: row.title,
            rudderstack_val: row.rudderstack_val,
            segment_val: row.segment_val,
          },
        ],
      })
    }
  })

  return (
    <Layout location={location}>
      <div className="font-custom">
        <section className="w-full segment-desktop-banner text-white lg:py-0 py-10 flex justify-center items-center relative overflow-hidden">
          <div className="max-w-6xl px-4 md:px-3 sm:my-20 lg:mt-32 md:mb-20 mx-auto relative banner-section flex flex-col justify-center z-50">
            <div className="w-full lg:w-3/5 pr-0 lg:pr-2 mx-auto lg:mx-0 flex flex-col justify-center">
              <h1 className="text-6xl leading-tight font-bold self-center text-center lg:self-start lg:text-left ">
                RudderStack vs. Segment
              </h1>
              <p className="pt-6 text-lg self-center text-center lg:self-start lg:text-left">
                Segment is great, but RudderStack is better. We give you the
                same event streaming you need but rise above Segment, because we
                are open source, warehouse-first, and have more sensible
                pricing. <br />
                <br />
                RudderStack also completes your customer data stack by enabling
                you to turn warehouse data into an event stream that you can
                send to all of your destinations.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-grayColor-BgGray pb-8 md:pb-20">
          <div className="max-w-6xl m-auto flex flex-col w-full justify-center items-center">
            <h3 className="mt-24 mb-0 md:mb-10 text-4xl md:text-5xl font-bold leading-tight text-center max-w-4xl text-blueNew-midnight">
              Here are the top reasons companies choose RudderStack over
              Segment:
            </h3>
          </div>
          <div className="max-w-6xl px-0 md:px-3 mx-auto">
            {/*Data WorkFlow*/}
            <div className="flex flex-wrap flex-row ">
              <div className="w-full sm:w-1/2 sm:px-2 mt-5 mx-4 md:mx-0">
                <div className="h-full flex flex-col justify-start items-center text-center bg-white py-10 px-10 rounded-2xl">
                  <div className="h-20">
                    <img
                      src={IconPC}
                      alt="RudderStack is developer-focused"
                      className="w-full"
                    />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6 mt-2 max-w-xs m-auto">
                    RudderStack is developer-focused
                  </div>
                  <div class="text-grayColor-custom text-lg">
                    <p>
                      RudderStack is built for developers with an API-first
                      approach to features, so you can seamlessly integrate it
                      with your existing stack and workflow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-1/2 sm:px-2 mt-5 mx-4 md:mx-0">
                <div className="h-full flex flex-col justify-start items-center text-center bg-white py-10 px-10 rounded-2xl">
                  <div className="h-20">
                    <img
                      src={IconStack}
                      alt="RudderStack is warehouse-first"
                      className="w-full"
                    />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6 mt-2 max-w-xs m-auto">
                    RudderStack is warehouse-first
                  </div>
                  <div class="text-grayColor-custom text-lg">
                    <p>
                      RudderStack treats your data warehouse as a first-class
                      citizen, and provides unique features to unlock the data
                      residing within it and share the insights with the rest of
                      your data stack.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-1/2 sm:px-2 mt-5 mx-4 md:mx-0">
                <div className="h-full flex flex-col justify-start items-center text-center bg-white py-10 px-10 rounded-2xl">
                  <div className="h-20">
                    <img
                      src={IconLock}
                      alt="RudderStack doesn’t store any of your data"
                      className="w-full"
                    />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6 mt-2 max-w-xs m-auto">
                    RudderStack doesn’t store any of your data
                  </div>
                  <div class="text-grayColor-custom text-lg">
                    <p>
                      Instead of storing your data in our infrastructure, we
                      build your customer data lake and your identity graph on
                      your data warehouse, giving you complete control over your
                      customer data.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-1/2 sm:px-2 mt-5 mx-4 md:mx-0">
                <div className="h-full flex flex-col justify-start items-center text-center bg-white py-10 px-10 rounded-2xl">
                  <div className="h-20">
                    <img
                      src={IconLeaf}
                      alt="RudderStack offers usage-based pricing"
                      className="w-full"
                    />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6 mt-2 max-w-xs m-auto">
                    RudderStack offers usage-based pricing
                  </div>
                  <div class="text-grayColor-custom text-lg">
                    <p>
                      Unlike Segment, RudderStack’s pricing is sensible - purely
                      based on event volume, rather than charging for MTUs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonial">
          <Testimonial
            applyGradientColorTheme={false}
            {...lv_testimonialsection[0]}
          />
        </section>
        <section
          id="liked_feature_section"
          className="bg-grayColor-BgGray pb-40 md:pb-48"
        >
          <div className="max-w-6xl m-auto flex flex-col w-full justify-center items-center pb-12 md:pb-0">
            <h3 className="mt-24 mb-0 md:mb-12 text-4xl md:text-5xl font-bold leading-tight text-center max-w-5xl text-blueNew-midnight">
              When companies migrate from Segment, they love using these
              features:
            </h3>
          </div>
          <div className="max-w-6xl px-0 md:px-3 mx-auto">
            {/*Data WorkFlow*/}
            <div className="flex flex-wrap flex-row">
              <div className="w-full md:w-1/3 sm:px-2 mt-5">
                <div className="h-full flex flex-col justify-start items-center text-center py-10 px-4 rounded-2xl">
                  <div className="h-20">
                    <img
                      src={IconTransformation}
                      alt="Transformations"
                      className="w-full"
                    />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6 mt-2 max-w-xs m-auto">
                    Transformations
                  </div>
                  <div class="text-grayColor-custom text-lg">
                    <p>
                      You can run JavaScript functions on the live event stream
                      or DBT models on at-rest data, then send the results to
                      your entire stack.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 sm:px-2 mt-5">
                <div className="h-full flex flex-col justify-start items-center text-center py-10 px-4 rounded-2xl">
                  <div className="h-20">
                    <img
                      src={IconDataGovernce}
                      alt="Data Governance API"
                      className="w-full"
                    />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6 mt-2 max-w-xs m-auto">
                    Data Governance API
                  </div>
                  <div class="text-grayColor-custom text-lg">
                    <p>
                      Pull rich metadata on your event stream and integrate with
                      your existing alerting system and CI/CD pipeline, then
                      push schema enforcement back into system—all via API.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 sm:px-2 mt-5">
                <div className="h-full flex flex-col justify-start items-center text-center py-10 px-4 rounded-2xl">
                  <div className="h-20">
                    <img
                      src={IconRichGrafana}
                      alt="Rich Grafana Dashboards"
                      className="w-full"
                    />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6 mt-2 max-w-xs m-auto">
                    Rich Grafana Dashboards
                  </div>
                  <div class="text-grayColor-custom text-lg">
                    <p>
                      Get a real-time view of events, see performance under load
                      and get rich statistics about event delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="segment_comparison"
          className="bg-white plans-section pb-20 md:pb-20 relative"
        >
          <SegmentSpecialistV2 />
          <div className="max-w-6xl px-6 sm:px-3 mx-auto flex-wrap items-center pt-56 md:pt-48 text-center">
            <h2 className="sm:my-4 text-4xl sm:text-5xl font-bold font-custom sm:mb-8 text-blueNew-midnight">
              RudderStack vs. Segment Comparison
            </h2>

            <div className="hidden sm:block w-auto max-w-screen-lg m-auto">
              <table className="cover-table relative sm:w-full table-fixed font-custom bg-white text-grayColor-custom">
                <thead>
                  <tr>
                    <th
                      className={`${
                        sticky ? "sticky" : ""
                      } top-0 bg-white z-10`}
                    ></th>
                    <th
                      className={`${
                        sticky ? "sticky" : ""
                      } top-0 bg-white z-10`}
                    >
                      <div className="flex items-center justify-center px-12 py-6">
                        <StaticImage
                          src="../images/rudderstack-logo.svg"
                          alt="Rudderstack Logo"
                          height={40}
                          width={200}
                        />
                      </div>
                    </th>
                    <th
                      className={`${
                        sticky ? "sticky" : ""
                      } top-0 bg-white z-10`}
                    >
                      <div className="flex items-center justify-center px-12 py-6">
                        <StaticImage
                          src="../images/segment-logo.png"
                          alt="SegmentLogo"
                          height={50}
                          width={200}
                        />

                        {/* <img src={SegmentLogo} alt="Segment Logo" /> */}
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {segmentComparisionData.map((group, idx) => {
                    return (
                      <React.Fragment key={group.group}>
                        {idx !== 0 && (
                          <tr key={`${group.group}-x`}>
                            <td className="p-2 text-primary text-lg text-left uppercase font-bold col-span-4">
                              &nbsp;
                            </td>
                          </tr>
                        )}
                        <tr key={group.group}>
                          <td className="p-4 text-primary text-lg text-left uppercase font-bold col-span-3">
                            {group.group}
                          </td>
                        </tr>
                        {group.nodes.map((row, l_index) => {
                          //   console.log(row, "sssw")
                          return (
                            <tr
                              key={row.title}
                              className={`${
                                l_index % 2 === 0
                                  ? "bg-grayColor-BgGray"
                                  : "bg-whiteColor-custom"
                              }`}
                            >
                              <td className="p-4 text-base font-medium text-left w-2/4">
                                {row.title}
                              </td>
                              <td className="text-base py-4 px-12 w-1/4">
                                {row.rudderstack_val === "<<CHECK>>" && (
                                  <span className={`check-icon`} />
                                )}
                                {row.rudderstack_val === "<<UNCHECK>>" && (
                                  <StaticImage
                                    src="../images/Line 2.svg"
                                    alt="Line"
                                  />
                                )}
                                {row.rudderstack_val !== "<<UNCHECK>>" &&
                                  row.rudderstack_val !== "<<CHECK>>" && (
                                    <span className="font-normal">
                                      {row.rudderstack_val}
                                    </span>
                                  )}
                              </td>
                              <td className="text-base py-4 px-12 w-1/4">
                                {row.segment_val === "<<CHECK>>" && (
                                  <span className={`check-icon`} />
                                )}
                                {row.segment_val === "<<UNCHECK>>" && (
                                  <StaticImage
                                    src="../images/Line 2.svg"
                                    alt="Line"
                                  />
                                )}
                                {row.segment_val !== "<<UNCHECK>>" &&
                                  row.segment_val !== "<<CHECK>>" && (
                                    <span className="font-normal ">
                                      {row.segment_val}
                                    </span>
                                  )}
                              </td>
                            </tr>
                          )
                        })}
                      </React.Fragment>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className="mobile-table font-custom">
              {Object.keys(SEGMENT_COMPARISION_DATA[0])
                .filter(ll => ll.includes("_val"))
                .map(oo => {
                  // console.log(oo)
                  return (
                    <div className="freeplan mt-16" key={oo}>
                      <div className="plan-header bg-white border border-grayColor-priceCardBorder rounded-2xl shadow-md sticky top-0 z-10">
                        <div class="p-6 md:pt-8 md:pb-4">
                          <div className="ellipse flex items-center justify-center h-20">
                            {oo === "rudderstack_val" ? (
                              <StaticImage
                                placeholder="tracedSVG"
                                src="../images/rudderstack-logo.svg"
                                alt={oo}
                                height={40}
                                width={200}
                              />
                            ) : (
                              <StaticImage
                                placeholder="tracedSVG"
                                src="../images/segment-logo.png"
                                alt={oo}
                                height={50}
                                width={200}
                              />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="plan-features mt-6 px-3">
                        {segmentComparisionData.map((group, idx) => {
                          return (
                            <React.Fragment key={group.group}>
                              <div className="text-blueNew-midnight text-lg text-left uppercase font-bold col-span-4 mb-2 mt-10 leading-6">
                                {group.group}
                              </div>
                              {group.nodes.map((row, l_index) => {
                                return (
                                  <div
                                    key={row.title}
                                    className={`${
                                      row[oo] === "<<UNCHECK>>"
                                        ? "hidden"
                                        : "block"
                                    } text-lg text-left font-medium text-grayColor-custom leading-7 flex py-3 pr-4`}
                                  >
                                    {/* {(row[oo] === "<<CHECK>>" || row[oo] !== "<<UNCHECK>>") && ( */}
                                    <span className={`check-icon`} />
                                    {/* )} */}
                                    <div className="flex flex-col pl-4">
                                      {row.title}
                                      <span>
                                        {row[oo] !== "<<UNCHECK>>" &&
                                          row[oo] !== "<<CHECK>>" && (
                                            <span className="font-normal">
                                              {row[oo]}
                                            </span>
                                          )}
                                      </span>
                                    </div>
                                  </div>
                                )
                              })}
                            </React.Fragment>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </section>
        <section id="explorerudderstack_section">
          <ExploreRudderStack />
        </section>
        <section id="footer_section_for_demo">
          <MiddleBanner {...lv_middlebannersection[0]} />
        </section>
      </div>
    </Layout>
  )
}

export default SegmentDesktop

export const SEGMENT_COMPARISION_DATA = [
  {
    group: "Pricing",
    title: "Flexible, volume-based pricing",
    rudderstack_val: "<<CHECK>>",
    segment_val: "<<UNCHECK>>",
  },
  {
    group: "Pricing",
    title: "MTU-based pricing",
    rudderstack_val: "<<UNCHECK>>",
    segment_val: "<<CHECK>>",
  },

  {
    group: "core features",
    title: "Event Replay functionality",
    rudderstack_val: "<<CHECK>>",
    segment_val: "<<CHECK>>",
  },
  {
    group: "core features",
    title: "Open-source offering",
    rudderstack_val: "<<CHECK>>",
    segment_val: "<<UNCHECK>>",
  },
  {
    group: "core features",
    title: "Dedicated VPC hosting",
    rudderstack_val: "<<CHECK>>",
    segment_val: "<<UNCHECK>>",
  },
  {
    group: "core features",
    title: "Ad-blocker resilient ",
    rudderstack_val: "<<CHECK>>",
    segment_val: "<<CHECK>>",
  },
  {
    group: "core features",
    title: "Real-time event and custom transformations",
    rudderstack_val: "<<CHECK>>",
    segment_val: "<<UNCHECK>>",
  },
  {
    group: "core features",
    title: "Data governance and schema enforcement",
    rudderstack_val: "API based",
    segment_val: "UI based",
  },
  {
    group: "core features",
    title: "Data ownership",
    rudderstack_val: "Doesn’t store your data",
    segment_val: "Keeps a copy of your data",
  },
  {
    group: "core features",
    title: "Warehouse sync time",
    rudderstack_val: "30 mins, configurable to run even faster",
    segment_val: "Upto 6-12 hours",
  },

  {
    group: "SDKs, Sources and Supported Destinations",
    title: "Web / mobile / server-side event tracking",
    rudderstack_val: "<<CHECK>>",
    segment_val: "<<CHECK>>",
  },
  {
    group: "SDKs, Sources and Supported Destinations",
    title: "Cloud sources",
    rudderstack_val: "<<CHECK>>",
    segment_val: "<<CHECK>>",
  },
  {
    group: "SDKs, Sources and Supported Destinations",
    title: "Destination support for warehouses",
    rudderstack_val: "<<CHECK>>",
    segment_val: "<<CHECK>>",
  },
  {
    group: "SDKs, Sources and Supported Destinations",
    title: "High-performance JavaScript SDK",
    rudderstack_val: "<<CHECK>>",
    segment_val: "<<UNCHECK>>",
  },
  {
    group: "SDKs, Sources and Supported Destinations",
    title: "Unity SDK for event tracking in games",
    rudderstack_val: "<<CHECK>>",
    segment_val: "<<UNCHECK>>",
  },
  {
    group: "SDKs, Sources and Supported Destinations",
    title: "Apache Kafka destination",
    rudderstack_val: "<<CHECK>>",
    segment_val: "<<UNCHECK>>",
  },
  {
    group: "SDKs, Sources and Supported Destinations",
    title: "Destinations",
    rudderstack_val:
      "Over 100 popular destination platforms, new destinations released every 2 weeks",
    segment_val: "More than 200 destinations",
  },

  {
    group: "Audiences & Identity Resolution",
    title: "Identity graph",
    rudderstack_val: "Instantiated on your warehouse",
    segment_val: "Black box",
  },
  {
    group: "Audiences & Identity Resolution",
    title: "Audience creation",
    rudderstack_val: "Use any audience you create in your warehouse",
    segment_val: "UI-based",
  },
  {
    group: "Audiences & Identity Resolution",
    title: "Audience activation",
    rudderstack_val: "Pushed from your warehouse via Warehouse Actions",
    segment_val: "UI-based via Personas",
  },

  {
    group: "Implementation, Monitoring and Support",
    title: "Real-time monitoring via Grafana dashboards",
    rudderstack_val: "<<CHECK>>",
    segment_val: "<<CHECK>>",
  },
  {
    group: "Implementation, Monitoring and Support",
    title: "Implementation services",
    rudderstack_val: "<<CHECK>>",
    segment_val: "<<CHECK>>",
  },
  {
    group: "Implementation, Monitoring and Support",
    title: "Slack Community",
    rudderstack_val: "<<CHECK>>",
    segment_val: "<<CHECK>>",
  },

  {
    group: "Use Cases",
    title: "Automatically build a customer data lake",
    rudderstack_val:
      "Enables CDP functionality on your data warehouse/data lake",
    segment_val: "Runs CDP in a silo",
  },
  {
    group: "Use Cases",
    title: "Build a single view of the customer in the warehouse",
    rudderstack_val:
      "Every data point and the identity graph live in your warehouse",
    segment_val: "Customer profiles live in a black box",
  },
  {
    group: "Use Cases",
    title: "Run the data stack in your own VPC for high-security ",
    rudderstack_val: "Kubernetes-native VPC deployment option",
    segment_val: "No VPC deployment",
  },
  {
    group: "Use Cases",
    title: "Enable real-time personalization",
    rudderstack_val:
      "Leverage RudderStack Event Stream and your own stack (Redis, etc.) ",
    segment_val: "Forced to buy Personas product",
  },
  {
    group: "Use Cases",
    title: "Manage identity resolution",
    rudderstack_val: "Identity graph lives on your warehouse",
    segment_val: "Lives behind Segment’s walls",
  },
  {
    group: "Use Cases",
    title: "Feed data science real-time from every source",
    rudderstack_val: "Robust support for data science infrastructure",
    segment_val: "Primarily built for marketing departments",
  },
]

export const pageQuery = graphql`
  query {
    sanityFrontpageblock {
      _rawPagebuildersectionarray
    }
  }
`
