import React from "react"
import PortableText from "./portableText"
import Image from "./image"
import Link from "gatsby-link"
import { rudderslabTrackOnClick } from "../utils/common"


const LeftRightComponentEdgesAligned = props => {
  /* console.log('Props on left right', props); */
  return (
    <section className="py-19 relative">
      {/* <div className="out-gradient-wrapper top-1/4 left-1/4">
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
      </div> */}
      <div className="max-w-6xl m-auto flex flex-col w-full justify-center items-center blockWrapper">
        <h3 className="mb-0 text-3xl md:text-4xl font-bold leading-tight uppercase text-center text-darkScheme-btnPrimaryBg mt-9 section-title triggers">
          {props.leftrightcontentmaintitle}
        </h3>
        <h2 className="md:text-5xl text-4xl text-darkScheme-textPrimary leading-tight font-bold mt-16 mb-5 text-center section-title triggers">
          {props.leftrightcontentsubtitle}
        </h2>
        <div className="why-rudderstack-wrapper mx-auto flex flex-col lg:flex-row triggers">
          {/* Map this block start */}
          {props.leftrightimageblock.map((row, idx) => {
            return (
              <div
                key={row._key}
                className={`wr-data-block relative lg:py-20 py-12 flex flex-col ${idx === 2 ? 'mr-0' : 'lg:mr-24'}`}
              >
                {/* <div className="separator-line mx-auto"></div> */}
                <div
                  className={`wr-image-icon-wrapper flex mb-9 self-center lg:self-start`}
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
                  }`}
                >
                  <div className="wr-text-data lg:w-11/12 w-full text-center lg:text-left">
                    <h4 className="text-darkScheme-btnSecondaryBg uppercase text-2xl font-bold">
                      {row.title}
                    </h4>
                    <div className="text-darkScheme-textPrimary mt-2 md:text-lg text-lg frtxt-contnt">
                      <PortableText
                        blocks={row.content}
                        trackSectionHeader={row.title}
                      />
                    </div>
                    {props.leftrightimageblock && props.leftrightimageblock[idx].addlink && props.leftrightimageblock[idx].addlink.cmnlink !== undefined && (<a
                      href={props.leftrightimageblock[idx].addlink.cmnlink}
                      className="learn-more mt-4 text-darkScheme-textPrimary font-bold inline-flex relative d-flex items-center" 
                      onClick={e =>
                        rudderslabTrackOnClick("link", props.leftrightimageblock[idx].title, e)
                      }
                    >
                      <span className="learn-more-text inline-block md:text-2xl text-lg">
                        {props.leftrightimageblock[idx].addlink.cmnlinktext}
                      </span>
                      <span className="learn-more-icon text-darkScheme-btnSecondaryBg inline-block pl-2">
                        <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
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