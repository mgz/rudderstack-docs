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
    <SEO title="Pricing Page" />
    <div className="pt-24">
      <section className="overflow-x-hidden bg-gradient-to-t from-white-custom via-blueNew-lighter to-blueNew-lighter custom-bg custom-gradient">
        <div class="container px-3 mx-auto flex flex-wrap flex-col items-center text-center max-w-screen-md">
          <h1 className="my-4 text-5xl md:text-5xl font-bold font-custom leading-snug">
            Choose Your RudderStack Cloud Plan
          </h1>
        </div>
        
        <PricingCards/>
      </section>
      <section className="bg-white-custom custom-bg">
        <div class="container px-3 mx-auto flex flex-wrap flex-col pt-10">
            <div className="items-center text-center">
              <h2 className="my-4 md:text-4xl font-bold">No MTUs and no cliffs, just volume</h2>
              <h6>Our Pro pricing starts at $750 for 25m events and gets cheaper as you scale</h6>
            </div>
          <div className="text-left mx-auto w-3/4 font-custom my-16">
            <span className="text-grayColor-lighter text-lg font-bold">Events</span>
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
