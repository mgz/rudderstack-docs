import React, {useRef, useEffect} from "react"
import Image from "./image"
import gsap from 'gsap';
import { isMobile } from "react-device-detect";

function OurLogo(props) {
  const logoRefs = useRef([]);
  const tlDelay = 1
  let winWidth = window.innerWidth;
  /* console.log('Win width', winWidth); */

  useEffect(() => {
    let tl;
    const animateLogos = () => {
      if(logoRefs.current[0] === null) return

      // const logo0 = logoRefs.current[0]
      // const logo1 = logoRefs.current[1]
      // const logo2 = logoRefs.current[2]
      // const logo3 = logoRefs.current[3]
      // const logo4 = logoRefs.current[4]
      // const logo5 = logoRefs.current[5]
      // const logo6 = logoRefs.current[6]
      // const logo7 = logoRefs.current[7]
      const logo=[]
      logoimages && logoimages.forEach((logoimage, i) => {
        logo.push(logoRefs.current[i])
      })

      // const pushToEnd = i => {
      //   logoRefs.current.push(logoRefs.current.splice(i, 1)[0])
      // }

      // const moveInArray = (oldIndex, newIndex) => {
      //   logoRefs.current.splice(
      //     newIndex,
      //     0,
      //     logoRefs.current.splice(oldIndex, 1)[0]
      //   )
      // }

      // const resetArray = () => {
      //   pushToEnd(0)
      //   pushToEnd(0)
      //   pushToEnd(1)
      //   pushToEnd(1)
      //   pushToEnd(3)
      //   moveInArray(1, 0)
      //   moveInArray(4, 2)
      // }

      if (tl) {
        tl.clear()
        tl.kill()
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

      // logoimages && logoimages.forEach((logoimage, i) => {
      //   if(i< (logoimages.length /2) ){
      //     tl.to(logo[i], {
      //       yPercent: -100
      //     },`+=${tlDelay}`).to(logo[i+5], {
      //       yPercent: -100
      //     }, '<').set(logo[i], {
      //       yPercent: 100
      //     })
      //   }else{
      //     tl.to(logo[i], {
      //       yPercent: -200
      //     },`+=${tlDelay}`).to(logo[i-5], {
      //       yPercent: 0
      //     }, '<').set(logo[i], {
      //       yPercent: 100
      //     })
      //   }
      // })

    if(!isMobile && winWidth > 1024){

    /* for(let i = 0; i < logoimages.length / 2; i++){
        tl.to(logo[i], {
          yPercent: -100
        },`+=${tlDelay}`).to(logo[i + 5], {
          yPercent: -100
        }, '<').set(logo[i], {
          yPercent: 100
        })

        tl.to(logo[i+5], {
          yPercent: -200
        },`+=${tlDelay}`).to(logo[i], {
          yPercent: 0
        }, '<').set(logo[i+5], {
          yPercent: 100
        })
      } */
    tl.to(logo[0], {
      yPercent: -100,
      opacity: 0
    },`+=${tlDelay}`).to(logo[5], {
      yPercent: -100,
    }, '<').set(logo[0], {
      yPercent: 100,
      opacity: 1
    })

    tl.to(logo[2], {
      yPercent: -100,
      opacity: 0
    },`+=${tlDelay}`).to(logo[7], {
      yPercent: -100
    }, '<').set(logo[2], {
      yPercent: 100,
      opacity: 1
    })

    tl.to(logo[1], {
      yPercent: -100,
      opacity: 0
    },`+=${tlDelay}`).to(logo[6], {
      yPercent: -100
    }, '<').set(logo[1], {
      yPercent: 100,
      opacity: 1
    })

    tl.to(logo[3], {
      yPercent: -100,
      opacity: 0
    },`+=${tlDelay}`).to(logo[8], {
      yPercent: -100
    }, '<').set(logo[3], {
      yPercent: 100,
      opacity: 1
    })

    tl.to(logo[4], {
      yPercent: -100,
      opacity: 0
    },`+=${tlDelay}`).to(logo[9], {
      yPercent: -100
    }, '<').set(logo[4], {
      yPercent: 100,
      opacity: 1
    })

    tl.to(logo[6], {
      yPercent: -200,
      opacity: 0
    },`+=${tlDelay}`).to(logo[1], {
      yPercent: 0
    }, '<').set(logo[6], {
      yPercent: 100,
      opacity: 1
    })

    tl.to(logo[7], {
      yPercent: -200,
      opacity: 0
    },`+=${tlDelay}`).to(logo[2], {
      yPercent: 0
    }, '<').set(logo[7], {
      yPercent: 100,
      opacity: 1
    })

    tl.to(logo[5], {
      yPercent: -200,
      opacity: 0
    },`+=${tlDelay}`).to(logo[0], {
      yPercent: 0
    }, '<').set(logo[5], {
      yPercent: 100,
      opacity: 1
    })

    tl.to(logo[9], {
      yPercent: -200,
      opacity: 0
    },`+=${tlDelay}`).to(logo[4], {
      yPercent: 0
    }, '<').set(logo[9], {
      yPercent: 100,
      opacity: 1
    })

    tl.to(logo[8], {
      yPercent: -200,
      opacity: 0
    },`+=${tlDelay}`).to(logo[3], {
      yPercent: 0
    }, '<').set(logo[8], {
      yPercent: 100,
      opacity: 1
    })
  }else{
    /* Mobile version */
    /* tl.to(logo[0], {
      yPercent: -100
    },`+=${tlDelay}`).to(logo[2], {
      yPercent: -100
    }, '<').set(logo[0], {
      yPercent: 400
    }).set(logo[4], {
      yPercent: 100
    }).set(logo[6], {
      yPercent: 200
    }).set(logo[8], {
      yPercent: 300
    })

    tl.to(logo[1], {
      yPercent: -100
    },`+=${tlDelay}`).to(logo[3], {
      yPercent: -100
    }, '<').set(logo[1], {
      yPercent: 400
    }).set(logo[5], {
      yPercent: 100
    }).set(logo[7], {
      yPercent: 200
    }).set(logo[9], {
      yPercent: 300
    })

    tl.to(logo[2], {
      yPercent: -200
    },`+=${tlDelay}`).to(logo[4], {
      yPercent: -200
    }, '<').set(logo[2], {
      yPercent: 300
    }).set(logo[6], {
      yPercent: 200
    }).set(logo[8], {
      yPercent: 200
    }).set(logo[0], {
      yPercent: 300
    })

    tl.to(logo[3], {
      yPercent: -200
    },`+=${tlDelay}`).to(logo[5], {
      yPercent: -200
    }, '<').set(logo[3], {
      yPercent: 400
    }).set(logo[7], {
      yPercent: 100
    }).set(logo[9], {
      yPercent: 200
    }).set(logo[1], {
      yPercent: 300
    })

    tl.to(logo[4], {
      yPercent: -300
    },`+=${tlDelay}`).to(logo[6], {
      yPercent: -300
    }, '<').set(logo[4], {
      yPercent: 400
    }).set(logo[8], {
      yPercent: 100
    }).set(logo[0], {
      yPercent: 200
    }).set(logo[2], {
      yPercent: 300
    })

    tl.to(logo[5], {
      yPercent: -300
    },`+=${tlDelay}`).to(logo[7], {
      yPercent: -300
    }, '<').set(logo[5], {
      yPercent: 400
    }).set(logo[9], {
      yPercent: 100
    }).set(logo[1], {
      yPercent: 200
    }).set(logo[3], {
      yPercent: 300
    })

    tl.to(logo[6], {
      yPercent: -400
    },`+=${tlDelay}`).to(logo[8], {
      yPercent: -400
    }, '<').set(logo[6], {
      yPercent: 400
    }).set(logo[0], {
      yPercent: 100
    }).set(logo[2], {
      yPercent: 200
    }).set(logo[4], {
      yPercent: 300
    })

    tl.to(logo[7], {
      yPercent: -400
    },`+=${tlDelay}`).to(logo[9], {
      yPercent: -400
    }, '<').set(logo[7], {
      yPercent: 400
    }).set(logo[1], {
      yPercent: 100
    }).set(logo[3], {
      yPercent: 200
    }).set(logo[5], {
      yPercent: 300
    })

    tl.to(logo[8], {
      yPercent: -500
    },`+=${tlDelay}`).to(logo[0], {
      yPercent: 0
    }, '<').set(logo[8], {
      yPercent: 400
    }).set(logo[2], {
      yPercent: 100
    }).set(logo[4], {
      yPercent: 200
    }).set(logo[6], {
      yPercent: 300
    })

    tl.to(logo[9], {
      yPercent: -500
    },`+=${tlDelay}`).to(logo[1], {
      yPercent: 0
    }, '<').set(logo[9], {
      yPercent: 400
    }).set(logo[3], {
      yPercent: 100
    }).set(logo[5], {
      yPercent: 200
    }).set(logo[7], {
      yPercent: 300
    }) */
  }



    }

    setTimeout(
      () => {
        animateLogos()
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


  }, [winWidth])

  const maintitle = props.customHeaderText || props.ourlogotitle
  const logoimages = props.outlogoimage;

  const mobLogoImages = [logoimages[3], logoimages[7], logoimages[logoimages.length - 1], logoimages[2]];

  return (
    <section
      className={`py-19 section-gradient relative triggers`}
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
            {!isMobile && logoimages && logoimages.map((logoimage, i) => {
              return (
                <li className="logo-item flex items-center justify-center w-1/2 lg:w-1/5 h-full gap-5" key={i} ref={ref => (logoRefs.current[i] = ref)}>
                  <Image
                      classes="object-contain h-full w-auto"
                      props={logoimage.asset._ref}
                      width="144"
                      height="50"
                    />
                </li>
              )
            })}
            {isMobile && logoimages && mobLogoImages.map((logoimage, i) =>{
              return (
                <li className="logo-item flex items-center justify-center w-1/2 lg:w-1/5 h-full gap-5" key={i} ref={ref => (logoRefs.current[i] = ref)}>
                  <Image
                      classes={`object-contain h-full ${i === 0 ? 'w-20' : 'w-auto'}`}
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
