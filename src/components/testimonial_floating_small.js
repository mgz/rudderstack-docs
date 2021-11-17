import React from "react"
import Image from "./image"
import Link from "gatsby-link"
// import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const TestimonialFloatingSmall = props => {
  const testimonial = props.addtestimonial ? props.addtestimonial[0] : props
  return (
    <div className=" max-w-6xl md:mx-4 xl:mx-auto">
      <div className="item h5 font-weight-normal mx-auto pb-0 w-100 max-w-6xl justify-items-center bg-blueNew-cardBackground rounded-xl">
        <div className="testimonial pb-12 w-100 text-center d-flex flex-direction-column justify-content-center flex-wrap align-items-center relative pt-16 ">
          <div className="items-center flex justify-center -top-18 w-full absolute">
            <div className="mb-4">
              <Image
                props={testimonial.clientimage.asset._ref}
                classes="h-32 w-auto"
              />
            </div>
          </div>
          <p
            className={`font-bold text-sm ${
              props.applyGradientColorTheme ? "text-white" : "text-dark"
            } `}
          >
            {testimonial.clientname}
          </p>
          <p
            className={`text-sm ${
              props.applyGradientColorTheme ? "text-white" : "text-dark"
            } mb-3`}
          >
            {testimonial.clientdesignation}
          </p>
          <div
            className={`message text-center text-sm font-bold tracking-wide ${
              props.applyGradientColorTheme ? "text-white" : "text-dark"
            } blockquote leading-tight px-4 md:px-8`}
          >
            {testimonial.clientcontent}
          </div>
          {testimonial.button &&
            testimonial.button.btnlink !== "" &&
            testimonial.button.btntext !== "" && (
              <div className="text-center mt-8">
                {(() => {
                  if (testimonial.button.btnexternallink === true) {
                    return (
                      <a
                        className={`${
                          testimonial.button.btnhiglight
                            ? "btn-primary-lg bg-black-custom hover:bg-blueNew-midnight border-white text-white"
                            : "btn-secondary-large"
                        } inline-block`}
                        href={testimonial.button.btnlink}
                      >
                        {testimonial.button.btntext}
                      </a>
                    )
                  } else {
                    return (
                      <Link to={testimonial.button.btnlink}>
                        <span
                          className={
                            (testimonial.button.btnhiglight === true
                              ? "btn-primary-lg"
                              : "btn-secondary-lg bg-black-custom hover:bg-blueNew-midnight border-white text-white") +
                            ` inline-block`
                          }
                        >
                          {testimonial.button.btntext}
                        </span>
                      </Link>
                    )
                  }
                })()}
              </div>
            )}
        </div>
      </div>
    </div>
  )
}
export default TestimonialFloatingSmall
