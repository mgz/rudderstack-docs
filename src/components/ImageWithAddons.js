import React from "react"
import Image from "./image"
const ImageWithAddons = props => {
  const alt = props.data.alt_attribute
  const caption = props.data.image_caption
  const keyphrase = props.data.keyphrase
  return (
    <div className="relative flex justify-center">
      <Image
        props={props.data.imgboximage.asset._ref}
        alt={props.data.alt_attribute}
      />

      <h3 className="absolute bottom-6">{props.data.image_caption}</h3>
    </div>
  )
}

export default ImageWithAddons
