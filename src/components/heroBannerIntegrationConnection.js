import React, { useEffect, createRef, useState, Suspense } from "react"
import PortableText from "./portableText"
import Link from "gatsby-link"
import { StaticImage } from "gatsby-plugin-image"

const HeroBannerIntegrationConnection = props => {
  console.log("HeroBannerIntegrationConnection", props)
  return (
    <section className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-40 mx-auto relative gradiant-layer banner-section pb-12 md:pb-0">
      <div className="flex flex-col items-center md:gap-2  justify-center mx-auto lg:flex-row lg:p-0">
        <div className="relative z-20 flex flex-col w-full pb-1 pr-30 mb-8 sm:mb-16 text-2xl lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
          <h1 className="text-primary mb-8 md:my-4 text-4xl md:text-5xl font-bold leading-tight">
            Integrate your{" "}
            {props.integration_connection.source_integration_context} app with
            {props.integration_connection.destination_integration_context}
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
            Read {props.integration_connection.destination_integration_context}{" "}
            Docs
          </a>
        </div>

        <div
          className={` relative w-full px-0 rounded-lg flex-grow justify-items-end lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0`}
        >
          <div
            className={`integration-connection-hero-container-${props.integration_connection.image_header_source}`}
          >
            <div className="relative rounded-md group sm:px-0 sm:items-center lg:items-start">
              <div className="">
                {props.integration_connection.image_header_source ===
                  "mobile" &&
                  props.integration_connection.image_header_name ===
                    "ic_mobile_ios" && (
                    <StaticImage
                      src="../images/ic_mobile_ios.png"
                      alt="Header image"
                      placeholder="tracedSVG"
                      className={`object-cover integration-connection-hero-logo-primary-${props.integration_connection.image_header_source}`}
                    />
                  )}

                {props.integration_connection.image_header_source ===
                  "mobile" &&
                  props.integration_connection.image_header_name ===
                    "ic_mobile_android" && (
                    <StaticImage
                      src="../images/ic_mobile_android.png"
                      alt="Header image"
                      placeholder="tracedSVG"
                      className={`object-cover integration-connection-hero-logo-primary-${props.integration_connection.image_header_source}`}
                    />
                  )}

                {props.integration_connection.image_header_source ===
                  "mobile" &&
                  props.integration_connection.image_header_name ===
                    "ic_mobile_react-native" && (
                    <StaticImage
                      src="../images/ic_mobile_react-native.png"
                      alt="Header image"
                      placeholder="tracedSVG"
                      className={`object-cover integration-connection-hero-logo-primary-${props.integration_connection.image_header_source}`}
                    />
                  )}

                {props.integration_connection.image_header_source ===
                  "mobile" &&
                  props.integration_connection.image_header_name ===
                    "ic_mobile_flutter" && (
                    <StaticImage
                      src="../images/ic_mobile_flutter.png"
                      alt="Header image"
                      placeholder="tracedSVG"
                      className={`object-cover integration-connection-hero-logo-primary-${props.integration_connection.image_header_source}`}
                    />
                  )}

                {props.integration_connection.image_header_source ===
                  "desktop" &&
                  props.integration_connection.image_header_name ===
                    "ic_desktop_javascript" && (
                    <StaticImage
                      src="../images/ic_desktop_javascript.png"
                      alt="Header image"
                      placeholder="tracedSVG"
                      className={`object-cover integration-connection-hero-logo-primary-${props.integration_connection.image_header_source}`}
                    />
                  )}

                {props.integration_connection.image_header_source ===
                  "desktop" &&
                  props.integration_connection.image_header_name ===
                    "ic_desktop_unity" && (
                    <StaticImage
                      src="../images/ic_desktop_unity.png"
                      alt="Header image"
                      placeholder="tracedSVG"
                      className={`object-cover integration-connection-hero-logo-primary-${props.integration_connection.image_header_source}`}
                    />
                  )}

                {props.integration_connection.image_header_source ===
                  "desktop" &&
                  props.integration_connection.image_header_name ===
                    "ic_desktop_unity" && (
                    <StaticImage
                      src="../images/ic_desktop_unity.png"
                      alt="Header image"
                      placeholder="tracedSVG"
                      className={`object-cover integration-connection-hero-logo-primary-${props.integration_connection.image_header_source}`}
                    />
                  )}

                {props.integration_connection.image_header_source ===
                  "desktop" &&
                  props.integration_connection.image_header_name ===
                    "ic_desktop_java" && (
                    <StaticImage
                      src="../images/ic_desktop_java.png"
                      alt="Header image"
                      placeholder="tracedSVG"
                      className={`object-cover integration-connection-hero-logo-primary-${props.integration_connection.image_header_source}`}
                    />
                  )}

                {props.integration_connection.image_header_source ===
                  "desktop" &&
                  props.integration_connection.image_header_name ===
                    "ic_desktop_python" && (
                    <StaticImage
                      src="../images/ic_desktop_python.png"
                      alt="Header image"
                      placeholder="tracedSVG"
                      className={`object-cover integration-connection-hero-logo-primary-${props.integration_connection.image_header_source}`}
                    />
                  )}

                {props.integration_connection.image_header_source ===
                  "desktop" &&
                  props.integration_connection.image_header_name ===
                    "ic_desktop_node-js" && (
                    <StaticImage
                      src="../images/ic_desktop_node-js.png"
                      alt="Header image"
                      placeholder="tracedSVG"
                      className={`object-cover integration-connection-hero-logo-primary-${props.integration_connection.image_header_source}`}
                    />
                  )}

                {props.integration_connection.image_header_source ===
                  "desktop" &&
                  props.integration_connection.image_header_name ===
                    "ic_desktop_go" && (
                    <StaticImage
                      src="../images/ic_desktop_go.png"
                      alt="Header image"
                      placeholder="tracedSVG"
                      className={`object-cover integration-connection-hero-logo-primary-${props.integration_connection.image_header_source}`}
                    />
                  )}

                {props.integration_connection.image_header_source ===
                  "desktop" &&
                  props.integration_connection.image_header_name ===
                    "ic_desktop_ruby" && (
                    <StaticImage
                      src="../images/ic_desktop_ruby.png"
                      alt="Header image"
                      placeholder="tracedSVG"
                      className={`object-cover integration-connection-hero-logo-primary-${props.integration_connection.image_header_source}`}
                    />
                  )}

                {props.integration_connection.image_header_source ===
                  "desktop" &&
                  props.integration_connection.image_header_name ===
                    "ic_desktop_net" && (
                    <StaticImage
                      src="../images/ic_desktop_net.png"
                      alt="Header image"
                      placeholder="tracedSVG"
                      className={`object-cover integration-connection-hero-logo-primary-${props.integration_connection.image_header_source}`}
                    />
                  )}

                {props.integration_connection.image_header_source ===
                  "desktop" &&
                  props.integration_connection.image_header_name ===
                    "ic_desktop_php" && (
                    <StaticImage
                      src="../images/ic_desktop_php.png"
                      alt="Header image"
                      placeholder="tracedSVG"
                      className={`object-cover integration-connection-hero-logo-primary-${props.integration_connection.image_header_source}`}
                    />
                  )}
                <div
                  className={`bg-whiteColor-custom rounded-xl integration-connection-hero-logo-${props.integration_connection.image_header_source}`}
                >
                  <div className="flex justify-center align-center h-full">
                    <img
                      src={
                        props.integration_connection.destination_logo_img_url
                      }
                      className="h-5 sm:h-10 m-auto"
                      alt="RudderStack animation"
                      placeholder="tracedSVG"
                    />
                  </div>
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
