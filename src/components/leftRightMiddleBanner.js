import React, { useEffect, useState } from "react"
import PortableText from "./portableText"
// import Image from "./image"
import { rudderslabTrackOnClick } from "../utils/common"

const LeftRightMiddleBanner = props => {
  console.log(props, "LeftRightMiddleBanner")
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <div className="blog-section flex">
          <div className="w-1/2 border-r border-darkScheme-textPrimary">
            <div className="w-9/12 mx-auto">
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
                  className="learn-more mt-2 text-darkScheme-textPrimary font-bold block"
                  onClick={e =>
                    rudderslabTrackOnClick("link", props.left_section.title, e)
                  }
                >
                  <span className="learn-more-text">
                    {props.left_section.addlink.cmnlinktext}
                  </span>
                  <span className="learn-more-icon pl-2 text-darkScheme-btnSecondaryBg">
                    &gt;
                  </span>
                </a>
              )}
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-9/12 mx-auto">
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
                  className="learn-more mt-2 text-darkScheme-textPrimary font-bold block"
                  onClick={e =>
                    rudderslabTrackOnClick("link", props.right_section.title, e)
                  }
                >
                  <span className="learn-more-text">
                    {props.right_section.addlink.cmnlinktext}
                  </span>
                  <span className="learn-more-icon pl-2 text-darkScheme-btnSecondaryBg">
                    &gt;
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
