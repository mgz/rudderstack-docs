import React from "react"
import PortableText from "./portableText"
import Image from "./image"

const ThreeCardsWithTitle = props => {
  return (
    <>
      <div className="max-w-6xl m-auto flex flex-col w-full justify-center items-center pb-12 md:pb-0">
        <h3 className="mt-24 mb-0 md:mb-12 text-4xl md:text-5xl font-bold leading-tight text-center max-w-5xl ">
          {props.title}
        </h3>
      </div>
      <div className="max-w-6xl px-0 md:px-3 mx-auto">
        {/*Data WorkFlow*/}
        <div className="flex flex-wrap flex-row">
          {props.three_card_items.map(item => {
            return (
              <div
                key={item._key}
                className={`w-full md:${item.display_ratio === "w-full" ? 'w-full sm:px-12 lg:px-40' : item.display_ratio} sm:px-2 mt-5`}
              >
                <div className="h-full flex flex-col justify-start items-center text-center py-10 px-4 rounded-2xl">
                  <div className="h-20">
                    <Image
                      props={item.card_image.asset._ref}
                      classes="w-full"
                    />
                  </div>
                  <div class="text-2xl-2 font-bold mb-6 mt-2 max-w-xs m-auto">
                    {item.title}
                  </div>
                  <div class="text-grayColor-custom text-lg">
                    <PortableText blocks={item.content} trackSectionHeader={props.title} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ThreeCardsWithTitle
