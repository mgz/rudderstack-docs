import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "3PL Central to Snowflake",
    url: "/",
  },
  {
    id: 2,
    text: "AdRoll to Snowflake",
    url: "/about/",
  },
  {
    id: 3,
    text: "AfterShip to Snowflake",
    url: "/projects/",
  },
  {
    id: 4,
    text: "Amazon Aurora to Snowflake",
    url: "/blog/",
  },
  {
    id: 5,
    text: "Amazon DynamoDB to Snowflake",
    url: "/contact/",
  },
  {
    id: 6,
    text: "Amazon RDS to Snowflake",
    url: "/contact/",
  },
  {
    id: 7,
    text: "Amazon S3 CSV to Snowflake",
    url: "/contact/",
  },
  {
    id: 8,
    text: "Amplitude to Snowflake",
    url: "/contact/",
  },
  {
    id: 9,
    text: "AppsFlyer to Snowflake",
    url: "/contact/",
  },
  {
    id: 10,
    text: "Asana to Snowflake",
    url: "/contact/",
  },
  {
    id: 11,
    text: "Autopilot to Snowflake",
    url: "/contact/",
  },
  {
    id: 12,
    text: "BigCommerce to Snowflake",
    url: "/contact/",
  },
  {
    id: 13,
    text: "Bing Ads to Snowflake",
    url: "/contact/",
  },
  {
    id: 14,
    text: "Braintree Payments to Snowflake",
    url: "/contact/",
  },
  {
    id: 15,
    text: "Branch to Snowflake",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
