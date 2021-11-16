import React from "react"
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
  if (props.herobanner_media && props.herobanner_media.condition === "videooption") {
    tmp_youtube_url_split = props.herobanner_media.videooption
      .split("?")[0]
      .split("/")
  }

  const _onPlay = event => {
    return rudderslabTrackOnYoutubeVideoPlayback(
      props.productbannertitle,
      event
    )
  }

  return (
    <section className="w-full  lg:py-0 py-10 flex justify-center items-center relative overflow-hidden">
      <div className="max-w-6xl w-full sm:pb-20 pb-4 p1-16 px-4 md:px-3 mx-auto">
        <div className="flex flex-col items-center justify-center mx-auto lg:flex-row lg:p-0">
          <div className="z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-1/2 sm:px-0sm:items-center lg:items-start lg:mb-0">
            <h2 className="text-2xl  font-bold tracking-tight-2 text-blueNew-midnight">
              {props.productbannerheader}
            </h2>
            <h1 className="text-5xl-1 leading-tight font-bold md:mt-5 mb-8">
              {props.productbannertitle}
            </h1>
            <p className="text-lg leading-6 lg:pr-40">
              {props.productbannercontent}
            </p>

            <div class="block sm:flex justify-center items-center mt-12">
              {props.herobannerbutton.map((btn, i) => (
                <>
                  {(() => {
                    if (btn.btnexternallink === true) {
                      return (
                        <a
                          key={btn._key}
                          onClick={e =>
                            rudderslabTrackOnClick(
                              "button",
                              props.productbannerheader,
                              e
                            )
                          }
                          className={
                            (btn.btnhiglight === true
                              ? "bg-blueNew-midnight text-white btn-primary-lg border-transparent hover:bg-white hover:text-blueNew-midnight"
                              : "btn-secondary-lg hover:bg-blueNew-midnight") +
                            ` sm:mr-4 md:mb-0 mb-6`
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
                          className={
                            (btn.btnhiglight === true
                              ? "bg-blueNew-midnight text-white btn-primary-lg border-transparent hover:bg-white hover:text-blueNew-midnight"
                              : "btn-secondary-lg hover:bg-blueNew-midnight") +
                            ` sm:mr-4 md:mb-0 mb-4`
                          }
                        >
                          <Link
                            onClick={e =>
                              rudderslabTrackOnClick(
                                "button",
                                props.productbannerheader,
                                e
                              )
                            }
                            to={btn.btnlink}
                          >
                            {btn.btntext}
                          </Link>
                        </span>
                      )
                    }
                  })()}
                </>
              ))}
            </div>
          </div>

          <div className="relative w-full rounded-xl flex-grow justify-items-end lg:w-1/2 px-0 sm:items-center lg:items-start lg:mb-0">
            {props.herobanner_media && props.herobanner_media.condition === "videooption" && (
              <div class="iframe-container">
                <div className="stack-frame-1"></div>
                <div className="stack-frame-2"></div>
                <YouTube
                  videoId={
                    tmp_youtube_url_split[tmp_youtube_url_split.length - 1]
                  }
                  className="video"
                  onPlay={_onPlay}
                />
              </div>
            )}

            {props.herobanner_media && props.herobanner_media.condition === "imageoption" && (
              <div class="iframe-container">
                <div className="stack-frame-1"></div>
                <div className="stack-frame-2"></div>
                <Image
                  props={props.herobanner_media.imageoption.asset._ref}
                  classes="video"
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
