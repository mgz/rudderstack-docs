import React from "react"
import NestedAccordion from "../NestedAccordion"

const Sidebar = ({ isMenuOpen }) => {
  return (
    <div className={`sidebar-nav-content pt-16 ${isMenuOpen ? "active" : ""}`}>
      <NestedAccordion />
    </div>
  )
}

export default Sidebar
