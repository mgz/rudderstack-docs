// import React from "react"
// import { StaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// function renderImage(image, classes, alt) {
//   // console.log(
//   //   "image path",
//   //   `http://localhost:8000${
//   //     image.node.localFile.childImageSharp
//   //       ? image.node.localFile.childImageSharp.fluid.src
//   //       : image.node.localFile.publicURL
//   //   }`
//   // )
//   const imgh = (() => {
//     // console.log("StaticQuery", image.localFile.childImageSharp)
//     return (
//       // <StaticImage
//       //   src={`http://localhost:8000${image.node.localFile.publicURL}`}
//       //   alt={alt ? alt : image.node._id}
//       //   class={classes}
//       //   placeholder="tracedSVG"
//       // />

//       <img
//         loading="lazy"
//         src={`${
//           image.localFile.childImageSharp
//             ? "http://localhost:8000" +
//               image.localFile.childImageSharp.fixed.src
//             : image.url
//         }`}
//         alt={alt ? alt : image._id}
//         className={classes}
//       />
//       // <img
//       //   loading="lazy"
//       //   src={image.url}
//       //   alt={alt ? alt : image._id}
//       //   className={classes}
//       // />
//     )
//   })()
//   return imgh
// }

// const Image = props => {
//   return (
//     <StaticQuery
//       query={graphql`
//         {
//           sanityimages: allSanityImageAsset {
//             nodes {
//               _id
//               url
//               localFile(width: 500) {
//                 childImageSharp {
//                   fixed {
//                     src
//                   }
//                 }
//               }
//             }
//           }
//         }
//       `}
//       // variables={{ ref: props.props }}
//       render={data => {
//         const imgdata =
//           data.sanityimages.nodes &&
//           data.sanityimages.nodes.find(imgdata => imgdata._id === props.props)
//         // console.log("imnage", data.sanityimages,imgdata)
//         return renderImage(imgdata, props.classes, props.alt)
//       }}
//     />
//   )
// }
// export default Image

import React from "react"
import { StaticQuery, graphql } from "gatsby"

function renderImage(image, classes, alt) {
  const imgh = (() => {
    return (
      <img
        loading="lazy"
        //src={image.node.localFile.publicURL}
         src={image.node.url}
        alt={alt ? alt : image.node._id}
        className={classes}
      />  
    )
  })()
  return imgh
}

const Image = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          sanityimages: allSanityImageAsset {
            edges {
              node {
                url
                _id
              }
            }
          }
        }
      `}
      /* query={graphql`
        query {
          sanityimages: allSanityImageAsset {
            edges {
              node {
                url
                _id
                localFile {
                  publicURL
                }
              }
            }
          }
        }
      `} */
      render={data => {
        const imgdata = data.sanityimages.edges.find(
          imgdata => imgdata.node._id === props.props
        )
        return renderImage(imgdata, props.classes, props.alt)
      }}
    />
  )
}
export default Image
