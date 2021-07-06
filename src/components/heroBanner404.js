import React from "react"
import PortableText from "./portableText"
import Link from "gatsby-link"

const HeroBanner404 = props => {
  return (
    <div className="mx-auto banner-404 pb-12 lg:pb-80">
      <section className="overflow-auto ">
        <div class="max-w-6xl mt-20 md:mt-40 px-3 md:px-3 mx-auto flex flex-wrap flex-col md:items-center md:text-center">
          <div className="text-3xl  text-blueNew-midnight font-bold text-center">
            {props.herobannersmalltitle}
          </div>
          <h1 className="text-9xl md:text-20xl md:-mt-16 font-bold font-custom leading-snug text-blueNew-midnight text-center">
            {props.herobannertitle}
          </h1>
          <div className="text-3xl frtxt-contnt md:-mt-28 text-center">
            <PortableText blocks={props.herobannercontent} />
          </div>

          <div className="block sm:flex justify-center items-center -mt-4">
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
                          ` sm:mr-4 md:mb-0 mb-6 bg-white text-dark hover:bg-blueNew-midnight hover:text-white px-16`
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
                              : "btn-secondary-lg") +
                            ` sm:mr-4 md:mb-0 mb-4 px-16`
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
      </section>
    </div>
  )
}

export default HeroBanner404
