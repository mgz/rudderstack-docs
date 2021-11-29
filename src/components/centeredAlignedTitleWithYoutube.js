import React, { useEffect, useState } from "react"
import PortableText from "./portableText"
// import Image from "./image"
import { rudderslabTrackOnYoutubeVideoPlayback } from "../utils/common"
/* import YouTube from "react-youtube" */
import bgImage from '../images/Union.svg'


const CenteredAlignedTitleWithYoutube = props => {

  /* const [windowOrigin, setWindowOrigin] = useState(null); */

  useEffect(() => {
    /* setWindowOrigin(window.location.origin) */
    import("@justinribeiro/lite-youtube");
  }, [])
  let tmp_youtube_url_split = props.youtube.url.split("?")[0].split("/")
  // console.log(
  //   "CenteredAlignedTitleWithYoutube",
  //   tmp_youtube_url_split[tmp_youtube_url_split.length - 1]
  // )
  const _onPlay = event => {
    return rudderslabTrackOnYoutubeVideoPlayback(props.title, tmp_youtube_url_split[tmp_youtube_url_split.length - 1])
  }

  /* const ytOpts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      origin: windowOrigin
    },
  }; */

  useEffect(() => {
    [].forEach.call(document.querySelectorAll('div[data-src]'), function(div) {
      div.setAttribute("style","background-image: url(" + div.getAttribute('data-src') + ");");
      div.onload = function() {
        div.removeAttribute('data-src');
      };
    });
  })

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <div className="blog-section flex">
          <div className="w-1/2 border-r border-darkScheme-textPrimary">
            <div className="w-9/12 mx-auto">
              <h3 className="text-darkScheme-btnSecondaryBg uppercase mb-5 text-2xl font-bold">Read the Blog</h3>
              <p className="text-darkScheme-textPrimary">Read the latest on solving data engineering problems, big picture data industry analysis, and product updates</p>
              <a href="#" className="learn-more mt-2 text-darkScheme-textPrimary font-bold block"><span className="learn-more-text">Learn More</span><span className="learn-more-icon pl-2 text-darkScheme-btnSecondaryBg">&gt;</span></a>
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-9/12 mx-auto">
              <h3 className="text-darkScheme-btnSecondaryBg uppercase mb-5 text-2xl font-bold">Explore the platform</h3>
              <p className="text-darkScheme-textPrimary">Control all your customer data and securely send it anywhere</p>
              <a href="#" className="learn-more mt-2 text-darkScheme-textPrimary font-bold block"><span className="learn-more-text">Learn More</span><span className="learn-more-icon pl-2 text-darkScheme-btnSecondaryBg">&gt;</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CenteredAlignedTitleWithYoutube
