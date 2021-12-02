import React, {useRef, useEffect} from "react"
import Image from "./image"
import gsap from 'gsap';
/* import {GSDevTools} from 'gsap/GSDevTools';

gsap.registerPlugin(GSDevTools) */

function OurLogo(props) {
  const logoRefs = useRef([]);
  const tlDelay = 1

  useEffect(() => {
    const rowLength = 4;
    let tl;

    for(let i = 0; i < rowLength; i++){
      const el = logoRefs.current[i];

      gsap.set(el, {
        yPercent: -100,
        xPercent: i * 100
      })
    }

    const animateLogos = () => {
      if(logoRefs.current[0] === null) return

      const logo0 = logoRefs.current[0]
      const logo1 = logoRefs.current[1]
      const logo2 = logoRefs.current[2]
      const logo3 = logoRefs.current[3]
      const logo4 = logoRefs.current[4]
      const logo5 = logoRefs.current[5]
      const logo6 = logoRefs.current[6]
      const logo7 = logoRefs.current[7]

      const pushToEnd = i => {
        logoRefs.current.push(logoRefs.current.splice(i, 1)[0])
      }

      const moveInArray = (oldIndex, newIndex) => {
        logoRefs.current.splice(
          newIndex,
          0,
          logoRefs.current.splice(oldIndex, 1)[0]
        )
      }

      const resetArray = () => {
        pushToEnd(0)
        pushToEnd(0)
        pushToEnd(1)
        pushToEnd(1)
        pushToEnd(3)
        moveInArray(1, 0)
        moveInArray(4, 2)
      }

      if (tl) {
        tl.clear()
        tl.kill()

        logoRefs.current.forEach((logo, logoIndex) => {
          if (logoIndex > 3) {
            gsap.set(logo, {
              clearProps: 'transform',
            })
          } else {
            gsap.set(logo, {
              yPercent: -100,
              xPercent: logoIndex * 100,
            })
          }
        })
      }

      tl = gsap.timeline({
        id: 'clients',
        delay: tlDelay,
        defaults: {
          duration: 1,
        },
        onStart: () => {},
        onComplete: () => {
          //resetArray()
          gsap.delayedCall(1, animateLogos)
        },
      })

      // A
     /* tl.set(logo4, {
        //xPercent: 0,
        yPercent: 0,
      })
        .to(logo4, {
          yPercent: -100,
        })
        .to(
          logo0,
          {
            yPercent: -200,
          },
          '<'
        )

      // B
      tl.set(
        logo5,
        {
          xPercent: 100,
          yPercent: 0,
        },
        `+=${tlDelay}`
      )
        .to(
          logo5,
          {
            yPercent: -100,
          },
          '<'
        )
        .to(
          logo1,
          {
            yPercent: -200,
          },
          '<'
        ) .to(logo3, {
          xPercent: 400,
        })

      // C
      tl.set(
        logo6,
        {
          xPercent: 200,
          yPercent: 0,
        },
        `+=${tlDelay}`
      )
      tl.to(
          logo7,
          {
            yPercent: -200,
          },
          '<'
        )
        .to(
          logo7,
          {
            yPercent: -100,
          },
          '<'
        ).to(logo2, {
          xPercent: 0,
        })

      // D
      tl.set(
        logo7,
        {
          xPercent: 300,
          yPercent: 0,
        },
        `+=${tlDelay}`
      )
        .to(logo7, {
          yPercent: -100,
        })
        .to(
          logo3,
          {
            yPercent: -200,
          },
          '<'
        )

      // E
      tl.set(
        logo9,
        {
          xPercent: 200,
          yPercent: 0,
        },
        `+=${tlDelay}`
      )
        .to(
          logo4,
          {
            yPercent: -200,
          },
          '<'
        )
         .to(
          logo9,
          {
            yPercent: -100,
          },
          '<'
        ).to(logo2, {
          xPercent: 100,
        }) */

      // GSDevTools.create({ animation: id, css: 'z-index: 100' })

      tl.set(logo0, {
        //xPercent: 0,
        yPercent: 0,
      })
        .to(logo0, {
          yPercent: -100,
        })
        .to(
          logo4,
          {
            yPercent: -200,
          },
          '<'
        )
    }

    setTimeout(
      () => {
        //animateLogos()
      },
      tlDelay * 3 * 1000
    )

    return () => {
      if (tl) {
        tl.clear()
        tl.kill()
        tl = null
      }
    }


  }, [])

  const maintitle = props.customHeaderText || props.ourlogotitle
  const logoimages = props.outlogoimage
  return (
    <section
      className={`py-19 section-gradient relative`}
    >
      <span className="section-border block absolute top-0 left-0 w-full"></span>
      <div className="max-w-6xl mx-auto blockWrapper">
        <div
          className={`flex w-full justify-center`}
        >
          <h3 className="my-4 text-4xl text-darkScheme-textPrimary font-bold text-center normal-case md:mx-0 mx-auto section-title">
            {/* {maintitle} */}
            11,000+ sites and apps run RudderStack
          </h3>
        </div>
        {/* <div className="flex w-full justify-start flex-wrap mt-2 sm:mt-2 our-logos">
          {logoimages &&
            logoimages.map((logoimage, i) => {
              return (
                <div
                  key={i}
                  className={`w-full md:w-1/${
                    props.logos_per_row === "6" ? "6" : "5"
                  } flex justify-center md:py-10 px-2 py-4`}
                >
                  <span className="h-auto">
                    <Image
                      classes="object-contain h-full w-auto"
                      props={logoimage.asset._ref}
                      width="210"
                      height="40"
                    />
                  </span>
                </div>
              )
            })}
        </div> */}
        <div className="logo-slider block w-full mt-10">
          <ul className="logo-list relative flex flex-wrap overflow-hidden">
            {logoimages && logoimages.map((logoimage, i) => {
              return (
                <li className="logo-item absolute top-full flex items-center justify-center w-1/4 h-full gap-5" key={i} ref={ref => (logoRefs.current[i] = ref)}>
                  <Image
                      classes="object-contain h-full w-auto"
                      props={logoimage.asset._ref}
                      width="144"
                      height="50"
                    />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <span className="section-border block absolute bottom-0 left-0 w-full"></span>
    </section>
  )
}
export default OurLogo
