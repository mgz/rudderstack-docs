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
  let animationDelay = 2500;

  let switchWord = (oldWord, newWord) => {
		oldWord.classList.remove('is-visible');
    oldWord.classList.add('is-hidden');
		newWord.classList.remove('is-hidden');
    newWord.classList.add('is-visible');
	}

  let hideWord = (word) => {
		let nextWord = takeNext(word);
    switchWord(word, nextWord);
    setTimeout(function(){ hideWord(nextWord) }, animationDelay);
	}

  let takeNext = (word) => {
		return (word.nextElementSibling) !== null ? word.nextElementSibling : word.parentNode.children[0];
	}

  let animateHeadline = (headlines) => {
		let duration = animationDelay;
    /* let words = document.querySelectorAll('.cd-words-wrapper span'),
    width = 0;
    console.log('Words', words);
    Array.from(words, (el) => {
      let wordWidth = el.innerWidth;
        if (wordWidth > width) width = wordWidth;
    });
    document.querySelector('.cd-words-wrapper').style.width = width; */
			//trigger animation
    setTimeout(function(){ hideWord(document.getElementsByClassName('is-visible')[0]) }, duration);
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
    animateHeadline(document.querySelector('.cd-headline'));
    if (showAnimation) {
    }
    document.documentElement.classList.add('dark')
  }, [showAnimation])

  return (
    <section className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-40 mx-auto relative gradiant-layer banner-section">
      {/* <Helmet>
        <script src={withPrefix("script.js")} type="text/javascript" />
        <script src={withPrefix("script2.js")} type="text/javascript" />
      </Helmet> */}
      <div className="flex flex-col items-center md:gap-4 xl:gap-4 justify-center mx-auto lg:flex-row lg:p-0">
        <div className="relative z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
          <h1 className="text-primary mb-8 md:my-4 md:text-6xl text-5xl font-bold leading-tight cd-headline">
            {/* {props.herobannertitle} */}
            All your customer data pipelines in one platform
          </h1>
          {/* <PortableText
            blocks={props.herobannercontent}
            trackSectionHeader={props.herobannertitle}
          /> */}
          <p className="cd-headline font-bold">
            <span className="cd-words-unchanged">Effortlessly sync data into and out of your <br></br></span>
            <span className="cd-words-wrapper">
                <span className="is-visible">data warehouse</span>
                <span>data lake</span>
                <span>product tools</span>
                <span>marketing tools</span>
            </span>
          </p>
          <div className="relative block sm:flex mt-12">
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
                            : "btn-secondary-lg") + ` sm:mr-4 md:mb-0 mb-6`
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
                              : "btn-secondary-lg") + ` sm:mr-4 md:mb-0 mb-4`
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
        <div className="relative w-full px-0 rounded-lg flex-grow justify-items-end lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0">
          <div className="relative rounded-md group sm:px-0 sm:items-center lg:items-start">
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
              <StaticImage
                src="../images/hero-section-home.png"
                alt="RudderStack"
                placeholder="tracedSVG"
              />
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
    </section>
  )
}
export default Hero
