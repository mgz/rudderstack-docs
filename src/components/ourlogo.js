import React from "react";
import Image from "./image"

function OurLogo(props) {
  const maintitle = props.ourlogotitle
  const logoimages = props.outlogoimage
  return (
    <>
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full justify-center items-start text-center md:text-left">
          <h3 className="my-4 text-3xl font-bold leading-tight">{maintitle}</h3>
        </div>
        <div className="flex w-full justify-center">
        {
            logoimages.map(
                (logoimage, i) => (
                  <span className="flex p-4">
                   <Image key={i} props={logoimage.asset._ref} className="p-4"/>
                   </span>
                )
            )
        }
        </div>
      </div>
    </>
  );
}
export default OurLogo;