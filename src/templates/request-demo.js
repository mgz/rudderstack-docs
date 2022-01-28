import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import OurLogo from "../components/ourlogo"
import Testimonial from "../components/testimonial"
import MiddleBanner from "../components/middle-banner"
import DemoAdvantages from "../components/DemoAdvantages"
import { ScheduleDemoHdr } from "../components/ScheduleDemoHdr"
import { ScheduleDemoFooter } from "../components/ScheduleDemoFooter"
import PortableText from "../components/portableText"
import Image from "../components/image"
import DynamicInputForm from "../components/dynamicInputForm"
import clientConfig from "../../client-config"


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

const Demo = ({ data, htmlId, location, pageContext }) => {
  /* console.log('slug', pageContext.slug); */
  const lv_scheduledemoheader = (
    data.sanitySchdemo._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "scheduledemoheader")


  const lv_ourlogoblock = data.section_our_logos.edges.filter(
    ii => ii.node.section_name === "request demo"
  )


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
        {pageContext.slug.split('/')[0] === "new-theme" ?
        (
          <section className="section-gradient relative">
            <span className="section-border block absolute bottom-0 left-0 w-full"></span>
            <div className="request-wrapper flex lg:flex-row flex-col">
                <div className="request-left lg:w-1/2 w-full">
                    <div className="request-left-upper lg:w-11/12 w-full lg:rounded-br-3xl">
                        <div className="pt-28 pb-12 pr-10 flex">
                            <div className="request-left-inner w-full lg:max-w-md lg:ml-auto lg:justify-self-end">
                                <h1 className="text-3xl lg:text-5xl text-darkScheme-textPrimary font-bold leading-tight">{data.sanitySchdemo._rawPagebuildersectionarray[0].demo_header_text}</h1>
                                <div className="request-left-content mt-5">
                                    <PortableText
                                        blocks={data.sanitySchdemo._rawPagebuildersectionarray[0].demo_right_content}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="request-left-lower w-11/12 py-16 pl-15 hidden lg:block">
                        <div className="request-left-lower-inner flex ml-auto">
                            <div className="request-logos-wrapper">
                                <ul className="logos-list flex mb-5">
                                    {data.sanitySchdemo._rawPagebuildersectionarray[0].ourlogoimage.filter((o, i) => i < 3).map((i,k) => {
                                            return (
                                                <li key={k._key} className={`mr-16`}>
                                                    <Image
                                                        classes="object-contain"
                                                        props={i.primary_image.asset._ref}
                                                        width="210"
                                                        height="40"
                                                    />
                                                </li>
                                            )
                                    })}
                                </ul>
                                <ul className="logos-list flex ml-16">
                                    {data.sanitySchdemo._rawPagebuildersectionarray[0].ourlogoimage.filter((o, i) => i > 2).map((i,k) => {
                                            return (
                                                <li key={k._key} className={`${k === 10 ? 'mr-0' : 'mr-16'}`}>
                                                    <Image
                                                        classes="object-contain"
                                                        props={i.primary_image.asset._ref}
                                                        width="210"
                                                        height="40"
                                                    />
                                                </li>
                                            )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="section-border lg:hidden block w-full"></span>
                <div className="request-right lg:w-1/2 w-full pt-20">
                    <DynamicInputForm
                    {...data.sanitySchdemo._rawPagebuildersectionarray[0].input_form}
                    location={location}
                    isFromRequest={true}
                    />
                </div>
                <div className="request-logos-wrapper px-4 lg:hidden block">
                    <ul className="logos-list flex mb-5 justify-center">
                        {data.sanitySchdemo._rawPagebuildersectionarray[0].ourlogoimage.map((i,k) => {
                                return (
                                    <li key={k._key} className={`${k === 8 ? 'mr-0' : 'mr-0'}`}>
                                        <Image
                                            classes="object-contain"
                                            props={i.primary_image.asset._ref}
                                            width="210"
                                            height="40"
                                        />
                                    </li>
                                )
                        })}
                    </ul>
                    <ul className="logos-list flex justify-center mb-10">
                        {data.sanitySchdemo._rawPagebuildersectionarray[0].ourlogoimage.map((i,k) => {
                              return (
                                  <li key={k._key} className={`${k === 6 ? 'mr-0' : 'mr-0'}`}>
                                      <Image
                                          classes="object-contain"
                                          props={i.primary_image.asset._ref}
                                          width="210"
                                          height="40"
                                      />
                                  </li>
                              )
                        })}
                    </ul>
                </div>
            </div>
        </section>
        )
         : (
          <React.Fragment>
            {data.sanitySchdemo._rawPagebuildersectionarray.map(section => {
              if (section._type === "demoadvantages") {
                return <DemoAdvantages key={section._key} {...section} />
              } else if (section._type === "scheduledemoheader") {
                return (
                  <ScheduleDemoHdr
                    key={section._key}
                    {...section}
                    location={location}
                  />
                )
              } else if (section._type === "demofooterleft") {
                return (
                  <ScheduleDemoFooter
                    key={section._key}
                    {...section}
                    location={location}
                  />
                )
              } else if (section._type === "ref_section_get_started") {
                let l_section_info = data.section_get_started.edges.find(
                  kl => kl.node._id === section._ref
                )
                return (
                  <section key={section._key} id="get_started">
                    <MiddleBanner {...l_section_info.node._rawGetStarted} />
                  </section>
                )
              } else if (section._type === "ref_section_testimonials") {
                let l_section_info = data.section_testimonials.edges.find(
                  kl => kl.node._id === section._ref
                )
                return (
                  <section key={section._key} id="testimonial">
                    <Testimonial
                      applyGradientColorTheme={false}
                      {...l_section_info.node._rawTestimonials}
                    />
                  </section>
                )
              } else if (section._type === "ref_section_ourlogos") {
                let l_ourLogo_info = data.section_our_logos.edges.find(
                  kl => kl.node._id === section._ref
                )

                return (
                  <section key={section._key} id="our_logos" className="px-8">
                    <OurLogo
                      key={section._key}
                      customHeaderText={`The top companies in the world use RudderStack to activate their customer data`}
                      {...l_ourLogo_info.node._rawOurLogos}
                      // removeSectionVerticalMargin={true}
                    />
                  </section>
                )
              }
            })}
          </React.Fragment>
        )}

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
