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

const rawBody =
  '---\r\n#slug: "/docs/get-started/installing-and-setting-up-rudderstack/docker"\r\ntitle: "Docker - RudderStack"\r\ndescription: Step-by-step instructions for setting up RudderStack on Docker.\r\n---\r\n\r\n# Docker\r\n\r\nThis guide lists the steps required to set up RudderStack in your Docker environment.\r\n\r\n<div class="successBlock">\r\n  <strong>\r\n    The Docker setup is the easiest and the fastest way to get up and running\r\n    with RudderStack.\r\n  </strong>\r\n</div>\r\n\r\n## Introduction\r\n\r\nInstalling and setting up RudderStack involves two key steps:\r\n\r\n- Control Plane setup\r\n- Data Plane setup\r\n\r\n<div class="infoBlock">\r\nRefer to the <a href="../rudderstack-architecture">RudderStack Architecture</a> to know more about the RudderStack Control Plane and Data Plane.\r\n\r\n</div>\r\n\r\n## Control Plane Setup\r\n\r\nThere are two ways you can set up the Control Plane. This section lists the steps involved in each of them.\r\n\r\n### **Use RudderStack-Hosted Control Plane**\r\n\r\n- Sign up and log into the [**RudderStack dashboard**](https://app.rudderlabs.com/signup).\r\n\r\n<div class="infoBlock">\r\n<strong>Why do I need to sign up for RudderStack?</strong>\r\n\r\nRudderStack\'s dashboard lets you easily set up your data pipelines by configuring your sources and destinations. It is fully hosted by RudderStack and is free for open-source users. You also get access to some important features like <a href="../../adding-a-new-user-transformation-in-rudderstack/">Transformations</a> and a <a href="../../user-guides/how-to-guides/live-destination-event-debugger">Live Events</a> tab.\r\n\r\n</div>\r\n\r\n- Note and copy your workspace **Token** from the top of the page, as shown below. This will be required for setting up the Data Plane.\r\n\r\n![](../../../images/assets/screen-shot-2021-07-01-at-5.36.15-pm332333331.png)\r\n![](../../../images/assets/screen-shot-2021-07-01-at-5.36.15-pm%20%283%29%20%283%29%20%282%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%281%29%20%282%29.png)\r\n\r\n<!--<img src="../../../images/assets/screen-shot-2021-07-01-at-5.36.15-pm%20%283%29%20%283%29%20%282%29%20%283%29%20%283%29%20%283%29%20%283%29%20%283%29%20%281%29%20%281%29.png" />-->\r\n\r\n<!--<img src="../../../images/assets/screen-shot-2021-07-01-at-5.36.15-pm332333331.png" />-->\r\n\r\n### Self-Host the Control Plane\r\n\r\n<div class="warningBlock">\r\nUse this option if you don\'t wish to sign up for RudderStack.\r\n\r\n</div>\r\n\r\nYou can self-host your own Control Plane using the open-source [**RudderStack Config Generator**](../../user-guides/how-to-guides/rudderstack-config-generator.md).\r\n\r\n<div class="dangerBlock">\r\nNote that the Control Plane set up using the RudderStack Config Generator lacks certain features like <a href="../../adding-a-new-user-transformation-in-rudderstack/">Transformations</a> and <a href="../../user-guides/how-to-guides/live-destination-event-debugger">Live Events</a> tab.\r\n\r\n</div>\r\n\r\n## Data Plane Setup\r\n\r\n### For **RudderStack-Hosted Control Plane**\r\n\r\nTo set up the RudderStack Data Plane in your Docker environment, follow these steps:\r\n\r\n- Download the `rudder-docker.yml` [**docker-compose**](https://raw.githubusercontent.com/rudderlabs/rudder-server/master/rudder-docker.yml) file.\r\n- Replace `<your_workspace_token>` in this file with the token you copied in the previous section.\r\n- Then, open your terminal, navigate to the directory where you want to install RudderStack, and run the following command:\r\n\r\n```text\r\ndocker-compose -f rudder-docker.yml up\r\n```\r\n\r\n- Once you have successfully followed the steps above, [**send test events**](sending-test-events.md) to verify the installation.\r\n\r\n### For **Self-Hosted Control Plane**\r\n\r\nIf you have self-hosted the Control Plane using the open-source Config Generator, follow [**these**](https://docs.rudderstack.com/get-started/config-generator#docker) instructions to set up the RudderStack Data Plane on Docker.\r\n\r\nOnce you have successfully followed the steps above, [**send test events**](sending-test-events.md) to verify the installation.\r\n\r\n## Contact Us\r\n\r\nIf you come across any issues while setting up RudderStack on Docker, you can [**contact us**](mailto:%20docs@rudderstack.com) \\***\\*or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) \\*\\***channel.\r\n'

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
