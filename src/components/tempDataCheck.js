import React from "react"

/* function getSearchData(data) {
  console.log("Data", data)
  let tempArr = [] //final data to be passed to Algolia
  let tempJson = {}
  if (i.items == undefined) {
    tempJson["title"] = i.title
    tempJson["section"] = i.slug + i.url
    tempArr.push(tempJson)
  } else {
    i.items.map((item, k) => {
      let childTempJson = getSearchData(item)
      tempArr.push(childTempJson)
    })
  }
  return tempArr
} */

const tempJsonData = [
  {
    node: {
      slug: "glossary",
      tableOfContents: {
        items: [
          {
            url: "#glossary",
            title: "Glossary",
            items: [
              {
                url: "#general",
                title: "General",
                items: [
                  {
                    url: "#customer-data-platform",
                    title: "Customer Data Platform",
                  },
                  {
                    url: "#etl-extract-transform-load",
                    title: "ETL (Extract, Transform, Load)",
                  },
                  {
                    url: "#reverse-etl",
                    title: "Reverse-ETL",
                  },
                ],
              },
              {
                url: "#core-product",
                title: "Core Product",
                items: [
                  {
                    url: "#control-plane",
                    title: "Control Plane",
                  },
                  {
                    url: "#data-plane",
                    title: "Data Plane",
                  },
                  {
                    url: "#config-generator",
                    title: "Config Generator",
                  },
                ],
              },
              {
                url: "#features",
                title: "Features",
                items: [
                  {
                    url: "#event-stream",
                    title: "Event Stream",
                  },
                  {
                    url: "#cloud-extract",
                    title: "Cloud Extract",
                  },
                  {
                    url: "#warehouse-actions",
                    title: "Warehouse Actions",
                  },
                  {
                    url: "#transformations",
                    title: "Transformations",
                  },
                  {
                    url: "#live-events",
                    title: "Live Events",
                  },
                  {
                    url: "#data-governance",
                    title: "Data Governance",
                  },
                  {
                    url: "#user-suppression",
                    title: "User Suppression",
                  },
                ],
              },
              {
                url: "#integrations",
                title: "Integrations",
                items: [
                  {
                    url: "#connection-pipeline",
                    title: "Connection (Pipeline)",
                  },
                  {
                    url: "#connection-modes-cloud-mode--device-mode",
                    title: "Connection Modes (Cloud Mode & Device Mode)",
                  },
                  {
                    url: "#source",
                    title: "Source",
                  },
                  {
                    url: "#destination",
                    title: "Destination",
                  },
                  {
                    url: "#warehouse-destination",
                    title: "Warehouse Destination",
                  },
                ],
              },
              {
                url: "#other-terminology",
                title: "Other Terminology",
                items: [
                  {
                    url: "#api-specification",
                    title: "API Specification",
                  },
                  {
                    url: "#sdk",
                    title: "SDK",
                  },
                  {
                    url: "#warehouse-schema",
                    title: "Warehouse Schema",
                  },
                  {
                    url: "#workspace-token",
                    title: "Workspace Token",
                  },
                  {
                    url: "#write-key",
                    title: "Write Key",
                  },
                ],
              },
              {
                url: "#contact-us",
                title: "Contact Us",
              },
            ],
          },
        ],
      },
    },
  },
  {
    node: {
      slug: "",
      tableOfContents: {
        items: [
          {
            url: "#home",
            title: "Home",
            items: [
              {
                url: "#quick-start",
                title: "Quick Start",
              },
              {
                url: "#license",
                title: "License",
              },
              {
                url: "#contribute",
                title: "Contribute",
              },
              {
                url: "#follow-us",
                title: "Follow Us",
              },
            ],
          },
        ],
      },
    },
  },
]

export const TempButton = () => {
  return (
    <button
      onClick={() =>
        console.log(
          "on map ",
          tempJsonData.map((i, k) => {
            //let menuItem = getSearchData(i.node.tableOfContents)
          })
        )
      }
    >
      Click Here
    </button>
  )
}
