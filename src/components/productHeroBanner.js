import React, { useEffect } from "react"
// import PortableText from "./portableText"
import Link from "gatsby-link"
import {
  rudderslabTrackOnClick,
  rudderslabTrackOnYoutubeVideoPlayback,
} from "../utils/common"
import Image from "./image"
import YouTube from "react-youtube"

const ProductHeroBanner = props => {
  let tmp_youtube_url_split = []
  if (
    props.herobanner_media &&
    props.herobanner_media.condition === "videooption"
  ) {
    tmp_youtube_url_split = props.herobanner_media.videooption
      .split("?")[0]
      .split("/")
  }

  useEffect(() => {
    /* setWindowOrigin(window.location.origin) */
    import("@justinribeiro/lite-youtube")
  }, [])

  const _onPlay = event => {
    return rudderslabTrackOnYoutubeVideoPlayback(
      props.productbannertitle,
      event
    )
  }

  return (
    <section className="w-full  py-0 flex justify-center items-center relative overflow-hidden gradiant-layer banner-section product-hero-banner pb-12 lg:pb-20">
      <div className="max-w-6xl w-full sm:pb-20 pb-4 md:pt-16 pt-9 p1-16 px-4 sm:px-8 lg:px-5 mx-auto">
        {/* <div className="out-gradient-wrapper bottom-1/4 right-16">
          <div className="grad1">
            <div className="grad2">
              <div className="grad3">
                <div className="grad4">
                  <div className="grad5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="out-gradient-wrapper top-1/4 left-1/4">
          <div className="grad1">
            <div className="grad2">
              <div className="grad3">
                <div className="grad4">
                  <div className="grad5"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col items-center justify-center mx-auto lg:flex-row lg:p-0">
          <div className="z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-6/12 sm:px-0 lg:items-start lg:mb-0 pr-4 lg:pr-20">
            <h2 className="text-2xl  font-bold tracking-tight-2 text-darkScheme-btnSecondaryBg uppercase">
              {props.productbannerheader}
            </h2>
            <h1 className="text-3xl-3 xl:text-5xl-1 leading-tight font-bold mt-2 md:mt-5 mb-4 md:mb-8 pr-0 text-whiteColor-custom">
              {props.productbannertitle}
            </h1>
            <p className="text-lg leading-6 text-whiteColor-custom">
              {props.productbannercontent}
            </p>

            <div className="block sm:flex items-center mt-12">
              {props.herobannerbutton.map((btn, i) => (
                <div key={btn._key + i}>
                  {(() => {
                    if (btn.btnexternallink === true) {
                      return (
                        <a
                          onClick={e =>
                            rudderslabTrackOnClick(
                              "button",
                              props.productbannerheader,
                              e
                            )
                          }
                          className={
                            (btn.btnhiglight === true
                              ? "btn-primary-lg border-none bg-darkScheme-btnPrimaryBg text-darkScheme-textPrimary"
                              : "btn-secondary-lg button-gradient-border") + ` sm:mr-6 md:mb-0 mb-6 cta-btn`
                          }
                          href={btn.btnlink}
                        >
                          {btn.btntext}
                        </a>
                      )
                    } else {
                      return (
                        <span
                          key={btn._key}
                        >
                          <Link
                            onClick={e =>
                              rudderslabTrackOnClick(
                                "button",
                                props.productbannerheader,
                                e
                              )
                            }
                            className={
                              (btn.btnhiglight === true
                                ? "btn-primary-lg border-none bg-darkScheme-btnPrimaryBg text-darkScheme-textPrimary"
                                : "btn-secondary-lg button-gradient-border") + ` sm:mr-6 md:mb-0 mb-6 cta-btn`
                            }
                            to={btn.btnlink}
                          >
                            {btn.btntext}
                          </Link>
                        </span>
                      )
                    }
                  })()}
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full rounded-xl flex-grow justify-items-end lg:w-6/12 px-0 sm:items-center lg:items-start lg:mb-0">
            {props.herobanner_media &&
              props.herobanner_media.condition === "videooption" && (
                <div className="iframe-container">
                  {/* <div className="product-banner-frame"></div> */}
                  <YouTube
                    videoId={
                      tmp_youtube_url_split[tmp_youtube_url_split.length - 1]
                    }
                    className="product-media"
                    onPlay={_onPlay}
                  />
                </div>
              )}
            {props.herobanner_media &&
              props.herobanner_media.condition === "imageoption" && (
                <div className="iframe-container">
                  {/* <div className="product-banner-frame"></div> */}
                  <Image
                    props={props.herobanner_media.imageoption.asset._ref}
                    classes="product-media"
                  />
                </div>
              )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductHeroBanner
