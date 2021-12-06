import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const TestimonialFloatingV2 = props => {
  const testimonial = props.addtestimonial ? props.addtestimonial[0] : props
  return (
    <div className="relative">
      <div className="out-gradient-wrapper top-1/4 left-1/4">
        <div className="grad1">
          <div className="grad2">
            <div className="grad3">
              <div className="grad4">
                <div className="grad5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item max-w-4xl mx-auto relative px-4 lg:px-0">
        <div className="carousel-inner-wrapper-2 relative flex flex-col items-center justify-center border rounded-2xl  py-20 mx-7">
          <div className="">
            <div>
              <span className="hidden md:block -left-8 -top-16 absolute">
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

              <span className="block md:hidden w-full mx-auto -top-20 absolute">
                <svg
                  className="mx-auto"
                  width="114"
                  height="100"
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

              <p className="text-center text-darkScheme-textPrimary text-lg md:text-3xl-3">
                {testimonial.clientcontent}
              </p>
            </div>
            <div className="clients-details text-center text-darkScheme-textPrimary mt-10">
              <span className="block">- {testimonial.clientname}</span>
              <span className="block">{testimonial.clientdesignation}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TestimonialFloatingV2
