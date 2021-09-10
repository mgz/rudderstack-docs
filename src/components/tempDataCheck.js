import React from "react"

/* tempJson{
  slug: "/home",
  title: "Home",
  url: "#home"
} */

/* function getSearchData(data) {
  console.log("Data", data)
  if (data.items === undefined) {
    tempJson["title"] = data.title
    tempJson["section"] = data.url
    console.log("Temp Arr", tempJson)
  } else {
    data.items.map((item, k) => {
      getSearchData(item)
    })
  }
  return tempArr
} */

function makeSectionUrl(str) {
  str = str.toLowerCase()
  str =
    "#" +
    str
      .replace("/", "")
      .replace("?", "")
      .replace(".", "")
      .replace(" ", "-")
      .replace("  ", "--")
  return str
}

let tempArr = [] //final data to be passed to Algolia
function getSearchData(data) {
  let elSlug = data.node.slug
  data.node.headings.map((i, k) => {
    let tempJson = {}
    tempJson["slug"] = elSlug + makeSectionUrl(i.value)
    tempJson["title"] = i.value
    tempArr.push(tempJson)
    console.log("Temp Json", tempArr)
    return tempArr
  })
}

const tempJsonData = [
  {
    node: {
      slug: "faqs",
      headings: [
        {
          value: "Installation and Setup",
        },
        {
          value: "RudderStack Server",
        },
        {
          value: "Config Generator",
        },
        {
          value: "Transformations",
        },
        {
          value: "RudderStack Cloud",
        },
        {
          value: "Integrations",
        },
        {
          value: "RudderStack Pro / Enterprise",
        },
        {
          value: "RudderStack Failover, Hardening and Security",
        },
        {
          value: "Retry Behavior",
        },
        {
          value: "Throttling Behavior",
        },
        {
          value: "Contact Us",
        },
      ],
      frontmatter: {
        title: "FAQs - RudderStack",
      },
    },
  },
  {
    node: {
      slug: "cloud-extract-sources/activecampaign",
      headings: [
        {
          value: "Getting Started",
        },
        {
          value: "FAQs",
        },
        {
          value: "Contact Us",
        },
      ],
      frontmatter: {
        title: "ActiveCampaign - RudderStack",
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
            let menuItem = getSearchData(i)
            return menuItem
          })
        )
      }
    >
      Click Here
    </button>
  )
}
