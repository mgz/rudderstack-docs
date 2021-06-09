import React from "react"
import BlogModule from "./latest-blog-module"
import { StaticImage } from "gatsby-plugin-image"
import Link from "gatsby-link"

const LatestBlog = props => {
  const maintitle = props.maintitle
  const viewalltext = props.viewalltext
  const viewallpostslink = props.viewallpostslink
  const viewexternallink = props.viewexternallink
  return (
    <>
      <section className="bg-white pb-0">
        <div className="max-w-6xl px-4 md:px-3 mx-auto flex flex-wrap pt-3 pb-12">
          <h3 className="w-full my-2 text-4xl md:text-5xl text-primary font-bold leading-tight mb-8 md:mb-20 mt-6 md:mt-12">
            {maintitle}
          </h3>
          <BlogModule />
          <div className="w-full text-center items-center mt-10 md:mt-12">
            <p className="w-full my-2 text-black font-bold text-sm leading-tight text-center post-arrow right-image flex justify-center items-center ">
              <a
                href={viewallpostslink}
                class="font-bold leading-normal text-sm seeall-icon"
              >
                {(() => {
                  if (viewexternallink === true) {
                    return <a href={viewallpostslink}>{viewalltext}</a>
                  } else {
                    return <Link to={viewallpostslink}>{viewalltext}</Link>
                  }
                })()}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
export default LatestBlog
