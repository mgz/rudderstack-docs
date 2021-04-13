import React from "react";
import PortableText from "./portableText";
import Image from "./image"

function Hero(props) {
  const herobannerbutton = props.herobannerbutton
  return (
    <>
    <section class="container px-3 md:px-0 my-20 md:mt-30 md:mb-40 mx-auto relative flex flex-col items-center justify-center">
      <div class="flex flex-col items-start md:gap-24 justify-center mx-auto lg:flex-row lg:p-0">
          <div
              class="container relative z-20 flex flex-col w-full md:px-5 pb-1 mr-30 mb-16 text-2xl lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
                <h2 className="my-4 md:text-6xl text-5xl  font-bold leading-tight">{props.herobannertitle}</h2>
                <PortableText blocks={props.herobannercontent} />
              <div class="relative block md:flex mt-4">
                      {
                          herobannerbutton.map(
                              (btn, i) => (
                                <>
                                  <a key={btn._key} className={(btn.btnhiglight === true ? 'bg-primary text-white' : '') + ` py-2 text-sm md:px-8 lg:px-8 px-2 text-center mr-4 md:mb-0 mb-4 md:flex block rounded-lg border border-black`} href={btn.btnlink}>{btn.btntext}</a>
                                </>
                              )
                          )
                      }
              </div>
          </div>
          <div class="relative w-full px-5 rounded-lg cursor-pointer md:ml-16 md:pl-16 flex-grow justify-items-end lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0">
              <div class="relative rounded-md cursor-pointer group sm:px-0 sm:items-center lg:items-start">
                  <Image props={props.herobannerimage.asset._ref} />
              </div>
          </div>
      </div>
  </section>
    </>
  );
}
export default Hero;