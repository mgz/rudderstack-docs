import React from "react"
import PortableText from "./portableText"
import VideoRequestForm from "./videoRequestForm"

const VideoLibraryTopicsToCover = props => {
  return (
    <section className="bg-backgroundsecondary 100% left-right-section md:pt-24 md:pb-20 py-20">
      <div className="max-w-6xl px-4 md:px-3 mx-auto">
        <div className="flex items-center flex-wrap">
          <div className="w-full justify-center items-start md:text-left max-w-screen-md">
            <h3 className="md:mt-2 text-4xl md:text-5xl text-blueNew-midnight font-bold leading-tight">
              {props.data.title}
            </h3>
          </div>
          {props.category === "Live" && (
            <div className="flex items-start flex-wrap sm:flex-row mt-6 md:mt-8">
              <div className="w-full sm:w-1/2 sm:p-6 sm:pl-0">
                <ul>
                  {props.data.content.map(ii => {
                    return (
                      <li
                        key={ii._key}
                        className="relative w-full what-can-do text-lg pl-11 sm:mt-8 mb-7 sm:mb-0"
                      >
                        <PortableText blocks={ii.leftrightcontent} />
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0 flex justify-center">
                <VideoRequestForm
                  formId="video_library_demo_form_bottom"
                  formHeaderText={"Register Now"}
                  formShortDesc={"Register to watch now this video."}
                  submitDemoButtonName={"Register Now"}
                  sectionId="video_library_footer"
                />
              </div>
            </div>
          )}
          {props.category !== "Live" && (
            <div className="flex items-start flex-wrap sm:flex-row mt-6 md:mt-0">
              <div className="w-full sm:p-6">
                <ul className={`grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6`}>
                  {props.data.content.map(ii => {
                    return (
                      <li
                        key={ii._key}
                        className="relative w-full what-can-do text-lg pl-11 sm:mt-8 mb-7 sm:mb-0"
                      >
                        <PortableText blocks={ii.leftrightcontent} />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default VideoLibraryTopicsToCover
