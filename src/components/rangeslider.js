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
    console.log("initial value val = "+ value);
    if(value <=100){
      console.log("value val = "+ value);
      var monthlyprice = 900+(value - 25)*12;
      var anualprice = monthlyprice*10;
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      });
      $('#text1').html(formatter.format(monthlyprice));
      $('#text2').html(formatter.format(anualprice));
    }else{
      $('#text1').html('');
      $('#text2').html('Volume Discount');
      $('#text3').html('');
      $('#text4').html('Request pricing');
    }       
  };
  render () {
    const { horizontal} = this.state
    const formatm = value => value + 'm'
    const rangefmt = horizontal + 'm'

    return (
      <div className='slider custom-labels'>
        <Slider
          min={25}
          max={150}
          value={horizontal}
          format={formatm}
          handleLabel={rangefmt}
          onChange={this.handleChangeHorizontal}
        />
        <div className='value flex text-lg font-bold mt-6'>
          <span>25m</span><span className="ml-auto">150m+</span>
        </div>
        <div className="bg-blueNew-lighter lg:flex px-14 py-6 mt-16 text-center lg:text-left"> 
          <div className="lg:w-1/3  py-2 lg:py-0 text-grayColor-custom"><span className="font-bold text-black-custom">Monthly price: </span><span id="text1">$900</span></div>
          <div className="lg:w-1/3 py-2 lg:py-0 text-grayColor-custom"><span className="font-bold text-black-custom text2">Anual price: </span><span id="text2">$9000</span> <br/>
          <span className="lg:pl-28 italic" id="text3">16% discount</span></div>
          <div className="lg:w-1/3 py-2 lg:py-0 text-center"><button class="sm:text-sm text-xs font-bold py-2.5 px-8 rounded bg-black-custom text-whiteColor-custom" id="text4">Sign up</button></div>
        </div>
      </div>
    )
  }
}


export default Horizontal