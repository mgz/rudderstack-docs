import React, { useEffect, createRef, useState, Suspense } from "react"
import PortableText from "./portableText"
import Link from "gatsby-link"
import { StaticImage } from "gatsby-plugin-image"

const HeroBannerIntegrationConnection = props => {
  return (
    <section className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-40 mx-auto relative gradiant-layer banner-section">
      <div className="flex flex-col items-center md:gap-12  justify-center mx-auto lg:flex-row lg:p-0">
        <div className="relative z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
          <h1 className="text-primary mb-8 md:my-4 text-5xl font-bold leading-tight">
            Integrate your {props.integration_connection.source_context} app
            with {props.integration_connection.destination_context}
          </h1>
          <p className="text-lg text-grayColor-custom font-normal mb-4">
            Don’t go through the pain of direct integration. RudderStack’s iOS
            SDK makes it easy to send data from your iOS app to Hubspot ...and
            all of your other cloud tools.
          </p>

          <a
            className={`btn-primary-lg sm:mr-4 md:mb-0 mb-4 my-4 font-bold`}
            href={props.integration_connection.destination_docs_url}
          >
            Read {props.integration_connection.destination_context} Docs
          </a>
        </div>
        <div className="relative w-full px-0 rounded-lg flex-grow justify-items-end lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0">
          <div className="relative rounded-md group sm:px-0 sm:items-center lg:items-start">
            <div className="">
              <StaticImage
                src="../images/integration-connection-hero.svg"
                alt="Header image"
                placeholder="tracedSVG"
              />
              <div className="w-36 h-24 bg-whiteColor-custom rounded-xl absolute left-80 top-48 ">
                <div className="flex justify-center align-center h-full">
                  <img
                    src={props.integration_connection.destination_logo_img_url}
                    className="h-12 m-auto"
                    alt="RudderStack animation"
                    placeholder="tracedSVG"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroBannerIntegrationConnection
