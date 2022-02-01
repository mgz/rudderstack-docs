import React from "react"
import DynamicInputForm from "./dynamicInputForm"
import PortableText from "./portableText"

export const ScheduleDemoHdr = props => {
  return (
    <section id="demo_hdr">
      <div className="demo-header">
        <div className=" flex flex-col justify-center items-center demo-header-bg w-full">
          <h1 className=" px-2 text-5xl md:text-6xl font-bold max-w-screen-md leading-tight tracking-tighter">
            {props.demo_header_text}
          </h1>
        </div>
      </div>
      <div className="bg-whiteColor-custom w-full">
        <div className="bg-whiteColor-custom bg-current flex flex-row flex-wrap mb-10 md:-mb-7 lg:mb-2 pb-0 pt-12 max-w-6xl mx-auto px-6">
          <div className="w-full md:w-3/6 mb-0 sm:-mb-20 md:mb-0 xl:flex xl:flex-row-reverse">
            <DynamicInputForm
              {...props.input_form}
              add_on_styling={"-top-24"}
              location={props.location}
            />
          </div>
          <div
            className="w-full pr-4 sm:pl-4 pt-0 -mt-8 sm:mt-0 sm:pt-8 lg:pl-20  text-xl-2 md:w-3/6 text-grayColor-custom"
            style={{ lineHeight: "35px" }}
          >
            <PortableText blocks={props.demo_right_content} />
          </div>
        </div>
      </div>
    </section>
  )
}
