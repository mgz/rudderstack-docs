import React from "react"
import Detailsection from "./Detailsection"

const Sections = ({contents}) => {
  return (
    <div className="section-details">
    {
      contents.map((section,index) => {
        return (
          <div className="details" key={section._key}>
            <h2 id={section._key}>{section.section_title}</h2>
            <Detailsection contents={section.section_details_block} />
          </div>
        )
      })
    }
    </div>
  )
}

export default Sections
