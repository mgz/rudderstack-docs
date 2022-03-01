import React, { useEffect } from "react"
/* import $ from "jquery"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel" */
import Image from "./image"
import Link from "gatsby-link"
import { Carousel } from "react-responsive-carousel"
import { rudderslabTrackOnClick } from "../utils/common"
import bgImage from "../images/testimonial-bg-v3.webp"

import "react-responsive-carousel/lib/styles/carousel.min.css"

const Testimonial = props => {
  /* if (typeof window !== "undefined") {
    $(window.document).ready(function () {
      $(".testimonial-slider").owlCarousel({
        loop: true,
        center: true,
        nav: true,
        dots: true,
        //  autoplay:true,
        autoplayTimeout: 5000,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      })
    })
  } */

  useEffect(() => {
    ;[].forEach.call(
      document.querySelectorAll("div[data-src]"),
      function (div) {
        div.setAttribute(
          "style",
          "background-image: url(" + div.getAttribute("data-src") + ");"
        )
        div.onload = function () {
          div.removeAttribute("data-src")
        }
      }
    )
  })

  const testimonials = props.addtestimonial
  return (
    <>
      <div className="overflow-hidden">
        <div
          // className={`testimonials testimonials-wrap py-5 text-primary px-md-5 margin-top-xl ${
          //   props.applyGradientColorTheme
          //     ? "testimonila-bg-gradiant"
          //     : "bg-hero-pattern-mobile sm:bg-hero-pattern bg-no-repeat bg-cover"
          // } md:mt-32`}
          className={`testimonials testimonials-wrap py-5 text-primary px-md-5 margin-top-xl ${
            props.applyGradientColorTheme
              ? "testimonila-bg-gradiant"
              : "testimonila-bg-gradiant-v2"
          } md:mt-32`}
          data-src={props.applyGradientColorTheme ? null : bgImage}
        >
          <div className="max-w-6xl mx-auto px-4 md:px-3 testimonial-img-wrap">
            <div className="row">
              <div className="block w-full">
                <div className="carousel-controls testimonial-carousel-controls xl:-mt-20">
                  <div className="testimonial-slider">
                    <Carousel
                      showThumbs={false}
                      showStatus={false}
                      infiniteLoop={true}
                      className="testimonial-carousel"
                      width={"100%"}
                      showIndicators={false}
                    >
                      {testimonials &&
                        testimonials.map((testimonial, i) => {
                          return (
                            <div
                              key={i}
                              className="item h5 font-weight-normal mx-auto pb-0 w-100 max-w-6xl justify-items-center"
                            >
                              <div className="testimonial pb-12 w-100 text-center d-flex flex-direction-column justify-content-center flex-wrap align-items-center">
                                <div className="items-center flex justify-center">
                                  <div className="usr_img mb-4">
                                    <Image
                                      props={testimonial.clientimage.asset._ref}
                                      width="150"
                                      height="150"
                                    />
                                  </div>
                                </div>
                                <p
                                  className={`font-bold text-sm ${
                                    props.applyGradientColorTheme
                                      ? "text-white"
                                      : "text-dark"
                                  } mb-2`}
                                >
                                  {testimonial.clientname}
                                </p>
                                <p
                                  className={`text-sm ${
                                    props.applyGradientColorTheme
                                      ? "text-white"
                                      : "text-dark"
                                  } mb-4`}
                                >
                                  {testimonial.clientdesignation}
                                </p>
                                <div
                                  className={`message text-center text-2xl md:text-3xl-3 tracking-wide font-normal ${
                                    props.applyGradientColorTheme
                                      ? "text-white"
                                      : "text-dark"
                                  } blockquote mt-8 px-0 leading-tight`}
                                >
                                  {testimonial.clientcontent}
                                </div>
                                {testimonial.button &&
                                  testimonial.button.btnlink !== "" &&
                                  testimonial.button.btntext !== "" && (
                                    <div className="text-center mt-8">
                                      {(() => {
                                        if (
                                          testimonial.button.btnexternallink ===
                                          true
                                        ) {
                                          return (
                                            <a
                                              className={`${
                                                testimonial.button.btnhiglight
                                                  ? "btn-primary-lg border-none bg-darkScheme-btnPrimaryBg text-darkScheme-textPrimary"
                                                  : "btn-secondary-large button-gradient-border"
                                              } inline-block`}
                                              href={testimonial.button.btnlink}
                                              onClick={e =>
                                                rudderslabTrackOnClick(
                                                  "button",
                                                  "Testimonials",
                                                  e
                                                )
                                              }
                                            >
                                              {testimonial.button.btntext}
                                            </a>
                                          )
                                        } else {
                                          return (
                                            <Link
                                              to={testimonial.button.btnlink}
                                              onClick={e =>
                                                rudderslabTrackOnClick(
                                                  "button",
                                                  "Testimonials",
                                                  e
                                                )
                                              }
                                            >
                                              <span
                                                className={
                                                  (testimonial.button
                                                    .btnhiglight === true
                                                    ? "btn-primary-lg border-none bg-darkScheme-btnPrimaryBg text-darkScheme-textPrimary"
                                                    : "btn-secondary-lg button-gradient-border") +
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
                          )
                        })}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Testimonial
