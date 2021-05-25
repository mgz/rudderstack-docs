import React from "react"
import Accordion from "./accordion"

function Faq({ accordions = [] }) {
  return (

      <div className="px-4 mx-auto">
        <div className="max-w-screen-lg mx-auto flex flex-wrap m-auto">

          <div className="md:w-1/4 px-4 md:pl-0 md:pr-10">
            <h2 className="text-5xl font-bold mb-2">FAQ</h2>
            <h4 className="text-2xl-2 font-bold pt-2 mb-12 md:mb-0">How can we help you?</h4>
          </div>
          <div className="md:w-3/4 2xl:pr-44 xl:pr-28 lg:pr-28 mt-2">
            {accordions.map((accordion, index) => <Accordion
              title={accordion.title}
              content={accordion.content}
              index={index}
            />)}
          </div>
        </div>
      </div>

  )
}

export default Faq
