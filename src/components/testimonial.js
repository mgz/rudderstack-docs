import React from "react"
import $ from "jquery"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel"
import Image from "./image"
import Link from "gatsby-link"

const Testimonial = props => {
  if (typeof window !== "undefined") {
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
  }

  const testimonials = props.addtestimonial
  return (
    <>
      <div className="overflow-hidden">
        <div
          class={`testimonials testimonials-wrap py-5 text-primary px-md-5 margin-top-xl ${
            props.applyGradientColorTheme ? "testimonila-bg-gradiant" : "bg-hero-pattern-mobile sm:bg-hero-pattern bg-no-repeat bg-cover"
          } md:mt-32`}
        >
          <div class="max-w-6xl mx-auto px-4 md:px-3 testimonial-img-wrap">
            <div class="row">
              <div className="block w-full">
                <div class="carousel-controls testimonial-carousel-controls xl:-mt-20">
                  <div className="testimonial-slider owl-carousel owl-theme ">
                    {testimonials.map((testimonial, i) => {
                      return (
                        <div
                          key={i}
                          class="item h5 font-weight-normal one-slide mx-auto pb-0 w-100 max-w-6xl justify-items-center"
                        >
                          <div class="testimonial pb-12 w-100 px-3 text-center d-flex flex-direction-column justify-content-center flex-wrap align-items-center">
                            <div className="flex items-center flex grid justify-items-center">
                              <div class="usr_img mb-4">
                                <Image
                                  props={testimonial.clientimage.asset._ref}
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
                              class={`message text-center text-2xl md:text-3xl-3 tracking-wide font-normal ${
                                props.applyGradientColorTheme
                                  ? "text-white"
                                  : "text-dark"
                              } blockquote mt-8 px-0 md:px-24 leading-tight`}
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
                                        <span
                                          className={
                                            (testimonial.button.btnhiglight ===
                                            true
                                              ? "btn-primary-lg"
                                              : "btn-secondary-lg bg-black-custom hover:bg-blueNew-midnight border-white text-white") +
                                            ` inline-block`
                                          }
                                        >
                                          <Link to={testimonial.button.btnlink}>
                                            {testimonial.button.btntext}
                                          </Link>
                                        </span>
                                      )
                                    }
                                  })()}
                                </div>
                              )}
                          </div>
                        </div>
                      )
                    })}
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
