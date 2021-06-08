import React from "react"
import Image from "./image"

const ProductImageWithListOfText = props => {
  const imgref = props.image_with_list_of_text_image.asset._ref
  return (
    <section className="bg-backgroundsecondary 100% left-right-section sm:py-24 py-11">
      <div className="max-w-6xl px-4 md:px-3 mx-auto">
        <h3 className="md:mt-2 text-4xl md:text-5xl text-blueNew-midnight font-bold leading-tight tracking-tight-2 max-w-2xl text-center mx-auto">
          {props.image_with_list_of_text_title}
        </h3>
        <div className="flex flex-col-reverse sm:flex-row items-center md:gap-12 xl:gap-24 justify-center mx-auto lg:p-0 mt-11 ">
          <div className="w-full sm:w-1/2 sm:p-6 sm:pl-0 mt-12 sm:mt-0">
            <Image props={imgref} classes="w-full" />
          </div>
          <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0 list-stream">
            <ul>
              {props.image_with_list_of_text_texts.map((ii, idx) => (
                <li
                  key={idx}
                  className="text-3xl font-bold relative pl-10 pb-3"
                >
                  {ii}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductImageWithListOfText
