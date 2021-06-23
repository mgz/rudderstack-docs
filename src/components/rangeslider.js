import React, { useState, Component } from "react"
import Slider from "react-rangeslider"
import Link from "gatsby-link"
import "react-rangeslider/lib/index.css"

const Horizontal = props => {
  const [value, setValue] = useState(25)

  const handleChangeHorizontal = val => {
    setValue(val)
  }

  const formatm = value => value + "m"

  const price = value < 100 ? 900 + (value - 25) * 12 : null

  return (
    <div className="slider custom-labels">
      <div className="value flex text-lg md:text-3xl font-bold ">
        <span>25m</span>
        <span className="ml-auto">100m+</span>
      </div>
      <Slider
        min={25}
        max={100}
        step={5}
        value={value}
        format={formatm}
        handleLabel={value + "m"}
        onChange={handleChangeHorizontal}
      />

      <div className="bg-blueNew-lighter md:flex px-8 md:px-14 py-6 mt-24 text-center md:text-left rounded-sm rounded-md">
        <div className="md:w-1/3  py-2 md:py-0 text-grayColor-custom text-lg md:text-xl leading-7 md:leading-9 text-left md:text-center">
          <span className="font-bold text-black-custom">Monthly price: </span>
          <span id="text1">{price ? "$" + price.toString() : "N/A"}</span>
        </div>
        <div className="md:w-1/3 py-2 md:py-0 text-grayColor-custom text-lg md:text-xl leading-7 md:leading-9 text-left md:text-center">
          <span className="font-bold text-black-custom text2">
            Annual price:{" "}
          </span>
          <span id="text2">
            {price ? "$" + (10 * price).toString() : "Volume Discount"}
          </span>{" "}
          <br />
          <span
            className="text-sm md:text-lg pl-28 md:pl-0 lg:pl-28 italic text-left md:text-center inherit sm:inline-block"
            id="text3"
          >
            {price ? "16% discount" : ""}
          </span>
        </div>
        <div className="md:w-1/3 py-2 md:py-0 text-center">
          <Link
            to={
              price
                ? "https://app.rudderlabs.com/signup?type=freetrial"
                : "/enterprise-quote"
            }
            className="btn-primary-sm block md:inline-block"
            id="text4"
          >
            {price ? "Sign up" : "Request pricing"}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Horizontal
