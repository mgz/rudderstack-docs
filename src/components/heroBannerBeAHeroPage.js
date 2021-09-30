import React from "react"
import PortableText from "./portableText"
import Link from "gatsby-link"

const HeroBannerBeAHeroPage = props => {
  return (
    <div className="mt-16 mx-auto pb-8 lg:pb-20">
      <section className="overflow-x-hidden bg-gradient-to-t from-white-custom via-blueNew-lighter to-blueNew-lighter">
        <div class="max-w-6xl md:mt-16 px-3 md:px-3 mx-auto flex flex-wrap flex-col md:items-center md:text-center">
          <div className="uppercase text-sm mb-5 text-blueNew-eastbay font-bold">
            {props.herobannersmalltitle}
          </div>
          <h1 className="text-3xl-3 md:text-5xl font-bold font-custom leading-snug text-blueNew-midnight">
            {props.herobannertitle}
          </h1>
          <div className="text-lg mt-4 max-w-screen-md text-grayColor-custom">
            <PortableText blocks={props.herobannercontent} />
          </div>
        </div>
        <div className="block sm:flex justify-center items-center mt-12 mx-2">
              {props.herobannerbutton.map((btn, i) => (
                <>
                  {(() => {
                    if (btn.btnexternallink === true) {
                      return (
                        <a
                          key={btn._key}
                          className={
                            (btn.btnhiglight === true
                              ? "btn-primary-lg"
                              : "btn-secondary-lg") +
                            ` sm:mr-4 md:mb-0 mb-6 bg-white text-dark hover:bg-blueNew-midnight hover:text-white`
                          }
                          href={btn.btnlink}
                        >
                          {btn.btntext}
                        </a>
                      )
                    } else {
                      return (
                        <Link key={btn._key} to={btn.btnlink}>
                          <span
                            className={
                              (btn.btnhiglight === true
                                ? "btn-primary-lg"
                                : "btn-secondary-lg") + ` sm:mr-4 md:mb-0 mb-4`
                            }
                          >
                            {btn.btntext}
                          </span>
                        </Link>
                      )
                    }
                  })()}
                </>
              ))}
            </div>
      </section>
    </div>
  )
}

export default HeroBannerBeAHeroPage
