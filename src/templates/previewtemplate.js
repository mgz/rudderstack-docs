import React, { Component } from "react"
// import ReactDOMServer from "react-dom/server"
import Page from "./page"
import Singleblog from "./content"
import Product from "./products"
import Integration from "./integrationContent"
import Demo from "./request-demo"
import Thankyou from "./thankyou"
import VideoContent from "./videoContent"
import CaseStudyContent from "./caseStudyContent"
import PageContent from "./pageContent"
import VerticalLandingPageContent from "./verticalLandingPageContent"
import BeAHeroPageContent from "./beAHeroPageContent"
import SingleTutorial from "./singleTutorial"

const sanityClient = require("@sanity/client")
// const project_id = process.env.GATSBY_SANITY_PROJECTID
// const dataset = process.env.GATSBY_SANITY_DATASET

var component = ""

class PreviewTemplate extends Component {
  constructor() {
    super()
    this.state = { data: "" }
  }

  async componentDidMount(data) {
    const client = await sanityClient({
      projectId: process.env.GATSBY_SANITY_PROJECTID,
      dataset: process.env.GATSBY_SANITY_DATASET,
      apiVersion: "2021-03-25",
      token: process.env.GATSBY_SANITY_TOKEN, // or leave blank for unauthenticated usage
      useCdn: false,
    })

    const params = { id: this.props.pageid }
    const type = this.props.type
    // console.log("type & param, ", type, params)
    if (type === "blog") {
      const query =
        "*[_id == $id]{...,blog_authors[]->,blog_image{asset->{url}}}"
      component = "Singleblog"

      await client.fetch(query, params).then(blogs => {
        var blogdata = {}
        blogs.forEach(blog => {
          blogdata.blog = blog
          blogdata.section_get_started = this.props.frontblock.section_get_started
          blogdata.blog._rawDescription = blog.description
          blogdata.blog.blog_image.asset.url =
            blogdata.blog.blog_image.asset.url
          this.setState({ data: blogdata })
        })
      })
    } else if (type === "knowledge_base") {
      const query =
        "*[_id == $id]{...,blog_authors[]->,knowledge_base_image{asset->{url}}}"
      component = "SingleTutorial"

      await client.fetch(query, params).then(knowledge_bases => {
        var data = {}
        knowledge_bases.forEach(knowledge_base => {
          data.tutorial = knowledge_base
          data.section_get_started = this.props.frontblock.section_get_started
          data.tutorial._rawDescription = knowledge_base.description
          data.tutorial.knowledge_base_image.asset.url =
            data.tutorial.knowledge_base_image.asset.url
          this.setState({ data: data })
        })
      })
    } else if (type === "schdemo") {
      const query = "*[_id == $id]"
      component = "Demo"

      await client.fetch(query, params).then(pages => {
        pages.forEach(page => {
          page.sanitySchdemo = page
          page.sanitySchdemo._rawPagebuildersectionarray =
            page.pagebuildersectionarray

          page.section_our_logos = this.props.frontblock.section_our_logos
          page.section_testimonials = this.props.frontblock.section_testimonials
          page.section_get_started = this.props.frontblock.section_get_started
          this.setState({ data: page })
        })
      })
    } else if (type === "thankyoupages") {
      const query = "*[_id == $id]"
      component = "Thankyou"

      await client.fetch(query, params).then(pages => {
        pages.forEach(page => {
          page.thankyou = page
          page.thankyou._rawPagebuildersectionarray =
            page.pagebuildersectionarray
          page.section_get_started = this.props.frontblock.section_get_started
          // page.sanityFrontpageblock = this.props.frontblock.sanityFrontpageblock
          this.setState({ data: page })
        })
      })
    } else if (type === "frontpageblock" || type === "new_theme_front_page") {
      const query = "*[_id == $id]"
      component = "Page"

      await client.fetch(query, params).then(pages => {
        var pagedata = {}
        pages.forEach(page => {
          // console.log(page,'pages data')
          pagedata.page = page
          pagedata.page._rawPagebuildersectionarray =
            page.pagebuildersectionarray
          pagedata.section_our_logos = this.props.frontblock.section_our_logos
          pagedata.section_testimonials = this.props.frontblock.section_testimonials
          pagedata.section_get_started = this.props.frontblock.section_get_started
          this.setState({ data: pagedata })
        })
      })
    } else if (type === "product_page" || type === "new_theme_product_page") {
      const query = "*[_id == $id]"
      component = "Product"

      await client.fetch(query, params).then(products => {
        var productdata = {}
        products.forEach(product => {
          productdata.product = product
          productdata.product._rawPagebuildersectionarray =
            product.pagebuildersectionarray
          productdata.section_testimonials = this.props.frontblock.section_testimonials
          productdata.section_get_started = this.props.frontblock.section_get_started

          productdata.sanityFrontpageblock = this.props.frontblock.sanityFrontpageblock
          this.setState({ data: productdata })
        })
      })
    } else if (type === "integration") {
      const query =
        "*[_id == $id]{...,integrationLogo{asset->{url,_id}},similarDestination{sd_integrations[]->}}"
      component = "Integration"

      await client.fetch(query, params).then(integrations => {
        var intdata = {}
        integrations.forEach(integration => {
          intdata.integration = integration
          intdata.integration._rawFaqSection = integration.faqSection
          intdata.integration._rawGetmoreoutofsection =
            integration.getmoreoutofsection
          intdata.integration._rawHowtosetupsection =
            integration.howtosetupsection
          intdata.integration._rawIntegrationHeroSection =
            integration.integrationHeroSection
          intdata.integration._rawIntegrationLeftRightsection =
            integration.integrationLeftRightsection
          intdata.integration._rawIntegrationLogo = integration.integrationLogo
          intdata.integration._rawIntegrationLogo = {
            asset: {
              url: integration.integrationLogo.asset.url,
              _ref: integration.integrationLogo.asset._id,
            },
          }

          intdata.integration._rawSlug = integration.slug
          // intdata.integration._rawIntegrationcategories =
          //   integration.integrationcategories
          // intdata.integration._rawIntegrationtypes =
          //   integration.integrationtypes
          intdata.integration.similarDestination =
            integration.similarDestination

          intdata.section_testimonials = this.props.frontblock.section_testimonials
          intdata.section_get_started = this.props.frontblock.section_get_started

          intdata.sanityFrontpageblock = this.props.frontblock.sanityFrontpageblock

          let integrationSpecificAssets = this.props.frontblock.allGoogleSpreadsheetR1IntegrationSpecificAssets.edges.find(
            oo => oo.node.sanityRelationSlug === integration.slug.current
          )
          let comparableSlug = integrationSpecificAssets
            ? integrationSpecificAssets.node.integrationSlug
            : ""

          let redICDataSource =
            comparableSlug != ""
              ? this.props.frontblock.allGoogleSpreadsheetR1RedRudderstackIcData.edges.filter(
                  oo => oo.node.sourceSlug === comparableSlug
                )
              : ""
          let redICDataDestination =
            comparableSlug != ""
              ? this.props.frontblock.allGoogleSpreadsheetR1RedRudderstackIcData.edges.filter(
                  oo => oo.node.destinationSlug === comparableSlug
                )
              : ""
          let pageContext = {
            integrationSpecificAssets: integrationSpecificAssets,
            redICDataSource: redICDataSource || [],
            redICDataDestination: redICDataDestination || [],
            excludedIds: [],
          }

          this.setState({
            data: { ...intdata, tPageContext: pageContext },
            // pageContext,
          })
        })
      })
    } else if (type === "videolibrary") {
      const query = "*[_id == $id]"
      component = "videocontent"

      await client.fetch(query, params).then(contents => {
        // console.log('contents',contents)
        let contentdata = {}
        contents.forEach(content => {
          contentdata.videoLib = content
          contentdata.videoLib._rawHeroSection = content.heroSection
          contentdata.videoLib._rawListingImage = content.listing_image
          contentdata.videoLib._rawSpekers = content.spekers
          contentdata.videoLib._rawTopicsToCoverSection =
            content.topicsToCoverSection
          contentdata.videoLib._rawVideoLibraryCategoryType =
            content.videoLibraryCategoryType

          contentdata.sanityFrontpageblock = this.props.frontblock.sanityFrontpageblock
          contentdata.section_our_logos = this.props.frontblock.section_our_logos
          contentdata.allSanityBlogauthor = this.props.frontblock.allSanityBlogauthor
          contentdata.section_get_started = this.props.frontblock.section_get_started

          this.setState({ data: contentdata })
        })
      })
    } else if (type === "page") {
      const query = "*[_id == $id]"
      component = "pageContent"

      await client.fetch(query, params).then(contents => {
        let contentdata = {}
        contents.forEach(content => {
          contentdata.pagedata = content
          contentdata.pagedata._rawPagebuildersection =
            content.pagebuildersection
          contentdata.section_get_started = this.props.frontblock.section_get_started
          contentdata.section_testimonials = this.props.frontblock.section_testimonials
          contentdata.all_images = this.props.frontblock.all_images
          this.setState({ data: contentdata })
        })
      })
    } else if (type === "vertical_landing_page") {
      const query = "*[_id == $id]"
      component = "vertical_landing_page"

      await client.fetch(query, params).then(contents => {
        let contentdata = {}
        contents.forEach(content => {
          contentdata.pagedata = content
          contentdata.pagedata._rawPagebuildersection =
            content.pagebuildersection
          contentdata.section_our_logos = this.props.frontblock.section_our_logos
          contentdata.section_get_started = this.props.frontblock.section_get_started
          contentdata.section_testimonials = this.props.frontblock.section_testimonials
          contentdata.all_images = this.props.frontblock.all_images
          this.setState({ data: contentdata })
        })
      })
    } else if (
      type === "be_a_hero_page" ||
      type === "new_theme_be_a_hero_page"
    ) {
      const query = "*[_id == $id]"
      component = "be_a_hero_page"

      await client.fetch(query, params).then(contents => {
        let contentdata = {}
        contents.forEach(content => {
          contentdata.pagedata = content
          contentdata.pagedata._rawPagebuildersection =
            content.pagebuildersection
          contentdata.section_get_started = this.props.frontblock.section_get_started
          contentdata.section_testimonials = this.props.frontblock.section_testimonials
          contentdata.all_images = this.props.frontblock.all_images
          this.setState({ data: contentdata })
        })
      })
    } else if (type === "case_studies") {
      const query = "*[_id == $id]"
      component = "casestudiescontent"

      await client.fetch(query, params).then(contents => {
        // console.log('contents',contents)
        let contentdata = {}
        contents.forEach(content => {
          contentdata.casestudy = content

          contentdata.casestudy._rawPagebuildersectionarray =
            content.pagebuildersectionarray

          contentdata.sanityFrontpageblock = this.props.frontblock.sanityFrontpageblock
          contentdata.section_get_started = this.props.frontblock.section_get_started
          contentdata.section_our_logos = this.props.frontblock.section_our_logos
          contentdata.section_sign_up = this.props.frontblock.section_sign_up
          contentdata.section_testimonials = this.props.frontblock.section_testimonials

          this.setState({ data: contentdata })
        })
      })
    }
  }

  componentDidUpdate() {}

  render() {
    if (this.state.data) {
      return (
        <>
          {component === "Demo" && <Demo data={this.state.data} />}
          {component === "Thankyou" && <Thankyou data={this.state.data} />}
          {component === "Singleblog" && <Singleblog data={this.state.data} />}
          {component === "SingleTutorial" && (
            <SingleTutorial
              data={this.state.data}
              location={this.state.location}
            />
          )}
          {component === "Product" && <Product data={this.state.data} />}
          {component === "Page" && <Page data={this.state.data} />}
          {component === "Integration" && (
            <Integration
              data={this.state.data}
              location={this.state.location}
            />
          )}
          {component === "videocontent" && (
            <VideoContent
              data={this.state.data}
              location={this.state.location}
            />
          )}
          {component === "casestudiescontent" && (
            <CaseStudyContent
              data={this.state.data}
              location={this.state.location}
            />
          )}
          {component === "pageContent" && (
            <PageContent
              data={this.state.data}
              location={this.state.location}
            />
          )}
          {component === "vertical_landing_page" && (
            <VerticalLandingPageContent
              data={this.state.data}
              location={this.state.location}
            />
          )}
          {component === "be_a_hero_page" && (
            <BeAHeroPageContent
              data={this.state.data}
              location={this.state.location}
            />
          )}
        </>
      )
    } else {
      return <>Loading please wait...</>
    }
  }
}

export default PreviewTemplate
