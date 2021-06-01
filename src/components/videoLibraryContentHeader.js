import React, { useState } from "react"

import VideoRequestForm from "../components/videoRequestForm"

const VideoLibraryContentHeader = ({ data,category }) => {
  
  // console.log("ssss", data)

 
  return (
    <section className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-40 mx-auto relative banner-section video-banner-bg">
      <div className="flex flex-col items-center md:gap-12 xl:gap-16 justify-center mx-auto lg:flex-row lg:p-0">
        <div className="z-20 flex flex-col justify-between  w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-3/5 sm:px-0 lg:items-start lg:mb-0 hero-content ">
          <p class="my-4 text-blue text-sm uppercase">{category}</p>
          <h2 className="mb-8 md:mb-4 md:text-6xl text-5xl font-bold leading-tight">
            {data.title}
          </h2>
          <p className="sm:pt-8">Duration: {data.duration}</p>
        </div>
        <div className=" w-full px-5 rounded-lg flex-grow justify-items-end lg:w-2/5 sm:px-0 sm:items-center lg:items-start lg:mb-0">
          <div className=" rounded-md group sm:px-0 sm:items-center lg:items-start">
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
    </section>
  )
}

export default VideoLibraryContentHeader
