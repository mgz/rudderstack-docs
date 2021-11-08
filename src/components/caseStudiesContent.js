import React from "react"
import PortableText from "./portableText"
import { StaticImage } from "gatsby-plugin-image"
import CSSidebarItem from "../components/csSideBarItem"
const SideBarComponent = props => {
  return (
    <div className="w-full md:w-72 p-10 shadow-md border border-grayColor-lightBorder rounded-3xl ">
      <div className="border-b border-grayColor-lightBorder">
        {props.sidebar_data.top_section.map(row => {
          return <CSSidebarItem {...row} />
        })}
      </div>

      <div className="border-b border-grayColor-lightBorder">
        {props.sidebar_data.middle_section.map(row => {
          return <CSSidebarItem {...row} />
        })}
      </div>

      <div className="">
        {props.sidebar_data.bottom_section.map(row => {
          return <CSSidebarItem {...row} />
        })}
      </div>
    </div>
  )
}
const CaseStudiesContent = props => {
  // console.log("casestudycontent", props)
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row pt-40 pb-12 md:py-24 px-2">
      <div className="hidden md:block">
        <SideBarComponent {...props} />
      </div>

      <div className="max-w-3xl px-4 pt-8 md:pt-0 lg:px-16">
        <div className="pb-8">
          <StaticImage
            src="../images/quatation-mark.png"
            alt="quatation-mark"
            placeholder="tracedSVG"
            className="w-20 h-auto"
          />
          <div className="text-blueNew-midnight flex flex-col mt-2">
            <h3 className="text-3xl-2 md:text-4xl leading-tight mb-4">
              {props.review_data.customer_review}
            </h3>
            <span className="text-tiny mb-1">
              {props.review_data.customer_name}
            </span>
            <span className="text-tiny font-bold">
              {props.review_data.customer_designation}
            </span>
          </div>
        </div>

        <div className="block md:hidden">
          <SideBarComponent {...props} />
        </div>

        <div className="block-description relative ">
          <PortableText blocks={props.description} />
        </div>
      </div>
    </div>
  )
}

export default CaseStudiesContent
