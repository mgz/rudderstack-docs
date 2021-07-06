import React from "react"

const HeroBannerAboutUs = props => {
  return (
    <div className="mt-16 mx-auto about-us-banner lg:pb-20">
      <section className="overflow-x-hidden bg-gradient-to-t from-white-custom via-blueNew-lighter to-blueNew-lighter">
        <div class="max-w-6xl md:mt-16 px-3 md:px-3 mx-auto flex flex-wrap flex-col md:items-center md:text-center">
          <div className="uppercase text-sm mb-5 text-blueNew-eastbay font-bold">
            {props.herobannerheading}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-custom leading-snug text-blueNew-midnight">
            {props.herobannertitle}
          </h1>
          <p className="text-lg md:text-xl-2 mt-4 max-w-screen-md text-grayColor-custom">
            {props.herobannersmalltitle}
          </p>
        </div>
      </section>
    </div>
  )
}

export default HeroBannerAboutUs
