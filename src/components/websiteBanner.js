import React, { useEffect, useState } from "react"
import PortableText from "./portableText"
import Cookies from "universal-cookie"
import { rudderslabTrackOnClick } from "../utils/common"

const WebisteBanner = props => {
  const cookies = new Cookies()
  const [showBanner, setShowBanner] = useState(
    props.banner_visibility === "every_visit"
      ? true
      : props.banner_visibility === "only_once" &&
        cookies.get(`viewed_website_banner-${props._key}`) === "yes"
      ? false
      : props.weibsite_banner_ie_type.condition === "all_option" ||
        props.weibsite_banner_ie_type.condition === "exclude_option"
      ? true
      : false
  )

  useEffect(() => {
    let addNewClass = document.getElementById("nav-header")
    if (showBanner) {
      addNewClass.classList.add("top-header-show")
    } else {
      addNewClass.classList.remove("top-header-show")
    }
  }, [showBanner])

  useEffect(() => {
    let tmpShowBanner =
      props.weibsite_banner_ie_type.condition === "all_option" ||
      props.weibsite_banner_ie_type.condition === "exclude_option"
        ? true
        : false

    let pathToIncludeExcludeSliced = []
    let currPathSliced = props.currentSlug.split("/").filter(ll => ll !== "")

    props.weibsite_banner_ie_type[
      `${props.weibsite_banner_ie_type.condition}`
    ] &&
      props.weibsite_banner_ie_type[
        `${props.weibsite_banner_ie_type.condition}`
      ].paths
        .sort()
        .forEach(oo => {
          pathToIncludeExcludeSliced = oo.split("/").filter(ll => ll !== "")

          if (props.weibsite_banner_ie_type.condition === "include_option") {
            if (tmpShowBanner !== true) {
              if (currPathSliced.length > 0) {
                for (let ii = 0; ii < currPathSliced.length; ii++) {
                  if (
                    pathToIncludeExcludeSliced[ii] === "*" &&
                    pathToIncludeExcludeSliced[ii - 1] ===
                      currPathSliced[ii - 1]
                  ) {
                    tmpShowBanner = true
                    break
                  } else if (
                    pathToIncludeExcludeSliced[ii] === currPathSliced[ii] &&
                    ii === pathToIncludeExcludeSliced.length - 1
                  ) {
                    tmpShowBanner = true
                  } else if (
                    pathToIncludeExcludeSliced[ii] !== currPathSliced[ii]
                  ) {
                    tmpShowBanner = false
                  }
                }
              }
              // console.log("set for include ", props.banner_name, tmpShowBanner)
              setShowBanner(tmpShowBanner)
            }
          } else if (
            props.weibsite_banner_ie_type.condition === "exclude_option"
          ) {
            if (tmpShowBanner !== false) {
              if (currPathSliced.length > 0) {
                for (let ii = 0; ii < currPathSliced.length; ii++) {
                  if (
                    pathToIncludeExcludeSliced[ii] === "*" &&
                    pathToIncludeExcludeSliced[ii - 1] ===
                      currPathSliced[ii - 1]
                  ) {
                    tmpShowBanner = false
                    break
                  } else if (
                    pathToIncludeExcludeSliced[ii] === currPathSliced[ii] &&
                    ii === pathToIncludeExcludeSliced.length - 1
                  ) {
                    tmpShowBanner = false
                  } else if (
                    pathToIncludeExcludeSliced[ii] !== currPathSliced[ii]
                  ) {
                    tmpShowBanner = true
                  }
                }
              }
              // console.log("set for ", props.banner_name, tmpShowBanner)
              setShowBanner(tmpShowBanner)
            }
          } else {
            setShowBanner(tmpShowBanner)
          }
        })
  }, [props.exclude_paths, props.currentSlug])

  let date = new Date()
  date.setDate(
    date.getDate() + props.banner_visibility === "every_visit" ? 1 : 7
  )

  return props._type && props._type === "website_banner_top_sticky" ? (
    <div
      id="box"
      className={`${
        showBanner === true ? "block" : "hidden"
      } font-custom w-full top-0 left-0 py-2 z-40 flex justify-between items-center px-4 website-banner-top`}
      style={{
        backgroundColor: props.banner_background_color,
        color: props.banner_text_color,
      }}
    >
      <div></div>
      <div className="flex flex-row">
        <PortableText blocks={props.banner_content} />
        <a
          href={props.banner_button.cmnlink}
          className="font-bold underline pl-2 m-auto"
          onClick={e => rudderslabTrackOnClick("banner", "website banner", e)}
        >
          {props.banner_button.cmnlinktext} &#x2192;
        </a>
      </div>
      {props.show_banner_close ? (
        <span
          aria-hidden="true"
          onClick={() => {
            setShowBanner(!showBanner)
            cookies.set(`viewed_website_banner-${props._key}`, "yes", {
              path: "/",
              expires: date,
            })
          }}
          className="cursor-pointer font-bold"
        >
          X
        </span>
      ) : (
        <span />
      )}
    </div>
  ) : null
}

export default WebisteBanner
