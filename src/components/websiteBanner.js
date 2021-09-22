import React, { useEffect, useState } from "react"
import PortableText from "./portableText"
import Cookies from "universal-cookie"
import { rudderslabTrackOnClick } from "../utils/common"


const WebisteBanner = props => {
  const cookies = new Cookies()
  const [showBanner, setShowBanner] = useState(
    props.banner_visibility === "every_visit" &&
      cookies.get(`viewed_website_banner-${props._key}`) === "yes"
      ? false
      : props.banner_visibility === "only_once" &&
        cookies.get(`viewed_website_banner-${props._key}`) === "yes"
      ? false
      : true
  )

  useEffect(() => {
    if (props.exclude_paths) {
      setShowBanner(
        props.exclude_paths.find(kk => kk === props.currentSlug) === undefined
      )
    }
  }, [])

  let date = new Date()
  date.setDate(
    date.getDate() + props.banner_visibility === "every_visit" ? 1 : 7
  )

  return props._type && props._type === "website_banner_top_sticky" ? (
    <div
      className={`${
        showBanner ? "block" : "hidden"
      } font-custom w-full top-0 left-0 py-2 z-40 sticky flex justify-between items-center px-4`}
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
          onClick={(e) => rudderslabTrackOnClick("banner", "website banner", e)}
        >
          {props.banner_button.cmnlinktext} &#x2192;
        </a>
      </div>
      {props.show_banner_close ? (
        <span
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
