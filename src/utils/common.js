// export const rudderslabTrackOnNavClick = e => {
//   if (!window.rudderanalytics) {
//     return
//   }
//   window.rudderanalytics.track("click", {
//     // not quite sure how to get link text, so the below is an example to get the text of the link
//     link_text: e.target.innerText,
//     page_title: document.title,
//     link_location: e.target.baseURI,
//     // we want to track where the link points, whether it is a URL or internal path
//     target_url: e.target.href,
//     click_type: "navigation",
//   })
// }

// import { CommentsDollarDimensions } from "@styled-icons/fa-solid/CommentsDollar"

// export const rudderslabTrackOnLinkClick = e => {
//   if (!window.rudderanalytics) {
//     return
//   }
//   window.rudderanalytics.track("click", {
//     // not quite sure how to get link text, so the below is an example to get the text of the link
//     link_text: e.target.innerText,
//     page_title: document.title,
//     link_location: e.target.baseURI,
//     // we want to track where the link points, whether it is a URL or internal path
//     target_url: e.target.href,
//     click_type: "link",
//   })
// }

// export const rudderslabTrackOnButtonClick = e => {
//   if (!window.rudderanalytics) {
//     return
//   }
//   window.rudderanalytics.track("click", {
//     // not quite sure how to get link text, so the below is an example to get the text of the link
//     link_text: e.target.innerText,
//     page_title: document.title,
//     link_location: e.target.baseURI,
//     // we want to track where the link points, whether it is a URL or internal path
//     target_url: e.target.href,
//     click_type: "button",
//   })
// }

// export const rudderslabTrackOnBannerClick = e => {
//   if (!window.rudderanalytics) {
//     return
//   }
//   window.rudderanalytics.track("click", {
//     // not quite sure how to get link text, so the below is an example to get the text of the link
//     link_text: e.target.innerText,
//     page_title: document.title,
//     link_location: e.target.baseURI,
//     // we want to track where the link points, whether it is a URL or internal path
//     target_url: e.target.href,
//     click_type: "banner",
//   })
// }

function checkPrevSibbling(currEl) {
  let returnEl

  returnEl =
    currEl.previousElementSibling.nodeName === "H2"
      ? currEl.previousElementSibling
      : checkPrevSibbling(currEl.previousElementSibling)

  return returnEl
}

export const rudderslabTrackOnClick = (
  eventType,
  sectionName,
  e,
  isSeekSectionName
) => {
  let el
  if (isSeekSectionName) {
    try {
      el = checkPrevSibbling(document.getElementById(e.target.id).parentElement)
        .innerHTML
    } catch {
      el = document.getElementsByTagName("h1")[0].innerHTML
    }

    if (!el) {
      el = document.getElementsByTagName("h1")
    }
  }

  if (!window.rudderanalytics) {
    return
  }
  // if (sectionName !== "") {
  //   sectionName = sectionName
  // } else {
  //   sectionName = el
  // }
  // console.log('track.log',e)
  window.rudderanalytics.track("click", {
    // not quite sure how to get link text, so the below is an example to get the text of the link
    link_text: e.target.innerText,
    page_title: document.title,

    link_location: el ? el : sectionName,
    // e.target.baseURI,
    // we want to track where the link points, whether it is a URL or internal path
    target_url: e.target.href ? e.target.href : e.target.baseURI,
    click_type: eventType,
  })
}

export const rudderslabTrackOnSearch = searchText => {
  if (searchText === "") {
    return
  }
  if (!window.rudderanalytics) {
    return
  }
  window.rudderanalytics.track("search", {
    page_title: document.title,
    search_text: searchText,
  })
}

export const rudderslabTrackOnYoutubeVideoPlayback = (sectionName, event) => {
  // console.log("rudderslabTrackOnYoutubeVideoPlayback",event)
  // console.log('getVideoData',event.target.getVideoData())
  // console.log('getPlaybackRate',event.target.getPlaybackRate())
  // console.log('showVideoInfo',event.target.showVideoInfo())
  // console.log('getDuration',event.target.getDuration())
  // console.log('getMediaReferenceTime',event.target.getMediaReferenceTime())
  
  if (!window.rudderanalytics) {
    return
  }
  window.rudderanalytics.track("video_playback_started", {
    page_title: document.title,
    video_location: sectionName,

    session_id: "",
    content_asset_ids: [event.target.playerInfo.videoData.video_id],
    content_pod_ids: [],
    ad_asset_id: [],
    ad_pod_id: [],
    ad_type: [],
    position: 0,
    total_length: event.target.playerInfo.duration,
    bitrate: null,
    framerate: null,
    video_player: "youtube",
    sound: event.target.playerInfo.volume,
    full_screen: false,
    ad_enabled: false,
    quality: event.target.playerInfo.playbackQuality,
    livestream: false,
  })
}
