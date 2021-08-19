import React, { useEffect } from "react"
import { Link } from "gatsby"

const Sidebarctablock = ({block_title, block_button, button_url}) => {
  return (
    <div className="sidebar-block">
      {block_title &&
      <div className="sidebar-block-title">{block_title}</div>
      }
      {block_button &&
      <Link to={button_url} className="block-button">{block_button}</Link>
      }
    </div>
  )
}

export default Sidebarctablock