import React from "react"
import { useSidebar } from "../../../gatsby-theme-docs-core/hooks/useSidebar"
import { resolveLink } from "@rocketseat/gatsby-theme-docs-core/util/url"
import { get, find } from "lodash"
import Link from "gatsby-link"
import { jsonData } from "../../../../docsconfig/sidebar"
import { Accordion, Icon } from "semantic-ui-react"
import sidebarArrow from "../../../../images/sidebarArrow.svg"

function accordify(jsonData) {
  if (jsonData.length === 0) {
    return
  } else {
    for (let i = 0; i < jsonData.length; i++) {
      accordify(jsonData[i]["content"])

      if (jsonData[i]["content"].length !== 0) {
        jsonData[i]["content"] = {
          content: (
            <div>
              <Accordion.Accordion panels={jsonData[i]["content"]} />
            </div>
          ),
        }
      } else {
        jsonData[i]["content"] = {
          content: (
            <div>
              <Accordion.Title icon={sidebarArrow} />
            </div>
          ),
        }
      }
    }
  }
}

accordify(jsonData)

const Sidebar = () => {
  const sidebarData = useSidebar()
  console.log("Sidebar Data", sidebarData)

  return (
    <div className="sidebar-nav-content sticky pt-16 top-0 max-h-screen">
      <Accordion panels={jsonData} styled />
    </div>
  )
}

export default Sidebar
