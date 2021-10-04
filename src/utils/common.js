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
