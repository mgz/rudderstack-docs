import React from "react"
import PortableText from "./portableText"
import { rudderslabTrackOnYoutubeVideoPlayback } from "../utils/common"
import YouTube from "react-youtube"

const HeroSegment = props => {
  let tmp_youtube_url_split = []
  if (props.herobanner_media.condition === "videooption") {
    tmp_youtube_url_split = props.herobanner_media.videooption.split("?")[0].split("/")
  }

  const _onPlay = event => {
    return rudderslabTrackOnYoutubeVideoPlayback(props.herobannertitle, event)
  }

  return (
    <div className="max-w-6xl px-4 md:px-3 sm:my-20 lg:mt-32 md:mb-20 mx-auto  relative banner-section flex flex-col lg:flex-row justify-start z-40">
      <div className={`w-full ${props.herobanner_media.condition === "videooption" ? 'lg:w-1/2' : 'lg:w-3/5'} pr-0 lg:pr-4 mx-auto lg:mx-0 flex flex-col justify-center mb-12 lg:mb-0`}>
        <h1 className="text-4xl md:text-6xl leading-tight font-bold self-center text-center lg:self-start lg:text-left ">
          {props.herobannertitle}
        </h1>
        <div className="pt-6 text-lg self-center text-center lg:self-start lg:text-left">
          <PortableText
            blocks={props.herobannercontent}
            trackSectionHeader={props.herobannertitle}
          />
        </div>
      </div>

      {props.herobanner_media.condition === "videooption" && (
        <div className="relative w-full rounded-xl flex-grow justify-items-end lg:w-1/2 px-0 sm:items-center lg:items-start lg:mb-0">
          <div class="iframe-container">
            <div className="stack-frame-1"></div>
            <div className="stack-frame-2"></div>
            <YouTube
              videoId={tmp_youtube_url_split[tmp_youtube_url_split.length - 1]}
              className="video"
              onPlay={_onPlay}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default HeroSegment
