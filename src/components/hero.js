import React from "react";
import PortableText from "./portableText";
import Image from "./image"

function Hero(props) {
   const herobannerbutton = props.herobannerbutton
  return (
    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      {/* Left col */}
      <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <div className="leading-normal text-2xl mb-8">
          <PortableText blocks={props.herobannercontent} />
        </div>
        {
            herobannerbutton.map(
                (btn, i) => (
                    <a key={i} href={btn.btnlink}>{btn.btntext}</a>
                )
            )
        }
      </div>
      {/* Right col */}
      <div className="w-full md:w-3/5 py-6 text-center">
          <Image props={props.herobannerimage.asset._ref} />
    </div>
      
    </div>
  );
}
export default Hero;