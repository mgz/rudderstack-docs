import React from "react";
import PortableText from "./portableText";
import Image from "./image"

function Hero(props) {
  const herobannerbutton = props.herobannerbutton
  return (
    <>
    <section class="container px-3 mb-20 mx-auto relative flex flex-col items-center justify-center min-h-screen min-w-screen">
      <div class="flex flex-col items-start justify-center mx-auto lg:flex-row lg:p-0">
          <div
              class="container relative z-20 flex flex-col w-full md:px-5 pb-1 mr-30 mb-16 text-2xl lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
                <h2 className="my-4 md:text-6xl text-5xl  font-bold leading-tight">{props.herobannertitle}</h2>
                <PortableText blocks={props.herobannercontent} className="text-secondary" />
              <div class="relative block md:flex mt-4">
                      {
                          herobannerbutton.map(
                              (btn, i) => (
                                <>
                                  <a key={i} className={(btn.btnhiglight === true ? 'bg-black text-white' : '') + ` py-2 text-lg md:px-8 lg:px-8 px-2 text-center mr-4 md:mb-0 mb-4 md:flex block rounded-lg border border-black`} href={btn.btnlink}>{btn.btntext}</a>
                                </>
                              )
                          )
                      }
              </div>
          </div>
          <div class="relative w-full px-5 rounded-lg cursor-pointer ml-30 justify-items-end lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0">
              <div class="relative rounded-md cursor-pointer group sm:px-0 sm:items-center lg:items-start">
                  <Image props={props.herobannerimage.asset._ref} />
              </div>
          </div>
      </div>
  </section>

    {/* <section className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      
      <div className="grid grid-cols-12 gap-20 sm:w-full">
        <div className="col-span-6 flex flex-col justify-center p-15 items-start sm:w-full">
          <div className="leading-normal text-2xl mb-8">
            <h2 className="my-4 text-6xl font-bold leading-tight">{props.herobannertitle}</h2>
            <PortableText blocks={props.herobannercontent} />
          </div>
          <div className="flex">
          {
              herobannerbutton.map(
                  (btn, i) => (
                    <>
                      <a key={i} className={(btn.btnhiglight === true ? 'bg-black text-white' : '') + ` py-2 px-8 mr-4 rounded-lg border border-black`} href={btn.btnlink}>{btn.btntext}</a>
                    </>
                  )
              )
          }
          </div>
        </div>
        
        <div className="col-span-6 py-6 text-center sm:w-full">
            <Image props={props.herobannerimage.asset._ref} />
        </div>  
      </div>
    </section> */}
    </>
  );
}
export default Hero;