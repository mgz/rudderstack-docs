import React from "react"
import Description from "./Description"
import Sidebar from "./Sidebar"
import Details from "./Details"

const Sections = ({ section }) => {
  return (
    <div className="">
      <div className="row pagesection flex flex-col md:flex-row">
        <div className="w-full md:w-4/12">
          <Sidebar contents={section.sections} {...section} />
        </div>
        <div className="w-full md:w-8/12 px-4 py-4 block-description relative">
          <Description contents={section._rawDescription} />
          <Details key={section._key} contents={section.sections} />
        </div>
      </div>
    </div>
  )
}

export default Sections
