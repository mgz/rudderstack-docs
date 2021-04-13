import React from "react";
import PortableText from "./portableText";

function Herobanner({title,date,author,image}) {
  return (
    <div className="mx-auto items-center">
      {/* Left col */}
      <div className="w-full h-96 justify-center items-start text-center relative object-cover" style={{ backgroundImage: `url(${image.asset.fluid.src})` }}>
        <div className="w-full h-full bg-blueNew-custom bg-opacity-50 table">
        <div className="w-full leading-normal text-2xl mb-8 object-center z-10 text-whiteColor-custom table-cell align-middle">
          <div className="text-sm">{date}</div>
          <h1 className="pt-6 text-6xl md:max-w-4xl m-auto">{title}</h1>
          <div className="mt-3 text-sm font-bold">By {author}</div>
        </div>
          </div>
      </div>
    </div>
  );
}
export default Herobanner;