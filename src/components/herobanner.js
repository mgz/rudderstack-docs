import React from "react"
//import PortableText from "./portableText";

function Herobanner({ title, date, author, image, blog }) {
  // console.log("blog", blog)
  return (
    <div className="mx-auto items-center">
      {/* Left col */}
      <div
        className="w-full justify-center items-start text-center relative object-cover flex bg-cover bg-no-repeat max-w-5xl mx-auto"
        style={{ backgroundImage: `url(${image.asset.url})` }}
      >
        <div className="py-10 lg:py-0 w-full custom-hero-banner blog-banner-overlay flex justify-center items-center">
          <div className="px-3 w-full leading-normal text-2xl object-center z-10 text-white-custom table-cell align-middle h-40">
            {/* <div className="text-sm leading-4">{date}</div> */}
            {/* <h1 className="pt-10 pb-8 md:text-6xl text-4xl md:max-w-4xl m-auto">
              {title}
            </h1>
            <div className="mt-3 text-sm font-bold">By {author}</div> */}
          </div>
        </div>
      </div>

      <div className="mx-auto lg:max-w-3xl  sm:max-w-2xl   md:mt-12 my-4 ">
        <p className="text-blueNew-midnight uppercase text-sm font-bold mx-4">
          {blog.blog_category}
        </p>
        <h1 className="py-4 md:text-5xl-2 text-3xl m-auto text-blueNew-midnight mx-4 lg:mx-0 md:mx-0">
          {title}
        </h1>

        {blog.blog_authors[0] && (
          <div className="flex items-center mx-auto  mb-4 sm:flex-row flex-col mt-4">
            <div className=" inline-flex items-center justify-center flex-shrink-0 mr-4">
              <img
                src={blog.blog_authors[0].author_image.asset.url}
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <div className="leading-4 text-lg font-bold mt-2 text-blueNew-midnight">
                {blog.blog_authors[0].author_name}
              </div>
              <div className="mt-2 text-sm text-grayColor-custom">
                {blog.blog_authors[0].author_position}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Herobanner
