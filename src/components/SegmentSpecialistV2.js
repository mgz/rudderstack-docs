import React from "react"
import Link from "gatsby-link"

const SegmentSpecialistV2 = () => {
  return (
    <div className="absolute md:w-full lg:w-4/5 -top-32 md:-top-28 px-4 md:px-0 faq-cta-box">
      <div className="py-2 md:py-8  text-center text-blueNew-custom font-bold border border-grayColor-priceCardBorder max-w-screen-lg m-auto faqcta rounded-xl shadow-xl faq-cta px-4 md:px-0 ">
        <p className="text-primary text-lg md:text-2xl leading-8 my-4 px-4 md:px-20">
          Get help from our Segment migration team! <br />
          We’ve helped 100s of companies migrate from Segment to RudderStack.
        </p>
        <Link to="/request-demo">
          <span className={`btn-primary-lg mb-0 md:mb-4 w-full sm:w-72 sm:mx-auto py-0 md:py-4`}>
            Talk to a team member
          </span>
        </Link>
      </div>
    </div>
  )
}
export default SegmentSpecialistV2
