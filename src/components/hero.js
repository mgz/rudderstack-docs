import React from "react";
import PortableText from "./portableText";
import Image from "./image"
import Link from "gatsby-link"

function Hero(props) {
  const herobannerbutton = props.herobannerbutton
  return (
    <>
    <section class="container px-4 md:px-0 sm:my-20 md:mt-30 md:mb-40 mx-auto relative banner-section">
      <div class="flex flex-col items-center md:gap-12 xl:gap-24 justify-center mx-auto lg:flex-row lg:p-0">
          <div
              class="container relative z-20 flex flex-col w-full md:px-5 pb-1 mr-30 mb-8 sm:mb-16 text-2xl lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0 hero-content">
                <h2 className="mb-10 md:my-4 md:text-6xl text-5xl  font-bold leading-tight">{props.herobannertitle}</h2>
                  <PortableText blocks={props.herobannercontent} />
              <div class="relative block sm:flex mt-10">
                      {
                          herobannerbutton.map(
                              (btn, i) => (
                                <>
                                {(() => {
                                  if (btn.btnexternallink === true){
                                      return (
                                        <a key={btn._key} className={(btn.btnhiglight === true ? 'bg-primary text-white' : '') + ` py-3 text-sm px-2 sm:px-8 text-center sm:mr-4 md:mb-0 mb-4 block rounded-lg border border-black transperent-btn`} href={btn.btnlink}>{btn.btntext}</a>
                                      )
                                  }else{
                                    return(
                                        <span key={btn._key} className={(btn.btnhiglight === true ? 'bg-primary text-white' : '') + ` py-3 text-sm px-2 sm:px-8 text-center sm:mr-4 md:mb-0 mb-4 block rounded-lg border border-black transperent-btn`}>
                                          <Link to={btn.btnlink} >{btn.btntext}</Link>
                                        </span>
                                    ) 
                                  }
                              })()}
                                </>
                              )
                          )
                      }
              </div>
          </div>
          <div class="relative w-full px-5 rounded-lg flex-grow justify-items-end lg:w-1/2 sm:px-0 sm:items-center lg:items-start lg:mb-0">
              <div class="relative rounded-md group sm:px-0 sm:items-center lg:items-start">
                  <Image props={props.herobannerimage.asset._ref} classes="w-full" />
              </div>
          </div>
      </div>
  </section>
    </>
  );
}
export default Hero;