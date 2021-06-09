import React, { useState } from "react"
import { graphql, Link, navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DemoForm from "../components/demoForm"
import DemoAdvantageItem from "../components/demoAdvantageItem"
import PortableText from "../components/portableText"
import OurLogo from "../components/ourlogo"
import Testimonial from "../components/testimonial"
import MiddleBanner from "../components/middle-banner"
import $ from "jquery"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

export const query = graphql`
  query schDemo($slug: String) {
    sanitySchdemo(slug: { current: { eq: $slug } }) {
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

const Demo = ({ data, htmlId, location }) => {
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

  const [isLoading, setIsLoading] = useState(false)

  const onDemoFormSubmit = data => {
    // console.log('on demo submit',data)
    try {
      if (!window.rudderanalytics) {
        return
      }
      setIsLoading(true)

      var params = new URLSearchParams(document.location.search.substring(1))

      window.rudderanalytics.identify(
        data.email,
        {
          email: data.email,
          firstName: data.firstName,
          jobTitle: data.jobTitle,
          company: data.company,
          form_id: data.formId,
          conversion_page: document.title,
          utm_source: params.get("utm_source"),
          utm_medium: params.get("utm_medium"),
          utm_campaign: params.get("utm_campaign"),
          utm_content: params.get("utm_content"),
          utm_term: params.get("utm_term"),
          raid: params.get("raid"),
          test_user: params.get("test_user"),
        },
        {
          integrations: {
            Salesforce: true,
          },
        }
      )
      // console.log("step2")

      window.rudderanalytics.track(
        "form_submit",
        {
          page: document.title,
          page_URL: window.location.href,
          form_id: data.formId,
          label: data.formId,
          category: data.sectionId,
          conversion_page: document.title,
          utm_source: params.get("utm_source"),
          utm_medium: params.get("utm_medium"),
          utm_campaign: params.get("utm_campaign"),
          utm_content: params.get("utm_content"),
          utm_term: params.get("utm_term"),
          raid: params.get("raid"),
          test_user: params.get("test_user"),
        },
        {
          traits: {
            email: data.email,
            firstName: data.firstName,
            jobTitle: data.jobTitle,
            company: data.company,
            form_id: data.formId,
            conversion_page: document.title,
          },
        }
      )
      // console.log("step3")
      fetch("https://usebasin.com/f/73ab69b8652a.json", {
        method: "post",
        body: JSON.stringify({
          "First-Name": data.firstName,
          Email: data.email,
          Company: data.company,
          "Job-Title": data.jobTitle,
          form_id: data.formId,
          utm_source: params.get("utm_source"),
          utm_medium: params.get("utm_medium"),
          utm_campaign: params.get("utm_campaign"),
          utm_content: params.get("utm_content"),
          utm_term: params.get("utm_term"),
          raid: params.get("raid"),
          test_user: params.get("test_user"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(res => {
          // console.log('usebasin',res)
          if (res.ok || res.statusText === "OK") {
            navigate("/request-demo/thank-you")
          }
        })
        .catch(err => {
          throw err
        })
    } catch (err) {
      console.log("errror exception", err)
    } finally {
      setIsLoading(false)
    }
  }

  // console.log("sss", location)
  return (
    <Layout location={location}>
      <SEO title="Schedule Demo" />
      <div className="font-custom">
        <section id="demo_hdr">
          <div className="demo-header">
            <div className=" flex flex-col justify-center items-center demo-header-bg w-full">
              <div className="text-whiteColor-custom px-2 text-5xl md:text-6xl font-bold max-w-screen-md leading-tight tracking-tighter">
                {lv_scheduledemoheader[0].demo_header_text}
              </div>
            </div>
          </div>
          <div className="bg-whiteColor-custom w-full">
            <div className="bg-whiteColor-custom bg-current flex flex-row flex-wrap mb-10 md:-mb-7 lg:mb-2 pb-0 pt-12 max-w-6xl mx-auto px-6">
              <div className="w-full md:w-3/6 mb-0 sm:-mb-20 md:mb-0 xl:flex xl:flex-row-reverse">
                <DemoForm
                  formId={`${location.pathname
                    .replace("/", "")
                    .replace("-", "_")}_form_top`}
                  submitDemoButtonName={lv_scheduledemoheader[0].button.btntext}
                  onDemoFormSubmit={onDemoFormSubmit}
                  isLoading={isLoading}
                  sectionId="demo_hdr"
                />
              </div>
              <div
                className="w-full pr-4 sm:pl-4 pt-0 -mt-8 sm:mt-0 sm:pt-8 lg:pl-20  text-xl-2 md:w-3/6 text-grayColor-custom"
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
          <div className="w-full bg-grayColor-BgGray">
            <div className="pb-0 pt-12 max-w-6xl mx-auto px-4 md:px-3 lg:pt-20 bg-grayColor-BgGray flex flex-col justify-center text-center">
              <div className="sm:mb-24 mb-10">
                <span className="text-3xl md:text-5xl font-bold text-blueNew-midnight">
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
          <Testimonial {...lv_testimonialsection[0]} isForDemoPage={true} />
        </section>
        {/* sm:px-12 lg:px-32 xl:px-60 */}
        <section id="demo_bottom">
          <div className="bg-whiteColor-custom  bg-current flex flex-row flex-wrap my-8 max-w-6xl mx-auto px-6 sm:mb-24 sm:mt-12 md:mt-36">
            <div className="w-full pr-4 lg:pr-16 pt-0  text-xl  md:w-3/6 md:block">
              <div className="mb-4">
                <span className="text-3xl-2 text-center sm:text-left sm:text-5xl font-medium leading-tight text-blueNew-midnight">
                  {lv_demofooterleft[0].demo_footer_header_text}
                </span>
              </div>
              <div className="text-xl-2 text-grayColor-custom mb-12">
                <PortableText blocks={lv_demofooterleft[0].demo_footer_desc} />
              </div>
            </div>
            <div className="w-full px-0 md:w-3/6 flex flex-row justify-end">
              <DemoForm
                submitDemoButtonName={lv_scheduledemoheader[0].button.btntext}
                formId={`${location.pathname
                  .replace("/", "")
                  .replace("-", "_")}_form_bottom`}
                // formId="request_demo_form_bottom"
                isFooterForm={true}
                isLoading={isLoading}
                onDemoFormSubmit={onDemoFormSubmit}
                sectionId="demo_bottom"
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
