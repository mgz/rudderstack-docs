import React from "react"
import Image from "./image"
import Link from "gatsby-link"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const TestimonialFloating = props => {
  const testimonial = props.addtestimonial[0]
  return (
    <div className=" max-w-6xl mx-4 md:mx-auto">
      <div className="item h5 font-weight-normal mx-auto pb-0 w-100 max-w-6xl justify-items-center bg-blueNew-cardBackground rounded-xl">
        <div className="testimonial pb-12 w-100 text-center d-flex flex-direction-column justify-content-center flex-wrap align-items-center relative pt-36 ">
          
          <div className="items-center flex justify-center -top-18 w-full absolute">
            <div className="usr_img mb-4">
              <Image props={testimonial.clientimage.asset._ref} />
            </div>
          </div>
          <p
            className={`font-bold text-sm ${
              props.applyGradientColorTheme ? "text-white" : "text-dark"
            } mb-2`}
          >
            {testimonial.clientname}
          </p>
          <p
            className={`text-sm ${
              props.applyGradientColorTheme ? "text-white" : "text-dark"
            } mb-4`}
          >
            {testimonial.clientdesignation}
          </p>
          <div
            className={`message text-center text-2xl md:text-3xl-3 tracking-wide font-normal ${
              props.applyGradientColorTheme ? "text-white" : "text-dark"
            } blockquote mt-8 leading-tight px-4 md:px-12`}
          >
            {testimonial.clientcontent}
          </div>
          {testimonial.button &&
            testimonial.button.btnlink !== "" &&
            testimonial.button.btntext !== "" && (
              <div className="text-center mt-8">
                {(() => {
                  if (testimonial.button.btnexternallink === true) {
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
                      <Link to={testimonial.button.btnlink}>
                        <span
                          className={
                            (testimonial.button.btnhiglight === true
                              ? "btn-primary-lg"
                              : "btn-secondary-lg bg-black-custom hover:bg-blueNew-midnight border-white text-white") +
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
    </div>
  )
  // return (
  //   <>
  //     <div className="overflow-hidden">
  //       <div
  //         className={`testimonials testimonials-wrap py-5 text-primary px-md-5 margin-top-xl ${
  //           props.applyGradientColorTheme
  //             ? "testimonila-bg-gradiant"
  //             : "testimonila-bg-gradiant-v2"
  //         } md:mt-32`}
  //       >
  //         <div className="max-w-6xl mx-auto px-4 md:px-3 testimonial-img-wrap">
  //           <div className="row">
  //             <div className="block w-full">
  //               <div className="carousel-controls testimonial-carousel-controls xl:-mt-20">
  //                 <div className="testimonial-slider">
  //                   {testimonials &&
  //                     testimonials.map((testimonial, i) => {
  //                       return (
  //                         <div
  //                           key={i}
  //                           className="item h5 font-weight-normal mx-auto pb-0 w-100 max-w-6xl justify-items-center"
  //                         >
  //                           <div className="testimonial pb-12 w-100 text-center d-flex flex-direction-column justify-content-center flex-wrap align-items-center">
  //                             <div className="items-center flex justify-center">
  //                               <div className="usr_img mb-4">
  //                                 <Image
  //                                   props={testimonial.clientimage.asset._ref}
  //                                 />
  //                               </div>
  //                             </div>
  //                             <p
  //                               className={`font-bold text-sm ${
  //                                 props.applyGradientColorTheme
  //                                   ? "text-white"
  //                                   : "text-dark"
  //                               } mb-2`}
  //                             >
  //                               {testimonial.clientname}
  //                             </p>
  //                             <p
  //                               className={`text-sm ${
  //                                 props.applyGradientColorTheme
  //                                   ? "text-white"
  //                                   : "text-dark"
  //                               } mb-4`}
  //                             >
  //                               {testimonial.clientdesignation}
  //                             </p>
  //                             <div
  //                               className={`message text-center text-2xl md:text-3xl-3 tracking-wide font-normal ${
  //                                 props.applyGradientColorTheme
  //                                   ? "text-white"
  //                                   : "text-dark"
  //                               } blockquote mt-8 px-0 leading-tight`}
  //                             >
  //                               {testimonial.clientcontent}
  //                             </div>
  //                             {testimonial.button &&
  //                               testimonial.button.btnlink !== "" &&
  //                               testimonial.button.btntext !== "" && (
  //                                 <div className="text-center mt-8">
  //                                   {(() => {
  //                                     if (
  //                                       testimonial.button.btnexternallink ===
  //                                       true
  //                                     ) {
  //                                       return (
  //                                         <a
  //                                           className={`${
  //                                             testimonial.button.btnhiglight
  //                                               ? "btn-primary-lg bg-black-custom hover:bg-blueNew-midnight border-white text-white"
  //                                               : "btn-secondary-large"
  //                                           } inline-block`}
  //                                           href={testimonial.button.btnlink}
  //                                         >
  //                                           {testimonial.button.btntext}
  //                                         </a>
  //                                       )
  //                                     } else {
  //                                       return (
  //                                         <Link to={testimonial.button.btnlink}>
  //                                           <span
  //                                             className={
  //                                               (testimonial.button
  //                                                 .btnhiglight === true
  //                                                 ? "btn-primary-lg"
  //                                                 : "btn-secondary-lg bg-black-custom hover:bg-blueNew-midnight border-white text-white") +
  //                                               ` inline-block`
  //                                             }
  //                                           >
  //                                             {testimonial.button.btntext}
  //                                           </span>
  //                                         </Link>
  //                                       )
  //                                     }
  //                                   })()}
  //                                 </div>
  //                               )}
  //                           </div>
  //                         </div>
  //                       )
  //                     })}
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // )
}
export default TestimonialFloating
