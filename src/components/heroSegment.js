import React from "react"
import PortableText from "./portableText"

const HeroSegment = props => {
  return (
    <div className="max-w-6xl px-4 md:px-3 sm:my-20 lg:mt-32 md:mb-20 mx-auto relative banner-section flex flex-col justify-center z-50">
      <div className="w-full lg:w-3/5 pr-0 lg:pr-2 mx-auto lg:mx-0 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl leading-tight font-bold self-center text-center lg:self-start lg:text-left ">
          {props.herobannertitle}
        </h1>
        <div className="pt-6 text-lg self-center text-center lg:self-start lg:text-left">
          <PortableText blocks={props.herobannercontent} />
        </div>
      </div>
    </div>
  )
}

export default HeroSegment
