import React from "react"

const BlogNotFound = props => {
  return (
    <div className="w-full md:w-3/5 bg-whiteColor-custom flex flex-col justify-center rounded-lg mt-10 md:my-0">
      <h2 className="text-xl-2 md:text-3xl  font-bold py-9 px-2 text-center">
        <p className="text-grayColor-lighter">No results found matching</p>
        {props.SearchText}
      </h2>
    </div>
  )
}

export default BlogNotFound
