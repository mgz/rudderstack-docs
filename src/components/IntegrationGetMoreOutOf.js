import React from "react"
import PortableText from "./portableText"
import Image from "./image"
import Link from "gatsby-link"

const IntegrationGetMoreOutOf = ({ data }) => {
  return (
    <section className="100% bg-whiteColor-custom">
      <div className="max-w-6xl px-4 md:px-3 mx-auto pt-24 pb-28 pb-0 lg:py-24">
        <div className="flex items-center flex-wrap">
          <div className="w-full justify-center items-start md:text-left max-w-screen-md">
            <h3 className="md:mt-2 text-4xl md:text-5xl text-primary font-bold leading-tight">
              {data.freetexttitle}
            </h3>
          </div>
          <div className="sm:w-1/2 sm:p-6 sm:pl-0 sm:pt-0 sm:mt-6 md:pr-0">
            <div className="text-secondary leading-7 text-sm sm:text-lg">
              <PortableText blocks={data.freetextdescritpion} />
            </div>
            {/* <span className="mt-11 sm:mt-14 font-bold leading-normal text-sm relative inline-flex sm:inline-block hover:text-blueNew-custom">
              Ready to Get Started?
            </span> */}
            <div className="relative block sm:flex sm:mt-14 mt-16">
              {data.freetextctc.btnexternallink &&
              data.freetextctc.btnexternallink === true ? (
                <a href={data.freetextctc.btnlink} className="btn-primary-lg">
                  {data.freetextctc.btntext}
                </a>
              ) : (
                <span className="btn-primary-lg">
                  <Link to={data.freetextctc.btnlink}>
                    {data.freetextctc.btntext}
                  </Link>
                </span>
              )}
            </div>
          </div>
          <div className="w-full sm:w-1/2 sm:p-6 md:pl-16 sm:pr-0 mt-12 sm:mt-0">
            {/* <img src={EventFilter} alt="event stream" className="w-full" /> */}
            <Image
              props={data.freetextrightimage.asset._ref}
              classes="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegrationGetMoreOutOf
