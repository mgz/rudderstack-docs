/* import { graphql, useStaticQuery } from 'gatsby';
import { resolveLink } from '@rocketseat/gatsby-theme-docs-core/util/url';
import {includes, isArray, get} from "lodash-es";

export function useSidebar() {
  const data = useStaticQuery(graphql`
    {
      allSidebarItems {
        edges {
          node {            
            parentId
            elId
            label
            link
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
      ({ node: { label, link, elId, parentId, id } }) => {
        

        return {
          node: {
            id,
            label,
            link: resolveLink(link, basePath),
            elId,
            parentId
          },
        };
      },
    );

    return normalizedSidebar;
  }

  return edges;
}
 */
