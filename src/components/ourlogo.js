import React from "react"
import Image from "./image"

function OurLogo(props) {
  const maintitle = props.customHeaderText || props.ourlogotitle
  const logoimages = props.outlogoimage
  return (
    <section
      className={`px-4 md:px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center py-19 section-gradient relative`}
    >
      <span className="section-border block absolute top-0 left-0 w-full"></span>
      <div
        className={`flex w-full justify-center`}
      >
        <h3 className="my-4 text-4xl text-primary font-bold leading-8	md:leading-10 text-center normal-case md:mx-0 mx-auto">
          {/* {maintitle} */}
          11,000+ sites and apps run RudderStack
        </h3>
      </div>
      <div className="flex w-full justify-start flex-wrap mt-2 sm:mt-2 our-logos">
        {logoimages &&
          logoimages.map((logoimage, i) => {
            return (
              <div
                key={i}
                className={`w-full md:w-1/${
                  props.logos_per_row === "6" ? "6" : "5"
                } flex justify-center md:py-10 px-2 py-4`}
              >
                <span className="h-auto">
                  <Image
                    classes="object-contain h-full w-auto"
                    props={logoimage.asset._ref}
                    width="210"
                    height="40"
                  />
                </span>
              </div>
            )
          })}
      </div>
      <span className="section-border block absolute bottom-0 left-0 w-full"></span>
    </section>
  )
}
export default OurLogo
