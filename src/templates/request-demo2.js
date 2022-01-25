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
import Image from "../components/image"
import { template } from "lodash-es"

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
  query schDemo1($slug: String) {
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
  //console.log("request-demo", data)
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
        <section className="section-gradient relative">
            <span className="section-border block absolute bottom-0 left-0 w-full"></span>
            <div className="request-wrapper flex lg:flex-row flex-col">
                <div className="request-left lg:w-1/2 w-full">
                    <div className="request-left-upper lg:w-11/12 w-full lg:rounded-br-3xl">
                        <div className="pt-19 pb-12 pr-10 flex">
                            <div className="request-left-inner w-full lg:max-w-md lg:ml-auto lg:justify-self-end">
                                <h1 className="text-3xl lg:text-5xl text-darkScheme-textPrimary font-bold leading-tight">In this 15 minute demo, you'll discover</h1>
                                <div className="request-left-content mt-5">
                                    <PortableText
                                        blocks={lv_scheduledemoheader[0].demo_right_content}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="request-left-lower w-11/12 py-16 pl-15 hidden lg:block">
                        <div className="request-left-lower-inner flex ml-auto">
                            <div className="request-logos-wrapper">
                                <ul className="logos-list flex mb-5">
                                    {lv_ourlogoblock[0].node._rawOurLogos.outlogoimage.map((i,k) => {
                                        if(k === 2 || k === 3 || k === 8){
                                            return (
                                                <li key={k._key} className={`mr-16`}>
                                                    <Image
                                                        classes="object-contain"
                                                        props={i.asset._ref}
                                                        width="210"
                                                        height="40"
                                                    />
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>
                                <ul className="logos-list flex ml-16">
                                    {lv_ourlogoblock[0].node._rawOurLogos.outlogoimage.map((i,k) => {
                                        if(k === 0 || k === 1 || k === 6){
                                            return (
                                                <li key={k._key} className={`${k === 10 ? 'mr-0' : 'mr-16'}`}>
                                                    <Image
                                                        classes="object-contain"
                                                        props={i.asset._ref}
                                                        width="210"
                                                        height="40"
                                                    />
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="section-border lg:hidden block w-full"></span>
                <div className="request-right lg:w-1/2 w-full">
                    <DynamicInputForm
                    {...lv_scheduledemoheader[0].input_form}
                    location={location}
                    isFromRequest={true}
                    />
                </div>
                <div className="request-logos-wrapper lg:hidden flex mb-10 w-11/12 mx-auto">
                  <ul className="logos-list flex mb-5 w-1/2 items-center">
                      {lv_ourlogoblock[0].node._rawOurLogos.outlogoimage.map((i,k) => {
                          if(k === 2 || k === 3 || k === 8){
                              return (
                                  <li key={k._key} className={`mb-5`}>
                                      <Image
                                          classes="object-contain"
                                          props={i.asset._ref}
                                          width="210"
                                          height="40"
                                      />
                                  </li>
                              )
                          }
                      })}
                  </ul>
                  <ul className="logos-list flex flex-col w-1/2 items-center">
                      {lv_ourlogoblock[0].node._rawOurLogos.outlogoimage.map((i,k) => {
                          if(k === 0 || k === 1 || k === 6){
                              return (
                                  <li key={k._key} className="mb-5">
                                      <Image
                                          classes="object-contain"
                                          props={i.asset._ref}
                                          width="210"
                                          height="40"
                                      />
                                  </li>
                              )
                          }
                      })}
                  </ul>
              </div>
            </div>
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
