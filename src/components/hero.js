import React from "react";
import PortableText from "./portableText";
import Image from "./image"

function Hero(props) {
  const herobannerbutton = props.herobannerbutton
  return (
    <section className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      {/* Left col */}
      <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
        <div className="leading-normal text-2xl mb-8">
          <h2 className="my-4 text-7xl font-bold leading-tight">{props.herobannertitle}</h2>
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
      {/* Right col */}
      <div className="w-full md:w-1/2 py-6 text-center">
          <Image props={props.herobannerimage.asset._ref} />
    </div>
      
    </section>
  );
}
export default Hero;