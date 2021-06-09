import React, { Component } from "react"
import ReactDOMServer from 'react-dom/server'
import Page from "./page"
import Singleblog from "./content"
import Product from "./products"
import Integration from "./integrationContent"
import Demo from "./request-demo"
import Thankyou from "./thankyou"
import videoContent from "./videoContent"

const sanityClient = require('@sanity/client')
const project_id = process.env.RS_SANITY_PROJECTID;
const dataset = process.env.RS_SANITY_DATASET;

var component = '';

class PreviewTemplate extends Component {
  constructor() {
    super();
    this.state = { data: '' };
  }

  async componentDidMount(data) {
    const client = await sanityClient({
      projectId: project_id,
      dataset: dataset,
      token: process.env.RS_SANITY_TOKEN, // or leave blank for unauthenticated usage
      useCdn: false,
    })

    const params = {id: this.props.pageid}
    const type = this.props.type;

    if (type === 'blog') {
      const query = '*[_id == $id]{...,blog_authors[]->,blog_image{asset->{url}}}';
      component = "Singleblog";

      await client.fetch(query, params).then((blogs) => {
        var blogdata = {};
        blogs.forEach((blog) => {
          blogdata.blog = blog;
          blogdata.sanityFrontpageblock = this.props.frontblock.sanityFrontpageblock;
          blogdata.blog._rawDescription = blog.description;
          blogdata.blog.blog_image.asset.fluid = {src: blogdata.blog.blog_image.asset.url};
          this.setState({ data: blogdata });
        })
      });
    }
    else if (type === 'schdemo') {
      const query = '*[_id == $id]'
      component = "Demo";

      await client.fetch(query, params).then((pages) => {
        pages.forEach((page) => {
          page.sanitySchdemo = page;
          page.sanitySchdemo._rawPagebuildersectionarray = page.pagebuildersectionarray;
          page.sanityFrontpageblock = this.props.frontblock.sanityFrontpageblock;
          this.setState({ data: page });
        })
      });
    }
    else if (type === 'thankyoupages') {
      const query = '*[_id == $id]'
      component = "Thankyou";

      await client.fetch(query, params).then((pages) => {
        pages.forEach((page) => {
          page.thankyou = page;
          page.thankyou._rawPagebuildersectionarray = page.pagebuildersectionarray;
          page.sanityFrontpageblock = this.props.frontblock.sanityFrontpageblock;
          this.setState({ data: page });
        })
      });
    }
    else if (type === 'frontpageblock') {
      const query = '*[_id == $id]';
      component = "Page";

      await client.fetch(query, params).then((pages) => {
        var pagedata = {};
        pages.forEach((page) => {
          pagedata.page = page;
          pagedata.page._rawPagebuildersectionarray = page.pagebuildersectionarray;
          this.setState({ data: pagedata });
        })
      });
    }
    else if (type === 'product_page') {
      const query = '*[_id == $id]';
      component = "Product";

      await client.fetch(query, params).then((products) => {
        var productdata = {};
        products.forEach((product) => {
          productdata.product = product;
          productdata.product._rawPagebuildersectionarray = product.pagebuildersectionarray;
          productdata.sanityFrontpageblock = this.props.frontblock.sanityFrontpageblock;
          this.setState({ data: productdata });
        })
      });
    }
    else if (type === 'integration') {
      const query = '*[_id == $id]{...,integrationLogo{asset->{url}},similarDestination{sd_integrations[]->}}';
      component = "Integration";

      await client.fetch(query, params).then((integrations) => {
        var intdata = {};
        integrations.forEach((integration) => {
          intdata.integration = integration;
          intdata.integration._rawFaqSection = integration.faqSection;
          intdata.integration._rawGetmoreoutofsection = integration.getmoreoutofsection;
          intdata.integration._rawHowtosetupsection = integration.howtosetupsection;
          intdata.integration._rawIntegrationHeroSection = integration.integrationHeroSection;
          intdata.integration._rawIntegrationLeftRightsection = integration.integrationLeftRightsection;
          intdata.integration._rawIntegrationLogo = integration.integrationLogo;
          intdata.integration._rawIntegrationLogo.node = {'url': integration.integrationLogo.asset.url};
          intdata.integration._rawIntegrationcategories = integration.integrationcategories;
          intdata.integration._rawIntegrationtypes = integration.integrationtypes;
          intdata.integration._rawSimilarDestination = integration.similarDestination;
          intdata.sanityFrontpageblock = this.props.frontblock.sanityFrontpageblock;
          this.setState({ data: intdata });
        })
      });
    }
    else if (type === 'videolibrary') {
      const query = '*[_id == $id]';
      component = "videocontent";

      await client.fetch(query, params).then((contents) => {
        var contentdata = {};
        contents.forEach((content) => {
          contentdata.videoLib = content;
          contentdata.videoLib._rawHeroSection = content.heroSection;
          contentdata.videoLib._rawTopicsToCoverSection = content.topicsToCoverSection;
          this.setState({ data: contentdata });
        })
      });
    }
  }

  componentDidUpdate() {}

  render() {

    if(this.state.data) {
    return (
      <>
        {component === 'Demo' &&
          <Demo data={this.state.data} />
        }
        {component === 'Thankyou' &&
          <Thankyou data={this.state.data} />
        }
        {component === 'Singleblog' &&
          <Singleblog data={this.state.data} />
        }
        {component === 'Product' &&
          <Product data={this.state.data} />
        }
        {component === 'Page' &&
          <Page data={this.state.data} />
        }
        {component === 'Integration' &&
          <Integration data={this.state.data} />
        }
        {component === 'videocontent' &&
          <videoContent data={this.state.data} />
        }
      </>
    );
  }
    else {
      return (
        <>
          Loading please wait...
        </>
      );
    }
  }
}

export default PreviewTemplate;