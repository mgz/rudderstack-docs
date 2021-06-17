import React, { useState, useEffect } from "react"
import loadable from "@loadable/component"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MiddleBanner from "../components/middle-banner"
import ContactUsForm from "../components/contactUsForm"
const Testimonial = loadable(() => import("../components/testimonial"))

const ContactUs = ({ data }) => {
  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")

  const lv_testimonialsection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "testimonialsection")

  return (
    <Layout>
      <div className="font-custom">
        <section
          id="contact_us_banner"
          className="w-full conract-us-bg mb-16 md:mb-40"
        >
          <div className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-10 mx-auto relative banner-section ">
            <div className="flex flex-col gap-0 md:gap-8 sm:flex-row lg:p-0">
              <div className="z-20 flex flex-col justify-start  w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl sm:w-1/2 sm:px-0 lg:items-start lg:mb-0 ">
                <p class="my-4 text-blueNew-eastbay text-sm font-bold uppercase md:mt-32">
                  Contact Us
                </p>
                <h2
                  className="mb-8 md:mb-4 text-4xl md:text-6xl font-bold leading-tight"
                  style={{ letterSpacing: -4 }}
                >
                  Contact the RudderStack Team
                </h2>
                <div className="max-w-lg">
                  <p className="text-xl-2  font-bold mt-4">
                    Have questions about RudderStack?
                  </p>
                  <br />
                  <p className="text-xl-2 text-secondary">
                    Fill out the form, and our team will be in touch shortly.
                  </p>
                </div>
              </div>
              <div className=" w-full rounded-lg flex justify-center flex-grow justify-items-end sm:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0">
                <div className=" w-full rounded-md group sm:px-0 sm:items-center lg:items-start">
                  <div className="">
                    <ContactUsForm
                      formId="contact_us_form_top"
                      sectionId="contact_us_hdr"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="join_us_section">
          <div className="max-w-6xl px-4 md:px-0 mx-auto my-12">
            <div className="flex flex-col md:flex-row justify-center">
              <div className="w-full md:w-1/2 rounded-xl bg-blueNew-lighter mx-0 md:mx-4 my-2 px-4 md:px-16 py-8 md:py-16 md:h-96 relative">
                <h4 className="text-3xl font-bold  mb-6 ">Join us on Slack</h4>
                <div className="text-secondary leading-7 text-sm sm:text-lg ">
                  Have technical questions or want to connect with our
                  community? Chat live with our team and other RudderStack users
                  on slack.
                </div>
                <a
                  className="btn-primary-lg sm:mr-4 md:mb-0 my-6 w-full md:w-60 md:absolute md:bottom-16"
                  href=""
                >
                  Join our community
                </a>
              </div>

              <div className="w-full md:w-1/2 rounded-xl bg-blueNew-lighter mx-0 md:mx-4 my-2 px-4 md:px-16 py-8 md:py-16 md:h-96 relative">
                <h4 className="text-3xl font-bold  mb-6 ">Read our Docs</h4>
                <div className="text-secondary leading-7 text-sm sm:text-lg ">
                  Don’t want to want to wait around? Check out our technical
                  documentation to find answers to your questions. team, from
                  product to marketing, to build competitive advantage.
                </div>

                <a
                  className="btn-primary-lg sm:mr-4 md:mb-0 my-6 w-full md:w-60 md:absolute md:bottom-16"
                  href=""
                >
                  Read docs
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonial">
          <Testimonial
            applyGradientColorTheme={false}
            {...lv_testimonialsection[0]}
          />
        </section>
        <section id="footer_section_for_demo">
          <MiddleBanner {...lv_middlebannersection[0]} />
        </section>
      </div>
    </Layout>
  )
}

export default ContactUs

export const pageQuery = graphql`
  query {
    sanityFrontpageblock {
      _rawPagebuildersectionarray
    }
  }
`
