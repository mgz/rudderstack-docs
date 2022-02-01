import React from "react"
import DynamicInputForm from "./dynamicInputForm"
import PortableText from "./portableText"

export const ScheduleDemoFooter = props => {
  return (
    <section id="demo_bottom">
      <div className="bg-whiteColor-custom  bg-current flex flex-row flex-wrap my-8 max-w-6xl mx-auto px-6 sm:mb-24 sm:mt-12 md:mt-36">
        <div className="w-full pr-4 lg:pr-16 pt-0  text-xl  md:w-3/6 md:block">
          <div className="mb-4">
            <span className="text-3xl-2 text-center sm:text-left sm:text-5xl font-medium leading-tight text-blueNew-midnight">
              {props.demo_footer_header_text}
            </span>
          </div>
          <div className="text-xl-2 text-grayColor-custom mb-12">
            <PortableText blocks={props.demo_footer_desc} />
          </div>
        </div>
        <div className="w-full px-0 md:w-3/6 flex flex-row justify-end">
          <DynamicInputForm
            {...props.input_form}
            add_on_styling={"top-0"}
            location={props.location}
          />
        </div>
      </div>
    </section>
  )
}
