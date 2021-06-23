import React from "react"
// import $ from "jquery"
// import "owl.carousel/dist/assets/owl.carousel.css"
// import "owl.carousel"
import Image from "./image"

function OurLogo(props) {
  // if (typeof window !== "undefined") {
  //   $(window.document).ready(function () {
  //     $(".logo-slider").owlCarousel({
  //       loop: true,
  //       margin: 10,
  //       nav: false,
  //       dots: false,
  //       autoplay: true,
  //       autoplayTimeout: 5000,
  //       smartSpeed: 5000,
  //       responsive: {
  //         0: {
  //           items: 4,
  //         },
  //         600: {
  //           items: 8,
  //         },
  //         1000: {
  //           items: 8,
  //         },
  //       },
  //     })
  //   })
  // }

  const maintitle = props.customHeaderText || props.ourlogotitle
  const logoimages = props.outlogoimage
  return (
    <section className="max-w-6xl px-4 my-12 md:px-3 mx-auto md:mb-23 sm:my-24 flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full justify-center items-start md:text-left max-w-2xl mx-auto">
        <h3 className="my-4 text-2xl md:text-3xl text-primary font-bold leading-8	md:leading-10 text-center">
          {maintitle}
        </h3>
      </div>
      <div className="flex w-full justify-start flex-wrap mt-2 sm:mt-2 our-logos">
        {logoimages.map((logoimage, i) => {
          return (
            <div key={i} class="w-full md:w-1/5 flex justify-center md:pt-20 px-2 py-4">
              <span className="h-10">
                <Image classes="h-full w-auto" props={logoimage.asset._ref} />
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default OurLogo
