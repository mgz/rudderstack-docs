import React, { useEffect, useState, Suspense } from "react"
import PortableText from "./portableText"
//import Image from "./image"
import Link from "gatsby-link"
//import lottie from "lottie-web"
//import heroAnimation from "../animations/Homepage-Hero-Image2.json"

/* import { withPrefix } from "gatsby" */
import { StaticImage } from "gatsby-plugin-image"
//import { HERO_ANIMATION_JSON } from "../animations/homepage-animation-v2"
//import loadable from "@loadable/component";
import { rudderslabTrackOnClick } from "../utils/common"
import { isMobile, isTablet, isBrowser } from "react-device-detect"
import Image from "./image"
/* const LottieAnim = React.lazy(() =>
  import("../animations/homepage-animation-v2")
) */

function Hero(props) {
  // const myHTML = `<h1>John Doe</h1>`;
  const [showAnimation, setShowAnimation] = useState(false)
  const herobannerbutton = props.herobannerbutton
  // let animationContainer = createRef()

  // useEffect(() => {
  //   const anim = lottie.loadAnimation({
  //     container: animationContainer.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     animationData: heroAnimation,
  //   })
  //   return () => anim.destroy() // optional clean up for unmounting
  // }, [])
  let animationDelay = 2500

  let switchWord = (oldWord, newWord) => {
    oldWord.classList.remove("is-visible")
    oldWord.classList.add("is-hidden")
    newWord.classList.remove("is-hidden")
    newWord.classList.add("is-visible")
  }

  let hideWord = word => {
    let nextWord = takeNext(word)
    switchWord(word, nextWord)
    setTimeout(function () {
      hideWord(nextWord)
    }, animationDelay)
  }

  let takeNext = word => {
    return word.nextElementSibling !== null
      ? word.nextElementSibling
      : word.parentNode.children[0]
  }

  let animateHeadline = headlines => {
    let duration = animationDelay
    /* let words = document.querySelectorAll('.cd-words-wrapper span'),
    width = 0;
    console.log('Words', words);
    Array.from(words, (el) => {
      let wordWidth = el.innerWidth;
        if (wordWidth > width) width = wordWidth;
    });
    document.querySelector('.cd-words-wrapper').style.width = width; */
    //trigger animation
    setTimeout(function () {
      hideWord(document.getElementsByClassName("is-visible")[0])
    }, duration)
  }

  useEffect(() => {
    // console.log("isMobile,isTablet,isBrowser", isMobile, isTablet, isBrowser)

    if (isTablet) {
      setShowAnimation(false)
    } else if (isBrowser) {
      setShowAnimation(true)
    }
    // setTimeout(() => {
    //   setShowAnimation(true)
    // }, 3000)
  }, [])

  useEffect(() => {
    animateHeadline(document.querySelector(".cd-headline"))
    if (showAnimation) {
    }
    document.documentElement.classList.add("dark")
  }, [showAnimation])

  return (
    <section className="relative gradiant-layer banner-section pt-19 pb-40 hero-wrapper triggers">
      {/* <div className="out-gradient-wrapper bottom-0 right-16">
        <div className="grad1">
          <div className="grad2">
            <div className="grad3">
              <div className="grad4">
                <div className="grad5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="out-gradient-wrapper top-10 left-1/4">
        <div className="grad1">
          <div className="grad2">
            <div className="grad3">
              <div className="grad4">
                <div className="grad5"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="max-w-6xl mx-auto blockWrapper">
        {/* <div className="background-gradient-circles absolute top-1/4 left-14 keep-rotate"></div> */}
        {/* <Helmet>
          <script src={withPrefix("script.js")} type="text/javascript" />
          <script src={withPrefix("script2.js")} type="text/javascript" />
        </Helmet> */}
        <div className="flex flex-col items-center justify-center mx-auto gap-10 lg:flex-row lg:p-0">
          <div className="relative z-20 flex w-2/5 flex-col mb-8 text-2xl hero-content">
            <h1 className="mb-8 md:my-4 text-5xl font-bold leading-tight cd-headline text-darkScheme-textPrimary section-title">
              {props.herobannertitle}
              {/* All your customer data pipelines in one platform */}
            </h1>
            {/* <PortableText
              blocks={props.herobannercontent}
              trackSectionHeader={props.herobannertitle}
            /> */}
            <p className="cd-headline font-bold text-darkScheme-textPrimary">
              <span className="cd-words-unchanged">
                {props.word_switch_content.title}
              </span>
              <span className="cd-words-wrapper">
                {props.word_switch_content.word_switch_contents.map(
                  (rr, idx) => {
                    return (
                      <span
                        className={`${idx === 0 ? "is-visible" : ""}`}
                        key={idx}
                      >
                        {rr}
                      </span>
                    )
                  }
                )}
              </span>
            </p>
            <div className="relative flex flex-col mt-6 gap-6">
              {herobannerbutton.map((btn, i) => (
                <React.Fragment key={btn._key}>
                  {(() => {
                    if (btn.btnexternallink === true) {
                      return (
                        <a
                          onClick={e =>
                            rudderslabTrackOnClick(
                              "button",
                              props.herobannertitle,
                              e
                            )
                          }
                          key={btn._key}
                          className={
                            (btn.btnhiglight === true
                              ? "btn-primary-lg"
                              : "btn-secondary-lg") + ` cta-btn flex items-center justify-center border-none bg-darkScheme-btnPrimaryBg text-darkScheme-textPrimary`
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
                                : "btn-secondary-lg") + ` flex items-center justify-center cta-btn`
                            }
                          >
                            {btn.btntext}
                          </span>
                        </Link>
                      )
                    }
                  })()}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="relative px-0 rounded-lg flex-grow sm:px-0 lg:mb-0">
            <div className="relative rounded-md group sm:px-0 max-w-2xl">
              {/* <Helmet>

              </Helmet> */}
              {/* <Image props={props.herobannerimage.asset._ref} classes="w-full" /> */}
              {/* <div className="w-full" ref={animationContainer} /> */}
              {/* <div dangerouslySetInnerHTML={{ __html: myHTML }} /> */}

              {/*<div className="lotti-body" id="lottie"></div>*/}
              {/* <div className="w-full">
                <StaticImage src="../images/RubberStack_MAIN-3D_1-1_active_00000.png" alt="RudderStack animation" placeholder="tracedSVG" />
              </div> */}
              {/*<div className="lotti-body">
                <div id="lottie" />
              </div>*/}
              {/* <div className={`lotti-body`}>
                <div id="lottie" />
              </div> */}
              <div className={`block`}>
                <Image
                  props={props.herobannerimage.asset._ref}
                  width={704}
                  height={413}
                  loading="eager"
                  // classes="w-full"
                />
                {/* {isMobile ? (<StaticImage
                  src="../images/newhomepage-mob.png"
                  alt="RudderStack"
                  placeholder="tracedSVG"
                />) : (<StaticImage
                  src="../images/homepage-right.png"
                  alt="RudderStack"
                  placeholder="tracedSVG"
                />)} */}
              </div>
              {/* <div className={`${showAnimation ? "block" : "hidden"} lotti-body`}>

              </div> */}
              {/*
              <div className={`${showAnimation ? "hidden" : "block"} w-full`}>
                <StaticImage
                  src="../images/RubberStack_MAIN-3D_1-1_active_00000.png"
                  alt="RudderStack animation"
                  placeholder="tracedSVG"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
