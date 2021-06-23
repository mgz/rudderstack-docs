import React from "react"
import Image from "./image"

const HeroBannerWithCenterTextAndImage = props => {
//   console.log("HeroBannerWithCenterTextAndImage", props)
  return (
    <div className="max-w-6xl px-4 md:px-3 mx-auto">
      <div className="flex flex-col justify-center ">
        <h2 className="my-6 text-3xl-3 md:text-5xl text-blueNew-midnight font-bold max-w-4xl mx-auto text-center tracking-tight leading-tight">{props.title}</h2>
        <div className="mx-auto my-6">
          <Image props={props.centerimage.asset._ref} />
        </div>
      </div>
    </div>
  )
}

export default HeroBannerWithCenterTextAndImage
