/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React from "react"
 import { connectHits } from "react-instantsearch-dom"
 import ThreeRowContentVideoLibrary from "./threeRowContentVideoLibrary"
 
 const VideoLibraryHits = ({ hits, onRefineHitsCountChange }) => {
   if (!hits.length) {
     onRefineHitsCountChange(0)
     return <> </>
   } else {
     onRefineHitsCountChange(hits.length)
   }
 
   return (
     <div>
       <ThreeRowContentVideoLibrary hits={hits} />
     </div>
   )
 }
 
 const CustomVideoLibraryHits = connectHits(VideoLibraryHits)
 
 export default CustomVideoLibraryHits
 