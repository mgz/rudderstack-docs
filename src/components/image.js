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