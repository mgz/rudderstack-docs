import React from "react"
import Link from "gatsby-link"
import PortableText from "./portableText"

const SegmentSpecialistV2 = props => {
  return (
    <div className="absolute w-full lg:w-4/5 -top-32 md:-top-28 px-4 md:px-0 faq-cta-box">
      <div className="py-8  text-center text-blueNew-custom font-bold border border-grayColor-priceCardBorder max-w-screen-lg m-auto bg-darkScheme-textPrimary rounded-xl shadow-xl faq-cta px-4 md:px-0 ">
        <div className="text-primary text-lg md:text-2xl leading-8 my-4 px-4 md:px-20">
          <PortableText blocks={props.titleContent} />
        </div>

        <Link to={props.button.btnlink}>
          <span
            className={`btn-primary-lg mb-0 md:mb-4 w-full sm:w-72 sm:mx-auto py-4 border-none bg-darkScheme-btnPrimaryBg text-darkScheme-textPrimary`}
          >
            {props.button.btntext}
          </span>
        </Link>
      </div>
    </div>
  )
}
export default SegmentSpecialistV2
