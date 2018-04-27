import React, { Component } from 'react'
class WebWork extends Component {
  render () {
    const { image, name, desc, link } = this.props.details
    return (<li className='item-container'>
      <div className='item-img'>
        <img src={image} />
      </div>
      <div className='item-title'>
        <h3>{name}</h3>
        <a href={link}>hi </a>
      </div>
      <div className='item-desc'>
        <p>{desc} </p>
      </div>
    </li>

    )
  }
}

export default WebWork
