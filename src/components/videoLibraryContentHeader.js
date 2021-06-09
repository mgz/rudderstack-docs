import React, { useState } from "react"

import VideoRequestForm from "../components/videoRequestForm"

const VideoLibraryContentHeader = ({ data, category, url_or_event_dttm }) => {
  // console.log("ssss", data)

  return (
    <>
      {category === "Live" && (
        <section className="w-full video-banner-bg">
          <div className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-10 mx-auto relative banner-section ">
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
                  <div className="">
                    <VideoRequestForm
                      formId="video_library_demo_form_top"
                      formHeaderText={"Register Now"}
                      formShortDesc={"Register to watch now this video."}
                      submitDemoButtonName={"Register Now"}
                      sectionId="video_library_hdr"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {category !== "Live" && (
        <section className="w-full video-library-banner text-white lg:py-0 py-10 flex justify-center items-center relative overflow-hidden">
          <div className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-10 mx-auto relative banner-section ">
            <div className="flex flex-col items-center justify-center mx-auto">
              <p class="my-4 text-sm uppercase">{category}</p>
              <h2 className="mb-8 md:mb-4 md:text-6xl text-2xl font-bold leading-tight text-center">
                {data.title}
              </h2>
              <p className="sm:py-8">Duration: {data.duration}</p>

              <div className="relative w-full rounded-lg flex-grow justify-items-end px-4 md:px-12 py-4 sm:items-center lg:items-start lg:mb-0">
                <div class="iframe-container">
                  <iframe
                    src={url_or_event_dttm}
                    frameborder="0"
                    allowfullscreen
                    class="video"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default VideoLibraryContentHeader
