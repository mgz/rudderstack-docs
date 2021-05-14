import React, { Component } from "react"
import ReactDOMServer from 'react-dom/server'
import Page from "./page"
import Singleblog from "./content"
import Product from "./content"
import Demo from "../pages/request-demo"
import Thankyou from "../pages/request-demo/thank-you"

const sanityClient = require('@sanity/client')
const project_id = process.env.RS_SANITY_PROJECTID;
var component = '';

class PreviewTemplate extends Component {
  constructor() {
    super();
    this.state = { data: '' };
  }

  async componentDidMount(data) {
    const client = await sanityClient({
      projectId: project_id,
      dataset: process.env.RS_SANITY_DATASET,
      token: process.env.RS_SANITY_TOKEN, // or leave blank for unauthenticated usage
      useCdn: false,
    })

    const params = {id: this.props.pageid}
    const type = this.props.type;

    if (type === 'blog') {
      const query = '*[_id == $id]';
      component = "Singleblog";

      await client.fetch(query, params).then((blogs) => {
        blogs.forEach((blog) => {
          blog.blog = blog;
          this.setState({ data: blog });
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
          page.sanityThankyoupages = page;
          page.sanityThankyoupages._rawPagebuildersectionarray = page.pagebuildersectionarray;
          page.sanityFrontpageblock = this.props.frontblock.sanityFrontpageblock;
          this.setState({ data: page });
        })
      });
    }
    
    else if (type === 'product') {
      const query = '*[_id == $id]';
      component = "Product";

      await client.fetch(query, params).then((products) => {
        products.forEach((product) => {
          product.product = product;
          this.setState({ data: product });
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