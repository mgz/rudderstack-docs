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

export const rudderslabTrackOnClick = (eventType, sectionName, e) => {
  if (!window.rudderanalytics) {
    return
  }
  window.rudderanalytics.track("click", {
    // not quite sure how to get link text, so the below is an example to get the text of the link
    link_text: e.target.innerText,
    page_title: document.title,

    link_location: sectionName,
    // e.target.baseURI,
    // we want to track where the link points, whether it is a URL or internal path
    target_url: e.target.href,
    click_type: eventType,
  })
}

export const rudderslabTrackOnSearch = searchText => {
  if (!window.rudderanalytics) {
    return
  }
  window.rudderanalytics.track("search", {
    page_title: document.title,
    search_text: searchText,
  })
}
