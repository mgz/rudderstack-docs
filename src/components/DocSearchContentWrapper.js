import React from 'react'
import DocsSearchContent from './DocsSearchContent'
import { connectHits } from "react-instantsearch-dom"

const DocSearchHits = ({hits, onRefineHitsCountChange, currentSearchText }) => {
    if (!hits.length) {
        onRefineHitsCountChange(0)
      return <> </>
    } else {
        onRefineHitsCountChange(hits.length)
    }
  
    return (
        <div>
            <DocsSearchContent 
              hits={hits}
              currentSearchText={currentSearchText}
            />
        </div>
    )
  }

const DocSearchContentWrapper = connectHits(DocSearchHits)

export default DocSearchContentWrapper;