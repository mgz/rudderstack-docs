import React from "react"
import PortableText from "./portableText"
import Image from "./image"

const AgreementAccordianCard = props => {
  console.log("AgreementAccordianCard", props)
  return (
    <div className={`${props.width} my-4`}>
      <div className="flex flex-row relative">
        <Image
          props={props.accordian_icon.asset._ref}
          classes={`w-8 h-auto absolute`}
        />
        {props.accordian_title && (
          <span className="font-bold ml-12">{props.accordian_title}</span>
        )}
      </div>
      <div className="ml-12 text-secondary leading-7 text-sm">
        <PortableText blocks={props.accordian_content} />
      </div>
    </div>
  )
}

export default AgreementAccordianCard
