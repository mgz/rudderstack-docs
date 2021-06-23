import React from "react"
import PortableText from "./portableText"
import Image from "./image"

const VideoContentLesson = ({ data }) => {
  // console.log("ssss", data)
  return (
    <section className="100% bg-whiteColor-custom">
      <div className="max-w-6xl px-4 mx-auto sm:pt-16 pb-16">
        <div className="flex lg:items-start items-center flex-wrap">
          <div className="w-full sm:w-5/12 sm:p-6 sm:pl-0 mt-12 sm:mt-0">
            <h3 className="text-3xl text-blueNew-midnight font-bold leading-tight mb-8">
              {data.herotitle}
            </h3>

            <div className="text-secondary leading-7 text-sm sm:text-lg">
              <PortableText blocks={data.herodescritpion} />
            </div>
          </div>
          <div className="w-full sm:w-7/12 pt-6 sm:p-6 sm:pr-0 md:pl-20">
            <Image
              props={data.herorightimage.asset._ref}
              classes="w-full rounded-md"
            />
            {/* <img src={DataStack} alt="event stream" className="w-full" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoContentLesson
