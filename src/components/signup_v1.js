import React from "react"
import BlogHeroChart from "../images/blog-hero_chart.svg"
const SignupV1 = props => {
  return (
    <section className="bg-backgroundsecondary 100% left-right-section">
      {/*Sign Up Section*/}
      <div className="max-w-6xl px-4 md:px-3 mx-auto flex items-center flex-wrap">
        <div className="sm:w-1/2 sm:p-6 sm:pl-0 md:pr-12">
          <p className="mt-4 sm:mt-0 text-blueNew-eastbay text-sm uppercase">SIGN UP</p>
          <h3 className="mt-2 mb-4 pb-2 text-2xl md:text-3xl text-primary font-bold leading-tight">
            Explore RudderStack Today
          </h3>
          <p className="text-secondary leading-7 text-sm sm:text-lg mb-8">
            Our Free plan includes 500,000 events per month so you can explore
            and test the product. Install an SDK, connect a destination, and see
            data start to flow.
          </p>

          <a
            className="btn-primary-lg cursor-pointer w-full sm:w-44"
            href={"https://app.rudderstack.com/signup"}
          >
            Sign up free
          </a>
        </div>
        <div className="w-full sm:w-1/2 sm:pt-16 sm:pb-20 lg:pl-28">
          <img src={BlogHeroChart} alt="Data Masking" className="w-full" />
        </div>
      </div>
    </section>
  )
}

export default SignupV1
