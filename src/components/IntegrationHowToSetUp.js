import React from "react"
import PortableText from "./portableText"
import { StaticImage } from "gatsby-plugin-image"
import Image from "./image"
import Link from "gatsby-link"

const IntegrationHowToSetUp = ({ data, integrationLogo }) => {
  // console.log("howtosetup", integrationLogo)
  let renderButton = null
  if (
    data.freetextctc &&
    data.freetextctc.btnexternallink &&
    data.freetextctc.btnexternallink === true &&
    data.freetextctc.btntext !== ""
  ) {
    renderButton = (
      <a href={data.freetextctc.btnlink} className="btn-primary-lg text-white">
        {data.freetextctc.btntext}
      </a>
    )
  } else if (data.freetextctc && data.freetextctc.btntext !== "") {
    renderButton = (
      <span className="btn-primary-lg text-white">
        <Link to={data.freetextctc.btnlink}>{data.freetextctc.btntext}</Link>
      </span>
    )
  }

  return (
    <section
      className={`${
        !data.freetexttitle || data.freetexttitle !== "" ? "block" : "hidden"
      }  bg-backgroundsecondary 100% left-right-section sm:pt-24 sm:pb-20 py-11`}
    >
      <div className="max-w-6xl px-4 md:px-3 mx-auto">
        <div className="flex items-center flex-wrap">
          <div className="w-full justify-center items-start md:text-left max-w-screen-md">
            <h3 className="md:mt-2 text-4xl md:text-5xl text-blueNew-midnight font-bold leading-tight">
              {data.freetexttitle}
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center mx-auto sm:flex-row">
            <div className="sm:w-1/2 pt-10 sm:p-6 sm:pt-11 sm:pl-0">
              <div className="text-secondary leading-7 text-sm sm:text-lg frtxt-contnt arrow-list-items">
                <PortableText blocks={data.freetextdescritpion} />
              </div>
              <div className="relative block sm:flex mt-14">{renderButton}</div>
            </div>
            <div className="w-full sm:w-1/2 sm:p-6 sm:pr-0 mt-14 sm:mt-0 lg:pl-36 md:pl-28">
              <div className="flex flex-row">
                <div className="bg-white rounded-lg p-8 shadow-md w-36">
                  {/* <StaticImage
                    src="../images/rudderstack-short-logo.png"
                    alt="cust-logo"
                    class="h-full w-full"
                    placeholder="tracedSVG"
                  /> */}
                  <Image
                    props={integrationLogo.asset._ref}
                    // classes="w-full h-full"
                    // classes="mx-auto my-auto"
                    classes="object-scale-down h-full w-full"
                  />
                </div>
                <div className="mx-auto my-auto">
                  <StaticImage
                    src="../images/plus-sign.png"
                    alt="cust-logo"
                    class="md:h-24 md:w-24"
                    placeholder="tracedSVG"
                  />
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md w-36 items-center flex">
                  <StaticImage
                    src="../images/rudderstack-short-logo.png"
                    alt="cust-logo"
                    // class="h-full w-full"
                    // classes="w-72 mx-auto my-auto"
                    placeholder="tracedSVG"
                  />
                </div>
              </div>
              {/* {data.freetextrightimage && data.freetextrightimage.asset && (
                <Image
                  props={data.freetextrightimage.asset._ref}
                  classes="w-full"
                />
              )} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegrationHowToSetUp
