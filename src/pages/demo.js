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

const Demo = ({ data, htmlId }) => {
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

  const onDemoFormSubmit = data => {
    // if (!window.rudderanalytics) {
    //   console.log("rudderanalytics not found")
    //   return
    // }
    // window.rudderanalytics.track(
    //   "form_submit",
    //   {
    //     page: document.title,
    //     page_URL: window.location.href,
    //     form_id: "Blog-header-Subscribe-form",
    //     utm_source: "",
    //     utm_medium: "",
    //     utm_campaign: "",
    //     utm_content: "",
    //     utm_term: "",
    //     raid: "",
    //     test_user: "",
    //   },
    //   {
    //     traits: {
    //       firstName: data.firstName,
    //       email: data.email,
    //       company: data.company,
    //       jobTitle: data.jobTitle,
    //       form_id: htmlId,
    //     },
    //   }
    // )
    // console.log(res, "res")
  }
  return (
    <Layout>
      <SEO title="Schedule Demo" />
      <div className="font-custom">
        <section id="demo_hdr">
          <div className="relative demo-header flex flex-col justify-center items-center">
            <StaticImage
              src={"../images/demo-background.png"}
              alt={"background"}
              style={{ zIndex: -1, width: "45%" }}
              className="hidden md:block absolute bottom-0 right-0 "
              // width={'45%'}
              // height={270}
            />
            <div
              className="text-whiteColor-custom px-2 text-5xl md:text-6xl font-bold max-w-screen-md leading-tight"
              // style={{ lineHeight: "70px" }}
            >
              <PortableText
                blocks={lv_scheduledemoheader[0].demo_header_text}
              />
            </div>
          </div>
          <div className="bg-whiteColor-custom w-full">
            <div className="bg-whiteColor-custom bg-current flex flex-row flex-wrap mb-6 pb-0 pt-12 max-w-6xl mx-auto px-4 md:px-3">
              <div className="w-full md:w-3/6 pr-0 sm:pr-4 xl:flex xl:flex-row-reverse">
                <DemoForm
                  submitDemoButtonName={lv_scheduledemoheader[0].button.btntext}
                  onDemoFormSubmit={onDemoFormSubmit}
                />
              </div>
              <div
                className="w-full pl-0 pt-0 -mt-8 sm:mt-0 sm:pt-8 lg:pl-20 lg:py-20 text-xl-2 md:w-3/6 text-grayColor-custom"
                style={{ lineHeight: "35px" }}
              >
                <PortableText
                  blocks={lv_scheduledemoheader[0].demo_right_content}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="demo_advantages">
          {/* sm:px-12 lg:px-32 xl:px-60 */}
          <div className='w-full bg-grayColor-BgGray'>
            <div className="pb-0 pt-12 max-w-6xl mx-auto px-4 md:px-3 lg:pt-20 bg-grayColor-BgGray flex flex-col justify-center text-center">
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
          </div>
        </section>
        <section id="logos" className="px-8">
          <OurLogo
            customHeaderText={`The top companies in the world use RudderStack to Activate their customer data`}
            {...lv_ourlogoblock[0]}
          />
        </section>
        <section id="testimonials">
          <Testimonial {...lv_testimonialsection[0]} />
        </section>
        {/* sm:px-12 lg:px-32 xl:px-60 */}
        <section id="demo_bottom">
          <div className="bg-whiteColor-custom  bg-current flex flex-row flex-wrap my-8 max-w-6xl mx-auto px-4 md:px-3 sm:mb-24 sm:mt-40">
            <div className="w-full pr-8 pt-0  text-xl  md:w-3/6 md:block">
              <div className="mb-4">
                <span className="text-3xl-2 text-center sm:text-left sm:text-5xl font-medium leading-tight">
                  {lv_demofooterleft[0].demo_footer_header_text}
                </span>
              </div>
              <div className="text-xl-2 text-grayColor-custom mb-12">
                <PortableText blocks={lv_demofooterleft[0].demo_footer_desc} />
              </div>
            </div>
            <div className="w-full px-0 md:w-3/6 md:pr-16 xl:pr-60">
              <DemoForm
                submitDemoButtonName={lv_scheduledemoheader[0].button.btntext}
                isFooterForm={true}
                onDemoFormSubmit={onDemoFormSubmit}
              />
            </div>
          </div>
        </section>
        <section id="footer_section_for_demo">
          <MiddleBanner {...lv_middlebannersection[0]} />
        </section>
      </div>
    </Layout>
  )
}

export default Demo
