import React, { useEffect, useState } from "react"
import PortableText from "./portableText"
// import Image from "./image"
import { rudderslabTrackOnYoutubeVideoPlayback } from "../utils/common"
import YouTube from "react-youtube"
/* import("@justinribeiro/lite-youtube"); */

const CenteredAlignedTitleWithYoutube = props => {

  /* const [windowOrigin, setWindowOrigin] = useState(null); */
  
  useEffect(() => {
    /* setWindowOrigin(window.location.origin) */
  }, [])
  let tmp_youtube_url_split = props.youtube.url.split("?")[0].split("/")
  // console.log(
  //   "CenteredAlignedTitleWithYoutube",
  //   tmp_youtube_url_split[tmp_youtube_url_split.length - 1]
  // )
  const _onPlay = event => {
    return rudderslabTrackOnYoutubeVideoPlayback(props.title, event)
  }

  /* const ytOpts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      origin: windowOrigin
    },
  }; */

  return (
    <section className="md:mb-10">
      <div className="max-w-6xl m-auto flex flex-col w-full justify-center items-center pb-12 md:pb-0">
        <h3 className="mt-16 md:mt-24 text-4xl md:text-5xl font-bold leading-tight text-center text-blueNew-midnight max-w-3xl">
          {props.title}
        </h3>
        <div className="mt-4 text-lg  leading-tight text-center text-grayColor-custom max-w-2xl px-4">
          <PortableText
            blocks={props.content}
            trackSectionHeader={props.title}
          />
        </div>
        <div className="relative w-full rounded-lg flex-grow justify-items-end px-4 md:px-12 py-4 sm:items-center lg:items-start lg:mb-0 max-w-5xl -bottom-20 md:-bottom-16 pr-12">
          <div className="iframe-container">
            <div className="stack-frame-1"></div>
            <div className="stack-frame-2"></div>
            {/* <iframe
              src={props.youtube.url}
              frameborder="0"
              allowfullscreen
              className="video"
            ></iframe> */}

            <YouTube
              videoId={tmp_youtube_url_split[tmp_youtube_url_split.length - 1]}
              className="video"
              onPlay={_onPlay}
            />

            {/* <lite-youtube
              videoid={tmp_youtube_url_split[tmp_youtube_url_split.length - 1]}
              class="video"
            ></lite-youtube> */}
          </div>
        </div>
      </div>
      <div className="homepage-middle-bg-gradiant">
        <div className="homepage-middle-bg-image text-whiteColor-custom pt-24 pb-12 md:pb-24">
          <div className="max-w-6xl m-auto flex flex-col w-full justify-center items-center pb-12 md:pb-0">
            <h3 className="mt-12 md:mt-24 mb-0 md:mb-12 text-4xl md:text-5xl font-bold leading-tight text-center max-w-4xl px-0 md:px-4">
              {props.footer_title}
            </h3>
          </div>
          <div className="max-w-5xl px-0 md:px-3 mx-auto mb-12">
            {/*Data WorkFlow*/}
            <div className="flex flex-wrap flex-row">
              {props.two_card_items.map(item => {
                return (
                  <div
                    key={item._key}
                    className={`w-full md:w-1/2 sm:px-2 mt-5 `}
                  >
                    <div className="h-full flex flex-col items-center md:items-left text-center md:text-left py-10 px-8 rounded-2xl border-grayColor-custom shadow-md  mx-3 text-blueNew-midnight bg-whiteColor-custom">
                      <div className="text-2xl-2 font-bold mb-2 mt-2 text-left pr-0 md:pr-4">
                        {item.title}
                      </div>
                      <div className=" text-lg">
                        <PortableText
                          blocks={item.content}
                          trackSectionHeader={props.footer_title}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CenteredAlignedTitleWithYoutube
