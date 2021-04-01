import React from "react";
import { graphql } from "gatsby";

import Hero from "../components/hero";
import OurLogo from "../components/ourlogo";
// import InfoRows from "../components/InfoRows";
// import CTAColumns from "../components/cta-columns";
// import CTA from "../components/cta";
// import Pricing from "../components/pricing";
// import { TopWave, BottomWave } from "../components/wave";

import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../components/layout";

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityPage(id: { eq: $id }) {
      slug {
        current
      }
      title
    }
  }
`;

const Page = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

//   if (!site) {
//     throw new Error(
//       'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
//     );
//   }

  const page = data.page || data.route.page;
  const content = (page._rawPagebuildersectionarray || [])
    .filter(c => !c.disabled)
    .map((c, i) => {
      let el = null;
      console.log(c)
      switch (c._type) {
        // case "pricing":
        //   el = <Pricing key={c._key} {...c} />;
        //   break;
        // case "infoRows":
        //   el = <InfoRows key={c._key} {...c} />;
        //   break;
        case "herobanner":
          el = <Hero key={c._key} {...c} />;
          break;
        case "ourlogoblock":
          el = <OurLogo key={c._key} {...c} />;
          console.log("test: ",el)
          break;
        // case "ctaPlug":
        //   el = <CTA key={c._key} {...c} />;
        //   break;
        // case "uiComponentRef":
        //   switch (c.name) {
        //     case "topWave":
        //       el = <TopWave />;
        //       break;
        //     case "bottomWave":
        //       el = <BottomWave />;
        //       break;
        //     default:
        //       break;
        //   }
        //   break;
        default:
          el = null;
      }
      return el;
    });

//   const gradient = {
//     from: (site.primaryColor && site.primaryColor.hex) || "#d53369",
//     to: (site.secondaryColor && site.secondaryColor.hex) || "#daae51"
//   };

//   const menuItems = page.navMenu && (page.navMenu.items || []);
  const pageTitle = data.title && !data.route.useSiteTitle && page.title;

  return (
    <Layout >
      <SEO
        title={pageTitle}
        // description={site.description}
        bodyAttr={{
          class: "leading-normal tracking-normal text-white gradient"
        }}
      />
      <div className="pt-24">{content}</div>
    </Layout>
  );
};

export default Page;