import React, { Component } from 'react'
import tarpon from '../images/tarpon.jpg'
import thomaspromise from '../images/thomaspromise.jpg'
import mtdora from '../images/mtdora.jpg'

class WebWork extends Component {
  render () {
    return <div className='WebWork'>
      <h3>DESIGN & DEVELOPMENT</h3>
      <ul className='webContainer'>
        <li className='webEx'>
          <p className='title'>Tarpon Springs Chamber </p>
          <img src={tarpon} alt='Tarpon Springs Chamber site' />
        </li>
        <li className='webEx'>
          <p className='title'>Thomas Promise</p>
          <img src={thomaspromise} alt='Thomas Promise' />
        </li>
        <li className='webEx'>
          <p className='title'>Mount Dora Chamber Site</p>
          <img src={mtdora} alt='TMount Dora Chamber site' />
        </li>
      </ul>
    </div>
  }
}

export default WebWork
