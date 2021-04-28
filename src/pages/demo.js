import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DemoForm from "../components/demoForm"
import DemoAdvantageItem from "../components/demoAdvantageItem"
import PortableText from "../components/portableText"
import OurLogo from "../components/ourlogo"
import Testimonial from "../components/testimonial"
import MiddleBanner from "../components/middle-banner"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
export const query = graphql`
  query schDemo {
    sanitySchdemo {
      title
      _rawPagebuildersectionarray
      slug {
        current
      }
    }
    sanityFrontpageblock {
      _rawPagebuildersectionarray
    }
  }
`

const Demo = ({ data }) => {
  const lv_scheduledemoheader = (
    data.sanitySchdemo._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "scheduledemoheader")

  const lv_demoadvantages = (
    data.sanitySchdemo._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "demoadvantages")

  const lv_demofooterleft = (
    data.sanitySchdemo._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "demofooterleft")

  const lv_ourlogoblock = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "ourlogoblock")

  const lv_testimonialsection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "testimonialsection")

  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")

  return (
    <Layout>
      <SEO title="Schedule Demo" />
      <section id="demo_hdr">
        <div className="relative demo-header pt-20 lg:pt-32">
          {/* <div className="demo-header-bg-img bottom-2 right-2 w-full"></div> */}
          <StaticImage
            src={"../images/demo-background.png"}
            alt={"sssss"}
            // layout="relative"
            className="hidden md:block absolute bottom-4 right-4"
            width={640}
            height={270}
          />
          <div className="text-whiteColor-custom text-4xl md:text-5xl font-bold">
            <PortableText blocks={lv_scheduledemoheader[0].demo_header_text} />
          </div>
        </div>
        <div className="bg-whiteColor-custom  bg-current flex flex-row mb-6">
          <div className="w-full pl-4 pr-4 md:w-3/6 md:pl-16 xl:pl-60">
            <DemoForm
              submitDemoButtonName={lv_scheduledemoheader[0].button.btntext}
              onDemoFormSubmit={data => {
                console.log("form Data", data)
              }}
            />
          </div>
          <div
            className="w-0 hidden px-8 pt-12 lg:pl-16 lg:pr-56 lg:pt-20 text-xl  md:w-3/6 md:block"
            style={{ lineHeight: "35px" }}
          >
            <PortableText
              blocks={lv_scheduledemoheader[0].demo_right_content}
            />
          </div>
        </div>
      </section>
      <section id="demo_advantages">
        <div className="px-0 pb-0 pt-4  sm:px-12 lg:px-48 lg:pt-20 bg-grayColor-BgGray flex flex-col justify-center text-center">
          <div className="mb-24">
            <span className="text-3xl md:text-5xl font-bold">
              {lv_demoadvantages[0].advantage_header_text}
            </span>
          </div>
          <div className="flex flex-wrap flex-row">
            {(lv_demoadvantages[0].demo_content || []).map((itm, idx) => {
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
      </section>
      <section id="logos">
        <OurLogo
          customHeaderText="The top companies in the world use RudderStack to Activate their customer data"
          {...lv_ourlogoblock[0]}
        />
      </section>
      <section id="testimonials">
        <Testimonial {...lv_testimonialsection[0]} />
      </section>
      <section id="demo_bottom">
        <div className="bg-whiteColor-custom  bg-current flex flex-row my-8 sm:mb-24 sm:mt-36">
          <div className="w-0 hidden px-8 pt-0 lg:pl-16 lg:pr-56 text-xl  md:w-3/6 md:block">
            <div className="mb-8" style={{ lineHeight: "60px" }}>
              <span className="text-4xl font-bold">
                {lv_demofooterleft[0].demo_footer_header_text}
              </span>
            </div>
            <div style={{ lineHeight: "35px" }}>
              <PortableText blocks={lv_demofooterleft[0].demo_footer_desc} />
            </div>
          </div>
          <div className="w-full px-4 md:w-3/6 md:pr-16 xl:pr-60">
            <div className=" md:hidden text-center mb-4">
              <span className="text-3xl font-bold">
                {lv_demofooterleft[0].demo_footer_header_text}
              </span>
            </div>
            <DemoForm
              submitDemoButtonName={lv_scheduledemoheader[0].button.btntext}
              isFooterForm={true}
              onDemoFormSubmit={data => {
                console.log("form Data", data)
              }}
            />
          </div>
        </div>
      </section>
      <section id="footer_section_for_demo">
        <MiddleBanner {...lv_middlebannersection[0]} />
      </section>
    </Layout>
  )
}

export default Demo
