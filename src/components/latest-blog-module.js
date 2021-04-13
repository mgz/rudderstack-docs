import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { format } from "date-fns";

const BlogModule = () => {
  const data = StaticQuery(graphql`
    {
      allSanityPost(sort: {fields: _createdAt}, limit: 3) {
        edges {
          node {
            id
            title
            slug {
              current
            }
            publishedAt
            mainImage {
              asset {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)
const latestblogs = data.allSanityPost.edges
  return (
    <>
    {
      latestblogs.map(
          (latestblog, i) => (
              <div key={i} className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                      <img src={latestblog.node.mainImage.asset.fluid.src} alt={latestblog.node.title} className="w-full" />
                      <div className="w-full text-lg font-bold pt-6 px-3">{latestblog.node.title}</div>
                  </div>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow px-3 p-6">
                      <div className="flex items-center justify-start">
                          <p className="text-postdate text-sm">{format(new Date(latestblog.node.publishedAt), "MMMM d, yyyy")}</p>
                      </div>
                  </div>
              </div>
          )
      )
    }   
    </>
  );
};
export default BlogModule;