import React from "react"
import Image from "./image"
import Link from "gatsby-link"
// import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const TestimonialFloatingSmall = props => {
  const testimonial = props.addtestimonial ? props.addtestimonial[0] : props
  return (
    <div>
      <div className="carousel-item w-full relative">
        <div className="testimonial-container relative flex items-center justify-center border rounded-2xl px-4 py-8 mx-7">
          <span className="quotes absolute">
            <svg
              width="154"
              height="140"
              viewBox="0 0 154 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 127.822C1 133.898 5.92487 138.822 12 138.822H56.1257C62.2008 138.822 67.1257 133.897 67.1257 127.822V83.3845C67.1257 77.4818 62.3406 72.6967 56.4378 72.6967C49.9794 72.6967 45.7789 65.9001 48.6672 60.1235L70.9395 15.5788C73.032 11.3939 71.7288 6.30715 67.8818 3.64387C63.8176 0.830168 58.2686 1.64415 55.1837 5.50656L3.405 70.3352C1.84806 72.2845 1 74.7052 1 77.2V127.822ZM81.3964 127.822C81.3964 133.898 86.3213 138.822 92.3964 138.822H136.522C142.597 138.822 147.522 133.897 147.522 127.822V83.3845C147.522 77.4818 142.737 72.6967 136.834 72.6967C130.376 72.6967 126.175 65.9001 129.064 60.1235L151.336 15.5788C153.428 11.3939 152.125 6.30715 148.278 3.64387C144.214 0.830169 138.665 1.64415 135.58 5.50656L83.8014 70.3352C82.2444 72.2845 81.3964 74.7052 81.3964 77.2V127.822Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </span>
          <p className="text-center text-darkScheme-textPrimary">
            {testimonial.clientcontent}
          </p>
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
    </div>
    // <div className=" max-w-6xl md:mx-4 xl:mx-auto">
    //   <div className="item h5 font-weight-normal mx-auto pb-0 w-100 max-w-6xl justify-items-center bg-blueNew-cardBackground rounded-xl">
    //     <div className="testimonial pb-12 w-100 text-center d-flex flex-direction-column justify-content-center flex-wrap align-items-center relative pt-16 ">
    //       <div className="items-center flex justify-center -top-18 w-full absolute">
    //         <div className="mb-4">
    //           <Image
    //             props={testimonial.clientimage.asset._ref}
    //             classes="h-32 w-auto"
    //           />
    //         </div>
    //       </div>
    //       <p
    //         className={`font-bold text-sm ${
    //           props.applyGradientColorTheme ? "text-white" : "text-dark"
    //         } `}
    //       >
    //         {testimonial.clientname}
    //       </p>
    //       <p
    //         className={`text-sm ${
    //           props.applyGradientColorTheme ? "text-white" : "text-dark"
    //         } mb-3`}
    //       >
    //         {testimonial.clientdesignation}
    //       </p>
    //       <div
    //         className={`message text-center text-sm font-bold tracking-wide ${
    //           props.applyGradientColorTheme ? "text-white" : "text-dark"
    //         } blockquote leading-tight px-4 md:px-8`}
    //       >
    //         {testimonial.clientcontent}
    //       </div>
    //       {testimonial.button &&
    //         testimonial.button.btnlink !== "" &&
    //         testimonial.button.btntext !== "" && (
    //           <div className="text-center mt-8">
    //             {(() => {
    //               if (testimonial.button.btnexternallink === true) {
    //                 return (
    //                   <a
    //                     className={`${
    //                       testimonial.button.btnhiglight
    //                         ? "btn-primary-lg bg-black-custom hover:bg-blueNew-midnight border-white text-white"
    //                         : "btn-secondary-large"
    //                     } inline-block`}
    //                     href={testimonial.button.btnlink}
    //                   >
    //                     {testimonial.button.btntext}
    //                   </a>
    //                 )
    //               } else {
    //                 return (
    //                   <Link to={testimonial.button.btnlink}>
    //                     <span
    //                       className={
    //                         (testimonial.button.btnhiglight === true
    //                           ? "btn-primary-lg"
    //                           : "btn-secondary-lg bg-black-custom hover:bg-blueNew-midnight border-white text-white") +
    //                         ` inline-block`
    //                       }
    //                     >
    //                       {testimonial.button.btntext}
    //                     </span>
    //                   </Link>
    //                 )
    //               }
    //             })()}
    //           </div>
    //         )}
    //     </div>
    //   </div>
    // </div>
  )
}
export default TestimonialFloatingSmall
