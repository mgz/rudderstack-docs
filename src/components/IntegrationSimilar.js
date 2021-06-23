import React from "react"
import Image from "./image"
import Link from "gatsby-link"

const IntegrationSimilar = ({ data }) => {
  return (
    <section className="100% bg-whiteColor-custom">
      <div className="max-w-6xl px-4 md:px-3 mx-auto flex flex-wrap pb-24">
        <h3 className="w-full my-2 text-4xl md:text-5xl text-dark font-bold leading-tight mb-8 md:mb-20 mt-6 md:mt-28">
          {data.sd_maintitle}
        </h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
          {data.sd_integrations &&
            data.sd_integrations.map((l_integration_dtl, ii) => {
              return (
                <Link
                  to={`/integration/` + l_integration_dtl.slug.current}
                >
                  <div
                    key={ii._ref}
                    className="border border-grayColor-priceCardBorder rounded-3xl shadow-md overflow-hidden h-full"
                  >
                    <div className="int-img lg:px-24 p-10 flex justify-center items-center">
                      <Image
                        props={
                          l_integration_dtl.integrationLogo.asset._id?l_integration_dtl.integrationLogo.asset._id:l_integration_dtl.integrationLogo.asset._ref
                        }
                        classes="object-scale-down h-full w-full"
                      />
                    </div>
                    <div className="flex items-center px-10 py-5">
                      <span className="font-bold leading-normal text-sm lr-icon relative sm:inline-block">
                        <a>See more</a>
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default IntegrationSimilar
