import React, { useState, useRef } from "react"
import PortableText from "./portableText"
function Accordion(props) {
  const [setActive, setActiveState] = useState("")

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "")
  }

  return (
    <div className="accordion__section">
      <button
        className={`accordion pb-6 ${setActive}`}
        onClick={toggleAccordion}
      >
        <p className={`accordion__title text-xl font-bold ${props.darkMode && props.darkMode !== undefined ? 'text-darkScheme-textPrimary' : 'text-darkScheme-textBlack'}`}>{props.title}</p>
      </button>
        <div ref={content} className={`accordion__content ${setActive}`}>
          {props.isBlockContent && (
            <div className="accordion__text frtxt-contnt font-medium text-lg">
              <PortableText blocks={props.content} trackSectionHeader={props.title} />
            </div>
          )}
          {!props.isBlockContent && (
            <div
              className="accordion__text font-medium text-lg"
              dangerouslySetInnerHTML={{ __html: props.content }}
            />
          )}
        </div>
    </div>
  )
}

export default Accordion
