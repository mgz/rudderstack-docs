import React from "react"
import PortableText from "./portableText"

const CaseStuduiesPersonalize = props => {
  return (
    <div className="max-w-6xl px-4 md:px-3 mx-auto">
      <div className="flex flex-col justify-center">
        <div className="">
          <h2 className="my-10 text-2xl md:text-5xl font-bold max-w-2xl mx-auto text-center">
            {props.csp_title}
          </h2>
          <div className="text-secondary leading-7 text-sm sm:text-lg frtxt-contnt px-4 md:px-24 text-center mb-8 md:mb-24">
            <PortableText blocks={props.csp_content} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center">
          {props.csp_block_items &&
            props.csp_block_items.map(row => {
              return (
                <div
                  className="w-full md:w-1/3 rounded-xl bg-grayColor-BgGray mx-0 md:mx-4 my-2 px-6 py-10 "
                  key={row._key}
                >
                  <h4 className="text-3xl font-bold text-center my-6">{row.title}</h4>
                  <div className="text-secondary leading-7 text-sm sm:text-lg frtxt-contnt text-center -mb-8">
                    <PortableText blocks={row.content} />
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default CaseStuduiesPersonalize
