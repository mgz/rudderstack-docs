import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import DemoAdvantageItem from "../components/demoAdvantageItem"
import PortableText from "../components/portableText"
import OurLogo from "../components/ourlogo"
import Testimonial from "../components/testimonial"
import MiddleBanner from "../components/middle-banner"
import clientConfig from "../../client-config"
import DynamicInputForm from "../components/dynamicInputForm"

// const Layout = loadable(() => import("../components/layout"))
// const SEO = loadable(() => import("../components/seo"))
// const DemoForm = loadable(() => import("../components/demoForm"))
// const DemoAdvantageItem = loadable(() =>
//   import("../components/demoAdvantageItem")
// )
// const PortableText = loadable(() => import("../components/portableText"))
// const OurLogo = loadable(() => import("../components/ourlogo"))
// const Testimonial = loadable(() => import("../components/testimonial"))
// const MiddleBanner = loadable(() => import("../components/middle-banner"))

export const query = graphql`
  query schDemo($slug: String) {
    sanitySchdemo(slug: { current: { eq: $slug } }) {
      title
      _rawPagebuildersectionarray
      slug {
        current
      }
      meta_title
      meta_desc
      enable_no_follow_no_index
    }
    section_get_started: allSanitySectionGetStarted {
      edges {
        node {
          _id
          section_name
          _rawGetStarted
        }
      }
    }

    section_our_logos: allSanitySectionOurlogos {
      edges {
        node {
          _id
          section_name
          _rawOurLogos
        }
      }
    }
    section_testimonials: allSanitySectionTestimonials {
      edges {
        node {
          _id
          section_name
          _rawTestimonials
        }
      }
    }
    allSanityFormInput {
      nodes {
        _id
        tracking_field_name
        title
        submit_button_text
        formheader
        _rawFields
      }
    }
  }
`

const Demo = ({ data, htmlId, location }) => {
  console.log("request-demo", data)
  const lv_scheduledemoheader = (
    data.sanitySchdemo._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "scheduledemoheader")

  const lv_demoadvantages = (
    data.sanitySchdemo._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "demoadvantages")

  const lv_demofooterleft = (
    data.sanitySchdemo._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "demofooterleft")

  const lv_ourlogoblock = data.section_our_logos.edges.filter(
    ii => ii.node._id === clientConfig.defaultCommonSection_Ids.ourLogos
  )

  const lv_testimonialsection = data.section_testimonials.edges.filter(
    ii => ii.node._id === clientConfig.defaultCommonSection_Ids.testimonials
  )

  const lv_middlebannersection = data.section_get_started.edges.filter(
    ii => ii.node._id === clientConfig.defaultCommonSection_Ids.getStarted
  )
  // const [isLoading, setIsLoading] = useState(false)

  // const onDemoFormSubmit = data => {
  //   // console.log('on demo submit',data)
  //   try {
  //     if (!window.rudderanalytics) {
  //       return
  //     }
  //     setIsLoading(true)

  //     var params = new URLSearchParams(document.location.search.substring(1))

  //     window.rudderanalytics.identify(
  //       data.email,
  //       {
  //         email: data.email,
  //         firstName: data.firstName,
  //         jobTitle: data.jobTitle,
  //         company: data.company,
  //         form_id: data.formId,
  //         conversion_page: document.title,
  //         utm_source: params.get("utm_source"),
  //         utm_medium: params.get("utm_medium"),
  //         utm_campaign: params.get("utm_campaign"),
  //         utm_content: params.get("utm_content"),
  //         utm_term: params.get("utm_term"),
  //         raid: params.get("raid"),
  //         test_user: params.get("test_user"),
  //       },
  //       {
  //         integrations: {
  //           Salesforce: true,
  //         },
  //       }
  //     )
  //     // console.log("step2")

  //     window.rudderanalytics.track(
  //       "form_submit",
  //       {
  //         page: document.title,
  //         page_URL: window.location.href,
  //         form_id: data.formId,
  //         label: data.formId,
  //         category: data.sectionId,
  //         conversion_page: document.title,
  //         utm_source: params.get("utm_source"),
  //         utm_medium: params.get("utm_medium"),
  //         utm_campaign: params.get("utm_campaign"),
  //         utm_content: params.get("utm_content"),
  //         utm_term: params.get("utm_term"),
  //         raid: params.get("raid"),
  //         test_user: params.get("test_user"),
  //       },
  //       {
  //         traits: {
  //           email: data.email,
  //           firstName: data.firstName,
  //           jobTitle: data.jobTitle,
  //           company: data.company,
  //           form_id: data.formId,
  //           conversion_page: document.title,
  //         },
  //       }
  //     )
  //     // console.log("step3")
  //     fetch("https://usebasin.com/f/73ab69b8652a.json", {
  //       method: "post",
  //       body: JSON.stringify({
  //         "First-Name": data.firstName,
  //         Email: data.email,
  //         Company: data.company,
  //         "Job-Title": data.jobTitle,
  //         form_id: data.formId,
  //         utm_source: params.get("utm_source"),
  //         utm_medium: params.get("utm_medium"),
  //         utm_campaign: params.get("utm_campaign"),
  //         utm_content: params.get("utm_content"),
  //         utm_term: params.get("utm_term"),
  //         raid: params.get("raid"),
  //         test_user: params.get("test_user"),
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then(res => {
  //         // console.log('usebasin',res)
  //         if (res.ok || res.statusText === "OK") {
  //           // console.log("success ", res)
  //           // window.ChiliPiper.scheduling(
  //           //   "rudderstack",
  //           //   "demo-or-quote-request",
  //           //   { formId: data.formId }
  //           // )
  //           // navigate("/request-demo/thank-you")
  //         }
  //       })
  //       .catch(err => {
  //         throw err
  //       })
  //   } catch (err) {
  //     console.log("errror exception", err)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  /* console.log("sss", location) */
  return (
    <Layout location={location}>
      {/* <SEO title="Schedule Demo" /> */}
      <Helmet>
        <title>
          {data.sanitySchdemo.meta_title || data.sanitySchdemo.title}
        </title>
        {data.sanitySchdemo.enable_no_follow_no_index === true && (
          <meta name="robots" content="noindex" data-react-helmet="true" />
        )}
        {data.sanitySchdemo.enable_no_follow_no_index === true && (
          <meta name="robots" content="nofollow" data-react-helmet="true" />
        )}
        <meta
          property="og:title"
          content={data.sanitySchdemo.meta_title || data.sanitySchdemo.title}
        />
        <meta
          property="twitter:title"
          content={data.sanitySchdemo.meta_title || data.sanitySchdemo.title}
        />
        <meta name="description" content={data.sanitySchdemo.meta_desc} />
        <meta
          property="og:description"
          content={data.sanitySchdemo.meta_desc}
        />
        <meta
          property="twitter:description"
          content={data.sanitySchdemo.meta_desc}
        />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="font-custom">
        <section id="demo_hdr">
          <div className="demo-header">
            <div className=" flex flex-col justify-center items-center demo-header-bg w-full">
              <h1 className=" px-2 text-5xl md:text-6xl font-bold max-w-screen-md leading-tight tracking-tighter">
                {lv_scheduledemoheader[0].demo_header_text}
              </h1>
            </div>
          </div>
          <div className="bg-whiteColor-custom w-full">
            <div className="bg-whiteColor-custom bg-current flex flex-row flex-wrap mb-10 md:-mb-7 lg:mb-2 pb-0 pt-12 max-w-6xl mx-auto px-6">
              <div className="w-full md:w-3/6 mb-0 sm:-mb-20 md:mb-0 xl:flex xl:flex-row-reverse">
                <DynamicInputForm
                  {...lv_scheduledemoheader[0].input_form}
                  add_on_styling={"-top-24"}
                  location={location}
                />

                {/* <DemoForm
                  formId={`${location.pathname
                    .replace("/", "")
                    .replace("-", "_")}_form_top`}
                  submitDemoButtonName={lv_scheduledemoheader[0].button.btntext}
                  onDemoFormSubmit={onDemoFormSubmit}
                  isLoading={isLoading}
                  sectionId="demo_hdr"
                /> */}
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
            customHeaderText={`The top companies in the world use RudderStack to activate their customer data`}
            {...lv_ourlogoblock[0].node._rawOurLogos}
          />
        </section>
        <section id="testimonials">
          <Testimonial
            {...lv_testimonialsection[0].node._rawTestimonials}
            isForDemoPage={true}
          />
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
              <DynamicInputForm
                {...lv_demofooterleft[0].input_form}
                add_on_styling={"top-0"}
                location={location}
              />

              {/* <DemoForm
                submitDemoButtonName={lv_scheduledemoheader[0].button.btntext}
                formId={`${location.pathname
                  .replace("/", "")
                  .replace("-", "_")}_form_bottom`}
                // formId="request_demo_form_bottom"
                isFooterForm={true}
                isLoading={isLoading}
                onDemoFormSubmit={onDemoFormSubmit}
                sectionId="demo_bottom"
              /> */}
            </div>
          </div>
        </section>
        <section id="footer_section_for_demo">
          <MiddleBanner {...lv_middlebannersection[0].node._rawGetStarted} />
        </section>
      </div>
      {((location && location.pathname === "/request-demo-chili-piper-test/") ||
        (location &&
          location.pathname === "/request-demo-chili-piper-test")) && (
        <Helmet>
          <script>
            {`
         function q(a){return function(){ChiliPiper[a].q=(ChiliPiper[a].q||[]).concat([arguments])}}window.ChiliPiper=window.ChiliPiper||"submit scheduling showCalendar submit widget bookMeeting".split(" ").reduce(function(a,b){a[b]=q(b);return a},{});
         ChiliPiper.scheduling("rudderstack", "test_router", {title: "Thanks! What time works best for a quick call?"})
        `}
          </script>
          {/* <script>
          {`
          function q(a){return function(){ChiliPiper[a].q=(ChiliPiper[a].q||[]).concat([arguments])}}window.ChiliPiper=window.ChiliPiper||"submit scheduling showCalendar submit widget bookMeeting".split(" ").reduce(function(a,b){a[b]=q(b);return a},{});
          ChiliPiper.scheduling("rudderstack", "demo-or-quote-request", {formId: "request_demo_form_bottom"})
        `}
        </script> */}
          <script
            src="https://js.na.chilipiper.com/marketing.js"
            type="text/javascript"
            async
          />
        </Helmet>
      )}
    </Layout>
  )
}

export default Demo
