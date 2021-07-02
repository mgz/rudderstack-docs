import React from "react"
import { buildImageObj } from "../lib/helpers"
import { imageUrlFor } from "../lib/image-url"

const MainImage = ({ mainImage, width = 1200, _key }) => {
  const imgUrl =
    mainImage &&
    imageUrlFor(buildImageObj(mainImage))
      .width(width)
      .height(Math.floor((9 / 16) * width))
      .fit("crop")
      .auto("format")
      .url()

  return imgUrl ? (
    // <img key={_key} src={imgUrl} alt={mainImage.alt || ""} />
    <img key={_key} alt="some text" src={imgUrl} />
  ) : (
    <></>
  )
}

export default MainImage
