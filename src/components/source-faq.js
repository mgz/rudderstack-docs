import React from "react"
import Accordion from "./accordion"

function SourceFaq(props) {
  return (

    
      <div className="px-4 mx-auto">
        <div className="max-w-screen-lg mx-auto flex flex-wrap m-auto">

        <div className="md:w-1/4 px-4 md:pl-0 md:pr-10">
          <h2 className="text-5xl font-bold mb-2">FAQ</h2>
          <h4 className="text-2xl-2 font-bold pt-2 mb-12 md:mb-0">How can we help you?</h4>
        </div>
        <div className="md:w-3/4 2xl:pr-44 xl:pr-28 lg:pr-28 mt-2">
          <Accordion
            title="What does the RudderStack JavaScript SDK do?"
            content='The RudderStack JavaScript API makes it easy for you to send your customer event data from your website to any destination in no time. After integrating this SDK, you will also be able to connect your website to multiple destinations such as Google Analytics, Hotjar, Amplitude, and more, to send your event data in real-time.'
            index={0}
          />
          <Accordion
            title="What are the different JavaScript SDK APIs?"
            content='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
            index={1}
          />
          <Accordion
            title="How do I load analytics.js correctly?"
            content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            index={2}
          />
        </div>
      </div>
      </div>
    
  )
}

export default SourceFaq
