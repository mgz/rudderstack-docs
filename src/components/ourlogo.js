import React from "react";
import $ from 'jquery'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import Image from "./image"

function OurLogo(props) {
  $(document).ready(function(){
    $('.logo-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:5000,
        responsive:{
            0:{
                items:4
            },
            600:{
                items:8
            },
            1000:{
                items:8
            }
        }
    })
  });
  const maintitle = props.ourlogotitle
  const logoimages = props.outlogoimage
  return (
    <section
      className="max-w-6xl px-4 md:px-3 mx-auto md:mb-32 sm:my-20 flex flex-wrap flex-col md:flex-row items-center md:px-0">
      <div className="flex flex-col w-full justify-center items-start md:text-left max-w-screen-sm">
        <h3 className="my-4 text-2xl md:text-3xl text-primary font-bold leading-8	md:leading-10">{maintitle}</h3>
      </div>
      <div className="flex w-full justify-center mt-2 sm:mt-10 our-logos">
        <div className="logo-slider owl-carousel owl-theme">
          {
            logoimages.map(
              (logoimage, i) => {
                return(
                <div key={i} class="item inline-flex">
                <span className="p-4">
                  <Image props={logoimage.asset._ref} className="p-4"/>
                </span>
                </div>
              )}
            )
          }
        </div>
      </div>
    </section>
  );
}
export default OurLogo;