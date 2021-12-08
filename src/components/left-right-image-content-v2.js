import React from "react"
import PortableText from "./portableText"
import Image from "./image"
import Link from "gatsby-link"
import { StaticImage } from "gatsby-plugin-image"
import { rudderslabTrackOnClick } from "../utils/common"

const LeftRightImgCnt_V2 = props => {
  const maintitle = props.leftrightcontentmaintitle
    ? props.leftrightcontentmaintitle
    : ""
  const smalltitle = props.leftrightcontentsmalltitle
    ? props.leftrightcontentsmalltitle
    : ""
  const contents = props.leftrightimageblock
  // console.log("props", props)
  return (
    <>
      <section className="left-right-section md:px-0 pb-6 md:pb-12">
        <div className="max-w-6xl px-4 md:px-3 mx-auto">
          {(smalltitle !== "" || maintitle !== "") && (
            <div
              className={`flex flex-col w-full justify-center items-start md:text-${
                props.header_alignment !== "" ? props.header_alignment : "left"
              } mx-auto max-w-screen-xl`}
            >
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
                  className={`md:mt-2 text-3xl-3 lg:text-5xl text-center lg:text-left ${
                    props.applyGradientColorTheme ? "text-white" : "text-dark"
                  }  font-bold leading-tight pr-0 md:pr-4`}
                >
                  {maintitle}
                </h3>
              )}
            </div>
          )}

          <div>
            {props.header_media &&
              props.header_media.condition === "imageoption" && (
                <div className="max-w-screen-md mx-auto my-10 relative left-right-content-center-image">
                  {/* <div className="absolute z-10">
                    <StaticImage
                      src="../images/left-right-comp-back-image.png"
                      placeholder="tracedSVG"
                      alt="Image"
                    />
                  </div> */}

                  <Image
                    props={props.header_media.imageoption.asset._ref}
                    classes="p-10"
                  />
                </div>
              )}
            {props.header_media_cta_cutton && (
              <div className="md:w-80 md:mx-auto mx-4">
                <>
                  {(() => {
                    if (
                      props.header_media_cta_cutton.btnexternallink === true
                    ) {
                      return (
                        <a
                          key={props.header_media_cta_cutton._key}
                          onClick={e =>
                            rudderslabTrackOnClick(
                              "button",
                              props.productbannerheader,
                              e
                            )
                          }
                          className={
                            (props.header_media_cta_cutton.btnhiglight === true
                              ? "btn-primary-lg hover:bg-transparent"
                              : "btn-secondary-lg") + ` sm:mr-4 md:mb-0 mb-6 bg-whiteColor-custom`
                          }
                          href={props.header_media_cta_cutton.btnlink}
                        >
                          {props.header_media_cta_cutton.btntext}
                        </a>
                      )
                    } else {
                      return (
                        <span key={props.header_media_cta_cutton._key}>
                          <Link
                            onClick={e =>
                              rudderslabTrackOnClick(
                                "button",
                                props.productbannerheader,
                                e
                              )
                            }
                            className={
                              (props.header_media_cta_cutton.btnhiglight ===
                              true
                                ? "btn-primary-lg hover:bg-transparent"
                                : "btn-secondary-lg") +
                              ` sm:mr-4 md:mb-0 mb-6 text-xs bg-whiteColor-custom border-none hover:bg-darkScheme-btnPrimaryBg hover:text-black-custom`
                            }
                            to={props.header_media_cta_cutton.btnlink}
                          >
                            {props.header_media_cta_cutton.btntext}
                          </Link>
                        </span>
                      )
                    }
                  })()}
                </>
              </div>
            )}

            {props.header_feature_items && (
              <div className="flex flex-col md:flex-row left-right-comp-gradient rounded-3xl pt-8 md:mt-16 p-4 md:mx-auto py-4 justify-center mx-8">
                {props.header_feature_items.map((row, idx) => {
                  return (
                    <div
                      key={row._key}
                      className={`md:w-64 flex flex-col ${
                        idx === 0 ? "mt-0 md:pl-0" : "mt-12 md:mt-0  md:pr-8"
                      }`}
                    >
                      <Image
                        props={row.card_image.asset._ref}
                        classes="w-10 h-auto mb-4 mx-auto md:mx-0"
                      />
                      <span className="text-lg text-whiteColor-custom font-bold leading-tight md:ml-0 px-6 md:px-0 text-center md:text-left">
                        {row.title}
                      </span>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
          {contents.map((content, i) =>
            (() => {
              if (content.condition === "right") {
                const imgcondition = content.imageVideoConditionBlock.condition
                const portabletext = content.content
                const smalltitle = content.smalltitle
                const section_id = content.section_id
                const title = content.title
                const link_display_as_button = content.addlink
                  ? content.addlink.cmn_display_as_button
                  : false

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
                const titleColor = content.title_color
                  ? content.title_color
                  : ""
                // console.log("cnt",content,smalltitle)
                return (
                  <div
                    key={i}
                    id={section_id ? section_id : ""}
                    className="flex items-center flex-wrap flex-col-reverse sm:flex-row pt-6 md:pt-16"
                  >
                    <div
                      className={`w-full ${
                        content_display_ratio === "60:40"
                          ? "sm:w-2/5"
                          : content_display_ratio === "50:50"
                          ? "sm:w-1/2"
                          : "sm:w-1/2"
                      } px-0 lg:pr-20 pt-8 md:pt-0`}
                    >
                      {(() => {
                        if (imgcondition === "imageoption") {
                          const imgref =
                            content.imageVideoConditionBlock.imageoption.asset
                              ._ref
                          return (
                            <Image
                              props={imgref}
                              classes="w-full"
                              // width="540"
                              // height="297"
                            />
                          )
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
                      } pl-0 md:pl-12`}
                    >
                      <div
                        className={`p-6 lg:p-12 left-right-content mx-4 md:mx-0`}
                      >
                        <div className="align-middle">
                          <p
                            className={`mt-4 sm:mt-0 text-sm  text-darkScheme-btnSecondaryBg uppercase`}
                          >
                            {smalltitle}
                          </p>
                          {isTitleBigger === true ? (
                            <h2
                              className={`mt-2 mb-4 pb-2 text-3xl-4 md:text-5xl ${
                                props.applyGradientColorTheme
                                  ? "text-white"
                                  : titleColor === "midnightBlue"
                                  ? "text-blueNew-midnight"
                                  : titleColor === "black"
                                  ? "text-black-custom"
                                  : ""
                              } font-bold leading-tight uppercase`}
                            >
                              {title}
                            </h2>
                          ) : (
                            <h3
                              className={`mt-2 mb-4 pb-2 text-2xl  ${
                                props.applyGradientColorTheme
                                  ? "text-white"
                                  : titleColor === "midnightBlue"
                                  ? "text-blueNew-midnight"
                                  : titleColor === "black"
                                  ? "text-black-custom"
                                  : ""
                              } font-bold leading-tight pr-0 md:pr-4 uppercase`}
                            >
                              {title}
                            </h3>
                          )}

                          <div
                            className={`${
                              props.applyGradientColorTheme
                                ? "text-white"
                                : "text-grayColor-custom"
                            } leading-7 text-sm sm:text-lg frtxt-contnt ${
                              content.content_list_styling === "right_arrow"
                                ? "arrow-list-items"
                                : content.content_list_styling === "check"
                                ? "circle-check-items"
                                : ""
                            }`}
                          >
                            <PortableText
                              blocks={portabletext}
                              trackSectionHeader={title}
                            />
                          </div>
                          <div
                            className={`w-full grid grid-cols-1 md:grid-cols-${content.pointer_content_cols}`}
                          >
                            {content.pointer_contents &&
                              content.pointer_contents.map(row => {
                                return (
                                  <div
                                    key={row}
                                    // className={`${
                                    //   content.pointer_content_cols === "2"
                                    //     ? "w-1/2"
                                    //     : "w-full"
                                    // } my-2 font-bold text-grayColor-custom text-xl flex flex-row`}

                                    //
                                    className={`my-2  ${
                                      props.applyGradientColorTheme
                                        ? "text-white font-normal"
                                        : "text-grayColor-custom font-bold"
                                    }  text-xl flex flex-row`}
                                  >
                                    <div className="w-10 h-10 pt-1 px-2">
                                      {props.applyGradientColorTheme && (
                                        <StaticImage
                                          src="../images/check-light-icon.svg"
                                          alt="Check"
                                          placeholder="tracedSVG"
                                        />
                                      )}

                                      {!props.applyGradientColorTheme && (
                                        <StaticImage
                                          src="../images/check-icon.svg"
                                          alt="Check"
                                          placeholder="tracedSVG"
                                        />
                                      )}
                                    </div>
                                    <p className="w-full">{row}</p>
                                  </div>
                                )
                              })}
                          </div>
                          <div className="mt-4 flex items-center">
                            {(() => {
                              if (linktext !== "") {
                                if (extralink === true) {
                                  return (
                                    <a
                                      onClick={e =>
                                        rudderslabTrackOnClick("link", title, e)
                                      }
                                      href={linkurl}
                                      className={`font-bold leading-normal text-sm ${
                                        link_display_as_button
                                          ? "btn-primary-lg"
                                          : ""
                                      } ${
                                        props.applyGradientColorTheme
                                          ? "lr-icon-gradient"
                                          : !link_display_as_button
                                          ? "lr-icon"
                                          : ""
                                      } `}
                                    >
                                      {linktext}
                                    </a>
                                  )
                                } else {
                                  return (
                                    <span
                                      className={`font-bold leading-normal text-sm ${
                                        link_display_as_button
                                          ? "btn-primary-lg"
                                          : ""
                                      } ${
                                        props.applyGradientColorTheme
                                          ? "lr-icon-gradient"
                                          : !link_display_as_button
                                          ? "lr-icon"
                                          : ""
                                      }`}
                                    >
                                      <Link
                                        onClick={e =>
                                          rudderslabTrackOnClick(
                                            "link",
                                            title,
                                            e
                                          )
                                        }
                                        to={linkurl}
                                      >
                                        {linktext}
                                      </Link>
                                    </span>
                                  )
                                }
                              }
                            })()}
                          </div>
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
                const link_display_as_button = content.addlink
                  ? content.addlink.cmn_display_as_button
                  : false

                const linktext = content.addlink
                  ? content.addlink.cmnlinktext
                  : ""
                const linkurl = content.addlink ? content.addlink.cmnlink : ""
                const isTitleBigger = content.isTitleBigger
                const content_display_ratio = content.content_display_ratio
                  ? content.content_display_ratio
                  : "50:50"

                const titleColor = content.title_color
                  ? content.title_color
                  : ""

                return (
                  <div
                    key={i}
                    id={section_id ? section_id : ""}
                    className="flex items-center flex-wrap pt-6 md:pt-16"
                  >
                    <div
                      className={`${
                        content_display_ratio === "60:40"
                          ? "sm:w-3/5"
                          : content_display_ratio === "50:50"
                          ? "sm:w-1/2"
                          : "sm:w-1/2"
                      } md:pr-12 `}
                    >
                      <div className={`p-6 lg:p-12 left-right-content mx-4`}>
                        <p
                          className={`mt-4 sm:mt-0  text-sm uppercase text-darkScheme-btnSecondaryBg`}
                        >
                          {smalltitle}
                        </p>
                        {/* <h3 className="mt-2 mb-4 pb-2 text-2xl md:text-3xl text-primary font-bold leading-tight">
                        {title}
                      </h3> */}
                        {isTitleBigger === true ? (
                          <h2
                            className={`mt-2 mb-4 pb-2 text-sm md:text-3xl-4 ${
                              props.applyGradientColorTheme
                                ? "text-white"
                                : titleColor === "midnightBlue"
                                ? "text-blueNew-midnight"
                                : titleColor === "black"
                                ? "text-black-custom"
                                : ""
                            } font-bold leading-tight uppercase`}
                          >
                            {title}
                          </h2>
                        ) : (
                          <h3
                            className={`mt-2 mb-4 pb-2 text-sm md:text-2xl ${
                              props.applyGradientColorTheme
                                ? "text-white"
                                : titleColor === "midnightBlue"
                                ? "text-blueNew-midnight"
                                : titleColor === "black"
                                ? "text-black-custom"
                                : ""
                            } font-bold leading-tight pr-0 md:pr-4 uppercase`}
                          >
                            {title}
                          </h3>
                        )}
                        <div
                          className={`${
                            props.applyGradientColorTheme
                              ? "text-white"
                              : "text-grayColor-custom"
                          } leading-7 text-xs sm:text-lg frtxt-contnt ${
                            content.content_list_styling === "right_arrow"
                              ? "arrow-list-items"
                              : content.content_list_styling === "check"
                              ? "circle-check-items"
                              : ""
                          }`}
                        >
                          <PortableText
                            blocks={portabletext}
                            trackSectionHeader={title}
                          />
                        </div>
                        <div
                          className={`w-full grid grid-cols-1 md:grid-cols-${content.pointer_content_cols}`}
                        >
                          {content.pointer_contents &&
                            content.pointer_contents.map(row => {
                              return (
                                <div
                                  key={row}
                                  // className={`${
                                  //   content.pointer_content_cols === "2"
                                  //     ? "w-1/2"
                                  //     : "w-full"
                                  // } my-2 font-bold text-grayColor-custom text-xl flex flex-row`}
                                  className={`my-2  ${
                                    props.applyGradientColorTheme
                                      ? "text-white font-normal"
                                      : "text-grayColor-custom font-bold"
                                  }  text-xl flex flex-row`}
                                >
                                  <div className="w-10 h-10 pt-1 px-2">
                                    {props.applyGradientColorTheme && (
                                      <StaticImage
                                        src="../images/check-light-icon.svg"
                                        alt="Check"
                                        placeholder="tracedSVG"
                                      />
                                    )}

                                    {!props.applyGradientColorTheme && (
                                      <StaticImage
                                        src="../images/check-icon.svg"
                                        alt="Check"
                                        placeholder="tracedSVG"
                                      />
                                    )}
                                  </div>
                                  <p className="w-full">{row}</p>
                                </div>
                              )
                            })}
                        </div>
                        <div className="mt-4 flex items-center">
                          {(() => {
                            if (linktext !== "") {
                              if (extralink === true) {
                                return (
                                  <a
                                    href={linkurl}
                                    onClick={e => {
                                      rudderslabTrackOnClick("link", title, e)
                                    }}
                                    className={`font-bold leading-normal text-sm ${
                                      link_display_as_button
                                        ? "btn-primary-lg"
                                        : ""
                                    } relative sm:inline-block ${
                                      props.applyGradientColorTheme
                                        ? "lr-icon-gradient"
                                        : !link_display_as_button
                                        ? "lr-icon"
                                        : ""
                                    }`}
                                  >
                                    {linktext}
                                  </a>
                                )
                              } else {
                                return (
                                  <span
                                    className={`font-bold leading-normal text-sm ${
                                      link_display_as_button
                                        ? "btn-primary-lg"
                                        : ""
                                    } relative sm:inline-block ${
                                      props.applyGradientColorTheme
                                        ? "lr-icon-gradient"
                                        : !link_display_as_button
                                        ? "lr-icon"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      onClick={e =>
                                        rudderslabTrackOnClick("link", title, e)
                                      }
                                      to={linkurl}
                                    >
                                      {linktext}
                                    </Link>
                                  </span>
                                )
                              }
                            }
                          })()}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`w-full ${
                        content_display_ratio === "60:40"
                          ? "sm:w-2/5"
                          : content_display_ratio === "50:50"
                          ? "sm:w-1/2"
                          : "sm:w-1/2"
                      } px-0 lg:pl-20 pt-8 md:pt-0`}
                    >
                      {(() => {
                        if (imgcondition === "imageoption") {
                          const imgref =
                            content.imageVideoConditionBlock.imageoption.asset
                              ._ref
                          return (
                            <Image
                              props={imgref}
                              classes="w-full"
                              // width="540"
                              // height="297"
                            />
                          )
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
export default LeftRightImgCnt_V2
