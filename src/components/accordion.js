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
        className={`accordion pb-6 pl-4 ${setActive}`}
        onClick={toggleAccordion}
      >
        <p className="accordion__title text-xl font-bold">{props.title}</p>
      </button>
      {setActive === "active" && (
        <div ref={content} className="accordion__content pb-12 pl-4">
          {props.isBlockContent && (
            <div className="accordion__text font-medium text-lg">
              <PortableText blocks={props.content} />
            </div>
          )}
          {!props.isBlockContent && (
            <div
              className="accordion__text font-medium text-lg"
              dangerouslySetInnerHTML={{ __html: props.content }}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default Accordion
