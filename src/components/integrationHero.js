import React from "react"
import PortableText from "./portableText"
import Image from "./image"
import Link from "gatsby-link"

function IntegrationHero({ data }) {
  return (
    <section className="max-w-6xl px-4 md:px-3 sm:my-20 md:mt-10 md:mb-40 mx-auto relative banner-section">
      <div className="flex flex-col items-center md:gap-1 justify-center mx-auto lg:flex-row lg:p-0">
        <div className="relative z-20 flex flex-col w-full pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
          <h2 className="mb-8 md:my-4 md:text-6xl text-5xl  font-bold leading-tight">
            {data.herotitle}
          </h2>
          <PortableText blocks={data.herodescritpion} />
          <div className="relative block sm:flex mt-12">
            {data.herocta && data.herocta.btnexternallink &&
            data.herocta.btnexternallink === true ? (
              <a
                href={data.herocta.btnlink}
                className="btn-primary-lg sm:mr-4 md:mb-0 mb-6"
              >
                {data.herocta.btntext}
              </a>
            ) : (
              <span className="btn-primary-lg sm:mr-4 md:mb-0 mb-6">
                <Link to={data.herocta ? data.herocta : ""}>{data.herocta ? data.herocta : ""}</Link>
              </span>
            )}
          </div>
        </div>
        <div className="relative w-full px-5 rounded-lg flex-grow justify-items-end lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0">
          <div className="relative rounded-md group sm:px-0 sm:items-center lg:items-start">
            <div className="w-full">
              <Image props={data.heroleftimage.asset._ref} classes="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default IntegrationHero
