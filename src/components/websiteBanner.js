import React from "react"

const WebisteBanner = () => {
  return (
    <div className="font-custom w-full top-0 left-0 py-2 bg-seegreen z-40 sticky flex justify-between items-center px-4">
      <div></div>
      <div>
        Learn with RudderStack | Technical Session: Leveraging Data Design to 4X
        Leads and Dominate Search Results
        <a href="/" className="font-bold underline pl-2">
          Register Now
        </a>
      </div>
      <span className="cursor-pointer">X</span>
    </div>
  )
}

export default WebisteBanner
