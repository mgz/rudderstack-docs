import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { format } from "date-fns"
import Link from "gatsby-link"
import { useLocation } from '@reach/router';

const categories = {
  technical: "Technical",
  industry_insights: "Industry Insights",
}

const BlogModule = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityBlog(sort: { fields: blogdate, order: DESC }, limit: 3) {
        edges {
          node {
            id
            title
            slug
            blog_category
            blog_authors {
              author_name
            }
            blog_image {
              asset {
                id
                url
              }
            }
          }
        }
      }
    }
  `)
  const location = useLocation();
  const latestblogs = data.allSanityBlog.edges

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
      {latestblogs.map((latestblog, i) => {
        let author_names = ""
        latestblog.node.blog_authors.forEach(row => {
          author_names += (author_names.length > 0 ? ", " : "By ") + row.author_name
        })
        return (
          <div className="border border-grayColor-priceCardBorder rounded-3xl shadow-md overflow-hidden h-full">
            <Link
              to={`/blog/` + latestblog.node.slug}
              className="block bg-white rounded-t rounded-b-none overflow-hidden shadow relative h-full"
            >
              <img
                src={latestblog.node.blog_image.asset.url}
                alt={latestblog.node.title}
                className="w-full"
              />
              {/* commented by Hari on 2021-04-23 */}
              {/* <div className="uppercase text-blueNew-category text-sm px-5 font-bold pt-6">{categories[latestblog.node.blog_category]}</div> */}
              <div className="uppercase text-purple text-sm font-bold px-5 pt-6">
                {latestblog.node.blog_category}
              </div>
              <div className="w-full text-lg md:text-2xl leading-6 md:leading-7 font-bold pt-2 pb-16 px-5 blog-title-wrap text-primary">
                {latestblog.node.title}
              </div>
              <div className="text-purple text-sm px-5 font-bold absolute bottom-6">
                {author_names}
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
export default BlogModule
