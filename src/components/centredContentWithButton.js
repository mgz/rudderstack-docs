import React from "react"
import PortableText from "./portableText"

const CentredContentWithButton = props => {
  return (
    <div className="testimonials bg-white px-7 py-10 sm:py-20 text-primary margin-top-xl bg-hero-pattern-mobile sm:bg-hero-pattern bg-no-repeat bg-cover">
      <div className="w-full max-w-5xl m-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blueNew-midnight">
          {props.title}
        </h2>
        <div className="text-xl-2 text-grayColor-custom mt-4 mb-8">
          <PortableText blocks={props.content} />
        </div>

        <p className="mt-16 md:mt-16 flex justify-center">
          <a
            className="bg-black-custom text-whiteColor-custom text-sm sm:text-lg py-3 px-4 sm:px-8 rounded-lg hover:bg-blueNew-midnight  w-full sm:w-60"
            href="https://app.rudderstack.com/signup?type=freetrial"
          >
            Sign up free
          </a>
        </p>
      </div>
    </div>
  )
}
export default CentredContentWithButton
