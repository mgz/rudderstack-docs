import React from "react"
import Layout from "../components/layout"
//import MiddleBanner from "../components/middle-banner"
import SEO from "../components/seo"
import PricingCards from "../components/Pricingcards"
import PricePlans from "../components/priceplan"
import Faq from "../components/faq"
import MigrationSpecialists from "../components/MigrationSpecialists"
import Horizontal from "../components/rangeslider"
import "../css/tailwind.css"
//import { StaticImage } from "gatsby-plugin-image"

const PricingPage = () => {

  const accordions = [
    {
      title: "Is your open-source code maintained and stable?",
      content: 'Yes, we actively contribute to our open-source code as you can see on our <a href="https://github.com/rudderlabs" class="text-blueNew-category hover:underline">GitHub</a> page. The core data processing layer is the same for both the Community and Enterprise edition. The Enterprise edition comes with some more advanced reporting & clustering features, but those are built on top of the data plane.'
    },
    {
      title: "What support is available with the Community plan and Enterprise plan?",
      content: 'If you are on the Free plan, we have an active community on Slack where you can ask questions. <a href="https://resources.rudderstack.com/join-rudderstack-slack" class="text-blueNew-category hover:underline">Click here to join us</a>! If you are on the Pro plan, you’ll get a dedicated, private live chat support from our Customer Success team. If you are on the Enterprise plan, you will have a dedicated account manager.'
    },
    {
      title: "Is it evil to collect user-data?",
      content: 'Collecting user data is always a tricky subject. On one hand, you want to improve the product experience which requires you to collect data on how the users are using the app but on the other hand, you want to respect their privacy.<br /><br />A good middle ground is to avoid collecting PII or user-identifiable data as much as possible and keeping checks and controls on how has to access that data. From the fact that they are using your app, your users probably expect that you are keeping some data about them and would even prefer to have the personalized experience they can get.<br /><br />However, what should absolutely be avoided is sharing that data with 3rd party vendors (likes of Google, Facebook and tens of other vendors) unless absolutely required. Your users put their trust in you, not them. The increasing array of privacy regulations like CCPA, GDPR are increasingly making it illegal to do so.'
    },
    {
      title: "Under what license is the open-source project released?",
      content: 'The open-source project is released under <a href="https://www.gnu.org/licenses/agpl-3.0.en.html" class="text-blueNew-category hover:underline">AGPLv3</a>.'
    },
    {
      title: "How is RudderStack different from Segment?",
      content: 'We are warehouse-first and built for developers. Our goal is to help you build your customer data platform on top of your own data warehouse, not create additional data silos and run complex functions inside of a black box. That’s why we don’t persist any of your data.<br /><br />We’re API-first, meaning you can integrate features like schema governance into your existing development process (instead of dealing with a cumbersome UI).<br /><br />Last, but not least, we offer reasonable, volume-based pricing on events, not MTUs, meaning you can reach extreme scale (billions of events per month) without having to worry about incurring unreasonable costs.'
    },
    {
      title: "Who are the people associated with this project?",
      content: 'We are a team of engineers with years of background in data. The company has been funded by <a href="https://www.s28capital.com/" class="text-blueNew-category hover:underline">S28 Capital</a> (investors behind other popular open-source projects like Mattermost and Gravitational).'
    },
    {
      title: "Weren't you guys on HackerNews?",
      content: 'Yes, we were. Here is the thread: <a href="https://news.ycombinator.com/item?id=21081756" class="text-blueNew-category hover:underline">https://news.ycombinator.com/item?id=21081756</a>.'
    },
    {
      title: "How do we contact you?",
      content: 'You can email me, Soumyadeb, the founder of RudderStack, at <a href="mailto:soumyadeb@rudderstack.com" class="text-blueNew-category hover:underline">soumyadeb@rudderstack.com</a>. Alternatively, you can also get in touch with us on our <a href="https://resources.rudderstack.com/join-rudderstack-slack" class="text-blueNew-category hover:underline">Slack community</a>, or any of our social media platforms such as <a href="https://twitter.com/rudderstack" class="text-blueNew-category hover:underline">Twitter</a> or <a href="https://www.linkedin.com/company/rudderlabs" class="text-blueNew-category hover:underline">LinkedIn</a>.'
    }
   
  ];


  return (
    <Layout>
      <SEO title="RudderStack Pricing Open-Source CDP" />
      <div className="pt-14 md:pt-16">
        <section className="overflow-x-hidden bg-gradient-to-t from-white-custom via-blueNew-lighter to-blueNew-lighter custom-bg custom-gradient">
          <div className="max-w-6xl px-4 md:px-3 mx-auto flex flex-wrap flex-col items-center text-center max-w-screen-lg">
            <h1 className="my-4 text-5xl md:text-6xl font-bold font-custom leading-snug">
              Choose Your RudderStack <br />
              Cloud Plan
            </h1>
          </div>
          <PricingCards />
        </section>
        <section className="bg-white-custom custom-bg font-custom">
          <div className="max-w-6xl px-4 md:px-3 mx-auto flex flex-wrap flex-col pt-6 md:pt-16">
            <div className="items-center text-center">
              <h2 className="mb-6 md:mb-4 md:mt-8 md:leading-snug text-4xl md:text-5xl font-bold">
                No MTUs and no cliffs, just volume
              </h2>
              <h6 className="text-xl-2">
                Our Pro pricing starts at $750 for 25m events and gets cheaper
                as you scale
              </h6>
            </div>
            <div className="text-left mx-auto w-5/6 md:w-3/4 font-custom my-10 md:my-12">
              <span className="text-grayColor-lighter text-xl md:text-3xl font-bold">
                Events
              </span>
              <Horizontal />
            </div>
          </div>
        </section>
        <PricePlans />
        <section className="bg-grayColor-BgGray py-10 pt-40 md:pt-44 relative font-custom">
          <MigrationSpecialists />
          <Faq accordions={accordions} />
        </section> 
      </div>
    </Layout>
  )
}

export default PricingPage
