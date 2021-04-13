import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import $ from 'jquery'

class Horizontal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      horizontal: 10,
    }
  }

  handleChangeHorizontal = value => {
    this.setState({
      horizontal: value
    })
    if(value === 150){
      $('#text1').html('N/A');
      $('#text2').html('Volume Discount');
      $('#text3').html('');
      $('#text4').html('Request pricing');
    }
    else
    {
      $('#text1').html('$1800');
      $('#text2').html('$18000');
      $('#text3').html('16% discount');
      $('#text4').html('Sign up');
    }     
  };
  render () {
    const { horizontal} = this.state
    const formatm = value => value + 'm'

    return (
      <div className='slider custom-labels'>
        <Slider
          min={25}
          max={150}
          value={horizontal}
          format={formatm}
          onChange={this.handleChangeHorizontal}
        />
        <div className='value flex text-lg font-bold mt-6'>
          <span>25m</span><span className="ml-auto">150m+</span>
        </div>
        <div className="bg-blueNew-lighter lg:flex px-14 py-6 mt-16 text-center lg:text-left"> 
          <div className="lg:w-1/3  py-2 lg:py-0 text-grayColor-custom"><span className="font-bold text-black-custom">Monthly price: </span><span id="text1">$1800</span></div>
          <div className="lg:w-1/3 py-2 lg:py-0 text-grayColor-custom"><span className="font-bold text-black-custom text2">Monthly price: </span><span id="text2">$18000</span> <br/>
          <span className="lg:pl-28 italic" id="text3">16% discount</span></div>
          <div className="lg:w-1/3 py-2 lg:py-0 text-center"><button class="sm:text-sm text-xs font-bold py-2.5 px-8 rounded bg-black-custom text-whiteColor-custom" id="text4">Sign up</button></div>
        </div>
      </div>
    )
  }
}


export default Horizontal