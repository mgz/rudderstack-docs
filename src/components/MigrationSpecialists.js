import React from "react"
import Link from "gatsby-link"
import { rudderslabTrackOnClick } from "../utils/common"

const MigrationSpecialists = () => {
  return (
    <div className="md:w-full px-5 md:px-0 faq-cta-box mx-auto my-20 mt-16">
      <div className="py-8 text-center font-bold border border-grayColor-priceCardBorder max-w-screen-lg m-auto faqcta rounded-xl shadow-xl faq-cta px-8 md:px-0">
        <p className="text-darkScheme-textPrimary md:text-3xl-3 text-3xl">
          Currently running Segment?{" "}
        </p>
        <Link
          onClick={e =>
            rudderslabTrackOnClick("link", "Currently running Segment?", e)
          }
          to="/request-demo"
          className="inline-block text-xl-2 md:text-2xl font-bold mt-4 md:mt-5 px-4 mx-auto text-darkScheme-textPrimary relative"
        >
          <span className="specialist-icon inline-block align-top"></span>
          <span className="inline-block learn-more relative align-top text-left specialist-cta">Talk with one of our Segment migration specialists</span>
        </Link>
      </div>
    </div>
  )
}
export default MigrationSpecialists
