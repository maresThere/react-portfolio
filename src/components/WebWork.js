import React, { Component } from 'react'
import DINE from '../images/DINE.jpg'
class WebWork extends Component {
  render () {
    return (<li className='item-container'>
      <div className='item-img'>
        <img src={DINE} />
      </div>
      <div className='item-title'>
        <h3>Title</h3>
        <h4>url, github</h4>
      </div>
      <div className='item-desc'>
        <p>Dine is a component based restaurant menu. Graphcool API was used to create menu categories, food items and prices.</p>
      </div>

      {/* <h2>{this.props.details.name}</h2>
      <p>{this.props.details.desc} </p>
      <a>href='{this.props.details.link}' </a>
      <img src={this.props.details.image} /> */}
    </li>
    )
  }
}

export default WebWork
