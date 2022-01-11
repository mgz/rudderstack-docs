import React, { useState } from "react"
// import Image from "./image"
import Link from "gatsby-link"
// import { StaticImage } from "gatsby-plugin-image"

const IntegrationSimilarV2 = ({ data }) => {
  // console.log("data", data)
  const [visibleIntegrationCount, setVisibleIntegrationCount] = useState(3)
  let isSource = data.redICDataSource.length === 0 ? false : true
  let eligibleNodes =
    data.redICDataSource.length === 0
      ? data.redICDataDestination.filter(oo =>
          data.excludedIds.find(
            exd_id => exd_id === oo.node.googleSpreadsheetId
          )
            ? false
            : true
        )
      : data.redICDataSource.filter(oo =>
          data.excludedIds.find(
            exd_id => exd_id === oo.node.googleSpreadsheetId
          )
            ? false
            : true
        )

  return (
    <section
      className={`100% bg-whiteColor-custom ${
        eligibleNodes.length === 0 ? "hidden" : "block"
      }`}
    >
      <div className="max-w-6xl px-4 md:px-3 mx-auto flex flex-wrap pb-24">
        <h3 className="w-full my-2 text-4xl md:text-5xl text-dark font-bold leading-tight mb-8 md:mb-20 mt-6 md:mt-28">
          Other popular integrations
        </h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
          {eligibleNodes &&
            eligibleNodes.map((oo, ii) => {
              // console.log(
              //   "ffff",
              //   oo.node.googleSpreadsheetId,
              //   data.excludedIds,
              //   data.excludedIds.find(
              //     exd_id => exd_id === oo.node.googleSpreadsheetId
              //   )
              // )
              return (
                <Link
                  key={oo.node.id}
                  to={oo.node.slug}
                  className={`${
                    ii < visibleIntegrationCount ? "block" : "hidden"
                  }`}
                >
                  <div className="border border-grayColor-priceCardBorder rounded-3xl shadow-md overflow-hidden h-full">
                    <div className="int-img lg:px-24 px-15 pt-5 flex flex-col justify-center items-center">
                      <div className="h-24 flex items-center">
                        <img
                          src={
                            isSource
                              ? oo.node.destinationLogoImgUrl
                              : oo.node.sourceLogoImgUrl
                          }
                          alt={
                            isSource
                              ? oo.node.destinationSlug
                              : oo.node.sourceSlug
                          }
                          // placeholder="tracedSVG"
                          // className="w-20 h-auto"
                          className="object-scale-down w-24"
                        />
                      </div>
                      <p className="text-center block my-3 capitalize font-bold">{oo.node.sourceSlug}</p>
                    </div>
                    <div className="flex items-center px-10 py-5">
                      <span className="font-bold leading-normal text-sm lr-icon relative sm:inline-block">
                        <span>View Integration</span>
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
        </div>

        {visibleIntegrationCount < eligibleNodes.length && (<div className="w-full my-2 mt-12 text-blueNew-magenta flex justify-center">
          <p
            className="btn-primary-lg text-darkScheme-textBlack hover:text-darkScheme-btnPrimaryBg w-64 cursor-pointer"
            onClick={() => {
              setVisibleIntegrationCount(visibleIntegrationCount + 6)
            }}
          >
            Load more
          </p>
        </div>)}
      </div>
    </section>
  )
}

export default IntegrationSimilarV2
