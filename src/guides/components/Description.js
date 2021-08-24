import React from "react"
import BlockContent from '@sanity/block-content-to-react'
import Gist from 'super-react-gist'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import clientConfig from "../../../client-config"
import serializers from "./serializers"

// const serializers = {
//   types: {
//     gist: ({node}) => {
//       const {url} = node;
//       return <div style={{maxWidth:"645px"}}><Gist  url={url}></Gist></div>;
//     },
//     code: (props) => (
//       <SyntaxHighlighter
//         language={props.node.language}
//         customStyle={{
//           fontSize: 14,
//           marginTop: 0,
//           marginBottom: 16
//         }}
//       >
//         {props.node.code}
//       </SyntaxHighlighter>
//     ),
//   }
// }

const Description = ({contents}) => {
  return (
    <article className="project">
      <div className="project-info">
        <BlockContent blocks={contents} serializers={serializers} {...clientConfig.sanityGuides} />
      </div>
    </article>
  )
}

export default Description
