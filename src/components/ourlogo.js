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
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:15
            }
        }
    })
  });
  const maintitle = props.ourlogotitle
  const logoimages = props.outlogoimage
  return (
    <>
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full justify-center items-start text-center md:text-left">
          <h3 className="my-4 text-3xl font-bold leading-tight">{maintitle}</h3>
        </div>
        <div className="flex w-full justify-center">
        <div className="logo-slider owl-carousel owl-theme">
        {
          logoimages.map(
            (logoimage, i) => (
              <div key={i} class="item">
                <span className="flex p-4">
                  <Image  props={logoimage.asset._ref} className="p-4"/>
                </span>
              </div>
            )
          )
        }
         </div>
        </div>
      </div>
    </>
  );
}
export default OurLogo;