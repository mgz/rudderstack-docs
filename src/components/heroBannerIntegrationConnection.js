import React, { useEffect, createRef, useState, Suspense } from "react"
import PortableText from "./portableText"
import Link from "gatsby-link"
import { StaticImage } from "gatsby-plugin-image"

function HeroBannerIntegrationConnection(props) {
  return (
    <section className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-40 mx-auto relative gradiant-layer banner-section">
      <div className="flex flex-col items-center md:gap-12  justify-center mx-auto lg:flex-row lg:p-0">
        <div className="relative z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
          <h1 className="text-primary mb-8 md:my-4 text-5xl font-bold leading-tight">
            Integrate your iOS app with Hubspot
          </h1>
          <p className="text-lg text-grayColor-custom font-normal mb-4">
            Don’t go through the pain of direct integration. RudderStack’s iOS
            SDK makes it easy to send data from your iOS app to Hubspot ...and
            all of your other cloud tools.
          </p>
          <Link to={"/"}>
            <span className={`btn-primary-lg sm:mr-4 md:mb-0 mb-4 my-4 font-bold`}>
              Read HubSpot Docs
            </span>
          </Link>
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
                    src={
                      "https://rudderstack.com/static/a7a7db9a5f9fbeb5e102a6e939009c50/b63b5a7265b78c98a3f3f54f9567dbd61a0aa5da-137x56.png"
                    }
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
