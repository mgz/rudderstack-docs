import React, {useEffect} from "react"
import NestedAccordion from "../NestedAccordion"

const Sidebar = ({ isMenuOpen }) => {

  useEffect(() => {
    
  },[])

  return (
    <div className={`sidebar-nav-content py-16 ${isMenuOpen ? "active" : ""}`}>
      <NestedAccordion />
    </div>
  )
}

export default Sidebar
