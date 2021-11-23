import React, {useState, useRef, useEffect} from "react"
import PortableText from "./portableText"
import Image from "./image"


const AgreementAccordianCard = props => {
  /* console.log("AgreementAccordianCard", props) */
  const [setActive, setActiveState] = useState("")

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "")
  }

  useEffect(() => {
    if(props.open_defaul){
      setActiveState('active');
    }
  }, [props.open_defaul])

  return (
    <div className={`${props.width} accWrapper my-4`}>
      {!props.open_defaul && (
      <button
        className={`accordion pp-accordion pb-6 pl-4 flex ${setActive}`}
        onClick={toggleAccordion}
      >
        {props.accordian_icon && (<Image
          props={props.accordian_icon.asset._ref}
          classes={`w-8 h-auto pr-3`}
        />)}
        <p className="accordion__title text-xl font-bold">{props.accordian_title}</p>
      </button>)}
      {setActive === "active" && !props.open_defaul && (
        <div ref={content} className={`accordion__content ${!props.open_defaul ? 'accContentWrapper' : ''} pl-4`}>
          {props.isBlockContent && (
            <div className="accText frtxt-contnt font-medium text-lg">
              {props.accordian_title && (
                <div className="accWrapperText">
                  <Image
                    props={props.accordian_icon.asset._ref}
                    classes={`w-8 h-auto absolute`}
                  />
                  <span className="font-bold">{props.accordian_title}</span>
                </div>
              )}
            </div>
          )}
          {!props.isBlockContent && (
            <PortableText blocks={props.accordian_content} />
          )}
        </div>
      )}
      {setActive === "active" && props.open_defaul && (
        <div className="flex items-start">
          <button
            className={`hs-accordion relative ${setActive}`}
          >
            {props.open_defaul && (<Image
              props={props.accordian_icon.asset._ref}
              classes={`accImage`}
            />)}
          </button>
          <div ref={content} className={`accordion__content hsContentWrapper pl-4`}>
            <p className="accordion__title text-xl font-bold mb-3">{props.accordian_title}</p>
            {props.isBlockContent && (
              <div className="accText frtxt-contnt font-medium text-lg">
                {props.accordian_title && (
                  <div className="accWrapperText">
                    <span className="font-bold">{props.accordian_title}</span>
                  </div>
                )}
              </div>
            )}
            {!props.isBlockContent && (
              <PortableText blocks={props.accordian_content} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default AgreementAccordianCard
