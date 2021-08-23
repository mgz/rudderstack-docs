import React from "react"
import PortableText from "./portableText"
import Image from "./image"

const CenteredAlignedTitleWithYoutube = props => {
  console.log("CenteredAlignedTitleWithYoutube", props)
  return (
    <section>
      <div className="max-w-6xl m-auto flex flex-col w-full justify-center items-center pb-12 md:pb-0">
        <h3 className="mt-36 text-4xl md:text-5xl font-bold leading-tight text-center text-blueNew-midnight max-w-3xl">
          {props.title}
        </h3>
        <div className="mt-4 text-lg  leading-tight text-center text-grayColor-custom max-w-2xl">
          <PortableText blocks={props.content} />
        </div>
        <div className="relative w-full rounded-lg flex-grow justify-items-end px-4 md:px-12 py-4 sm:items-center lg:items-start lg:mb-0 max-w-5xl -bottom-16">
          <div class="iframe-container">
            <div className="stack-frame-1"></div>
            <div className="stack-frame-2"></div>
            <iframe
              src={props.youtube.url}
              frameborder="0"
              allowfullscreen
              class="video"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bg-blueNew-midnight text-whiteColor-custom py-24">
        <div className="max-w-6xl m-auto flex flex-col w-full justify-center items-center pb-12 md:pb-0">
          <h3 className="mt-24 mb-0 md:mb-12 text-4xl md:text-5xl font-bold leading-tight text-center max-w-3xl ">
            {props.footer_title}
          </h3>
        </div>
        <div className="max-w-5xl px-0 md:px-3 mx-auto">
          {/*Data WorkFlow*/}
          <div className="flex flex-wrap flex-row">
            {props.two_card_items.map(item => {
              return (
                <div
                  key={item._key}
                  className={`w-full md:w-1/2 sm:px-2 mt-5 `}
                >
                  <div className="h-full flex flex-col items-center md:items-left text-center md:text-left py-10 px-8 rounded-2xl border-grayColor-custom shadow-md  mx-3 text-blueNew-midnight bg-whiteColor-custom">
                    <div class="text-2xl-2 font-bold mb-2 mt-2 text-left">
                      {item.title}
                    </div>
                    <div class=" text-lg">
                      <PortableText blocks={item.content} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CenteredAlignedTitleWithYoutube
