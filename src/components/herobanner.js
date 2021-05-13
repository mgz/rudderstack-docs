import React from "react";
//import PortableText from "./portableText";

function Herobanner({title,date,author,image}) {
  return (
    <div className="mx-auto items-center">
      {/* Left col */}
      <div className="w-full justify-center items-start text-center relative object-cover flex" style={{ backgroundImage: `url(${image.asset.fluid.src})` }}>
        <div className="py-10 lg:py-0 w-full custom-hero-banner bg-blueNew-custom bg-opacity-50 flex justify-center items-center">
        <div className="px-3 w-full leading-normal text-2xl object-center z-10 text-white-custom table-cell align-middle">
          <div className="text-sm">{date}</div>
          <h1 className="py-5 md:text-6xl text-4xl md:max-w-4xl m-auto">{title}</h1>
          <div className="mt-3 text-sm font-bold">By {author}</div>
        </div>
          </div>
      </div>
    </div>
  );
}
export default Herobanner;