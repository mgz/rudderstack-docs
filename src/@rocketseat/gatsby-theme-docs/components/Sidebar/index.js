import React from "react"
import { useSidebar } from "../../../gatsby-theme-docs-core/hooks/useSidebar"
import { resolveLink } from "@rocketseat/gatsby-theme-docs-core/util/url"
import { get, find } from "lodash"
import Link from "gatsby-link"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const generateAccordion = (data, parentId, label, link) => {
  return parentId === find(data, "elId") ? (
    <AccordionItemPanel>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>{label}</AccordionItemButton>
          </AccordionItemHeading>
        </AccordionItem>
      </Accordion>
    </AccordionItemPanel>
  ) : (
    generateAccordion()
  )
}

const Sidebar = () => {
  const sidebarData = useSidebar()
  console.log("Sidebar Data", sidebarData)

  return (
    <div className="sidebar-nav-content sticky pt-16 top-0 max-h-screen">
      {sidebarData
        .filter(ff => ff.node.parentId === 0)
        .map((i, k) => {
          return (
            <Accordion key={i.node.id} allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Link to={i.node.link}>{i.node.label}</Link>
                  </AccordionItemButton>
                </AccordionItemHeading>
                {generateAccordion(
                  sidebarData,
                  i.node.parentId,
                  i.node.label,
                  i.node.link
                )}
                {/* {sidebarData
                  .filter(row => row.node.parentId === i.node.elId)
                  .map((iRow, idx) => {
                    return (
                      <AccordionItemPanel key={idx}>
                        {generateAccordion(
                          iRow.parentId,
                          iRow.elId,
                          iRow.label,
                          iRow.link
                        )}
                      </AccordionItemPanel>
                    )
                  })} */}

                {/* {i.node.elId !== null && (<AccordionItemPanel>
                                    {console.log('Parent Obj', find(sidebarData, (o) => o.elId == i.node.parentId))}
                                </AccordionItemPanel>)} */}
              </AccordionItem>
            </Accordion>
          )
        })}
    </div>
  )
}

export default Sidebar
