import React from "react"
import Image from "./image"

const Leadership = props => {
  return (
    <section className="">
      <div className="max-w-6xl px-5 pt-16 md:pt-28 mx-auto">
        <div className="flex flex-wrap w-full mb-8 md:mb-20 flex-col">
          <h2 className="sm:text-5xl text-2xl font-bold mb-6 text-blueNew-midnight">
            {props.title}
          </h2>
          <p className="w-full leading-relaxed text-sm sm:text-lg text-grayColor-custom">
            {props.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {props.leaderships.map(item => {
            return (
              <div
                key={item._key}
                className="p-4 w-full md:w-1/3 m-auto max-w-sm"
              >
                <div className="h-full border border-grayColor-priceCardBorder rounded-3xl overflow-hidden shadow-md">
                  <Image
                    props={item.image.asset._ref}
                    classes="h-64 sm:h-72 w-full object-cover object-center"
                  />
                  <div className="py-4 text-center">
                    <h3 className="title-font text-2xl font-medium mb-3">
                      {item.name}
                    </h3>
                    <p className="leading-relaxed mb-3 text-xl">{item.role}</p>
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

export default Leadership
