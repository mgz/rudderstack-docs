import React from "react";
import Image from "./image"
    
const Testimonial = (props) => {
    console.log(props)
    const testimonials = props.addtestimonial
    // const smalldescription = props.smalldescription
    // const title = props.title
    // const btns = props.addbuttons
    return (
        <>
           <section class="testimonials py-5 text-black px-1 px-md-5 margin-top-xl">
                <div class="container">
                    <div class="row">
                    <div className="block w-full">
                        

                        <div class="carousel-controls testimonial-carousel-controls">

                        <div class="testimonial-carousel">
                            {
                                testimonials.map(
                                    (testimonial, i) => (
                                        <div key={i} class="h5 font-weight-normal one-slide mx-auto">
                                        <div class="testimonial w-100 px-3 text-center d-flex flex-direction-column justify-content-center flex-wrap align-items-center">
                                        <div className="flex items-center mx-auto">
                                            <Image props={testimonial.clientimage.asset._ref} />
                                        </div>
                                            <p className="font-500 text-sm">{testimonial.clientname}</p>
                                            <p className="text-sm">{testimonial.clientdesignation}</p>
                                            <div class="message text-center text-xl font-bold blockquote w-100">{testimonial.clientcontent}</div>
                                            <div className="text-center mt-4">
                                                <a href={testimonial.button.btnlink} className="p-4 border border-black">{testimonial.button.btntext}</a>
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