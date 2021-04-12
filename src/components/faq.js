import React from "react";
import Image from "./image"
import ReactDOM from "react-dom";
import Accordion from "./accordion";

function Faq(props) {
  const herobannerbutton = props.herobannerbutton
  return (
    
    <section class="bg-grayColor-BgGray py-10 pt-36 relative">
      <div className="absolute w-full -top-16 px-9">
          <div className="py-8 text-lg text-center text-blueNew-custom font-bold border border-grayColor-priceCardBorder max-w-screen-lg m-auto text-whiteColor-custom faqcta">
          <p className="text-blueNew-custom">Currently running Segment? </p>
          <a href="#" className="arrow-cta pl-7 text-xs	sm:text-sm text-black-custom font-bold inline-flex mt-3 relative">
              Talk with one of our Segment Migration Specialists.
            </a>
          </div>
      </div>
    <div className="container mx-auto flex flex-wrap max-w-screen-lg m-auto">
      
      <div className="md:w-1/4 px-4">
        <h2 className="text-4xl font-bold mb-2">FAQ</h2>
        <h4 className="text-2xl font-semibold pt-4">How can we<br></br> help you?</h4>
      </div>
      <div className="md:w-3/4 2xl:pr-44 xl:pr-28 lg:pr-28">
      <Accordion
        title="Is your open-source code maintained and stable?"
        content="Yes, we actively contribute to our open-source code as you can see on our GitHub page. The core data processing layer is the same for both the Community and Enterprise edition. The Enterprise edition comes with some more advanced reporting & clustering features, but those are built on top of the data plane."
      />
      <Accordion
        title="What support is available with the Community plan and Enterprise plan?"
        content="Yes, we actively contribute to our open-source code as you can see on our GitHub page. The core data processing layer is the same for both the Community and Enterprise edition. The Enterprise edition comes with some more advanced reporting & clustering features, but those are built on top of the data plane."
      />
      <Accordion
        title="Is it evil to collect user-data?"
        content="Yes, we actively contribute to our open-source code as you can see on our GitHub page. The core data processing layer is the same for both the Community and Enterprise edition. The Enterprise edition comes with some more advanced reporting & clustering features, but those are built on top of the data plane."
      />
      <Accordion
        title="Under what license is the open-source project released?"
        content="Yes, we actively contribute to our open-source code as you can see on our GitHub page. The core data processing layer is the same for both the Community and Enterprise edition. The Enterprise edition comes with some more advanced reporting & clustering features, but those are built on top of the data plane."
      />
      <Accordion
        title="How is RudderStack different from Segment?"
        content="Yes, we actively contribute to our open-source code as you can see on our GitHub page. The core data processing layer is the same for both the Community and Enterprise edition. The Enterprise edition comes with some more advanced reporting & clustering features, but those are built on top of the data plane."
      />
      <Accordion
        title="Who are the people associated with this project?"
        content="Yes, we actively contribute to our open-source code as you can see on our GitHub page. The core data processing layer is the same for both the Community and Enterprise edition. The Enterprise edition comes with some more advanced reporting & clustering features, but those are built on top of the data plane."
      />
      <Accordion
        title="Weren't you guys on HackerNews?"
        content="Yes, we actively contribute to our open-source code as you can see on our GitHub page. The core data processing layer is the same for both the Community and Enterprise edition. The Enterprise edition comes with some more advanced reporting & clustering features, but those are built on top of the data plane."
      />
      <Accordion
        title="How do we contact you?"
        content="Yes, we actively contribute to our open-source code as you can see on our GitHub page. The core data processing layer is the same for both the Community and Enterprise edition. The Enterprise edition comes with some more advanced reporting & clustering features, but those are built on top of the data plane."
      />
      
       </div>

    </div>
    </section>
  );
}
export default Faq;
