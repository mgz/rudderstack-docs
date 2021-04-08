import React from "react";
import Layout from "../components/layout"
import MiddleBanner from "../components/middle-banner"
import SEO from "../components/seo"
import PricingCards from "../components/Pricingcards"
import PricePlans from "../components/priceplan"
import Faq from "../components/faq"
import Horizontal from "../components/rangeslider"
import "../css/tailwind.css"
import { StaticImage } from "gatsby-plugin-image"


const PricingPage = () => {
  
  return (
    <Layout>
    <SEO title="Pricing Page" />
    <div className="pt-24">
      <section className="overflow-x-hidden bg-gradient-to-t from-white-custom via-blueNew-skyblue to-blueNew-skyblue">
        <div class="container px-3 mx-auto flex flex-wrap flex-col items-center text-center max-w-screen-md">
          <h1 className="my-4 text-5xl md:text-5xl font-bold font-custom leading-snug">
            Choose Your RudderStack Cloud Plan
          </h1>
        </div>
        
        <PricingCards/>
      </section>
      <section className="bg-white-custom">
        <div class="container px-3 mx-auto flex flex-wrap flex-col pt-10">
            <div className="items-center text-center">
              <h2 className="my-4 md:text-4xl font-bold">No MTUs and no cliffs, just volume</h2>
              <h6>Our Pro pricing starts at $750 for 25m events and gets cheaper as you scale</h6>
            </div>
          <div className="text-left mx-auto w-3/4 font-custom my-16">
            <span className="text-grayNew-lighter text-lg font-bold">Events</span>
            <Horizontal/>  
          </div>        
        </div>
      </section>
      <PricePlans/>
      <div className="container px-3 mx-auto flex flex-wrap items-center pb-18">
        <div className="py-8 mb-10 w-full text-lg text-center text-blueNew-custom font-bold border border-grayNew-priceCardBorder shadow-lg max-w-screen-lg m-auto">
        <p>Currently running Segment? </p>
         <a href="#" className="arrow-cta pl-7 text-xs	sm:text-sm text-black-custom font-bold inline-flex mt-3 relative">
            Talk with one of our Segment Migration Specialists.
          </a>
        </div>
      </div>
      <Faq/>      
    </div>
    
  </Layout>
)
  
}

export default PricingPage
