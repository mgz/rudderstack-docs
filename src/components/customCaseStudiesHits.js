/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React from "react"
 import { connectHits } from "react-instantsearch-dom"
 
 import ThreeRowContentCaseStudies from "./threeRowContentCaseStudies"
 
 const VideoLibraryHits = ({ hits, onRefineHitsCountChange }) => {
   if (!hits.length) {
     onRefineHitsCountChange(0)
     return <> </>
   } else {
     onRefineHitsCountChange(hits.length)
   }
 
   return (
     <div>
       <ThreeRowContentCaseStudies hits={hits} />
     </div>
   )
 }
 
 const CustomCaseStudiesHits = connectHits(VideoLibraryHits)
 
 export default CustomCaseStudiesHits
 