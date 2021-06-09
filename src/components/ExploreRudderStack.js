import React from "react"

const ExploreRudderStack = () => {
  return (
    <div className="testimonials bg-white px-7 py-10 sm:py-20 text-primary margin-top-xl bg-hero-pattern-mobile sm:bg-hero-pattern bg-no-repeat bg-cover">
      <div className="w-full max-w-5xl m-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blueNew-midnight">
          Explore RudderStack Today
        </h2>
        <p className="text-xl-2 text-grayColor-custom mt-4 mb-8">
          Our Free plan includes 500,000 events per month so you can explore and
          test the product. Install an SDK, connect a destination, and see data
          start to flow.
        </p>
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
export default ExploreRudderStack
