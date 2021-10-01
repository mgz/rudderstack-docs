import React, { useState} from "react"
import Slider from "react-rangeslider"
import Link from "gatsby-link"
import "react-rangeslider/lib/index.css"

const PricingCalculator = props => {
  const [value, setValue] = useState(25)

  const handleChangeHorizontal = val => {
    setValue(val)
  }

  const formatm = value => value + "m"

  const price = value < 100 ? 900 + (value - 25) * 12 : null

  return (
    <section className="bg-white-custom custom-bg font-custom">
      <div className="max-w-6xl px-4 md:px-3 mx-auto flex flex-wrap flex-col pt-6 md:pt-16">
        <div className="items-center text-center">
          <h2 className="mb-6 md:mb-4 md:mt-8 md:leading-snug text-4xl md:text-5xl font-bold">
            {props.title}
          </h2>
          <h6 className="text-xl-2">{props.smalltitle}</h6>
        </div>
        <div className="text-left mx-auto w-5/6 md:w-3/4 font-custom my-10 md:my-12 flex flex-col">
          <span className="text-grayColor-lighter text-xl md:text-3xl font-bold  justify-center self-center">
            Events
          </span>
          <div className="slider custom-labels">
            <div className="value flex text-lg md:text-3xl font-bold ">
              <span>{props.min}m</span>
              <span className="ml-auto">{props.max}m+</span>
            </div>
            <Slider
              min={props.min}
              max={props.max}
              step={props.step}
              value={value}
              format={formatm}
              handleLabel={value + "m"}
              onChange={handleChangeHorizontal}
            />

            <div className="bg-blueNew-lighter md:flex px-8 md:px-14 py-6 mt-24 text-center md:text-left rounded-sm rounded-md">
              <div className="md:w-1/3  py-2 md:py-0 text-grayColor-custom text-lg md:text-xl leading-7 md:leading-9 text-left md:text-center">
                <span className="font-bold text-black-custom">
                  Monthly price:{" "}
                </span>
                <span id="text1">{price ? "$" + price.toString() : "N/A"}</span>
              </div>
              <div className="md:w-1/3 py-2 md:py-0 text-grayColor-custom text-lg md:text-xl leading-7 md:leading-9 text-left md:text-center">
                <span className="font-bold text-black-custom text2">
                  Annual price:
                </span>
                <span id="text2">
                  {price ? "$" + (10 * price).toString() : "Volume Discount"}
                </span>
                <br />
                <span
                  className="text-sm md:text-lg pl-28 md:pl-0 lg:pl-28 italic text-left md:text-center inherit sm:inline-block"
                  id="text3"
                >
                  {price ? "16% discount" : ""}
                </span>
              </div>
              <div className="md:w-1/3 py-2 md:py-0 text-center">
                {price &&
                  (() => {
                    if (
                      props.less_then_full_range_button.btnexternallink === true
                    ) {
                      return (
                        <a
                          className={
                            (props.less_then_full_range_button.btnhiglight ===
                            true
                              ? "btn-primary-sm"
                              : "btn-secondary-sm") +
                            ` inline-block leading-6`
                          }
                          href={props.less_then_full_range_button.btnlink}
                        >
                          {props.less_then_full_range_button.btntext}
                        </a>
                      )
                    } else {
                      return (
                        <Link to={props.less_then_full_range_button.btnlink}>
                          <span
                            className={
                              (props.less_then_full_range_button.btnhiglight ===
                              true
                                ? "btn-primary-sm"
                                : "btn-secondary-sm") +
                              ` inline-block leading-6`
                            }
                          >
                            {props.less_then_full_range_button.btntext}
                          </span>
                        </Link>
                      )
                    }
                  })()}

                {!price &&
                  (() => {
                    if (props.full_range_button.btnexternallink === true) {
                      return (
                        <a
                          className={
                            (props.full_range_button.btnhiglight === true
                              ? "btn-primary-sm"
                              : "btn-secondary-sm") +
                            ` inline-block leading-6`
                          }
                          href={props.full_range_button.btnlink}
                        >
                          {props.full_range_button.btntext}
                        </a>
                      )
                    } else {
                      return (
                        <Link to={props.full_range_button.btnlink}>
                          <span
                            className={
                              (props.full_range_button.btnhiglight === true
                                ? "btn-primary-sm"
                                : "btn-secondary-sm") +
                              ` inline-block leading-6`
                            }
                          >
                            {props.full_range_button.btntext}
                          </span>
                        </Link>
                      )
                    }
                  })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingCalculator
