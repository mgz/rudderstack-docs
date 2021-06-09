import React from "react"
import PortableText from "./portableText"
import Image from "./image"
import Link from "gatsby-link"

const LeftRightImgCnt = props => {
  const maintitle = props.leftrightcontentmaintitle
    ? props.leftrightcontentmaintitle
    : ""
  const smalltitle = props.leftrightcontentsmalltitle
    ? props.leftrightcontentsmalltitle
    : ""
  const contents = props.leftrightimageblock
  return (
    <>
      <section className="left-right-section md:px-0 pb-6 md:pd-0">
        <div className="max-w-6xl px-4 md:px-3 mx-auto">
          {(smalltitle !== "" || maintitle !== "") && (
            <div className="flex flex-col w-full justify-center items-start md:text-left max-w-screen-md">
              {smalltitle !== "" && (
                <p
                  className={`mt-20 mb-2 ${
                    props.applyGradientColorTheme ? "text-seegreen" : ""
                  }  text-sm uppercase`}
                >
                  {smalltitle}
                </p>
              )}
              {maintitle !== "" && (
                <h3
                  className={`md:mt-2 text-4xl md:text-5xl ${
                    props.applyGradientColorTheme ? "text-white" : "text-dark"
                  }  font-bold leading-tight`}
                >
                  {maintitle}
                </h3>
              )}
            </div>
          )}
          {contents.map((content, i) =>
            (() => {
              // console.log("ccc", content)
              if (content.condition === "right") {
                const imgcondition = content.imageVideoConditionBlock.condition
                const portabletext = content.content
                const smalltitle = content.smalltitle
                const section_id = content.section_id
                const title = content.title
                const extralink = content.addlink
                  ? content.addlink.cmnexternallink
                  : ""
                const linktext = content.addlink
                  ? content.addlink.cmnlinktext
                  : ""
                const linkurl = content.addlink ? content.addlink.cmnlink : ""
                const isTitleBigger = content.isTitleBigger
                const content_display_ratio = content.content_display_ratio
                  ? content.content_display_ratio
                  : "50:50"
                // console.log("cnt",content,smalltitle)
                return (
                  <div
                    key={i}
                    id={section_id ? section_id : ""}
                    className="flex items-center flex-wrap flex-col-reverse sm:flex-row ptt-6 md:pt-16"
                  >
                    <div
                      className={`w-full ${
                        content_display_ratio === "60:40"
                          ? "sm:w-2/5"
                          : content_display_ratio === "50:50"
                          ? "sm:w-1/2"
                          : "sm:w-1/2"
                      }  sm:p-6 sm:pl-0 mt-12 sm:mt-0`}
                    >
                      {(() => {
                        if (imgcondition === "imageoption") {
                          const imgref =
                            content.imageVideoConditionBlock.imageoption.asset
                              ._ref
                          return <Image props={imgref} classes="w-full" />
                        }
                        return null
                      })()}
                    </div>
                    <div
                      className={`w-full ${
                        content_display_ratio === "60:40"
                          ? "sm:w-3/5"
                          : content_display_ratio === "50:50"
                          ? "sm:w-1/2"
                          : "sm:w-1/2"
                      } sm:p-6 sm:pr-0`}
                    >
                      <div className="align-middle md:pl-12">
                        <p
                          className={`mt-4 sm:mt-0 text-sm ${
                            props.applyGradientColorTheme ? "text-seegreen" : ""
                          } uppercase`}
                        >
                          {smalltitle}
                        </p>
                        {isTitleBigger === true ? (
                          <h2
                            className={`mt-2 mb-4 pb-2 text-3xl-4 md:text-5xl ${
                              props.applyGradientColorTheme
                                ? "text-white"
                                : "text-blueNew-midnight"
                            } font-bold leading-tight`}
                          >
                            {title}
                          </h2>
                        ) : (
                          <h3
                            className={`mt-2 mb-4 pb-2 text-2xl md:text-3xl  ${
                              props.applyGradientColorTheme
                                ? "text-white"
                                : "text-blueNew-midnight"
                            } font-bold leading-tight`}
                          >
                            {title}
                          </h3>
                        )}

                        <div
                          className={`${
                            props.applyGradientColorTheme
                              ? "text-white"
                              : "text-grayColor-custom"
                          } leading-7 text-sm sm:text-lg frtxt-contnt arrow-list-items`}
                        >
                          <PortableText blocks={portabletext} />
                        </div>
                        <div className="mt-4 flex items-center">
                          {(() => {
                            if (linktext !== "") {
                              if (extralink === true) {
                                return (
                                  <a
                                    href={linkurl}
                                    className={`font-bold leading-normal text-sm lr-icon${
                                      props.applyGradientColorTheme
                                        ? "-gradient"
                                        : ""
                                    }`}
                                  >
                                    {linktext}
                                  </a>
                                )
                              } else {
                                return (
                                  <span
                                    className={`font-bold leading-normal text-sm lr-icon${
                                      props.applyGradientColorTheme
                                        ? "-gradient"
                                        : ""
                                    }`}
                                  >
                                    <Link to={linkurl}>{linktext}</Link>
                                  </span>
                                )
                              }
                            }
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              } else {
                const imgcondition = content.imageVideoConditionBlock.condition
                const portabletext = content.content
                const smalltitle = content.smalltitle
                const title = content.title
                const section_id = content.section_id
                const extralink = content.addlink
                  ? content.addlink.cmnexternallink
                  : ""
                const linktext = content.addlink
                  ? content.addlink.cmnlinktext
                  : ""
                const linkurl = content.addlink ? content.addlink.cmnlink : ""
                const isTitleBigger = content.isTitleBigger
                const content_display_ratio = content.content_display_ratio
                  ? content.content_display_ratio
                  : "50:50"
                return (
                  <div
                    key={i}
                    id={section_id ? section_id : ""}
                    className="flex items-center flex-wrap mt-6"
                  >
                    <div
                      className={`${
                        content_display_ratio === "60:40"
                          ? "sm:w-3/5"
                          : content_display_ratio === "50:50"
                          ? "sm:w-1/2"
                          : "sm:w-1/2"
                      } sm:p-6 sm:pl-0 md:pr-12`}
                    >
                      <p
                        className={`mt-4 sm:mt-0 ${
                          props.applyGradientColorTheme ? "text-seegreen" : ""
                        } text-sm uppercase`}
                      >
                        {smalltitle}
                      </p>
                      {/* <h3 className="mt-2 mb-4 pb-2 text-2xl md:text-3xl text-primary font-bold leading-tight">
                        {title}
                      </h3> */}
                      {isTitleBigger === true ? (
                        <h2
                          className={`mt-2 mb-4 pb-2 text-3xl-4 md:text-5xl ${
                            props.applyGradientColorTheme
                              ? "text-white"
                              : "text-blueNew-midnight"
                          } font-bold leading-tight`}
                        >
                          {title}
                        </h2>
                      ) : (
                        <h3
                          className={`mt-2 mb-4 pb-2 text-2xl md:text-3xl ${
                            props.applyGradientColorTheme
                              ? "text-white"
                              : "text-blueNew-midnight"
                          } font-bold leading-tight`}
                        >
                          {title}
                        </h3>
                      )}
                      <div
                        className={`${
                          props.applyGradientColorTheme
                            ? "text-white"
                            : "text-grayColor-custom"
                        } leading-7 text-sm sm:text-lg frtxt-contnt arrow-list-items`}
                      >
                        <PortableText blocks={portabletext} />
                      </div>
                      <div className="mt-4 flex items-center">
                        {(() => {
                          if (linktext !== "") {
                            if (extralink === true) {
                              return (
                                <a
                                  href={linkurl}
                                  className={`font-bold leading-normal text-sm relative sm:inline-block lr-icon${
                                    props.applyGradientColorTheme
                                      ? "-gradient"
                                      : ""
                                  }`}
                                >
                                  {linktext}
                                </a>
                              )
                            } else {
                              return (
                                <span
                                  className={`font-bold leading-normal text-sm relative sm:inline-block lr-icon${
                                    props.applyGradientColorTheme
                                      ? "-gradient"
                                      : ""
                                  }`}
                                >
                                  <Link to={linkurl}>{linktext}</Link>
                                </span>
                              )
                            }
                          }
                        })()}
                      </div>
                    </div>
                    <div
                      className={`w-full ${
                        content_display_ratio === "60:40"
                          ? "sm:w-2/5"
                          : content_display_ratio === "50:50"
                          ? "sm:w-1/2"
                          : "sm:w-1/2"
                      } sm:p-6 sm:pr-0`}
                    >
                      {(() => {
                        if (imgcondition === "imageoption") {
                          const imgref =
                            content.imageVideoConditionBlock.imageoption.asset
                              ._ref
                          return <Image props={imgref} classes="w-full" />
                        }
                        return null
                      })()}
                    </div>
                  </div>
                )
              }
            })()
          )}
        </div>
      </section>
    </>
  )
}
export default LeftRightImgCnt
