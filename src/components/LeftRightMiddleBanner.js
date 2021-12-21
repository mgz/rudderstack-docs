import React, { useEffect, useState } from "react"
import PortableText from "./portableText"
// import Image from "./image"
import { rudderslabTrackOnClick } from "../utils/common"

const LeftRightMiddleBanner = props => {
  /* console.log(props, "LeftRightMiddleBanner") */
  return (
    <section className="py-12 relative">
      <div className="out-gradient-wrapper bottom-0 left-0">
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
      <div className="out-gradient-wrapper top-0 right-0">
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
      <div className="max-w-6xl mx-auto blockWrapper">
        <div className="blog-section flex">
          <div className="w-1/2 border-r-2 border-darkScheme-textPrimary blog-section-inner">
            <div className="w-9/12 mx-auto mob-full">
              <h3 className="text-darkScheme-btnSecondaryBg uppercase mb-5 text-2xl font-bold">
                {props.left_section.title}
              </h3>
              <div className="text-darkScheme-textPrimary">
                <PortableText
                  blocks={props.left_section.content}
                  trackSectionHeader={props.left_section.title}
                />
              </div>
              {props.left_section.addlink && (
                <a
                  href={props.left_section.addlink.cmnlink}
                  className="learn-more mt-2 text-darkScheme-textPrimary font-bold inline-block relative"
                  onClick={e =>
                    rudderslabTrackOnClick("link", props.left_section.title, e)
                  }
                >
                  <span className="learn-more-text inline-block">
                    {props.left_section.addlink.cmnlinktext}
                  </span>
                  <span className="learn-more-icon pl-2 text-darkScheme-btnSecondaryBg inline-block">
                    <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 5.5L1 10" stroke="#86F8E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              )}
            </div>
          </div>
          <div className="w-1/2 blog-section-inner">
            <div className="w-9/12 mx-auto mob-full">
              <h3 className="text-darkScheme-btnSecondaryBg uppercase mb-5 text-2xl font-bold">
                {props.right_section.title}
              </h3>
              <div className="text-darkScheme-textPrimary">
                <PortableText
                  blocks={props.right_section.content}
                  trackSectionHeader={props.right_section.title}
                />
              </div>
              {props.right_section.addlink && (
                <a
                  href={props.right_section.addlink.cmnlink}
                  className="learn-more mt-2 text-darkScheme-textPrimary font-bold inline-block relative"
                  onClick={e =>
                    rudderslabTrackOnClick("link", props.right_section.title, e)
                  }
                >
                  <span className="learn-more-text inline-block">
                    {props.right_section.addlink.cmnlinktext}
                  </span>
                  <span className="learn-more-icon pl-2 text-darkScheme-btnSecondaryBg inline-block">
                    <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 5.5L1 10" stroke="#86F8E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeftRightMiddleBanner
