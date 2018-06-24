import React, { Component } from 'react'

class WebWork extends Component {
  render () {
    const { image, name, desc, git, link } = this.props.details

    return (<li className='item-container'>
      <div className='item-img'>
        <img src={image} />
      </div>
      <div className='item-title'>
        <h3>{name}</h3>
        <div className='item-icons'>
          <a href={git} className={git === '' ? 'blank' : 'git'} />
          <a href={link} className={link === '' ? 'blank' : 'globe'} />
        </div>
      </div>
      <div className='item-desc'>
        <p>{desc} </p>
      </div>
    </li>

    )
  }
}

export default WebWork
