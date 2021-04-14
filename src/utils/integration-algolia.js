const integrationQuery = `{
    integrations: allSanityIntegration {
      edges {
        node {
          title
          _id
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
            title
          }
          integrationcategories {
            title
            description
            _id
          }
          integrationtypes {
            _id
            title
            description
          }
          signupSection {
            signupbtntext
            signupbtnlink
          }
          slug {
            _key
            _type
            current
          }
        }
      }
    }
    }`;

  function integrationToAlgoliaRecord({ node: { _id, title, integrationLogo,imageSection,integrationHeroSection,integrationLeftRightsection, slug, integrationtypes, signupSection, faqSection, integrationcategories } }) {

    let logoimage = '';
    if(integrationLogo) {
        logoimage = integrationLogo.asset.fluid.src;
    }
    return {
      objectID: _id,
      title,
      imageSection,
      integrationHeroSection,
      logoimage,
      integrationLeftRightsection,
      slug,
      integrationtypes,
      signupSection,
      faqSection,
      integrationcategories
    }
  }
  
  const queries = [
    {
      query: integrationQuery,
      transformer: ({ data }) => data.integrations.edges.map(integrationToAlgoliaRecord),
      indexName: process.env.RS_GATSBY_ALGOLIA_INTEGRATIONINDEX,
      settings: {},
    },
  ]
  module.exports = queries