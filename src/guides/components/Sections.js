import React from "react"
import Description from "./Description"
import Sidebar from "./Sidebar"
import Details from "./Details"

const Sections = ({ section }) => {
  return (
    <div className="container">
      <div className="row pagesection flex flex-col md:flex-row">
        <div className="w-full md:w-4/12">
          <Sidebar contents={section.sections} {...section} />
        </div>
        <div className="w-full px-4 md:w-8/12  py-4">
          <Description contents={section._rawDescription} />
          <Details key={section._key} contents={section.sections} />
        </div>
      </div>
    </div>
  )
}

export default Sections
