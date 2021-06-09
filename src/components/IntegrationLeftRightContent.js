import React from "react"
import PortableText from "./portableText"

const IntegrationLeftRightContent = ({ data }) => {
  // console.log(data)
  return (
    <section className="md:mb-24 sm:mb-20 sm:mt-0 mt-20 mb-10">
      {data && (
        <div className="max-w-6xl px-4 md:px-3 mx-auto">
          <div className="flex flex-col w-full justify-center items-start md:text-left max-w-screen-md">
            <h3 className="md:mt-2 text-4xl md:text-5xl text-blueNew-midnight font-bold leading-tight">
              {data ? data.wycd_title : ""}
            </h3>
          </div>
          {data.wycd_leftright_content && (
            <div
              className={`grid grid-flow-col grid-cols-1 auto-rows-min md:grid-cols-2 grid-rows-${
                data.wycd_leftright_content.length
              } md:grid-rows-${
                parseInt(data.wycd_leftright_content.length / 2) +
                (data.wycd_leftright_content.length % 2)
              } gap-4 md:gap-6 mt-6 md:mt-20 mb-8`}
            >
              {data.wycd_leftright_content.map(ii => {
                return (
                  <div
                    key={ii._key}
                    className="relative w-full what-can-do text-secondary text-xl leading-8 pl-11 sm:mb-0 arrow-list-items "
                  >
                    <PortableText blocks={ii.leftrightcontent} />
                  </div>
                )
              })}
            </div>
          )}
          <div className="relative text-secondary  w-full text-xl leading-8 frtxt-contnt arrow-list-items">
            <PortableText blocks={data.wycd_footer} />
          </div>
        </div>
      )}
    </section>
  )
}

export default IntegrationLeftRightContent
