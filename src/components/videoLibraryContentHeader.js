import React, { useState } from "react"
import { navigate } from "gatsby"
import VideoRequestForm from "../components/videoRequestForm"

const VideoLibraryContentHeader = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false)

  const onFormSubmit = data => {
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

  return (
    <section className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-40 mx-auto relative banner-section video-banner-bg">
      <div className="flex flex-col items-center md:gap-12 xl:gap-16 justify-center mx-auto lg:flex-row lg:p-0">
        <div className="relative z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-3/5 sm:px-0 lg:items-start lg:mb-0 hero-content">
          <p class="my-4 text-blue text-sm uppercase">ON DEMAND</p>
          <h2 className="mb-8 md:mb-4 md:text-6xl text-5xl font-bold leading-tight">
            The Customer Data Stack Journey: Architecting a Scalable Stack
          </h2>
          <p className="sm:pt-8">Duration: 1 hour</p>
        </div>
        <div className="relative w-full px-5 rounded-lg flex-grow justify-items-end lg:w-2/5 sm:px-0 sm:items-center lg:items-start lg:mb-0">
          <div className="relative rounded-md group sm:px-0 sm:items-center lg:items-start">
            <div className="absolute">
              <VideoRequestForm
                formId="video_library_demo_form_top"
                formHeaderText={"Register Now"}
                formShortDesc={"Register to watch now this video."}
                submitDemoButtonName={"Register Now"}
                onDemoFormSubmit={onFormSubmit}
                isLoading={isLoading}
                sectionId="video_library_hdr"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoLibraryContentHeader
