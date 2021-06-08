import React from "react"
import Link from "gatsby-link"

const SegmentSpecialistV2 = () => {
  return (
    <div className="absolute w-full -top-24 md:-top-28 px-5 md:px-0 faq-cta-box">
      <div className="py-8 text-center text-blueNew-custom font-bold border border-grayColor-priceCardBorder max-w-screen-lg m-auto faqcta rounded-xl shadow-xl faq-cta px-8 md:px-0 ">
        <p className="text-primary text-2xl leading-8 my-4 px-4 md:px-20">
          Get help from our Segment migration team! <br />
          We’ve helped 100s of companies migrate from Segment to RudderStack.
        </p>
        <span className={`btn-primary-lg mb-4 w-full sm:w-72  mx-auto`}>
          <Link
            to="/request-demo"
          >
            Talk to a team member
          </Link>
        </span>
      </div>
    </div>
  )
}
export default SegmentSpecialistV2
