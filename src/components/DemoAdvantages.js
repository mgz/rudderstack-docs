import React from "react"
import DemoAdvantageItem from "./demoAdvantageItem"

const DemoAdvantages = props => {
//   console.log("Demo Advantages", props)
  return (
    <section id="demo_advantages">
      <div className="w-full bg-grayColor-BgGray">
        <div className="pb-0 pt-12 max-w-6xl mx-auto px-4 md:px-3 lg:pt-20 bg-grayColor-BgGray flex flex-col justify-center text-center">
          <div className="sm:mb-24 mb-10">
            <span className="text-3xl md:text-5xl font-bold text-blueNew-midnight">
              {props.advantage_header_text}
            </span>
          </div>
          <div className="flex flex-wrap flex-row">
            {(props.demo_content || []).map((itm, idx) => {
              return (
                <div
                  key={itm._key}
                  className={`${
                    idx === 2
                      ? "w-full px-0 sm:px-12 lg:px-40"
                      : "w-full sm:w-1/2"
                  }`}
                >
                  <DemoAdvantageItem data={itm} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
export default DemoAdvantages
