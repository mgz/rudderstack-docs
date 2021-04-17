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
        max={150}
        value={value}
        format={formatm}
        handleLabel={value + "m"}
        onChange={handleChangeHorizontal}
      />
      <div className='value flex text-lg font-bold mt-6'>
        <span>25m</span><span className="ml-auto">150m+</span>
      </div>
      <div className="bg-blueNew-lighter lg:flex px-14 py-6 mt-16 text-center lg:text-left">
        <div className="lg:w-1/3  py-2 lg:py-0 text-grayColor-custom"><span className="font-bold text-black-custom">Monthly price: </span><span id="text1">{price ? "$" + price.toString() : "N/A"}</span></div>
        <div className="lg:w-1/3 py-2 lg:py-0 text-grayColor-custom"><span className="font-bold text-black-custom text2">Annual price: </span><span id="text2">{price ? "$" + (10 * price).toString() : "Volume Discount"}</span> <br/>
          <span className="lg:pl-28 italic" id="text3">{price ? "16% discount" : ""}</span></div>
        <div className="lg:w-1/3 py-2 lg:py-0 text-center">
          <a href={price ? "https://app.rudderlabs.com/signup?type=freetrial" : "https://resources.rudderstack.com/enterprise-quote"}
             className="btn-primary-sm inline-block"
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