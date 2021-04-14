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
          //  autoplay:true,
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
           <section class="testimonials py-5 text-primary px-1 px-md-5 margin-top-xl bg-hero-pattern bg-no-repeat bg-cover bg-center">
                <div class="container mx-auto">
                    <div class="row">
                    <div className="block w-full">
                        <div class="carousel-controls testimonial-carousel-controls">

                        <div className="testimonial-slider owl-carousel owl-theme -mt-16">
                            {
                                testimonials.map(
                                    (testimonial, i) => (
                                        <div key={i} class="item h5 font-weight-normal one-slide mx-auto pb-8 w-100 max-w-6xl justify-items-center">
                                            <div class="testimonial pb-10 w-100 px-3 text-center d-flex flex-direction-column justify-content-center flex-wrap align-items-center xl:pt-36 2xl:pt-48">
                                                <div className="flex items-center flex grid justify-items-center xl:-mt-36 2xl:-mt-48">
                                                    <div class="usr_img mb-4">
                                                        <Image props={testimonial.clientimage.asset._ref} />
                                                    </div>
                                                </div>
                                                <p className="font-bold text-sm text-primary mb-2">{testimonial.clientname}</p>
                                                <p className="text-sm text-primary mb-4">{testimonial.clientdesignation}</p>
                                                <div class="message text-center text-4xl tracking-wide font-bold text-primary blockquote mt-8">{testimonial.clientcontent}
                                                </div>
                                                <div className="text-center mt-8">
                                                    <a className={(testimonial.button.btnhiglight === true ? 'bg-white text-primary' : '') + ` py-3.5 text-sm px-10 mr-4 rounded-lg border border-primary font-bold`} href={testimonial.button.btnlink}>{testimonial.button.btntext}</a>
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