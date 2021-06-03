import React, { useState, Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

const Horizontal = (props) => {
  const [value, setValue] = useState(25);

  const handleChangeHorizontal = (val) => {
    setValue(val);
  }

  const formatm = value => value + 'm'

  const price = value < 100 ? 900+(value - 25) * 12 : null;

  return (
    <div className='slider custom-labels'>
      <Slider
        min={25}
        max={100}
        step={25}
        value={value}
        format={formatm}
        handleLabel={value + "m"}
        onChange={handleChangeHorizontal}
      />
      <div className='value flex text-lg md:text-3xl font-bold mt-6'>
        <span>25m</span><span className="ml-auto">100m+</span>
      </div>
      <div className="bg-blueNew-lighter md:flex px-8 md:px-14 py-6 mt-16 text-center md:text-left rounded-sm rounded-md">
        <div className="md:w-1/3  py-2 md:py-0 text-grayColor-custom text-lg md:text-xl leading-7 md:leading-9 text-left md:text-center"><span className="font-bold text-black-custom">Monthly price: </span><span id="text1">{price ? "$" + price.toString() : "N/A"}</span></div>
        <div className="md:w-1/3 py-2 md:py-0 text-grayColor-custom text-lg md:text-xl leading-7 md:leading-9 text-left md:text-center"><span className="font-bold text-black-custom text2">Annual price: </span><span id="text2">{price ? "$" + (10 * price).toString() : "Volume Discount"}</span> <br/>
          <span className="text-sm md:text-lg pl-28 md:pl-0 lg:pl-28 italic text-left md:text-center inherit sm:inline-block" id="text3">{price ? "16% discount" : ""}</span></div>
        <div className="md:w-1/3 py-2 md:py-0 text-center">
          <a href={price ? "https://app.rudderlabs.com/signup?type=freetrial" : "https://resources.rudderstack.com/enterprise-quote"}
             className="btn-primary-sm bg-dark block md:inline-block"
             id="text4"
          >
            {price ? "Sign up" : "Request pricing"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Horizontal;
