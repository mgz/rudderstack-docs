import React from "react"
import $ from "jquery"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel"
import Image from "./image"

function OurLogo(props) {
  // if (typeof window === "undefined" || !window.document) {
    $(window.document).ready(function () {
      $(".logo-slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 5000,
        responsive: {
          0: {
            items: 4,
          },
          600: {
            items: 8,
          },
          1000: {
            items: 8,
          },
        },
      })
    })
  // }

  const maintitle = props.customHeaderText || props.ourlogotitle
  const logoimages = props.outlogoimage
  return (
    <section className="max-w-6xl px-0 my-12 md:px-3 mx-auto md:mb-40 sm:my-24 flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full justify-center items-start md:text-left max-w-2xl">
        <h3 className="my-4 text-2xl md:text-3xl text-primary font-bold leading-8	md:leading-10">
          {maintitle}
        </h3>
      </div>
      <div className="flex w-full justify-center mt-2 sm:mt-4 our-logos">
        <div className="logo-slider owl-carousel owl-theme">
          {logoimages.map((logoimage, i) => {
            return (
              <div key={i} class="item inline-flex">
                <span className="p-4">
                  <Image props={logoimage.asset._ref} className="p-4" />
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default OurLogo
