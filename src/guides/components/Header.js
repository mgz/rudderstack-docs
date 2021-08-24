import React from "react"
import BlockContent from '@sanity/block-content-to-react'

const Title = ({title,excerpt}) => {
  return (
    <header name="guides-header" className="bg-blueNew-midnight text-whiteColor-custom">
      <div className="max-w-6xl mx-auto py-20 px-4">
        <div className="row">
          <div className="subheading uppercase mb-6">By Rudderstack Team</div>
          <h1 className="font-bold">{title || "default-title"}</h1>
          <div className="excerpt">
            <BlockContent blocks={excerpt} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Title
