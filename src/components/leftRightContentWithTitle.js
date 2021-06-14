import React from "react"
import PortableText from "./portableText"

const LeftRightContentWithTitle = props => {
//   console.log("LeftRightContentWithTitle", props)
  return (
    <div className="max-w-6xl px-4 md:px-3 mx-auto">
      <div className="flex flex-col justify-center">
        {props.section_title !== "" && (
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl-3 font-bold text-blueNew-midnight text-center">
              {props.section_title}
            </h2>
          </div>
        )}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col pr-4 md:pr-20">
            <h3 className="md:h-16 text-3xl font-bold text-blueNew-midnight">
              {props.left_content_title}
            </h3>
            <div className="text-secondary leading-7 text-sm sm:text-lg frtxt-contnt arrow-list-items">
              <PortableText blocks={props.left_content} />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col pr-4 md:pr-20">
            <h3 className="h-16 text-3xl font-bold text-blueNew-midnight">
              {props.right_content_title}
            </h3>
            <div className="text-secondary leading-7 text-sm sm:text-lg frtxt-contnt arrow-list-items">
              <PortableText blocks={props.right_content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftRightContentWithTitle
