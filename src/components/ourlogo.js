import React from "react"
import Image from "./image"

function OurLogo(props) {
  const maintitle = props.customHeaderText || props.ourlogotitle
  const logoimages = props.outlogoimage
  return (
    <section
      className={`max-w-6xl px-4 ${
        props.removeSectionVerticalMargin ? "" : "my-12"
      }  md:px-3 mx-auto sm:${
        props.removeSectionVerticalMargin ? "" : "my-24"
      } flex flex-wrap flex-col md:flex-row items-center`}
    >
      <div
        className={`flex flex-col w-full justify-center items-start md:text-left ${
          props.title_alignment === "left" ? "" : "max-w-2xl mx-auto"
        }`}
      >
        <h3 className="my-4 text-2xl md:text-3xl text-primary font-bold leading-8	md:leading-10 text-center normal-case md:mx-0 mx-auto">
          {maintitle}
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
                  />
                </span>
              </div>
            )
          })}
      </div>
    </section>
  )
}
export default OurLogo
