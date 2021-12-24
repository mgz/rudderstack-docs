import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { rudderslabTrackOnClick } from "../utils/common"
import { StaticImage } from "gatsby-plugin-image"

const ContentIntegrationConnectionSpreadSheets = ({ data }) => {
  // console.log("ContentIntegrationConnectionSpreadSheets", data)
  let page_data = data.override_integration_connection
    ? data.override_integration_connection
    : data.integration_connection
  return (
    <Layout>
      <Helmet>
        <title>{page_data.metaTitle}</title>
        <meta property="og:title" content={page_data.metaTitle} />
        <meta property="twitter:title" content={page_data.metaTitle} />
        <meta name="description" content={page_data.metaDesc} />
        <meta property="og:description" content={page_data.metaDesc} />
        <meta property="twitter:description" content={page_data.metaDesc} />
        <meta property="og:type" content="article" />
      </Helmet>

      <section className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-24 mx-auto relative gradiant-layer banner-section pb-12 md:pb-0">
        <div className="flex flex-col items-center md:gap-8  justify-center mx-auto lg:flex-row lg:p-0">
          <div className="relative z-20 flex flex-col w-full pb-1 pr-30 mb-8 sm:mb-16 text-2xl lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
            <h1 className="text-primary mb-8 md:my-4 text-4xl md:text-5xl font-bold leading-tight">
              Integrate your {page_data.sourceIntegrationContext} with{" "}
              {page_data.destinationIntegration}
            </h1>
            <p className="text-lg text-grayColor-custom font-normal mb-4">
              Don’t go through the pain of direct integration. RudderStack’s{" "}
              {page_data.sourceIntegrationOverridableText !== "NA"
                ? page_data.sourceIntegrationOverridableText
                : page_data.sourceIntegration}{" "}
              makes it easy to send data from your{" "}
              {page_data.sourceIntegrationContext} to{" "}
              {page_data.destinationIntegration} ...and all of your other cloud
              tools.
            </p>

            <a
              onClick={e =>
                rudderslabTrackOnClick(
                  "button",
                  `Integrate your ${page_data.sourceIntegrationContext} with ${page_data.destinationIntegration}`,
                  e
                )
              }
              href={"https://app.rudderstack.com/signup?type=freetrial"}
            >
              <span
                className={`btn-primary-lg sm:mr-4 md:mb-0 mb-4 my-4 font-bold`}
              >
                Sign up for free
              </span>
            </a>
            {/* 
          <a
            className={`btn-primary-lg sm:mr-4 md:mb-0 mb-4 my-4 font-bold`}
            href={page_data.destinationDocsUrl}
          >
            Read {page_data.destinationIntegration} Docs
          </a> */}
          </div>

          <div
            className={` relative w-full px-0 rounded-lg flex-grow justify-items-end lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0`}
          >
            {page_data.imageHeaderSource === "warehouse" && (
              <div
                className={`integration-connection-hero-container-${page_data.imageHeaderSource}`}
              >
                <div className="relative rounded-md group sm:px-0 sm:items-center lg:items-start">
                  <StaticImage
                    src="../images/ic_warehouse.png"
                    alt="Header image"
                    placeholder="tracedSVG"
                    className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                  />
                </div>

                <div
                  className={`integration-connection-hero-logo-left-${page_data.imageHeaderSource}`}
                >
                  <div className="flex justify-center align-center h-full">
                    <img
                      src={page_data.sourceLogoIconUrl}
                      className="h-5 sm:h-12 m-auto"
                      alt={page_data.sourceIntegration}
                      placeholder="tracedSVG"
                    />
                  </div>
                </div>

                <div
                  className={`bg-whiteColor-custom rounded-xl integration-connection-hero-logo-right-${page_data.imageHeaderSource}`}
                >
                  <div className="flex justify-center align-center h-full ic-conn-source-hero">
                    <img
                      // src={page_data.destinationLogoImgUrl}
                      src={page_data.destinationLogoIconUrl}
                      className="h-5 sm:h-12 m-auto"
                      alt={page_data.destinationIntegration}
                      placeholder="tracedSVG"
                    />
                  </div>
                </div>
              </div>
            )}
            {(page_data.imageHeaderSource === "mobile" ||
              page_data.imageHeaderSource === "desktop") && (
              <div
                className={`integration-connection-hero-container-${page_data.imageHeaderSource}`}
              >
                <div className="relative rounded-md group sm:px-0 sm:items-center lg:items-start">
                  <div className="">
                    {page_data.imageHeaderSource === "mobile" &&
                      page_data.imageHeaderName === "ic_mobile_ios" && (
                        <StaticImage
                          src="../images/ic_mobile_ios.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "mobile" &&
                      page_data.imageHeaderName === "ic_mobile_android" && (
                        <StaticImage
                          src="../images/ic_mobile_android.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "mobile" &&
                      page_data.imageHeaderName ===
                        "ic_mobile_react-native" && (
                        <StaticImage
                          src="../images/ic_mobile_react-native.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "mobile" &&
                      page_data.imageHeaderName === "ic_mobile_flutter" && (
                        <StaticImage
                          src="../images/ic_mobile_flutter.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "desktop" &&
                      page_data.imageHeaderName === "ic_desktop_javascript" && (
                        <StaticImage
                          src="../images/ic_desktop_javascript.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "desktop" &&
                      page_data.imageHeaderName === "ic_desktop_unity" && (
                        <StaticImage
                          src="../images/ic_desktop_unity.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "desktop" &&
                      page_data.imageHeaderName ===
                        "ic_desktop_amp-analytics" && (
                        <StaticImage
                          src="../images/ic_desktop_amp-analytics-v2.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "desktop" &&
                      page_data.imageHeaderName === "ic_desktop_java" && (
                        <StaticImage
                          src="../images/ic_desktop_java.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "desktop" &&
                      page_data.imageHeaderName === "ic_desktop_python" && (
                        <StaticImage
                          src="../images/ic_desktop_python.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "desktop" &&
                      page_data.imageHeaderName === "ic_desktop_node-js" && (
                        <StaticImage
                          src="../images/ic_desktop_node-js.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "desktop" &&
                      page_data.imageHeaderName === "ic_desktop_go" && (
                        <StaticImage
                          src="../images/ic_desktop_go.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "desktop" &&
                      page_data.imageHeaderName === "ic_desktop_ruby" && (
                        <StaticImage
                          src="../images/ic_desktop_ruby.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "desktop" &&
                      page_data.imageHeaderName === "ic_desktop_net" && (
                        <StaticImage
                          src="../images/ic_desktop_net.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "desktop" &&
                      page_data.imageHeaderName === "ic_desktop_php" && (
                        <StaticImage
                          src="../images/ic_desktop_php.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "desktop" &&
                      page_data.imageHeaderName === "ic_desktop_next-js" && (
                        <StaticImage
                          src="../images/ic_desktop_next-js.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "desktop" &&
                      page_data.imageHeaderName === "ic_desktop_nuxt-js" && (
                        <StaticImage
                          src="../images/ic_desktop_nuxt-js.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "desktop" &&
                      page_data.imageHeaderName === "ic_desktop_gatsby" && (
                        <StaticImage
                          src="../images/ic_desktop_gatsby.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "desktop" &&
                      page_data.imageHeaderName === "ic_desktop_jekyll" && (
                        <StaticImage
                          src="../images/ic_desktop_jekyll.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "desktop" &&
                      page_data.imageHeaderName === "ic_desktop_hugo" && (
                        <StaticImage
                          src="../images/ic_desktop_hugo.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    {page_data.imageHeaderSource === "desktop" &&
                      page_data.imageHeaderName === "ic_desktop_eleventy" && (
                        <StaticImage
                          src="../images/ic_desktop_eleventy.png"
                          alt="Header image"
                          placeholder="tracedSVG"
                          className={`object-cover integration-connection-hero-logo-primary-${page_data.imageHeaderSource}`}
                        />
                      )}

                    <div
                      className={`bg-whiteColor-custom rounded-xl integration-connection-hero-logo-${page_data.imageHeaderSource}`}
                    >
                      <div className="flex justify-center align-center h-full ic-conn-source-hero">
                        <img
                          // src={
                          //   page_data.destinationLogoImgUrl
                          // }
                          src={page_data.destinationLogoIconUrl}
                          className="h-5 sm:h-10 m-auto"
                          alt="RudderStack animation"
                          placeholder="tracedSVG"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className=" px-4 md:px-3 py-12 md:py-24 mx-auto relative bg-whiteColor-custom banner-section">
        <div className="flex flex-col items-center md:gap-6 xl:gap-12 justify-center mx-auto lg:flex-row lg:p-0 max-w-6xl">
          <div className="relative z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-5/12 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
            <h2 className="text-primary mb-0 md:mb-8 md:my-4 text-2xl-2 font-bold leading-tight">
              Easy{" "}
              {page_data.sourceIntegrationOverridableText !== "NA"
                ? page_data.sourceIntegrationOverridableText
                : page_data.sourceIntegration}{" "}
              to {page_data.destinationIntegration} Integration with RudderStack
            </h2>
            <div className="py-4">
              <p className="text-lg text-grayColor-custom font-normal">
                RudderStack’s open source{" "}
                {page_data.sourceIntegrationOverridableText !== "NA"
                  ? page_data.sourceIntegrationOverridableText
                  : page_data.sourceIntegration}{" "}
                allows you to integrate RudderStack with your{" "}
                {page_data.sourceIntegrationContext} to track event data and
                automatically send it to {page_data.destinationIntegration}.
                <br />
                <br />
                With the RudderStack{" "}
                {page_data.sourceIntegrationOverridableText !== "NA"
                  ? page_data.sourceIntegrationOverridableText
                  : page_data.sourceIntegration}
                , you do not have to worry about having to learn, test,
                implement or deal with changes in a new API and multiple
                endpoints every time someone asks for a new integration.
              </p>
            </div>

            <a
              className={`btn-primary-lg sm:mr-4 md:mb-0 mb-4 my-4 font-bold`}
              href={page_data.sourceDocsUrl}
              onClick={e =>
                rudderslabTrackOnClick(
                  "button",
                  `Easy ${page_data.sourceIntegration} to ${page_data.destinationIntegration} Integration with RudderStack`,
                  e
                )
              }
            >
              {page_data.ctaButtonSource}
            </a>
          </div>
          <div className="relative w-full px-0 rounded-lg flex-grow justify-items-end lg:w-7/12 sm:px-0 sm:items-center lg:items-start lg:mb-0">
            <div className="ic-middle-container">
              <div className="relative rounded-md group sm:px-0 sm:items-center lg:items-start">
                <div className="">
                  <StaticImage
                    src="../images/int-conn-s2.png"
                    alt="RudderStack animation"
                    placeholder="tracedSVG"
                    className="w-auto"
                  />

                  <div className="int-conn-left-logo">
                    <img
                      // src={page_data.sourceLogoImgUrl}
                      src={page_data.sourceLogoIconUrl}
                      className="h-5 sm:h-8 m-auto"
                      alt="RudderStack animation"
                      placeholder="tracedSVG"
                    />
                  </div>

                  <div className="int-conn-right-logo">
                    <img
                      // src={page_data.destinationLogoImgUrl}
                      src={page_data.destinationLogoIconUrl}
                      className="h-5 sm:h-8 m-auto"
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

      <section className=" bg-whiteColor-custom">
        <div className="max-w-6xl mx-auto mb-12">
          <div className=" flex flex-col w-full pb-4 md:pb-0 px-4">
            <h3 className="mt-8 md:mt-24 mb-0 md:mb-6 text-4xl md:text-5xl font-bold leading-tight text-left  max-w-5xl text-blueNew-midnight">
              Popular {page_data.destinationIntegration} use cases
            </h3>
          </div>
          <div className="px-0 mx-auto">
            {/*Data WorkFlow*/}
            <div className="flex flex-wrap flex-row mb-12">
              <div className={`w-full md:w-1/3 sm:px-2 mt-5 mx-4 md:mx-0`}>
                <div className="h-full flex flex-col justify-start items-start text-left py-10 px-8 bg-blueNew-cardBackground rounded-2xl">
                  <div className="h-8 mb-10">
                    <img
                      src={page_data.destinationLogoImgUrl}
                      className="h-8 m-auto"
                      alt="RudderStack animation"
                      placeholder="tracedSVG"
                    />
                  </div>
                  <div class="text-xl-2 font-bold mb-6 mt-2  text-blueNew-midnight">
                    {page_data.useCaseHeader1}
                  </div>
                  <div class="text-grayColor-custom text-lg mb-8">
                    {page_data.useCaseDesc1}
                  </div>
                </div>
              </div>

              <div className={`w-full md:w-1/3 sm:px-2 mt-5 mx-4 md:mx-0`}>
                <div className="h-full flex flex-col justify-start items-start text-left py-10 px-8 bg-blueNew-cardBackground rounded-2xl">
                  <div className="h-8 mb-10">
                    <img
                      src={page_data.destinationLogoImgUrl}
                      className="h-8 m-auto"
                      alt="RudderStack animation"
                      placeholder="tracedSVG"
                    />
                  </div>
                  <div class="text-xl-2 font-bold mb-6 mt-2  text-blueNew-midnight">
                    {page_data.useCaseHeader2}
                  </div>
                  <div class="text-grayColor-custom text-lg mb-8">
                    {page_data.useCaseDesc2}
                  </div>
                </div>
              </div>

              <div className={`w-full md:w-1/3 sm:px-2 mt-5 mx-4 md:mx-0`}>
                <div className="h-full flex flex-col justify-start items-start text-left py-10 px-8 bg-blueNew-cardBackground rounded-2xl">
                  <div className="h-8 mb-10">
                    <img
                      src={page_data.destinationLogoImgUrl}
                      className="h-8 m-auto"
                      alt="RudderStack animation"
                      placeholder="tracedSVG"
                    />
                  </div>
                  <div class="text-xl-2 font-bold mb-6 mt-2  text-blueNew-midnight">
                    {page_data.useCaseHeader3}
                  </div>
                  <div class="text-grayColor-custom text-lg mb-8">
                    {page_data.useCaseDesc3}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-96 px-4 m-auto">
            <a
              className={`btn-primary-lg sm:mr-4 md:mb-0 mb-4 my-4 font-bold`}
              href={page_data.destinationDocsUrl}
              onClick={e =>
                rudderslabTrackOnClick(
                  "button",
                  `Popular ${page_data.destinationIntegration} use cases`,
                  e
                )
              }
            >
              {page_data.ctaButtonDestination}
            </a>
            {/*           
            <a href={"https://app.rudderstack.com/signup?type=freetrial"}>
              <span
                className={`btn-primary-lg sm:mr-4 md:mb-0 mb-4 my-4 font-bold`}
              >
                Sign Up free
              </span>
            </a> */}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-12">
        <div className=" flex flex-col w-full pb-4 md:pb-0 px-4">
          <h3 className="mt-8 md:mt-20 mb-0 md:mb-6 text-4xl md:text-3xl font-bold leading-tight text-left max-w-5xl text-blueNew-midnight">
            Use the {page_data.sourceIntegration} with other popular
            destinations
          </h3>
        </div>
        <div className="px-0 mx-auto">
          {/*Data WorkFlow*/}
          <div className="flex flex-wrap flex-row mb-12">
            <div className={`w-full md:w-1/4 sm:px-2 mt-5 mx-4 md:mx-0`}>
              <div className="h-full flex flex-col justify-start items-start text-left py-10 px-2 pr-2 bg-blueNew-cardBackground rounded-2xl relative">
                <div className="h-8 mb-2 pl-6">
                  <img
                    src={page_data.relevantIntegrationLogoUrl1}
                    className="h-8 m-auto"
                    alt="RudderStack animation"
                    placeholder="tracedSVG"
                  />
                </div>
                <div class="text-xl-2 font-bold mt-2  text-blueNew-midnight pl-6 mb-16">
                  {page_data.relevantIntegrationDesc1}
                </div>

                <a
                  href={page_data.relevantIntegrationUrl1}
                  className="absolute bottom-6 w-full pr-6 pl-2 lg:pr-10 lg:pl-6"
                  onClick={e =>
                    rudderslabTrackOnClick(
                      "button",
                      page_data.relevantIntegrationDesc1,
                      e
                    )
                  }
                >
                  <span
                    className={`btn-primary-lg md:mb-0 mb-4 my-4 font-bold`}
                  >
                    View Integration
                  </span>
                </a>
              </div>
            </div>

            <div className={`w-full md:w-1/4 sm:px-2 mt-5 mx-4 md:mx-0`}>
              <div className="h-full flex flex-col justify-start items-start text-left py-10 px-2 pr-2 bg-blueNew-cardBackground rounded-2xl relative">
                <div className="h-8 mb-2 pl-6">
                  <img
                    src={page_data.relevantIntegrationLogoUrl2}
                    className="h-8 m-auto"
                    alt="RudderStack animation"
                    placeholder="tracedSVG"
                  />
                </div>
                <div class="text-xl-2 font-bold mt-2  text-blueNew-midnight pl-6 mb-16">
                  {page_data.relevantIntegrationDesc2}
                </div>

                <a
                  href={page_data.relevantIntegrationUrl2}
                  className="absolute bottom-6 w-full pr-6 pl-2 lg:pr-10 lg:pl-6"
                  onClick={e =>
                    rudderslabTrackOnClick(
                      "button",
                      page_data.relevantIntegrationDesc2,
                      e
                    )
                  }
                >
                  <span
                    className={`btn-primary-lg md:mb-0 mb-4 my-4 font-bold`}
                  >
                    View Integration
                  </span>
                </a>
              </div>
            </div>

            <div className={`w-full md:w-1/4 sm:px-2 mt-5 mx-4 md:mx-0`}>
              <div className="h-full flex flex-col justify-start items-start text-left py-10 px-2 pr-2 bg-blueNew-cardBackground rounded-2xl relative">
                <div className="h-8 mb-2 pl-6">
                  <img
                    src={page_data.relevantIntegrationLogoUrl3}
                    className="h-8 m-auto"
                    alt="RudderStack animation"
                    placeholder="tracedSVG"
                  />
                </div>
                <div class="text-xl-2 font-bold mt-2  text-blueNew-midnight pl-6 mb-16">
                  {page_data.relevantIntegrationDesc3}
                </div>

                <a
                  href={page_data.relevantIntegrationUrl3}
                  className="absolute bottom-6 w-full pr-6 pl-2 lg:pr-10 lg:pl-6"
                  onClick={e =>
                    rudderslabTrackOnClick(
                      "button",
                      page_data.relevantIntegrationDesc3,
                      e
                    )
                  }
                >
                  <span
                    className={`btn-primary-lg md:mb-0 mb-4 my-4 font-bold`}
                  >
                    View Integration
                  </span>
                </a>
              </div>
            </div>

            <div className={`w-full md:w-1/4 sm:px-2 mt-5 mx-4 md:mx-0`}>
              <div className="h-full flex flex-col justify-start items-start text-left py-10 px-2 pr-2 bg-blueNew-cardBackground rounded-2xl relative">
                <div className="h-8 mb-2 pl-6">
                  <img
                    src={page_data.relevantIntegrationLogoUrl4}
                    className="h-8 m-auto"
                    alt="RudderStack animation"
                    placeholder="tracedSVG"
                  />
                </div>
                <div class="text-xl-2 font-bold mt-2  text-blueNew-midnight pl-6 mb-16">
                  {page_data.relevantIntegrationDesc4}
                </div>

                <a
                  href={page_data.relevantIntegrationUrl4}
                  className="absolute bottom-6 w-full pr-6 pl-2 lg:pr-10 lg:pl-6"
                  onClick={e =>
                    rudderslabTrackOnClick(
                      "button",
                      page_data.relevantIntegrationDesc4,
                      e
                    )
                  }
                >
                  <span
                    className={`btn-primary-lg md:mb-0 mb-4 my-4 font-bold`}
                  >
                    View Integration
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-12">
        <div className={`w-full sm:px-2 mt-5 `}>
          <div className="h-full flex flex-col justify-center text-center py-10 px-8 items-center ">
            <div className="h-8 mb-2">
              <img
                src={page_data.destinationLogoImgUrl}
                className="h-8 m-auto"
                alt="RudderStack animation"
                placeholder="tracedSVG"
              />
            </div>
            <div class="text-4xl md:text-5xl font-bold mb-6 mt-2  text-blueNew-midnight">
              About {page_data.destinationIntegration}
            </div>
            <div class="text-grayColor-custom text-lg mb-8">
              {page_data.destinationDescription}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleIntegrationConnectionGoogleSpresdSheet($slug: String) {
    integration_connection: googleSpreadsheetR1RedRudderstackIcData(
      slug: { eq: $slug }
    ) {
      destinationCategory
      destinationDescription
      destinationDocsUrl
      destinationId
      destinationIntegration
      destinationLogoImgUrl
      destinationLogoIconUrl
      destinationSlug
      googleSpreadsheetId
      id
      imageHeaderName
      imageHeaderSource
      metaDesc
      metaTitle
      relevantIntegrationDesc1
      relevantIntegrationDesc2
      relevantIntegrationDesc3
      relevantIntegrationDesc4
      relevantIntegrationLogoUrl1
      relevantIntegrationLogoUrl3
      relevantIntegrationLogoUrl2
      relevantIntegrationLogoUrl4
      relevantIntegrationUrl1
      relevantIntegrationUrl2
      relevantIntegrationUrl3
      relevantIntegrationUrl4
      slug
      sourceCategory
      sourceDescription
      sourceDocsUrl
      sourceId
      sourceIntegration
      sourceIntegrationContext
      sourceLogoImgUrl
      sourceLogoIconUrl
      useCaseDesc1
      sourceSlug
      useCaseDesc2
      useCaseDesc3
      useCaseHeader1
      useCaseHeader2
      useCaseHeader3
      ctaButtonDestination
      ctaButtonSource
      sourceIntegrationOverridableText
    }

    override_integration_connection: googleSpreadsheetR1OverrideRedRudderstackIcData(
      slug: { eq: $slug }
    ) {
      destinationCategory
      destinationDescription
      destinationDocsUrl
      destinationId
      destinationIntegration
      destinationLogoImgUrl
      destinationLogoIconUrl
      destinationSlug
      googleSpreadsheetId
      id
      imageHeaderName
      imageHeaderSource
      metaDesc
      metaTitle
      relevantIntegrationDesc1
      relevantIntegrationDesc2
      relevantIntegrationDesc3
      relevantIntegrationDesc4
      relevantIntegrationLogoUrl1
      relevantIntegrationLogoUrl3
      relevantIntegrationLogoUrl2
      relevantIntegrationLogoUrl4
      relevantIntegrationUrl1
      relevantIntegrationUrl2
      relevantIntegrationUrl3
      relevantIntegrationUrl4
      slug
      sourceCategory
      sourceDescription
      sourceDocsUrl
      sourceId
      sourceIntegration
      sourceIntegrationContext
      sourceLogoImgUrl
      sourceLogoIconUrl
      useCaseDesc1
      sourceSlug
      useCaseDesc2
      useCaseDesc3
      useCaseHeader1
      useCaseHeader2
      useCaseHeader3
      ctaButtonDestination
      ctaButtonSource
      sourceIntegrationOverridableText
    }
  }
`
export default ContentIntegrationConnectionSpreadSheets
