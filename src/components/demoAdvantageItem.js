import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PortableText from "../components/portableText"
import Image from "../components/image"

const DemoAdvantageItem = props => {
  return (
    <div className="flex flex-col justify-center items-center text-center mx-7 mb-20">
      <div className="m-2">
        <Image props={props.data.demoAdvanageImage.asset._ref} />
      </div>
      <div className="text-2xl-2 font-bold mb-6">{props.data.demoAdvantageTitle}</div>
      <div className="text-grayColor-custom text-lg">
        <PortableText blocks={props.data.demoAdvantageDesc} />
      </div>
    </div>
  )
}

export default DemoAdvantageItem
