const integrationQuery = `{
    integrations: allSanityIntegration {
          node {
            objectID: _id
            title
            integrationLogo {
              asset {
                fluid {
                  src
                }
              }
            }
            imageSection {
              imageTitle
              mainImage {
                asset {
                  fluid {
                    src
                  }
                }
              }
            }
            integrationHeroSection {
              herodescritpion {
                _key
                _type
                style
                list
                _rawChildren
              }
            }
            integrationLeftRightsection {
              rightSection {
                _key
                _type
                style
                list
                _rawChildren
              }
            }
            integrationtypes {
              id
              description
              title
            }
            signupSection {
              _key
              _type
              signupbtntext
              signupbtnlink
              _rawSignupBody
            }
            faqSection {
              faqcontent {
                faqTabTitle
                faqTabDescription {
                  _key
                  _type
                  style
                  list
                  _rawChildren
                }
              }
              faqtitle
              faqsubtitle
            }
            slug {
              _key
              _type
              current
            }
            integrationcategories {
              id
              title
              description
            }
          }
    }`;

//   function pageToAlgoliaRecord({ node: { _id, title, integrationLogo,imageSection,integrationHeroSection,integrationLeftRightsection, slug, integrationtypes, signupSection, faqSection, integrationcategories } }) {

//     let logoimage = '';
//     if(integrationLogo) {
//         logoimageimage = integrationLogo.asset.fluid;
//     }
//     return {
//       objectID: _id,
//       title,
//       imageSection,
//       integrationHeroSection,
//       logoimage,
//       integrationLeftRightsection,
//       slug,
//       integrationtypes,
//       signupSection,
//       faqSection,
//       integrationcategories
//     }
//   }
  
  const queries = [
    {
      query: integrationQuery,
      transformer: ({ data }) => data.integrations.nodes, // optional
      //transformer: ({ data }) => data.allSanityIntegration.edges.map(pageToAlgoliaRecord),
      indexName: 'dev_gatsby_integration',
      settings: {},
    },
  ]
  
  module.exports = queries