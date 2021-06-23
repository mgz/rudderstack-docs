import React from "react"
import PortableText from "./portableText"
import Image from "./image"

const FourCardsWithTitle = props => {
  return (
    <section className="bg-grayColor-BgGray pb-8 md:pb-20">
      <div className="max-w-6xl m-auto flex flex-col w-full justify-center items-center">
        <h3 className="mt-24 mb-0 md:mb-10 text-4xl md:text-5xl font-bold leading-tight text-center max-w-4xl text-blueNew-midnight">
          {props.title}
        </h3>
      </div>
      <div className="max-w-6xl px-0 md:px-3 mx-auto">
        {/*Data WorkFlow*/}
        <div className="flex flex-wrap flex-row ">
          {props.four_card_items.map(item => {
            return (
              <div
                key={item._key}
                className="w-full sm:w-1/2 sm:px-2 mt-5 mx-4 md:mx-0"
              >
                <div className="h-full flex flex-col justify-start items-center text-center bg-white py-10 px-10 rounded-2xl">
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
                    <PortableText blocks={item.content} />
                  </div>
                </div>
              </div>
            )
          })}
          
        </div>
      </div>
    </section>
  )
}

export default FourCardsWithTitle
