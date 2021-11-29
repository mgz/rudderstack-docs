import React, { useEffect } from "react"
import clientConfig from "../../client-config"
import BasePortableText from "@sanity/block-content-to-react"
// import serializers from "./serializers"

import MainImage from "./MainImage"
// import ReactPlayer from "react-player";
// import InstagramEmbed from "react-instagram-embed";
// import LatexRenderer from "./Latex";
import getYouTubeId from "get-youtube-id"
/* import YouTube from "react-youtube" */
import CustomAudioPlayer from "./CustomAudioPlayer"
import ImageWithAddons from "./ImageWithAddons"
import TableContent from "./tableContent"
import {
  rudderslabTrackOnClick,
  rudderslabTrackOnYoutubeVideoPlayback,
} from "../utils/common"
import Code from "../@rocketseat/gatsby-theme-docs/components/Code"

const LargeQuotedText = ({ node }) => {
  return (
    <div className="px-11 py-16 text-2xl-2 my-20 text-blueNew-custom bg-blueNew-lighter rounded-lg">
      <span className="mt-0">“{node.quoted_text}”</span>
    </div>
  )
}

const AuthorReference = ({ node }) => {
  if (node && node.author && node.author.name) {
    return <span key={node._key}>{node.author.name}</span>
  }
  return <></>
}

const PortableText = ({ blocks, className, trackSectionHeader }) => {
  useEffect(() => {
    import("@justinribeiro/lite-youtube")

    let tempAnchors = []
    document.querySelectorAll("main a").forEach(anc => {
      if (anc.getAttribute("href") && anc.getAttribute("href").includes("#"))
        tempAnchors.push(anc)
    })

    tempAnchors.forEach(a => {
      a.addEventListener("click", function (e) {
        e.preventDefault()
        let href = this.getAttribute("href")
        href = href.substring(href.indexOf("#") + 1, href.length)
        let elem =
          document.getElementById(href) ||
          document.querySelector(
            "a[name=" + href.substring(1, href.length) + "]"
          )
        //gets Element with an id of the link's href
        //or an anchor tag with a name attribute of the href of the link without the #
        window.scroll({
          top: elem.offsetTop - 92,
          left: 0,
          behavior: "smooth",
        })
      })
    })
  }, [])
  return (
    <BasePortableText
      blocks={blocks}
      //  serializers={() => <Serializers {...trackSectionHeader} />}
      // serializers={{...serializers,trackSectionHeader:trackSectionHeader}}
      serializers={{
        types: {
          // block: props =>
          //   // Check if we have an override for the “style”
          //   overrides[props.node.style]
          //     ? // if so, call the function and pass in the children, ignoring
          //       // the other unnecessary props
          //       overrides[props.node.style]({ children: props.children })
          //     : // otherwise, fallback to the provided default with all props
          //       BlockContent.defaultSerializers.types.block(props),
          large_quoted_text: LargeQuotedText,
          authorReference: AuthorReference,
          mainImage: ({ node }) => <MainImage mainImage={node} alt="" />,
          image: ({ node }) => <MainImage mainImage={node} alt="" />,
          table_with_header: ({ node }) => <TableContent data={node} />,
          youtube: ({ node }) => {
            // console.log('you tube',node)
            const { url } = node
            const id = getYouTubeId(url)
            return (
              <div class="iframe-container mb-20 md:mb-0">
                {/* <YouTube
                  key={node._key}
                  className="video"
                  videoId={id}
                  onPlay={event =>
                    rudderslabTrackOnYoutubeVideoPlayback(
                      trackSectionHeader,
                      event
                    )
                  }
                /> */}
                <div
                  onClick={event =>
                    rudderslabTrackOnYoutubeVideoPlayback(
                      trackSectionHeader,
                      id
                    )
                  }
                >
                  <lite-youtube
                    videoid={id}
                    class="video"
                    params="rel=0"
                  ></lite-youtube>
                </div>
              </div>
            )
          },
          image_with_addons: ({ node }) => <ImageWithAddons data={node} />,
          embed_audio: ({ node }) => {
            // The component we use to render the actual player
            return <CustomAudioPlayer {...node} />
          },
          code_go: props => {
            return (
              <Code
                className={`language-go`}
                codeString={props.node.code_go.code}
              />
            )
          },
          code_mysql: props => {
            return (
              <Code
                className={`language-sql`}
                codeString={props.node.code_mysql.code}
              />
            )
          },
          code_tsx: props => {
            return (
              <Code
                className={`language-tsx`}
                codeString={props.node.code_tsx.code}
              />
            )
          },
          code_yaml: props => {
            return (
              <Code
                className={`language-yaml`}
                codeString={props.node.code_yaml.code}
              />
            )
          },

          code_java: props => {
            console.log('code_java',props)
            return (
              <Code
                className={`language-java`}
                codeString={props.node.code_java.code}
              />
            )
          },

          code_xml: props => {
            return (
              <Code
                className={`language-xml`}
                codeString={props.node.code_xml.code}
              />
            )
          },

          code_ruby: props => {
            return (
              <Code
                className={`language-ruby`}
                codeString={props.node.code_ruby.code}
              />
            )
          },
          code: props => {
            return (
              <Code
                className={`language-${props.node.language}`}
                codeString={props.node.code}
              />
            )
          },
          // videoEmbed: ({ node }) => <ReactPlayer className="mt-6 mb-6" url={node.url} controls />,
          // instagram: ({ node }) => {
          //   if (!node.url) return null;
          //   return <InstagramEmbed url={node.url} className="container mx-auto mt-6 mb-6" />;
          // },
          // math: ({ node, isInline = false }) => <LatexRenderer isInline={isInline} latex={node.latex} />
        },
        marks: {
          internalLink: ({ children, mark }) => (
            <a style={{ color: "red" }} href={mark.slug.current}>
              {children}
            </a>
          ),
          link: ({ children, mark, _key }) => {
            // console.log(children, mark, "block contain")
            //added by Hari on 2021-04-30
            // console.log('portable text tracker render',trackSectionHeader)
            return (
              <a
                id={_key}
                className={` underline text-purpleNew-gigas hover:text-blueNew-midnight`}
                href={mark.href}
                onClick={e =>
                  rudderslabTrackOnClick(
                    "link",
                    trackSectionHeader,
                    e,
                    trackSectionHeader ? false : true
                  )
                }
              >
                {children}
              </a>
            )
          },
        },
      }}
      {...clientConfig.sanity}
    />
  )
}

export default PortableText
