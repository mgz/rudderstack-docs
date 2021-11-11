import React, { useEffect } from "react"
import DynamicInputForm from "../components/dynamicInputForm"

import { rudderslabTrackOnYoutubeVideoPlayback } from "../utils/common"
import YouTube from "react-youtube"
import Cookies from "universal-cookie"

const VideoLibraryContentHeader = ({
  data,
  category,
  url_or_event_dttm,
  inputForm,
  location,
}) => {
  const cookies = new Cookies()

  // console.log("ssss", category, url_or_event_dttm, data)
  let tmp_youtube_url_split = url_or_event_dttm.split("?")[0].split("/")

  const _onPlay = event => {
    return rudderslabTrackOnYoutubeVideoPlayback(data.title, event)
  }

  let showGateawayForm =
    category === "Live" ||
    cookies.get(`video-library-gatedformview-#${data._id}`) === "yes"
      ? false
      : true

  // let showGateawayForm
  // if (category === "Live") {
  //   showGateawayForm = true
  // } else {
  //   if (cookies.get(`video-library-gatedformview-#${data._id}`) === "yes") {
  //     showGateawayForm = false
  //   } else {
  //     showGateawayForm = true
  //   }
  // }

  return (
    <section>
      <section id="1">
        {showGateawayForm === true && (
          <div className={`w-full video-banner-bg`}>
            <div className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-10 mx-auto relative banner-section">
              <div className="flex flex-col items-center gap-0 md:gap-12 xl:gap-16 justify-center mx-auto sm:flex-row lg:p-0">
                <div className="z-20 flex flex-col justify-start  w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl sm:w-1/2 sm:px-0 lg:items-start lg:mb-0 hero-content ">
                  <p class="my-4 text-blueNew-eastbay text-sm uppercase">{`${category} ${
                    category === "Live" ? "| " + url_or_event_dttm : ""
                  }`}</p>
                  <h2 className="mb-8 md:mb-4 md:text-6xl text-5xl font-bold leading-tight">
                    {data.title}
                  </h2>
                  <p className="sm:pt-8">Duration: {data.duration}</p>
                </div>
                <div className=" w-full rounded-lg flex justify-center flex-grow justify-items-end sm:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0">
                  <div className=" w-full rounded-md group sm:px-0 sm:items-center lg:items-start">
                    <div className="mb-16 md:mb-0">
                      <DynamicInputForm
                        {...inputForm}
                        location={location}
                        gatedCookieName={`video-library-gatedformview-#${data._id}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <section id="2">
        {showGateawayForm === false && (
          <div
            className={`w-full video-library-banner lg:py-0 py-10 flex justify-center items-center relative overflow-hidden`}
          >
            <div className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-10 mx-auto relative banner-section ">
              <div className="flex flex-col items-center justify-center mx-auto">
                <p class="my-4 text-sm uppercase">{category}</p>
                <h2 className="mb-8 md:mb-4 md:text-6xl text-2xl font-bold leading-tight text-center">
                  {data.title}
                </h2>
                <p className="sm:py-8">Duration: {data.duration}</p>

                <div className="relative w-full rounded-lg flex-grow justify-items-end px-4 md:px-12 py-4 sm:items-center lg:items-start lg:mb-0">
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
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </section>
  )
}

export default VideoLibraryContentHeader
