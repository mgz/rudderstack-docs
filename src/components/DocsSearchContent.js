/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React from "react"
 import NoResultImage from '../images/assets/noresultsearch.svg'

 const replaceStr = (str) => {
  let replaceText1 = '<ais-highlight-0000000000>',
      replaceText2 = '</ais-highlight-0000000000>';

  let replace1 = new RegExp(replaceText1, 'g'),
      replace2 = new RegExp(replaceText2, 'g');

  str = str.replace(replace1, "<em>").replace(replace2, "</em>");
  return str;
}

const truncateStr = (str) => {
  let hitIndex = str.indexOf("<em>");
  if(hitIndex === 0){
    str = str.substring(0, hitIndex + 100) + '...';
  }else if(str.trim() === ''){
    str = '';
  }else{
    str = '...' + str.substring(hitIndex - 10, hitIndex + 100) + '...';
  }
  return str;
}
 
 const DocsSearchContent = ({ hits, currentSearchText }) => {

   return (
    <div className="searchResultsWrapper">
        {hits.length === 0 || currentSearchText === '' ? (
          <div className="searchResultsEmpty">
            <img src={NoResultImage} alt="No Result" />
          </div>  
        ) : (
          <div className="searchResults">
            {
              hits.map((item, index) => {                
                let basePath = window.location.origin + '/docs/';
                let pageTitle = item.SectionTitle ? replaceStr(item._highlightResult.SectionTitle.value) : replaceStr(item._highlightResult.pageTitle.value);
                let sectionContent = item._highlightResult.sectionContent.value.trim() !== ""  ? truncateStr(replaceStr(item._highlightResult.sectionContent.value)) : '';
                  return (<div key={item.pageSlug + index} className="searchBlock">
                    <a href={item.sectionId !== "" ? basePath + item.pageSlug + '#' + item.sectionId : basePath + item.pageSlug}>
                      <p className="sectionTitle" dangerouslySetInnerHTML={{ __html: pageTitle }}></p>
                      <p className="description" dangerouslySetInnerHTML={{ __html: sectionContent}}></p>
                    </a>
                  </div>)
              })
            }
          </div>
        )}
        
    </div>
   )
 }
 export default DocsSearchContent
 