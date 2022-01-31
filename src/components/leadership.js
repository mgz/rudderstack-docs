import React from "react"
import Image from "./image"
import {StaticImage} from 'gatsby-plugin-image'
import '../css/about.css'

const Leadership = props => {
  return (
    <section className="leadership relative pt-32 pb-16">
      <div className="flex relative flex-col-reverse lg:flex-row">
        <div className="left-group-image">
          <StaticImage
            src="../images/leadership-group1.webp"
            alt="leadership-group1"
          />
        </div>
        <div className="right-side-content">
          <div className="content-title">
            <h2 className="text-4xl md:text-5xl font-bold text-darkScheme-textPrimary">Leadership & Investors</h2>
            <p className="text-darkScheme-grayText max-w-sm">We're an engineer-led team of data security, and marketing experts.</p>
          </div>
          <div className="investors-images mt-8 leadership-img-block">
            <StaticImage
              src="../images/leadership-investors.png"
              alt="leadership-investors"
            />
          </div>
        </div>
      </div>
      <div className="flex -mt-60 justify-center  lg:justify-end leadership-img-block ml-auto">
        <StaticImage
          src="../images/leadership-group2.webp"
          alt="leadership-investors"
        />
      </div>
      <div className="flex justify-between mt-3 flex-col  lg:flex-row">
        <div className="middle-content">
          <div className="content-title">
            <h2 className="text-4xl md:text-5xl font-bold text-darkScheme-textPrimary">Team</h2>
            <p className="text-darkScheme-grayText max-w-sm">RudderStack team is a diverse and talented people from around the world</p>
          </div>
        </div>
        <div className="middle-right-images relative flex justify-end flex-col  lg:flex-row">
          <div className="middle-right-image-wrapper mr-3">
            <StaticImage
              src="../images/leadership-group3.webp"
              alt="leadership-investors"
            />
          </div>
          <div className="middle-right-image-wrapper ">
            <StaticImage
              src="../images/leadership-group4.webp"
              alt="leadership-investors"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <div className="bottom-image-wrapper xl:-mt-36 lg:-mt-32">
          <StaticImage
            src="../images/leadership-group5.webp"
            alt="leadership-investors"
          />
        </div>
      </div>
    </section>
  )
}

export default Leadership
