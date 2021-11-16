import React from "react"
//import PortableText from "./portableText";

function Herobanner({ title, date, author, image, blog }) {
  // console.log("blog", blog)
  return (
    <div className="mx-auto items-center">
      {/* Left col */}
      <div
        className="relative flex max-w-5xl mx-auto">
          <img className="object-cover w-full" src={image.asset.url} alt="Rocketseat logo" style={{ width: 180 }} />
          
      </div>

      <div className="mx-auto blog-title-wrapper lg:max-w-5xl md:max-w-5xl sm:max-w-5xl md:mt-12 my-4">
        <p className="text-blueNew-midnight md:ml-0 lg:ml-0  uppercase text-sm font-bold">
          {blog.blog_category}
        </p>
        <h1 className="py-4 md:text-5xl-2 text-3xl m-auto text-blueNew-midnight lg:mx-0 md:mx-0">
          {title}
        </h1>

        {blog.blog_authors[0] && (
          <div className="flex items-center mx-auto gap-2  mb-4 sm:flex-row flex-col mt-4">
            <div className=" inline-flex items-center justify-center flex-shrink-0 lg:mr-4">
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
