import React, {useEffect, useRef} from "react"
/* import $ from "jquery"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel" */
import Image from "./image"
import Link from "gatsby-link"
/* import {Carousel} from 'react-responsive-carousel'; */
import {Rerousel} from 'rerousel';
import { rudderslabTrackOnClick } from "../utils/common"
import bgImage from "../images/testimonial-bg-v3.webp"

const Testimonial = props => {

  /* useEffect(() => {
    [].forEach.call(document.querySelectorAll('div[data-src]'), function(div) {
      div.setAttribute("style","background-image: url(" + div.getAttribute('data-src') + ");");
      div.onload = function() {
        div.removeAttribute('data-src');
      };
    });
  }) */

  const ref = useRef(null);

  const testimonials = props.addtestimonial
  return (
    <section className="section-gradient py-19 relative">
      <div className="max-w-6xl mx-auto">
        <div className="w-8/12 mx-auto">
          <h3 className="font-bold text-4xl text-center text-darkScheme-textPrimary">Stay up to date on feature releases, product roadmap and more!</h3>
        </div>
        <div className="newsletter-wrapper mt-12 mb-10 max-w-xl mx-auto">
          <div className="newsletter-block bg-darkScheme-textPrimary flex items-center rounded-2xl">
            <span className="sign-up-text block font-bold py-3 px-10">Sign Up for Newsletter</span>
            <input className="newsletter-input border-2 border-darkScheme-textPrimary rounded-2xl w-full p-2 text-darkScheme-textPrimary" />
          </div>
        </div>
        <div className="carousel-wrapper flex pt-15">
          <Rerousel itemRef={ref}>
            {testimonials && testimonials.map((testimonial, i) => {
              return (
                <div className="carousel-item w-1/3 relative" key={i} ref={ref}>
                  <div className="carousel-inner-wrapper relative flex items-center justify-center border rounded-2xl px-15 py-24 mx-7">
                    <span className="quotes absolute">
                      <svg width="154" height="140" viewBox="0 0 154 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 127.822C1 133.898 5.92487 138.822 12 138.822H56.1257C62.2008 138.822 67.1257 133.897 67.1257 127.822V83.3845C67.1257 77.4818 62.3406 72.6967 56.4378 72.6967C49.9794 72.6967 45.7789 65.9001 48.6672 60.1235L70.9395 15.5788C73.032 11.3939 71.7288 6.30715 67.8818 3.64387C63.8176 0.830168 58.2686 1.64415 55.1837 5.50656L3.405 70.3352C1.84806 72.2845 1 74.7052 1 77.2V127.822ZM81.3964 127.822C81.3964 133.898 86.3213 138.822 92.3964 138.822H136.522C142.597 138.822 147.522 133.897 147.522 127.822V83.3845C147.522 77.4818 142.737 72.6967 136.834 72.6967C130.376 72.6967 126.175 65.9001 129.064 60.1235L151.336 15.5788C153.428 11.3939 152.125 6.30715 148.278 3.64387C144.214 0.830169 138.665 1.64415 135.58 5.50656L83.8014 70.3352C82.2444 72.2845 81.3964 74.7052 81.3964 77.2V127.822Z" stroke="white" strokeWidth="2"/>
                      </svg>
                    </span>
                    <p className="text-center text-darkScheme-textPrimary">{testimonial.clientcontent}</p>
                    <div className="testimonial-client-image absolute">
                      <Image
                        props={testimonial.clientimage.asset._ref}
                        width="120"
                        height="120"
                      />
                    </div>
                  </div>
                  <div className="clients-details text-center text-darkScheme-textPrimary mt-16">
                    <span className="block">- {testimonial.clientname}</span>
                    <span className="block">{testimonial.clientdesignation}</span>
                  </div>
                </div>
              )
            })}
          </Rerousel>
        </div>
      </div>
      <span className="section-border absolute bottom-0 left-0 w-full block"></span>
    </section>
  )
}
export default Testimonial
