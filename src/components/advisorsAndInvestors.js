import React from "react"
import Image from "./image"

const AdvisorsAndInvestor = props => {
  return (
    <section className="">
      <div className="max-w-6xl px-5 py-16 md:py-28 mx-auto ">
        <div className="flex flex-wrap w-full mb-0 md:mb-20 flex-col">
          <h2 className="text-3xl-3 sm:text-5xl font-bold mb-6 text-blueNew-midnight">
            {props.title}
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {props.advisors.map(item => {
            return (
              <div key={item._key} class="w-full md:w-1/3 mb-6 p-4">
                <div class="h-full text-center">
                  <Image
                    props={item.image.asset._ref}
                    classes="w-40 h-40 object-cover object-center rounded-full inline-block"
                  />
                  <h3 class="font-medium tracking-wider text-lg pt-10 pb-5">
                    {item.name}
                  </h3>
                  <p class="text-lg">{item.role}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex justify-center flex-col sm:flex-row -m-4 mt-6 md:mt-32">
          {props.investors.map(item => {
            return (
              <div key={item._key} className="w-full md:w-1/3 mb-6">
                <div class="h-full text-center">
                  <Image
                    props={item.asset._ref}
                    classes="w-32 h-32 mb-8 object-cover object-center inline-block"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AdvisorsAndInvestor
