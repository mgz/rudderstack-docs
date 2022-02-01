import React from "react"
import Image from "./image"
import {StaticImage} from 'gatsby-plugin-image'
import '../css/about.css'

const Leadership = props => {
  return (
    <section className="leadership relative md:pt-32 pt-10 pb-16">
      <div className="mx-auto leadership-wrapper">
      <div className="flex relative flex-col-reverse lg:flex-row justify-between gap-4">
        <div className="left-group-image">
          <StaticImage
            src="../images/leadership-group1.png"
            alt="leadership-group1"
          />
        </div>
        <div className="right-side-content">
          <div className="content-title">
            <h2 className="text-4xl md:text-5xl font-bold text-darkScheme-textPrimary">Leadership & Investors</h2>
            <p className="text-darkScheme-grayText max-w-sm">We're an engineer-led team of data security, and marketing experts.</p>
          </div>
          <div className="investors-images my-8 leadership-img-block">
            <StaticImage
              src="../images/leadership-investors.png"
              alt="leadership-investors"
            />
          </div>
        </div>
      </div>
      <div className="flex lg:-mt-60 justify-center lg:justify-end leadership-img-block lg:ml-auto lg:mr-0 mx-auto team-img-desktop">
        <StaticImage
          src="../images/leadership-group2.png"
          alt="leadership-investors"
        />
      </div>
      <div className="flex justify-between mt-3 flex-col lg:flex-row team-section">
        <div className="middle-content">
          <div className="content-title">
            <h2 className="text-4xl md:text-5xl font-bold text-darkScheme-textPrimary">Team</h2>
            <p className="text-darkScheme-grayText max-w-sm">RudderStack team is a diverse and talented people from around the world</p>
          </div>
        </div>
        <div className="team-img-mobile">
          <StaticImage
            src="../images/leadership-group2.png"
            alt="leadership-investors"
          />
        </div>
        <div className="middle-right-images relative flex justify-end lg:flex-row flex-row-reverse">
          <div className="middle-right-image-wrapper middle-right-left mr-3 lg:mb-0 mb-3">
            <StaticImage
              src="../images/leadership-group3.webp"
              alt="leadership-investors"
            />
          </div>
          <div className="middle-right-image-wrapper middle-right-right lg:mb-0 mb-3">
            <StaticImage
              src="../images/leadership-group4.webp"
              alt="leadership-investors"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-start lg:justify-end">
        <div className="bottom-image-wrapper leadership-img-block">
          <StaticImage
            src="../images/leadership-group5.webp"
            alt="leadership-investors"
          />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Leadership
