import React from "react"

const JoinOurTeam = () => {
  return (
    <div className="testimonials bg-white px-7 py-10 sm:py-20 -mx-2.5 text-primary margin-top-xl bg-hero-pattern-mobile sm:bg-hero-pattern bg-no-repeat bg-cover">
      <div className="w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blueNew-midnight">Join Our Team</h2>
        <p className="text-xl-2 sm:text-2xl-2 text-grayColor-custom mt-4 mb-8">
          Help us make data engineers the heroes of their companies.
        </p>
        <p className="mt-16 md:mt-16 flex justify-center">
          <a
            className="bg-black-custom text-whiteColor-custom text-sm sm:text-lg py-3 px-4 sm:px-8 rounded-lg hover:bg-blueNew-midnight  w-full sm:w-60"
            href="https://www.linkedin.com/company/rudderlabs/jobs/"
          >
            View Open Positions
          </a>
        </p>
      </div>
    </div>
  )
}
export default JoinOurTeam
