import React from "react";
import Layout from "../components/layout"
//import MiddleBanner from "../components/middle-banner"
import SEO from "../components/seo"
import PricingCards from "../components/Pricingcards"
import PricePlans from "../components/priceplan"
import Faq from "../components/faq"
import Horizontal from "../components/rangeslider"
import "../css/tailwind.css"
//import { StaticImage } from "gatsby-plugin-image"


const PricingPage = () => {
  
  return (
    <Layout>
    <SEO title="RudderStack Pricing Open-Source CDP" />
    <div className="pt-14 md:pt-16">
      <section className="overflow-x-hidden bg-gradient-to-t from-white-custom via-blueNew-lighter to-blueNew-lighter custom-bg custom-gradient">
        <div class="max-w-6xl px-4 md:px-3 mx-auto flex flex-wrap flex-col items-center text-center max-w-screen-md">
          <h1 className="my-4 text-5xl md:text-5xl font-bold font-custom leading-snug">
            Choose Your RudderStack Cloud Plan
          </h1>
        </div>
        <PricingCards/>
      </section>
      <section className="bg-white-custom custom-bg font-custom">
        <div class="max-w-6xl px-4 md:px-3 mx-auto flex flex-wrap flex-col pt-6 md:pt-10">
            <div className="items-center text-center">
              <h2 className="mb-6 md:my-4 md:leading-snug text-4xl md:text-5xl font-bold">No MTUs and no cliffs, just volume</h2>
              <h6>Our Pro pricing starts at $750 for 25m events and gets cheaper as you scale</h6>
            </div>
          <div className="text-left mx-auto w-5/6 md:w-3/4 font-custom my-10 md:my-12">
            <span className="text-grayColor-lighter text-xl md:text-3xl font-bold">Events</span>
            <Horizontal/>  
          </div>        
        </div>
      </section>
      <PricePlans/>
      <Faq/>  
    </div>
  </Layout>
)
  
}

export default PricingPage
