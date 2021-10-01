import React from "react"
// import ContactUsForm from "./contactUsForm"
import DynamicInputForm from "./dynamicInputForm"
import PortableText from "./portableText"

const HeroBannerContactUs = props => {
  return (
    <section
      id="contact_us_banner"
      className="w-full conract-us-bg mb-16 md:mb-40"
    >
      <div className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-10 mx-auto relative banner-section ">
        <div className="flex flex-col gap-0 md:gap-8 sm:flex-row lg:p-0">
          <div className="z-20 flex flex-col justify-start  w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl sm:w-1/2 sm:px-0 lg:items-start lg:mb-0 ">
            <p class="my-4 text-blueNew-eastbay text-sm font-bold uppercase md:mt-32">
              {props.smalltitle}
            </p>
            <h2
              className="mb-8 md:mb-4 text-4xl md:text-6xl font-bold leading-tight"
              style={{ letterSpacing: -4 }}
            >
              {props.title}
            </h2>
            <div className="max-w-lg text-xl-2 frtxt-contnt text-grayColor-custom">
              <PortableText blocks={props.content} trackSectionHeader={props.title} />
            </div>
          </div>
          <div className=" w-full rounded-lg flex justify-center flex-grow justify-items-end sm:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0">
            <div className=" w-full rounded-md group sm:px-0 sm:items-center lg:items-start">
              <div className="mx-0 md:mx-8">
                <DynamicInputForm {...props.input_form} />
                {/* <ContactUsForm
                  formId="contact_us_form_top"
                  sectionId="contact_us_hdr"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBannerContactUs
