import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Link from "gatsby-link"

function PricingCards(props) {
  return (
    <div className="max-w-6xl px-4 md:px-3 lg:px-0 mx-auto flex flex-wrap items-center pb-18 font-custom">
      <div className="pricing-table-2 pt-1 md:pt-3 w-full">
        <div className="mx-auto">
          <div className="pricing-plans relative lg:flex mt-6 md:mt-12 w-full">
            <div className="pricing-plan-wrap lg:w-1/3 mt-4 mb-8 md:my-6 px-5">
              <div className="pricing-plan bg-whiteColor-custom border border-grayColor-priceCardBorder rounded-2xl text-center mx-auto shadow-md">
                <div className="p-6 pt-12 md:pt-16 md:pb-4">
                  <div className="ellipse flex items-center justify-center h-20">
                    <StaticImage
                      src="../images/rudderstack-pricing-free.svg"
                      alt="EllipseImg"
                      placeholder="tracedSVG"
                    />
                  </div>
                  <h3 className="font-medium leading-tight md:leading-snug text-4xl md:text-5xl text-primary mr-2 font-bold">
                    Free
                  </h3>
                  <div className="text-grayColor-lighter mt-2 h-16 leading-7 text-lg text-lg">
                    500,000 <br />
                    events/month
                  </div>
                </div>
                <div className="p-6 pt-0 pb-10 max-w-xs mx-auto text-left">
                  <ul className="h-52 text-lg">
                    <li className="relative pl-8 p-1.5 text-grayColor-custom font-medium">
                      <span className="absolute top-2 w-7 left-0 check-icon">
                        
                        {/* <StaticImage
                          className="mr-2"
                          src="../images/check-r2x.png"
                          alt="check"
                        />{" "} */}
                      </span>
                      Event Stream (500k)
                    </li>
                    <li className="relative pl-8 p-1.5 text-grayColor-custom font-medium">
                      <span className="absolute top-2 w-7 left-0 check-icon">
                        {/* <StaticImage
                          className="mr-2"
                          src="../images/check-r2x.png"
                          alt="check"
                        />{" "} */}
                      </span>{" "}
                      Cloud Extract (500k)
                    </li>
                    <li className="relative pl-8 p-1.5 text-grayColor-custom font-medium">
                      <span className="absolute top-2 w-7 left-0 check-icon">
                        {/* <StaticImage
                          className="mr-2"
                          src="../images/check-r2x.png"
                          alt="check"
                        />{" "} */}
                      </span>{" "}
                      Warehouse Actions (10k)
                    </li>
                    <li className="relative pl-8 p-1.5 text-grayColor-custom font-medium">
                      <span className="absolute top-2 w-7 left-0 check-icon">
                        {/* <StaticImage
                          className="mr-2"
                          src="../images/check-r2x.png"
                          alt="check"
                        />{" "} */}
                      </span>{" "}
                      SDK Sources
                    </li>
                    <li className="relative pl-8 p-1.5 text-grayColor-custom font-medium">
                      <span className="absolute top-2 w-7 left-0 check-icon">
                        {/* <StaticImage
                          className="mr-2"
                          src="../images/check-r2x.png"
                          alt="check"
                        />{" "} */}
                      </span>{" "}
                      150+ destinations
                    </li>
                  </ul>
                  <div className="mt-6 py-4 text-center">
                    <a
                      href="https://app.rudderlabs.com/signup?type=freetrial"
                      className="btn-primary-sm inline-block font-bold"
                    >
                      Sign up free
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-plan-wrap proCard relative lg:w-1/3 mt-4 mb-8 md:my-6 px-5">
              <div className="pricing-plan bg-whiteColor-custom border border-grayColor-priceCardBorder rounded-2xl text-center mx-auto shadow-md">
                <div className="p-6 md:pt-16 md:pb-4">
                  <div className="ellipse flex items-center justify-center h-20">
                    <StaticImage src="../images/rudderstack-pricing-pro.svg" alt="Line" placeholder="tracedSVG" />
                  </div>
                  <h4 className="font-medium leading-tight md:leading-snug text-4xl md:text-5xl text-primary mr-2 font-bold">
                    Pro
                  </h4>
                  <div className="text-grayColor-lighter mt-2 h-16 leading-7 text-lg">
                    Starting at $750 for 25M <br />
                    events/month
                  </div>
                </div>
                <div className="p-6 pt-0  pb-10 max-w-xs mx-auto text-left">
                  <ul className="h-52">
                    <li className="relative pl-8 p-1.5 text-grayColor-custom font-medium">
                      <span className="absolute top-2 w-7 left-0 check-icon">
                        {/* <StaticImage
                          className="mr-2"
                          src="../images/check-r2x.png"
                          alt="check"
                        />{" "} */}
                      </span>{" "}
                      Everything in Free, plus:
                    </li>
                    <li className="relative pl-8 p-1.5 text-grayColor-custom font-medium">
                      <span className="absolute top-2 w-7 left-0 check-icon">
                        {/* <StaticImage
                          className="mr-2"
                          src="../images/check-r2x.png"
                          alt="check"
                        />{" "} */}
                      </span>{" "}
                      Near Real Time Data
                    </li>
                    <li className="relative pl-8 p-1.5 text-grayColor-custom font-medium">
                      <span className="absolute top-2 w-7 left-0 check-icon">
                        {/* <StaticImage
                          className="mr-2"
                          src="../images/check-r2x.png"
                          alt="check"
                        />{" "} */}
                      </span>{" "}
                      Transformations
                    </li>
                    <li className="relative pl-8 p-1.5 text-grayColor-custom font-medium">
                      <span className="absolute top-2 w-7 left-0 check-icon">
                        {/* <StaticImage
                          className="mr-2"
                          src="../images/check-r2x.png"
                          alt="check"
                        />{" "} */}
                      </span>{" "}
                      Grafana Dashboards
                    </li>
                    <li className="relative pl-8 p-1.5 text-grayColor-custom font-medium">
                      <span className="absolute top-2 w-7 left-0 check-icon">
                        {/* <StaticImage
                          className="mr-2"
                          src="../images/check-r2x.png"
                          alt="check"
                        />{" "} */}
                      </span>{" "}
                      10 Team Members
                    </li>
                    <li className="relative pl-8 p-1.5 text-grayColor-custom font-medium">
                      <span className="absolute top-2 w-7 left-0 check-icon">
                        {/* <StaticImage
                          className="mr-2"
                          src="../images/check-r2x.png"
                          alt="check"
                        />{" "} */}
                      </span>{" "}
                      Priority Support
                    </li>
                  </ul>
                  <div className="mt-6 py-4 text-center">
                    <Link
                      to="/request-demo"
                      className="btn-primary-sm inline-block font-bold"
                    >
                      Get a demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6 px-5">
              <div className="pricing-plan bg-whiteColor-custom border border-grayColor-priceCardBorder rounded-2xl text-center mx-auto shadow-md	">
                <div className="p-6 md:pt-16 md:pb-4">
                  <div className="ellipse flex items-center justify-center h-20">
                    <StaticImage src="../images/rudderstack-pricing-enterprise.svg" alt="Line" placeholder="tracedSVG" />
                  </div>
                  <h4 className="font-medium leading-tight md:leading-snug text-4xl md:text-5xl text-primary mr-2 font-bold">
                    Enterprise
                  </h4>
                  <div className="text-grayColor-lighter mt-2 h-16 leading-7 text-lg">
                    Billions of events
                  </div>
                </div>

                <div className="p-6 pt-0 pb-10 max-w-xs mx-auto text-left">
                  <ul className="h-52">
                    <li className="relative pl-8 p-1.5 text-grayColor-custom font-medium">
                      <span className="absolute top-2 w-7 left-0 check-icon">
                        {/* <StaticImage
                          className="mr-2"
                          src="../images/check-r2x.png"
                          alt="check"
                        />{" "} */}
                      </span>{" "}
                      Everything in Pro, plus:
                    </li>
                    <li className="relative pl-8 p-1.5 text-grayColor-custom font-medium">
                      <span className="absolute top-2 w-7 left-0 check-icon">
                        {/* <StaticImage
                          className="mr-2"
                          src="../images/check-r2x.png"
                          alt="check"
                        />{" "} */}
                      </span>{" "}
                      Event Replay
                    </li>
                    <li className="relative pl-8 p-1.5 text-grayColor-custom font-medium">
                      <span className="absolute top-2 w-7 left-0 check-icon">
                        {/* <StaticImage
                          className="mr-2"
                          src="../images/check-r2x.png"
                          alt="check"
                        />{" "} */}
                      </span>{" "}
                      SSO
                    </li>
                    <li className="relative pl-8 p-1.5 text-grayColor-custom font-medium">
                      <span className="absolute top-2 w-7 left-0 check-icon">
                        {/* <StaticImage
                          className="mr-2"
                          src="../images/check-r2x.png"
                          alt="check"
                        />{" "} */}
                      </span>{" "}
                      Single tenant
                    </li>
                    <li className="relative pl-8 p-1.5 text-grayColor-custom font-medium">
                      <span className="absolute top-2 w-7 left-0 check-icon">
                        {/* <StaticImage
                          className="mr-2"
                          src="../images/check-r2x.png"
                          alt="check"
                        />{" "} */}
                      </span>{" "}
                      VPC Hosting Support <br />
                      (additional)
                    </li>
                  </ul>
                  <div className="mt-6 py-4 text-center">
                    <a
                      href="enterprise-quote"
                      className="btn-primary-sm inline-block font-bold"
                    >
                      Request pricing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 pt-5 md:pt-16 w-full text-lg md:text-xl text-center font-bold">
        <p className="text-primary">You can also deploy or contribute to RudderStack Open Source. </p>
        <div className="mt-3 flex items-center">
          <a
            href="https://github.com/rudderlabs/rudder-server"
            className="text-sm text-black leading-8 font-bold lr-icon mx-auto"
            target="_blank"
            rel="noreferrer"
          >
            Learn more on Github
          </a>
        </div>
      </div>
    </div>
  )
}
export default PricingCards
