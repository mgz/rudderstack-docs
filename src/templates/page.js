import React, {useEffect, useState, useRef} from "react"
import { graphql } from "gatsby"
import loadable from "@loadable/component"
import { Helmet } from "react-helmet"
import Hero from "../components/hero"
import Tabs from "../components/tabs"
//import LeftRightImgCnt from "../components/left-right-image-content"
import LatestBlog from "../components/latest-blog"
import MiddleBanner from "../components/middle-banner"
//import RightSideHiglightedContent from "../components/rightSideHiglightedContent"
import FreeText from "../components/freeText"
import GraphQLErrorList from "../components/graphql-error-list"
import ThreeCardsWithTitleLeftAligned from "../components/threeCardsWithTitleLeftAligned"
import CenteredAlignedTitleWithYoutube from "../components/centeredAlignedTitleWithYoutube"

// import SEO from "../components/seo"
import Layout from "../components/layout"

// const Hero = loadable(() => import("../components/hero"))
// const Tabs = loadable(() => import("../components/tabs"))
const LeftRightImgCnt = loadable(() => import("../components/left-right-image-content"))
// const LatestBlog = loadable(() => import("../components/latest-blog"))
// const MiddleBanner = loadable(() => import("../components/middle-banner"))
const RightSideHiglightedContent = loadable(() => import("../components/rightSideHiglightedContent"))
// const FreeText = loadable(() => import("../components/freeText"))
// const GraphQLErrorList = loadable(() =>
//   import("../components/graphql-error-list")
// )
// const SEO = loadable(() => import("../components/seo"))
// const Layout = loadable(() => import("../components/layout"))

const OurLogo = loadable(() => import("../components/ourlogo"))
const Testimonial = loadable(() => import("../components/testimonial"))
/* const ThreeCardsWithTitleLeftAligned = loadable(() => import("../components/threeCardsWithTitleLeftAligned"))
const CenteredAlignedTitleWithYoutube = loadable(() => import("../components/CenteredAlignedTitleWithYoutube")) */

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityPage(id: { eq: $id }) {
      slug {
        current
      }
      title
    }
  }
`

let intersectionObserver;
let intersectionObserverOptions = {};
const subscribers = new WeakMap();

const handleIntersections = entries =>
  entries.forEach(entry => subscribers.get(entry.target).call(null, entry));

const getIntersectionObserver = () => {
  if (!intersectionObserver) {
    intersectionObserver = new IntersectionObserver(
      handleIntersections,
      intersectionObserverOptions
    );
  }

  return intersectionObserver;
};

const setIntersectionObserverOptions = options => {
  if (intersectionObserver) {
    return;
  }

  intersectionObserverOptions = options;
};

const unwatch = domNode => {
  intersectionObserver.unobserve(domNode);
  subscribers.delete(domNode);
};
const watch = (domNode, callback) => {
  if (!domNode || subscribers.has(domNode)) {
    return;
  }

  subscribers.set(domNode, callback);
  getIntersectionObserver().observe(domNode);

  // eslint-disable-next-line consistent-return
  return () => unwatch(domNode);
};

const getSubscribers = () => subscribers;

const VO = {
  getSubscribers,
  setIntersectionObserverOptions,
  unwatch,
  watch,
};

function useIsVisible(nodeRef) {
  const [isVisible, setVisible] = useState(false);

  function handleVisibilityChange({ isIntersecting }) {
    setVisible(isIntersecting);
  }

  useEffect(() => VO.watch(nodeRef.current, handleVisibilityChange), [nodeRef]);

  return isVisible;
}

function useHasBeenVisible(nodeRef) {
  const [isVisible, setVisible] = useState(false);

  function handleVisibilityChange({ isIntersecting }) {
    if (isIntersecting === true) {
      setVisible(isIntersecting);
    }
  }

  useEffect(() => VO.watch(nodeRef.current, handleVisibilityChange), [nodeRef]);

  return isVisible;
}

// The `threshold` variable sets what portion of the element needs to be
// visible before it fires. 0 = none, 1 = the entire thing. See
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
function useHasBeenPartlyVisible(nodeRef, threshold = 0.5) {
  const [isVisible, setVisible] = useState(false);

  function handleVisibilityChange({ isIntersecting }) {
    if (isIntersecting === true) {
      setVisible(isIntersecting);
    }
  }

  useEffect(() => {
    setIntersectionObserverOptions({ threshold });
    return VO.watch(nodeRef.current, handleVisibilityChange);
  }, [nodeRef, threshold]);

  return isVisible;
}


const Page = props => {
  const { data, errors } = props;

  const halfPage = useRef();
  const hasScrolled = useHasBeenPartlyVisible(halfPage, 0.1);

  if (errors) {
    return (
      <Layout location={props.location}>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  // useEffect(() => {
  //   function handleClick(status) {
  //     setIsOnline(status.isOnline);
  //   }
  //   document.

  //   // Specify how to clean up after this effect:
  //   return function cleanup() {

  //   };
  // })

  let l_section_info
  const page = data.page || data.route.page
  const content = (page._rawPagebuildersectionarray || [])
    .filter(c => !c.disabled)
    .map((c, i) => {
      let el = null
      switch (c._type) {
        // case "pricing":
        //   el = <LeftRightImgCnt key={c._key} {...c} />;
        //   break;
        // case "infoRows":
        //   el = <InfoRows key={c._key} {...c} />;
        //   break;
        case "herobanner":
          el = <Hero key={c._key} {...c} />
          break
        case "ourlogoblock":
          el = <OurLogo key={c._key} {...c} />
          break
        case "ref_section_ourlogos":
          l_section_info = data.section_our_logos.edges.find(
            kl => kl.node._id === c._ref
          )

          el = <OurLogo key={c._key} {...l_section_info.node._rawOurLogos} />
          break
        case "tabsection":
          el = <Tabs key={c._key} {...c} />
          break
        case "leftrightcontentimagesection":
          el = (
            <div className="bg-blueNew-midnight_v2 100% pt-32" key={c._key}>
              <LeftRightImgCnt applyGradientColorTheme={true} {...c} />
            </div>
          )
          break
        case "latestblogsection":
          el = <LatestBlog key={c._key} {...c} />
          break
        case "middlebannersection":
          el = <MiddleBanner key={c._key} {...c} />
          break
        case "ref_section_get_started":
          l_section_info = data.section_get_started.edges.find(
            kl => kl.node._id === c._ref
          )

          el = (
            <MiddleBanner
              key={c._key}
              {...l_section_info.node._rawGetStarted}
            />
          )
          break
        case "testimonialsection":
          el = (
            <Testimonial key={c._key} applyGradientColorTheme={true} {...c} />
          )
          break
        case "three_card_with_title":
          el = <ThreeCardsWithTitleLeftAligned key={c._key} {...c} />
          break
        case "centered_aligned_title_with_youtube":
          el = <CenteredAlignedTitleWithYoutube key={c._key} {...c} />
          break
        case "ref_section_testimonials":
          l_section_info = data.section_testimonials.edges.find(
            kl => kl.node._id === c._ref
          )

          el = (
            <Testimonial
              key={c._key}
              applyGradientColorTheme={false}
              {...l_section_info.node._rawTestimonials}
            />
          )
          break
        case "righthighlightedsection":
          el = <RightSideHiglightedContent key={c._key} {...c} />
          break
        case "freetextwithrightimage":
          el = <FreeText key={c._key} {...c} />
          break
        // case "uiComponentRef":
        //   switch (c.name) {
        //     case "topWave":
        //       el = <TopWave />;
        //       break;
        //     case "bottomWave":
        //       el = <BottomWave />;
        //       break;
        //     default:
        //       break;
        //   }
        //   break;
        default:
          el = null
      }
      return el
    })

  //   const gradient = {
  //     from: (site.primaryColor && site.primaryColor.hex) || "#d53369",
  //     to: (site.secondaryColor && site.secondaryColor.hex) || "#daae51"
  //   };

  //   const menuItems = page.navMenu && (page.navMenu.items || []);
  // const pageTitle = page.title

  return (
    <Layout location={props.location}>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta name="description" content={data.page.meta_desc} />

        <title>{data.page.meta_title || data.page.title}</title>
        <meta
          property="og:title"
          content={data.page.meta_title || data.page.title}
        />
        <meta
          property="twitter:title"
          content={data.page.meta_title || data.page.title}
        />
        <meta property="og:description" content={data.page.meta_desc} />

        <meta property="twitter:description" content={data.page.meta_desc} />
        {/* <meta property="og:type" content="article" /> */}
        <link rel="preload" href="./fonts/Normal/Basis Grotesque.woff" as="font" crossOrigin="anonymous" />
        <link rel="preload" href="./fonts/Medium/Basis Grotesque Medium.woff" as="font" crossOrigin="anonymous" />
        <link rel="preload" href="./fonts/Bold/Basis Grotesque Bold.woff" as="font" crossOrigin="anonymous" />
      </Helmet>

      {/* <SEO
        title={pageTitle}
        // description={site.description}
        bodyAttr={{
          class: "leading-normal tracking-normal text-white gradient",
        }}
      /> */}
      <div className="pt-0 font-custom">{content}</div>
    </Layout>
  )
}

export default Page
