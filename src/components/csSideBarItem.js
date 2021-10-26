import React from "react"
import PortableText from "./portableText"
import Image from "./image"
import { StaticImage } from "gatsby-plugin-image"

const CSSidebarItem = props => {
  return (
    <div className="my-6">
      {props.title && (
        <div className="text-xl-2 text-blueNew-midnight font-bold mb-4">
          {props.title}
        </div>
      )}
      {props.sub_title && (
        <div className="text-4xl text-blueNew-midnight font-bold mb-4">
          <span>{props.sub_title}</span>
          {props.sub_title_icon && props.sub_title_icon === "up" && (
            <StaticImage
              src="../images/arrow-upwards.svg"
              alt="arrow-upwards"
              placeholder="tracedSVG"
              className="h-8 w-auto ml-8 mt-3"
            />
          )}
        </div>
      )}
      {props.content && (
        <div className={`text-tiny text-blueNew-magenta flex flex-row`}>
          {props.contentImage && (
            <Image
              props={props.contentImage.asset._ref}
              classes={`w-16 h-auto w-5/12`}
            />
          )}

          <div className={`${props.contentImage ? "w-7/12 ml-3" : "w-full"}`}>
            <PortableText blocks={props.content} />
          </div>
        </div>
      )}
    </div>
  )
}

export default CSSidebarItem
