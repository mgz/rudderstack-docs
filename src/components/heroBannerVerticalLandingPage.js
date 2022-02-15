import React from "react"
import PortableText from "./portableText"
import Link from "gatsby-link"
import Image from "./image"
import { rudderslabTrackOnClick } from "../utils/common"

function HeroBannerVerticalLanding(props) {
  const herobannerbutton = props.herobannerbutton
  return (
    <section className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-40 mx-auto relative gradiant-layer banner-section">
      <div className="flex flex-col items-center md:gap-12 xl:gap-24 justify-center mx-auto lg:flex-row lg:p-0">
        <div className="relative z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
          <h1 className="text-primary mb-8 md:my-4 text-5xl font-bold leading-tight">
            {props.herobannertitle}
          </h1>
          <PortableText blocks={props.herobannercontent} trackSectionHeader={props.herobannertitle} />
          <div className="relative block sm:flex mt-12">
            {herobannerbutton.map((btn, i) => ( 
              <>
                {(() => {
                  if (btn.btnexternallink === true) {
                    return (
                      <a
                        key={btn._key}
                        className={
                          (btn.btnhiglight === true
                            ? "btn-primary-lg"
                            : "btn-secondary-lg") + ` sm:mr-4 md:mb-0 mb-6`
                        }
                        onClick={e =>
                          rudderslabTrackOnClick(
                            "button",
                            props.herobannertitle,
                            e
                          )
                        }
                        href={btn.btnlink}
                      >
                        {btn.btntext}
                      </a>
                    )
                  } else {
                    return (
                      <Link
                        key={btn._key}
                        to={btn.btnlink}
                        onClick={e =>
                          rudderslabTrackOnClick(
                            "button",
                            props.herobannertitle,
                            e
                          )
                        }
                      >
                        <span
                          className={
                            (btn.btnhiglight === true
                              ? "btn-primary-lg"
                              : "btn-secondary-lg") + ` sm:mr-4 md:mb-0 mb-4 border-none bg-darkScheme-btnPrimaryBg text-darkScheme-textPrimary`
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
        </div>
        <div className="relative w-full px-0 rounded-lg flex-grow justify-items-end lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0">
          <div className="relative rounded-md group sm:px-0 sm:items-center lg:items-start">
            <Image props={props.herobannerimage.asset._ref} classes="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroBannerVerticalLanding
