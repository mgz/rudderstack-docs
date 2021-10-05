import React from "react"
import PortableText from "./portableText"
import Link from "gatsby-link"
import {
  rudderslabTrackOnClick,
  rudderslabTrackOnYoutubeVideoPlayback,
} from "../utils/common"
import YouTube from "react-youtube"

const HeroBannerCloud = props => {
  let tmp_youtube_url_split = props.herobanneryoutube_url.url
    .split("?")[0]
    .split("/")

  const _onPlay = event => {
    
    return rudderslabTrackOnYoutubeVideoPlayback(props.herobannertitle, event)
  }
  // console.log("HeroBannerCloud", props)
  return (
    <section className="w-full product-page_banner  lg:py-0 py-10 flex justify-center items-center relative overflow-hidden">
      <div className="max-w-6xl sm:pb-20 pb-4 p1-16 px-4 md:px-3 mx-auto">
        <div className="flex flex-col items-center justify-center mx-auto lg:flex-row lg:p-0">
          <div className="z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-3/5 sm:px-0sm:items-center lg:items-start lg:mb-0 ">
            <h2 className="mb-8 md:mt-4 md:mb-0 md:text-6xl text-5xl  font-bold leading-none">
              {props.herobannertitle}
            </h2>
            <h3 className="text-3xl leading-10 font-bold md:mt-5 mb-8">
              {props.herobannersmalltitle}
            </h3>
            <div className=" text-lg leading-6 lg:pr-36 frtxt-contnt">
              <PortableText
                blocks={props.herobannercontent}
                trackSectionHeader={props.herobannertitle}
              />
            </div>

            <div className="block sm:flex justify-center items-center mt-12">
              {props.herobannerbutton.map((btn, i) => (
                <>
                  {(() => {
                    if (btn.btnexternallink === true) {
                      return (
                        <a
                          key={btn._key}
                          className={
                            (btn.btnhiglight === true
                              ? "btn-primary-lg"
                              : "btn-secondary-lg") +
                            ` sm:mr-4 md:mb-0 mb-6 bg-white text-dark hover:bg-blueNew-midnight hover:text-white`
                          }
                          onClick={e =>
                            rudderslabTrackOnClick(
                              "button",
                              props.herobannertitle,
                              e
                            )
                          }
                          href={btn.btnlink}
                        >
                          {btn.btntext}
                        </a>
                      )
                    } else {
                      return (
                        <Link
                          onClick={e =>
                            rudderslabTrackOnClick(
                              "button",
                              props.herobannertitle,
                              e
                            )
                          }
                          key={btn._key}
                          to={btn.btnlink}
                        >
                          <span
                            className={
                              (btn.btnhiglight === true
                                ? "btn-primary-lg"
                                : "btn-secondary-lg") + ` sm:mr-4 md:mb-0 mb-4`
                            }
                          >
                            {btn.btntext}
                          </span>
                        </Link>
                      )
                    }
                  })()}
                </>
              ))}
            </div>
          </div>
          <div className="relative w-full px-5 rounded-lg flex-grow justify-items-end lg:w-2/5 sm:px-0 sm:items-center lg:items-start lg:mb-0">
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
              {/* <iframe
                src={props.herobanneryoutube_url.url}
                frameborder="0"
                allowfullscreen
                class="video"
              ></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBannerCloud
