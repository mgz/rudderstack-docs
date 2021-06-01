import React from "react"
import PortableText from "./portableText"
import Image from "./image"
import Link from "gatsby-link"

const IntegrationHowToSetUp = ({ data }) => {
  let renderButton = null
  if (
    data.freetextctc &&
    data.freetextctc.btnexternallink &&
    data.freetextctc.btnexternallink === true &&
    data.freetextctc.btntext !== ""
  ) {
    renderButton = (
      <a href={data.freetextctc.btnlink} className="btn-primary-lg">
        {data.freetextctc.btntext}
      </a>
    )
  } else if (data.freetextctc && data.freetextctc.btntext !== "") {
    renderButton = (
      <span className="btn-primary-lg">
        <Link to={data.freetextctc.btnlink}>{data.freetextctc.btntext}</Link>
      </span>
    )
  }

  return (
    <section
      className={`${
        !data.freetexttitle || data.freetexttitle !== "" ? "hidden" : "block"
      }  bg-backgroundsecondary 100% left-right-section sm:pt-24 sm:pb-20 py-11`}
    >
      <div className="max-w-6xl px-4 md:px-3 mx-auto">
        <div className="flex items-center flex-wrap">
          <div className="w-full justify-center items-start md:text-left max-w-screen-md">
            <h3 className="md:mt-2 text-4xl md:text-5xl text-primary font-bold leading-tight">
              {data.freetexttitle}
            </h3>
          </div>

          <div className="flex flex-col items-center lg:gap-60 xl:gap-80 justify-center mx-auto sm:flex-row">
            <div className="sm:w-1/2 pt-10 sm:p-6 sm:pt-11 sm:pl-0">
              <div className="text-secondary leading-7 text-sm sm:text-lg">
                <PortableText blocks={data.freetextdescritpion} />
              </div>
              <div className="relative block sm:flex mt-14">
                {/* {data.freetextctc.btnexternallink &&
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
                )} */}
                {renderButton}
              </div>
            </div>
            <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0 mt-14 sm:mt-0">
              {data.freetextrightimage && data.freetextrightimage.asset && (
                <Image
                  props={data.freetextrightimage.asset._ref}
                  classes="w-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegrationHowToSetUp
