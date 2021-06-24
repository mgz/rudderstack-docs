import React from "react"
import PortableText from "./portableText"

const HeroBannerCloud = props => {
  return (
    <section className="w-full product-page_banner text-white lg:py-0 py-10 flex justify-center items-center relative overflow-hidden">
      <div className="max-w-6xl sm:pb-20 pb-4 p1-16 px-4 md:px-3 mx-auto">
        <div className="flex flex-col items-center justify-center mx-auto lg:flex-row lg:p-0">
          <div className="z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-3/5 sm:px-0sm:items-center lg:items-start lg:mb-0 ">
            <h2 className="mb-8 md:mt-4 md:mb-0 md:text-6xl text-5xl  font-bold leading-none">
              {props.herobannertitle}
            </h2>
            <h3 className="text-3xl leading-10 font-bold md:mt-5 mb-8">
              {props.herobannersmalltitle}
            </h3>
            <div className="text-white text-lg leading-6 lg:pr-36 frtxt-contnt">
              <PortableText blocks={props.herobannercontent} />
            </div>

            <div className="block sm:flex justify-center items-center mt-12">
              <a
                className="btn-primary-lg bg-white text-dark hover:bg-blueNew-midnight hover:text-white sm:mr-4 md:mb-0 mb-6 border-transparent"
                href="https://app.rudderstack.com/signup?type=freetrial"
              >
                Sign up for free
              </a>
              <a
                className="btn-secondary-lg sm:mr-4 md:mb-0 mb-4"
                href="/request-demo"
              >
                Get a demo
              </a>
            </div>
          </div>
          <div className="relative w-full px-5 rounded-lg flex-grow justify-items-end lg:w-2/5 sm:px-0 sm:items-center lg:items-start lg:mb-0">
            <div class="iframe-container">
              <iframe
                src={props.herobanneryoutube_url.url}
                frameborder="0"
                allowfullscreen
                class="video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBannerCloud
