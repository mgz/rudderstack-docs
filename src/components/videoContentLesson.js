import React from "react"
import PortableText from "./portableText"
import Image from "./image"

const VideoContentLesson = ({ data }) => {
  // console.log("ssss", data)
  return (
    <section className="100% bg-whiteColor-custom">
      <div className="max-w-6xl  sm:px-6 mx-auto sm:pt-16 pb-16">
        <div className="flex lg:items-start items-center flex-wrap">
          <div className="w-full lg:w-5/12 sm:w-full lg:p-6 sm:pl-0 mt-12 sm:mt-0">
            <h3 className="text-3xl text-blueNew-midnight font-bold leading-tight mb-8">
              {data.herotitle}
            </h3>

            <div className="lg:hidden w-full pt-6 mb-8">
              {data.herorightimage && data.herorightimage.asset && (
                <Image
                  props={data.herorightimage.asset._ref}
                  classes="w-full rounded-md"
                />
              )}
            </div>

            <div className="text-secondary leading-7 text-sm sm:text-lg">
              <PortableText blocks={data.herodescritpion} trackSectionHeader={data.herotitle} />
            </div>
          </div>
          <div className="w-full  hidden lg:block sm:w-7/12 pt-6 sm:p-6 sm:pr-0 md:pl-20">
            {data.herorightimage && data.herorightimage.asset && (
              <Image
                props={data.herorightimage.asset._ref}
                classes="w-full rounded-md"
              />
            )}

            {/* <img src={DataStack} alt="event stream" className="w-full" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoContentLesson
