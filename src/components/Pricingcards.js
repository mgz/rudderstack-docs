import React from "react";
import Image from "./image"
import { StaticImage } from "gatsby-plugin-image"

function PricingCards(props) {
  const herobannerbutton = props.herobannerbutton
 return (
  
   <div className="container px-3 mx-auto flex flex-wrap items-center pb-18">
     <div class="pricing-table-2 pt-6 md:pt-12 w-full">
      <div class="container mx-auto">       

        <div class="pricing-plans relative lg:flex mt-6 md:mt-12 w-full">
          <div class="pricing-plan-wrap lg:w-1/3 my-4 md:my-6 px-5">
            <div class="pricing-plan bg-white-custom border-grayNew-priceCardBorder shadow-2xl rounded-2xl text-center mx-auto">
              <div class="p-6 md:pt-8 md:pb-4">
                <div className="ellipse flex items-center justify-center h-20">
                  <StaticImage src="../images/EllipseImg1.png" alt="EllipseImg"/>
                </div>                
                <h3 class="font-medium leading-tight text-4xl text-blueNew-custom mr-2">Free</h3>
                <div class="text-grayNew-lighter mt-2 h-16 leading-7">500,000 <br/>events/month</div>
              </div>
              <div class="p-6 pt-0 max-w-xs mx-auto text-left">
                <ul class="text-lg h-52">
                  <li className="relative pl-8 py-1"><span className="absolute top-2 w-8 left-0"><StaticImage className="mr-2" src="../images/check-r.png" alt="check"/> </span>Event Stream</li>
                  <li className="relative pl-8 py-1"><span className="absolute top-2 w-8 left-0"><StaticImage className="mr-2" src="../images/check-r.png" alt="check"/> </span> Near Real Time Data</li>
                  <li className="relative pl-8 py-1"><span className="absolute top-2 w-8 left-0"><StaticImage className="mr-2" src="../images/check-r.png" alt="check"/> </span> Warehouse</li>
                  <li className="relative pl-8 py-1"><span className="absolute top-2 w-8 left-0"><StaticImage className="mr-2" src="../images/check-r.png" alt="check"/> </span> SDK Sources</li>
                  <li className="relative pl-8 py-1"><span className="absolute top-2 w-8 left-0"><StaticImage className="mr-2" src="../images/check-r.png" alt="check"/> </span> 80+ destinations</li>
                </ul>
                <div class="mt-6 py-4 text-center">
                  <button class="text-sm font-bold py-2.5 px-8 rounded bg-black-custom text-white-custom"> Sign up free</button>
                </div>
              </div>
            </div>
          </div>

          <div class="pricing-plan-wrap proCard relative lg:w-1/3 my-4 md:my-6 px-5">
            <div class="pricing-plan bg-white-custom border-grayNew-priceCardBorder shadow-2xl rounded-2xl text-center mx-auto">
              <div class="p-6 md:pt-8 md:pb-4">
              <div className="ellipse flex items-center justify-center h-20">
                <StaticImage src="../images/EllipseImg2.png" alt="Line"/>
                </div>
                <h4 class="font-medium leading-tight text-4xl text-blueNew-custom mr-2">Pro</h4>
                <div class="text-grayNew-lighter mt-2 h-16 leading-7">Starting at $750 for 25M <br/>events/month</div>
              </div>
              <div class="p-6 pt-0 max-w-xs mx-auto text-left">
                <ul class="h-52">
                  <li className="relative pl-8 py-1"><span className="absolute top-2 w-8 left-0"><StaticImage className="mr-2" src="../images/check-r.png" alt="check"/> </span> Everything in Free plus</li>
                  <li className="relative pl-8 py-1"><span className="absolute top-2 w-8 left-0"><StaticImage className="mr-2" src="../images/check-r.png" alt="check"/> </span> Cloud Extract</li>
                  <li className="relative pl-8 py-1"><span className="absolute top-2 w-8 left-0"><StaticImage className="mr-2" src="../images/check-r.png" alt="check"/> </span> Warehouse Actions</li>
                  <li className="relative pl-8 py-1"><span className="absolute top-2 w-8 left-0"><StaticImage className="mr-2" src="../images/check-r.png" alt="check"/> </span> Transformations</li>
                  <li className="relative pl-8 py-1"><span className="absolute top-2 w-8 left-0"><StaticImage className="mr-2" src="../images/check-r.png" alt="check"/> </span> Grafana Dashboards</li>
                  <li className="relative pl-8 py-1"><span className="absolute top-2 w-8 left-0"><StaticImage className="mr-2" src="../images/check-r.png" alt="check"/> </span> Priority Support</li>
                </ul>
                <div class="mt-6 py-4 text-center">
                  <button class="text-sm font-bold py-2.5 px-8 rounded bg-black-custom text-white-custom">Get a demo</button>
                </div>
              </div>
            </div>
          </div>

          <div class="pricing-plan-wrap lg:w-1/3 my-4 md:my-6 px-5">
            <div class="pricing-plan bg-white-custom border-grayNew-priceCardBorder shadow-2xl rounded-2xl text-center mx-auto">
              <div class="p-6 md:pt-8 md:pb-4">
                <div className="ellipse flex items-center justify-center h-20">
                <StaticImage src="../images/EllipseImg3.png" alt="Line"/>
                </div>
                <h4 class="font-medium leading-tight text-4xl text-blueNew-custom mr-2">Enterprise</h4>
                <div class="text-grayNew-lighter mt-2 h-16 leading-7">Billions of events</div>
              </div>
              
              <div class="p-6 pt-0 max-w-xs mx-auto text-left">
                <ul class="h-52">
                  <li className="relative pl-8 py-1"><span className="absolute top-2 w-8 left-0"><StaticImage className="mr-2" src="../images/check-r.png" alt="check"/> </span> Everything in Pro plus</li>
                  <li className="relative pl-8 py-1"><span className="absolute top-2 w-8 left-0"><StaticImage className="mr-2" src="../images/check-r.png" alt="check"/> </span> Event Replay</li>
                  <li className="relative pl-8 py-1"><span className="absolute top-2 w-8 left-0"><StaticImage className="mr-2" src="../images/check-r.png" alt="check"/> </span> SSO</li>
                  <li className="relative pl-8 py-1"><span className="absolute top-2 w-8 left-0"><StaticImage className="mr-2" src="../images/check-r.png" alt="check"/> </span> Single tenant</li>
                  <li className="relative pl-8 py-1"><span className="absolute top-2 w-8 left-0"><StaticImage className="mr-2" src="../images/check-r.png" alt="check"/> </span> VPC Hosting Support <br/>(additional)</li>
                </ul>
                <div class="mt-6 py-4 text-center">
                  <button class="text-sm font-bold py-2.5 px-8 rounded bg-black-custom text-white-custom">Request pricing</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

     <div className="py-8 w-full text-lg text-center text-blueNew-custom font-bold">
        <p>You can also deploy or contribute to RudderStack Open Source. </p>
        <a href="#" className="text-sm text-black-custom font-bold inline-flex mt-3"> <StaticImage className="mr-2" src="../images/arrow-right-o.png" alt="arrow right"/>Learn more on Github</a>
                
     </div>
      
   </div>
 );
}
export default PricingCards;
