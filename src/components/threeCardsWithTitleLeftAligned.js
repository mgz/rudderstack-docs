import React from "react"
import PortableText from "./portableText"
import Image from "./image"
import Link from "gatsby-link"
import { rudderslabTrackOnClick } from "../utils/common"

const ThreeCardsWithTitleLeftAligned = props => {
  return (
    <>
      <div className="max-w-6xl m-auto flex flex-col w-full justify-center items-center pb-12 md:pb-0">
        <h3 className="mt-16 md:mt-28 mb-0 md:mb-12 text-4xl md:text-5xl font-bold leading-tight text-center max-w-5xl text-blueNew-midnight">
          {props.title}
        </h3>
      </div>
      <div className="max-w-6xl px-0 md:px-3 mx-auto">
        {/*Data WorkFlow*/}
        <div className="flex flex-wrap flex-row">
          {props.three_card_items.map(item => {
            return (
              <div
                key={item._key}
                className={`w-full md:${
                  item.display_ratio === "w-full"
                    ? "w-full sm:px-12 lg:px-40"
                    : item.display_ratio
                } sm:px-2 mt-10 `}
              >
                <div className="h-full flex flex-col items-center md:items-left text-center md:text-left py-10 px-8 rounded-2xl border-grayColor-custom shadow-md  mx-3 text-blueNew-midnight">
                  <div className="h-20 mb-8 self-center md:self-start">
                    <Image
                      props={item.card_image.asset._ref}
                      classes="w-full object-cover"
                      width="73"
                      height="94"
                    />
                  </div>
                  <div className="text-3xl font-bold mb-6 mt-2 max-w-lg pr-0 md:pr-8 self-start">
                    {item.title}
                  </div>
                  <div className=" text-lg">
                    <PortableText
                      blocks={item.content}
                      trackSectionHeader={props.title}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="w-full max-w-5xl m-auto text-center">
        <p className="mt-16 md:mt-16 flex justify-center mb-6 md:mb-16">
          {(() => {
            if (props.button.btnexternallink === true) {
              return (
                <a
                  key={props.button._key}
                  className={
                    (props.button.btnhiglight === true
                      ? "btn-primary-lg border-none bg-darkScheme-btnPrimaryBg text-darkScheme-textPrimary"
                      : "btn-secondary-lg button-gradient-border") + ` sm:mr-4 md:mb-0 mb-6`
                  }
                  href={props.button.btnlink}
                  onClick={e =>
                    rudderslabTrackOnClick("button", props.title, e)
                  }
                >
                  {props.button.btntext}
                </a>
              )
            } else {
              return (
                <Link
                  key={props.button._key}
                  to={props.button.btnlink}
                  onClick={e =>
                    rudderslabTrackOnClick("button", props.title, e)
                  }
                >
                  <span
                    className={
                      (props.button.btnhiglight === true
                        ? "btn-primary-lg border-none bg-darkScheme-btnPrimaryBg text-darkScheme-textPrimary"
                        : "btn-secondary-lg button-gradient-border") + ` sm:mr-4 md:mb-0 mb-4`
                    }
                  >
                    {props.button.btntext}
                  </span>
                </Link>
              )
            }
          })()}
        </p>
      </div>
    </>
  )
}

export default ThreeCardsWithTitleLeftAligned
