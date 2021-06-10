import React, { useEffect, createRef } from "react"
import PortableText from "./portableText"
import Image from "./image"
import Link from "gatsby-link"
import lottie from "lottie-web"
import heroAnimation from "../animations/Homepage-Hero-Image2.json"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Hero(props) {
  // const myHTML = `<h1>John Doe</h1>`;

  const herobannerbutton = props.herobannerbutton
  let animationContainer = createRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: heroAnimation,
    })
    return () => anim.destroy() // optional clean up for unmounting
  }, [])

  return (
    <section class="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-40 mx-auto relative gradiant-layer banner-section">
      <Helmet>
        <script src={withPrefix("script.js")} type="text/javascript" />
        {/* <script src={withPrefix("script2.js")} type="text/javascript" /> */}
      </Helmet>
      <div class="flex flex-col items-center md:gap-12 xl:gap-24 justify-center mx-auto lg:flex-row lg:p-0">
        <div class="relative z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
          <h2 className="text-primary mb-8 md:my-4 md:text-6xl text-5xl font-bold leading-tight">
            {props.herobannertitle}
          </h2>
          <PortableText blocks={props.herobannercontent} />
          <div class="relative block sm:flex mt-12">
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
        </div>
        <div class="relative w-full px-5 rounded-lg flex-grow justify-items-end lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0">
          <div class="relative rounded-md group sm:px-0 sm:items-center lg:items-start">
            {/* <Helmet>
              
            </Helmet> */}
            {/* <Image props={props.herobannerimage.asset._ref} classes="w-full" /> */}
            {/* <div className="w-full" ref={animationContainer} /> */}
            {/* <div dangerouslySetInnerHTML={{ __html: myHTML }} /> */}

            {/*<div className="lotti-body" id="lottie"></div>*/}
            <div className="w-full">
              <StaticImage src="../images/RubberStack_MAIN-3D_1-1_active_00000.png" alt="RudderStack animation" placeholder="tracedSVG" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
