import { graphql, useStaticQuery } from 'gatsby';
import { resolveLink } from '@rocketseat/gatsby-theme-docs-core/util/url';
import {includes, isArray, get} from "lodash-es";

export function useSidebar() {
  const data = useStaticQuery(graphql`
    {
      allSidebarItems {
        edges {
            node {
              label
              link
              items {
                label
                link
                items {
                  link
                  label
                }
              }
            id
            }
        }
      }
      site {
        siteMetadata {
          basePath
        }
      }
    }
  `);

  const { basePath } = data.site.siteMetadata;

  const {
    allSidebarItems: { edges },
  } = data;

  if (basePath) {
    const normalizedSidebar = edges.map(
      ({ node: { label, link, items, id } }) => {
        let nestedLabel = '', nestedLink = '', nestedItems = [];
        if(isArray(items)){
           items.map((item, key) => ({
             nestedItems: includes(item, "items") && isArray(get(item, "items")) ? get(item, "items") : [],
             label: item.label,
             link: resolveLink(item.link, basePath),
             nestedLabel: get(item, "items").map((i,k) => (i.label)),
             nestedLink: get(item, "items").map((i,k) => (resolveLink(i.link, basePath)))
           }));
        }

        /* if (Array.isArray(items)) {
          items = items.map((item) => ({
            label: item.label,
            link: resolveLink(item.link, basePath),
          }));
        } */

        return {
          node: {
            id,
            label,
            nestedLabel,
            items,
            nestedItems,
            link: resolveLink(link, basePath),
            nestedLink: resolveLink(nestedLink, basePath)
          },
        };
      },
    );

    return normalizedSidebar;
  }

  return edges;
}
