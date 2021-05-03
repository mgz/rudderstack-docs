import React from "react"
import Accordion from "./accordion"
import Link from "gatsby-link"

function Faq(props) {
  return (

    <section class="bg-grayColor-BgGray py-10 pt-40 md:pt-44 relative font-custom">
      <div className="px-4 mx-auto">
        <div className="absolute md:w-full lg:w-4/5 -top-24 md:-top-16 px-5 md:px-0 faq-cta-box">
          <div
            className="py-8 text-center text-blueNew-custom font-bold border border-grayColor-priceCardBorder max-w-screen-lg m-auto faqcta rounded-xl shadow-xl faq-cta px-5 md:px-0">
            <p className="text-blueNew-custom text-2xl leading-8">Currently running Segment? </p>
            <Link to="/request-demo"
              className="block text-sm text-black-custom leading-sm font-bold mt-4 md:mt-5 lr-icon mx-auto mt-3 hover:text-blueNew-custom">
              Talk with one of our Segment Migration Specialists.
            </Link>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto flex flex-wrap m-auto">

        <div className="md:w-1/4 md:px-4">
          <h2 className="text-4xl font-bold mb-2">FAQ</h2>
          <h4 className="text-2xl font-bold pt-2 md:pt-4 mb-12 md:mb-0">How can we help you?</h4>
        </div>
        <div className="md:w-3/4 2xl:pr-44 xl:pr-28 lg:pr-28 mt-2">
          <Accordion
            title="Is your open-source code maintained and stable?"
            content='Yes, we actively contribute to our open-source code as you can see on our <a href="https://github.com/rudderlabs" class="text-blueNew-category hover:underline">GitHub</a> page. The core data processing layer is the same for both the Community and Enterprise edition. The Enterprise edition comes with some more advanced reporting & clustering features, but those are built on top of the data plane.'
            index={0}
          />
          <Accordion
            title="What support is available with the Community plan and Enterprise plan?"
            content='If you are on the Free plan, we have an active community on Slack where you can ask questions. <a href="https://resources.rudderstack.com/join-rudderstack-slack" class="text-blueNew-category hover:underline">Click here to join us</a>! If you are on the Pro plan, you’ll get a dedicated, private live chat support from our Customer Success team. If you are on the Enterprise plan, you will have a dedicated account manager.'
            index={1}
          />
          <Accordion
            title="Is it evil to collect user-data?"
            content="Collecting user data is always a tricky subject. On one hand, you want to improve the product experience which requires you to collect data on how the users are using the app but on the other hand, you want to respect their privacy.<br /><br />A good middle ground is to avoid collecting PII or user-identifiable data as much as possible and keeping checks and controls on how has to access that data. From the fact that they are using your app, your users probably expect that you are keeping some data about them and would even prefer to have the personalized experience they can get.<br /><br />However, what should absolutely be avoided is sharing that data with 3rd party vendors (likes of Google, Facebook and tens of other vendors) unless absolutely required. Your users put their trust in you, not them. The increasing array of privacy regulations like CCPA, GDPR are increasingly making it illegal to do so."
            index={2}
          />
          <Accordion
            title="Under what license is the open-source project released?"
            content='The open-source project is released under <a href="https://www.gnu.org/licenses/agpl-3.0.en.html" class="text-blueNew-category hover:underline">AGPLv3</a>.'
            index={3}
          />
          <Accordion
            title="How is RudderStack different from Segment?"
            content="We are warehouse-first and built for developers. Our goal is to help you build your customer data platform on top of your own data warehouse, not create additional data silos and run complex functions inside of a black box. That’s why we don’t persist any of your data.<br /><br />We’re API-first, meaning you can integrate features like schema governance into your existing development process (instead of dealing with a cumbersome UI).<br /><br />Last, but not least, we offer reasonable, volume-based pricing on events, not MTUs, meaning you can reach extreme scale (billions of events per month) without having to worry about incurring unreasonable costs."
            index={4}
          />
          <Accordion
            title="Who are the people associated with this project?"
            content='We are a team of engineers with years of background in data. The company has been funded by <a href="https://www.s28capital.com/" class="text-blueNew-category hover:underline">S28 Capital</a> (investors behind other popular open-source projects like Mattermost and Gravitational).'
            index={5}
          />
          <Accordion
            title="Weren't you guys on HackerNews?"
            content='Yes, we were. Here is the thread: <a href="https://news.ycombinator.com/item?id=21081756" class="text-blueNew-category hover:underline">https://news.ycombinator.com/item?id=21081756</a>.'
            index={6}
          />
          <Accordion
            title="How do we contact you?"
            content='You can email me, Soumyadeb, the founder of RudderStack, at <a href="mailto:soumyadeb@rudderstack.com" class="text-blueNew-category hover:underline">soumyadeb@rudderstack.com</a>. Alternatively, you can also get in touch with us on our <a href="https://resources.rudderstack.com/join-rudderstack-slack" class="text-blueNew-category hover:underline">Slack community</a>, or any of our social media platforms such as <a href="https://twitter.com/rudderstack" class="text-blueNew-category hover:underline">Twitter</a> or <a href="https://www.linkedin.com/company/rudderlabs" class="text-blueNew-category hover:underline">LinkedIn</a>.'
            index={7}
          />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Faq
