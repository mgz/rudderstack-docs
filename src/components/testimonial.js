import React from "react";
import $ from 'jquery'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import Image from "./image"
    
const Testimonial = (props) => {
    $(document).ready(function(){
        $('.testimonial-slider').owlCarousel({
            loop:true,
            center: true,
            nav:true,
            dots:true,
            autoplay:true,
            autoplayTimeout:5000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
    });
    const testimonials = props.addtestimonial
    return (
        <>
           <section class="testimonials py-5 text-black px-1 px-md-5 margin-top-xl">
                <div class="container">
                    <div class="row">
                    <div className="block w-full">
                        

                        <div class="carousel-controls testimonial-carousel-controls">

                        <div className="testimonial-slider owl-carousel owl-theme">
                            {
                                testimonials.map(
                                    (testimonial, i) => (
                                        <div key={i} class="item h5 font-weight-normal one-slide mx-auto pb-24">
                                        <div class="testimonial pb-10 w-100 px-3 text-center d-flex flex-direction-column justify-content-center flex-wrap align-items-center">
                                        <div className="flex items-center w-max">
                                            <Image props={testimonial.clientimage.asset._ref} />
                                        </div>
                                            <p className="font-500 text-sm">{testimonial.clientname}</p>
                                            <p className="text-sm">{testimonial.clientdesignation}</p>
                                            <div class="message text-center text-xl font-bold blockquote w-100">{testimonial.clientcontent}</div>
                                            <div className="text-center mt-4">
                                                <a className={(testimonial.button.btnhiglight === true ? 'bg-white text-black' : '') + ` py-2 px-8 mr-4 rounded-lg border border-black`} href={testimonial.button.btnlink}>{testimonial.button.btntext}</a>
                                            </div>
                                        </div>
                                        </div>
                                    )
                                )
                            }
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default Testimonial