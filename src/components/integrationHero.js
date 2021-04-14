import React from "react";
import BlockContent from '@sanity/block-content-to-react'
//import PortableText from "./portableText";

function IntegrationHero({title,description,cta}) {
  return (
    <div className="mx-auto items-center">
      {/* Left col */}
      <div className="w-full h-96 justify-center items-start text-center relative object-cover">
        <div className="w-full h-full bg-blueNew-custom bg-opacity-50 table">
        <div className="w-full leading-normal text-2xl mb-8 object-center z-10 text-white-custom table-cell align-middle">
          {/* <div className="text-sm">{date}</div> */}
          <h1 className="pt-6 text-6xl md:max-w-4xl m-auto">{title}</h1>
          <BlockContent blocks={description} />
          {/* <div className="mt-3 text-sm font-bold">By {author}</div> */}
          <div class="relative block md:flex mt-4 items-center">
            <a class="bg-primary text-white py-2 text-sm md:px-8 lg:px-8 px-2 text-center mr-4 md:mb-0 mb-4 md:flex block rounded-lg border border-black" href={cta.btnlink}>{cta.btntext}</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default IntegrationHero;