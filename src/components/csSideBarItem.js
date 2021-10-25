import React from "react"
import PortableText from "./portableText"
import Image from "./image"

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
          {props.sub_title}
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
