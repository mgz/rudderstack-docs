import React, { useEffect } from "react"
import PortableText from "./portableText"
import Link from "gatsby-link"
import {
  rudderslabTrackOnClick,
  rudderslabTrackOnYoutubeVideoPlayback,
} from "../utils/common"
import Image from "./image"
import YouTube from "react-youtube"

const HeroBannerBeAHeroPage = props => {
  console.log("HeroBannerBeAHeroPage", props)
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
    <div className="">
      <section className="mx-auto pb-8 lg:pb-20 overflow-x-hidden bg-gradient-to-t from-white-custom via-blueNew-lighter to-blueNew-lighter relative">
        <div className="out-gradient-wrapper bottom-1/4 right-16">
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
        </div>
        <div class="max-w-6xl md:mt-16 px-3 md:px-3 mx-auto flex flex-wrap flex-col md:items-center md:text-center">
          <div className="uppercase text-sm mb-5 text-darkScheme-btnSecondaryBg font-bold">
            {props.herobannersmalltitle}
          </div>
          <h1 className="text-3xl-3 md:text-5xl font-bold font-custom leading-snug text-whiteColor-custom">
            {props.herobannertitle}
          </h1>

          <div className="relative w-full rounded-xl flex-grow justify-items-end sm:items-center lg:items-start lg:mb-0 px-4 py-8 md:px-32 md:py-12">
            {props.herobanner_media &&
              props.herobanner_media.condition === "videooption" && (
                <div class="iframe-container">
                  <YouTube
                    videoId={
                      tmp_youtube_url_split[tmp_youtube_url_split.length - 1]
                    }
                    // className="px-32"
                    onPlay={_onPlay}
                  />
                </div>
              )}
            {props.herobanner_media &&
              props.herobanner_media.condition === "imageoption" && (
                <div class="iframe-container">
                  <Image
                    props={props.herobanner_media.imageoption.asset._ref}
                    // className="w-9/12 mx-auto"
                  />
                </div>
              )}
          </div>

          <div className="text-lg mt-4 max-w-screen-md text-whiteColor-custom">
            <PortableText blocks={props.herobannercontent} />
          </div>
        </div>
        <div className="block sm:flex justify-center items-center mt-12 mx-2">
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
                      key={btn._key}
                      to={btn.btnlink}
                      onClick={e =>
                        rudderslabTrackOnClick(
                          "button",
                          props.herobannertitle,
                          e
                        )
                      }
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
      </section>
    </div>
  )
}

export default HeroBannerBeAHeroPage
