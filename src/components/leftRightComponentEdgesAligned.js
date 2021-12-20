import React from "react"
import PortableText from "./portableText"
import Image from "./image"
import Link from "gatsby-link"
import { rudderslabTrackOnClick } from "../utils/common"


const LeftRightComponentEdgesAligned = props => {
  console.log('Left edges', props);
  return (
    <section className="py-19 relative">
      {/* <div className="background-gradient-circles absolute top-2/4 right-1/4 keep-rotate"></div>
      <div className="background-gradient-circles absolute top-1/4 left-1/4 keep-rotate"></div>
      <div className="background-gradient-circles absolute bottom-1/4 left-1/4 keep-rotate"></div> */}
      <div className="out-gradient-wrapper top-1/4 left-1/4">
        <div className="grad1">
          <div className="grad2">
            <div className="grad3">
              <div className="grad4">
                <div className="grad5">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="out-gradient-wrapper bottom-1/4 left-1/4">
        <div className="grad1">
          <div className="grad2">
            <div className="grad3">
              <div className="grad4">
                <div className="grad5">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="out-gradient-wrapper top-1/2 right-1/4">
        <div className="grad1">
          <div className="grad2">
            <div className="grad3">
              <div className="grad4">
                <div className="grad5">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl m-auto flex flex-col w-full justify-center items-center blockWrapper">
        <h3 className="mb-0 text-4xl md:text-4xl font-bold leading-tight uppercase text-center text-darkScheme-btnPrimaryBg mt-9 section-title">
          {props.leftrightcontentmaintitle}
        </h3>
        <h2 className="text-5xl text-darkScheme-textPrimary leading-tight font-bold mt-16 text-center section-title">
          {props.leftrightcontentsubtitle}
        </h2>
        <div className="why-rudderstack-wrapper mx-auto">
          {/* Map this block start */}
          {props.leftrightimageblock.map((row, idx) => {
            return (
              <div
                key={row._key}
                className={`wr-data-block image-${
                  row.condition === "right" ? "left" : "right"
                }  relative py-20 flex flex-col`}
              >
                <div className="separator-line mx-auto"></div>
                <div
                  className={`wr-image-icon-wrapper flex -mt-12 self-${
                    row.condition === "right" ? "start" : "end"
                  }`}
                >
                  <div className="wr-image-icon-block flex items-center justify-center">
                    <Image
                      props={
                        row.imageVideoConditionBlock.imageoption.asset._ref
                      }
                      width={166}
                      height={161}
                    />
                  </div>
                </div>
                <div
                  className={`wr-text-data-wrapper flex self-${
                    row.condition === "right" ? "end" : "start"
                  } w-1/2 -mt-12`}
                >
                  <div className="wr-text-data w-11/12">
                    <h4 className="text-darkScheme-btnSecondaryBg uppercase text-3xl-3 font-bold">
                      {row.title}
                    </h4>
                    <div className="text-darkScheme-textPrimary mt-2 md:text-2xl text-lg frtxt-contnt">
                      <PortableText
                        blocks={row.content}
                        trackSectionHeader={row.title}
                      />
                    </div>
                    {props.leftrightimageblock && props.leftrightimageblock[idx].addlink && props.leftrightimageblock[idx].addlink.cmnlink !== undefined && (<a
                      href={props.leftrightimageblock[idx].addlink.cmnlink}
                      className="learn-more mt-4 text-darkScheme-textPrimary font-bold inline-block relative"
                      onClick={e =>
                        rudderslabTrackOnClick("link", props.right_section.title, e)
                      }
                    >
                      <span className="learn-more-text inline-block md:text-2xl text-lg">
                        {props.leftrightimageblock[idx].addlink.cmnlinktext}
                      </span>
                      <span className="learn-more-icon lrlm-icon text-darkScheme-btnSecondaryBg inline-block pl-5">
                        <svg width="14" height="23" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L7 5.5L1 10" stroke="#86F8E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </a>)}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LeftRightComponentEdgesAligned
