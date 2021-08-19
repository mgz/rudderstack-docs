import React from "react"
import Description from "./Description"

import Calltoaction from "../block/Calltoaction"
import Lightbluebackground from "../block/Lightbluebackground"
import Darkbluebackground from "../block/Darkbluebackground"


const Detailsection = ({contents}) => {
  return (
    <section className="section">
        {
          contents.map((section,index) => {
            return (
              <div className="block-section" key={section._key}>
              {
                section._type === "html_block" &&
                <Description contents={section._rawHtmlSectionDescription?section._rawHtmlSectionDescription.Description:section.html_section_description.Description} />
              }
              {(section._type === "styled_block" && section.styled_block_type === "call_to_action") &&
                <Calltoaction section={section} />
              }
              {(section._type === "styled_block" && section.styled_block_type === "light_blue_background") &&
                <Lightbluebackground section={section} />
              }
              {(section._type === "styled_block" && section.styled_block_type === "dark_blue_background") &&
                <Darkbluebackground section={section} />
              }
              </div>
            )
          })
        }
    </section>
  )
}

export default Detailsection
