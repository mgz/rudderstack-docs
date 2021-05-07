import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import open_source from "../images/open_source.svg"
import build from "../images/build.svg"
import privacy from "../images/privacy.svg"
import customerobsessed from "../images/customer-obsessed.svg"
import Integrationschart from "../images/Integrations chart.svg"
import MiddleBanner from "../components/middle-banner"

export const query = graphql`
  query aboutPage {
    sanityFrontpageblock {
      _rawPagebuildersectionarray
    }
  }
`

const About = ({ data }) => {
  const lv_middlebannersection = (
    data.sanityFrontpageblock._rawPagebuildersectionarray || []
  ).filter(ii => ii._type === "middlebannersection")

  return (
    <Layout>
      <SEO title="About Us" />
      <div className="mt-16 mx-auto about-us-banner lg:pb-20">
        <section className="overflow-x-hidden bg-gradient-to-t from-white-custom via-blueNew-lighter to-blueNew-lighter">
          <div class="max-w-6xl md:mt-16 px-3 md:px-3 mx-auto flex flex-wrap flex-col md:items-center md:text-center">
            <div className="uppercase text-sm mb-5 text-blueNew-custom font-bold">
              OUR MISSION
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-custom leading-snug">
              Elevating Data Engineers
            </h1>
            <p className="text-lg md:text-xl-2 mt-4 max-w-screen-md">
              Our mission is to help data engineers and developers become the
              heroes of their companies by providing every team with rich data.
            </p>
          </div>
        </section>
      </div>
      <div className="max-w-6xl px-3 mx-auto">
        <section className="overflow-x-hidden bg-gradient-to-t from-white-custom via-blueNew-lighter to-blueNew-lighter">
          <div className="container mx-auto flex py-16 md:pt-20 md:pb-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-30 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
              <p className="mb-6 text-2xl md:text-3xl leading-relaxed font-bold">
                We accomplish our mission by building the most advanced,
                bi-directional pipelines for your data stack
              </p>
              <p className="text-sm md:text-lg">
                RudderStack elegantly handles every piece of data from every
                source and syncs it with every tool in your stack.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
              <img
                src={Integrationschart}
                alt="Integration Chart"
                className="w-full"
              />
            </div>
          </div>
        </section>
      </div>
      <section className="bg-grayColor-BgGray">
        <div className="max-w-6xl px-3 py-16 md:py-20 mx-auto">
          <div className="flex flex-wrap w-full mb-24 flex-col">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              We build on these Principles
            </h2>
            <p className="w-full leading-relaxed font-bold sm:font-normal text-sm md:text-lg text-grayColor-custom">
              Transparency drives everything we do at RudderStack. We enable you
              to fully leverage your customer data without giving up control,
              putting these principles first in all of our work.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="md:w-1/2 mb-16 md:mb-16">
              <div className="lg:pr-36">
                <div className="w-16 h-16 inline-flex items-center justify-center">
                  <img src={open_source} />
                </div>
                <h2 className="text-2xl-2 font-bold mb-2">Open-source</h2>
                <p className="leading-relaxed text-sm sm:text-lg  text-grayColor-custom">
                  We believe that companies should not be vendor-locked into
                  proprietary software and held hostage to predatory pricing.
                  Openness is not only good for society but also requires us to
                  keep innovating.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 mb-16 md:mb-16">
              <div className="lg:pr-36">
                <div className="w-16 h-16 inline-flex items-center justify-center">
                  <img src={privacy} />
                </div>
                <h2 className="text-2xl-2 font-bold mb-2">
                  Privacy &amp; Security-focused
                </h2>
                <p className="leading-relaxed text-sm sm:text-lg  text-grayColor-custom">
                  We take user data privacy and security very seriously. Our
                  core architecture was constructed on the idea of privacy and
                  security first. That is not just a product choice for us; it
                  is a principle.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 mb-16 md:mb-16">
              <div className="lg:pr-16">
                <div className="w-16 h-16 inline-flex items-center justify-center">
                  <img src={build} />
                </div>
                <h2 className="text-2xl-2 font-bold title-font mb-2">
                  Built for Engineers &amp; Data Scientists
                </h2>
                <p className="leading-relaxed text-sm sm:text-lg  text-grayColor-custom lg:pr-16">
                  We take data privacy and security seriously. RudderStack’s
                  core architecture was constructed specifically with data
                  privacy.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="lg:pr-36">
                <div className="w-16 h-16 inline-flex items-center justify-center">
                  <img src={customerobsessed} />
                </div>
                <h2 className="text-2xl-2 font-bold title-font mb-2">
                  Customer-Obsessed
                </h2>
                <p className="leading-relaxed text-sm sm:text-lg  text-grayColor-custom">
                  Every company wants to treat its customers well, but for us,
                  it’s an obsession. We will always help our customers make the
                  best product choice under all circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="max-w-6xl px-5 pt-16 md:pt-28 mx-auto">
          <div className="flex flex-wrap w-full mb-8 md:mb-20 flex-col">
            <h2 className="sm:text-5xl text-2xl font-bold mb-6">Leadership</h2>
            <p className="w-full leading-relaxed text-sm sm:text-lg">
              We’re an engineer-led team of data, security, and marketing
              experts.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 w-full md:w-1/3 m-auto max-w-sm">
              <div className="h-full border border-grayColor-priceCardBorder rounded-3xl overflow-hidden shadow-md">
                <StaticImage
                  className="h-64 sm:h-72 w-full object-cover object-center"
                  src="../images/SoumyadebCropped.jpg"
                />
                <div className="py-4 text-center">
                  <h3 className="title-font text-2xl font-medium mb-3">
                    Soumyadeb Mitra
                  </h3>
                  <p className="leading-relaxed mb-3 text-xl">
                    Founder &amp; CEO, RudderStack
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3 m-auto max-w-sm">
              <div className="h-full border border-grayColor-priceCardBorder rounded-3xl overflow-hidden shadow-md">
                <StaticImage
                  className="h-64 sm:h-72 w-full object-cover object-center"
                  src="../images/Eric.png"
                />
                <div className="py-4 text-center">
                  <h3 className="title-font text-2xl font-medium text-gray-900 mb-3">
                    Eric Dodds
                  </h3>
                  <p className="leading-relaxed mb-3 text-xl">
                    Director, Customer Success
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3 m-auto max-w-sm">
              <div className="h-full border border-grayColor-priceCardBorder rounded-3xl overflow-hidden shadow-md">
                <StaticImage
                  className="h-64 sm:h-72 w-full object-cover object-center"
                  src="../images/BrettCropped.jpg"
                />
                <div className="py-4 text-center">
                  <h3 className="title-font text-2xl font-medium text-gray-900 mb-3">
                    Brett Umberg
                  </h3>
                  <p className="leading-relaxed mb-3 text-xl">
                    Head of BizOps &amp; Strategy
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4 justify-center">
            <div className="p-4 w-full md:w-1/2 max-w-sm flex justify-end">
              <div className="h-full border border-grayColor-priceCardBorder rounded-3xl overflow-hidden shadow-md">
                <StaticImage
                  className="h-64 sm:h-72 w-full object-cover object-center"
                  src="../images/sumanth-2.jpeg"
                />
                <div className="py-4 text-center">
                  <h3 className="title-font text-2xl font-medium mb-3">
                    Sumanth Puram
                  </h3>
                  <p className="leading-relaxed mb-3 text-xl">
                    Head of Engineering
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/2 max-w-sm">
              <div className="h-full border border-grayColor-priceCardBorder rounded-3xl overflow-hidden shadow-md">
                <StaticImage
                  className="h-64 sm:h-72 w-full object-cover object-center"
                  src="../images/Kostas.png"
                />
                <div className="py-4 text-center">
                  <h3 className="title-font text-2xl font-medium text-gray-900 mb-3">
                    Kostas Pardalis
                  </h3>
                  <p className="leading-relaxed mb-3 text-xl">
                    Head of Product
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="max-w-6xl px-5 py-16 md:py-28 mx-auto ">
          <div className="flex flex-wrap w-full mb-0 md:mb-20 flex-col">
            <h2 className="text-3xl-3 sm:text-5xl font-bold mb-6">
              Advisors and Investors
            </h2>
          </div>
          <div className="flex flex-wrap -m-4">
            <div class="w-full md:w-1/3 mb-6 p-4">
              <div class="h-full text-center">
                <StaticImage
                  className="w-40 h-40 object-cover object-center rounded-full inline-block"
                  src="../images/Adam-Gross.png"
                />
                <h3 class="font-medium tracking-wider text-lg pt-10 pb-5">
                  Adam Gross
                </h3>
                <p class="text-lg">ex-CEO, Heroku</p>
              </div>
            </div>
            <div class="w-full md:w-1/3 mb-6 p-4">
              <div class="h-full text-center">
                <StaticImage
                  className="w-40 h-40 object-cover object-center rounded-full inline-block"
                  src="../images/Florian-Leibert.png"
                />
                <h2 class="font-medium tracking-wider text-lg pt-10 pb-5">
                  Florian Leibert
                </h2>
                <p class="text-lg">ex-CEO, Mesosphere</p>
              </div>
            </div>
            <div class="w-full md:w-1/3 mb-6 p-4">
              <div class="h-full text-center">
                <StaticImage
                  className="w-40 h-40 object-cover object-center rounded-full inline-block"
                  src="../images/Salil.png"
                />
                <h2 class="font-medium tracking-wider text-lg pt-10 pb-5">
                  Salil Deshpande
                </h2>
                <p class="text-lg">
                  General Partner,
                  <br />
                  Uncorrelated Ventures
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col sm:flex-row -m-4 mt-6 md:mt-32">
            <div class="w-full md:w-1/2 mb-6">
              <div class="h-full text-center">
                <StaticImage
                  className="w-32 h-32 mb-8 object-cover object-center inline-block"
                  src="../images/Captura.png"
                />
              </div>
            </div>
            <div class="w-full md:w-1/2 mb-6">
              <div class="h-full text-center">
                <StaticImage
                  className="w-32 h-32 mb-8 object-cover object-center inline-block"
                  src="../images/capital.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="py-16 px-4 pb-16 lg:py-24 mx-auto bg-hero-pattern-mobile-2 sm:bg-hero-pattern">
          <div className="w-full text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-xl-2 sm:text-2xl-2 text-grayColor-custom mt-4 mb-8">
              Help us make data engineers the heroes of their companies.
            </p>
            <p className="mt-16 md:mt-16 flex justify-center">
              <a
                className="bg-black-custom text-whiteColor-custom text-sm sm:text-lg py-4 px-4 sm:px-12 rounded-lg hover:bg-blueNew-custom  w-full sm:w-72"
                href="https://www.linkedin.com/company/rudderlabs/jobs/"
              >
                View Open Positions
              </a>
              {/* <a
                className="bg-black-custom text-whiteColor-custom text-sm sm:text-lg py-4 px-4 sm:px-12 rounded-lg hover:bg-blueNew-custom"
                href="https://www.linkedin.com/company/rudderlabs/jobs/"
              >
                View Open Positions
              </a> */}
            </p>
          </div>
        </div>
      </section>
      <section id="footer_section_for_demo">
        <MiddleBanner {...lv_middlebannersection[0]} />
      </section>
      {/* <section className="bg-primary text-white 100% md:py-20 ">
        <div className="max-w-6xl md:px-3 mx-auto">
          <div className="flex flex-wrap justify-items-center items-center sm:flex-row">
            <div className="flex items-start w-1/2 mt-6">
              <div className="mt-1">
                <StaticImage src="../images/Arrow.svg" alt="Get Started" />
              </div>
              <h3 className="text-4xl ml-8 md:text-5xl font-bold font-custom leading-tight max-w-xs">
                Get started today
              </h3>
            </div>
            <div className="w-1/2 mt-6 max-w-lg">
              <div className="align-middle text-lg leading-7 font-custom">
                <p>
                  Start building smarter customer data pipelines today with
                  RudderStack. Our solutions engineering team is here to help.
                </p>
                <div className="block md:flex pt-5">
                  <a
                    className="bg-white text-primary py-2 text-sm md:px-8 lg:px-8 px-2 text-center mr-4 rounded-lg md:mb-0 mb-4 md:flex block border leading-tight border-white font-custom btn-secondary-lg"
                    href=""
                  >
                    Sign up for free
                  </a>
                  <a
                    className="bg-black text-white py-2 text-sm md:px-8 lg:px-8 px-2 text-center mr-4 rounded-lg md:mb-0 mb-4 md:flex block border leading-tight border-white font-custom btn-primary-lg"
                    href=""
                  >
                    Get a demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  )
}

export default About
