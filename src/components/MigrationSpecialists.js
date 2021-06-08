import React from "react"
import Link from "gatsby-link"


const MigrationSpecialists = () => {
  return (
    <div className="absolute md:w-full lg:w-4/5 -top-24 md:-top-16 px-5 md:px-0 faq-cta-box">
    <div
      className="py-8 text-center text-blueNew-custom font-bold border border-grayColor-priceCardBorder max-w-screen-lg m-auto faqcta rounded-xl shadow-xl faq-cta px-8 md:px-0">
      <p className="text-primary text-2xl leading-8">Currently running Segment? </p>
      <Link to="/request-demo"
        className="block text-sm leading-sm font-bold mt-4 md:mt-5 lr-icon px-4 mx-auto mt-3 ">
        Talk with one of our Segment Migration Specialists.
      </Link>
    </div>
  </div>
  )
}
export default MigrationSpecialists
