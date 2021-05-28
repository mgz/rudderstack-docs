import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"

function renderImage(image, classes, alt) {
  const imgh = (() => {
    return (
      <img
        loading="lazy"
        src={image.node.url}
        alt={alt ? alt : image.node._id}
        className={classes}
      />
      // <GatsbyImage
      //   src={image.node.fluid.src}
      //   alt={image.node._id}
      //   className={classes}
      // />
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
