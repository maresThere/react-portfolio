import React, { Component } from 'react'
import tarpon from '../images/tarpon.jpg'
import thomaspromise from '../images/thomaspromise.jpg'
import mtdora from '../images/mtdora.jpg'

class WebWork extends Component {
  render () {
    return <div className='WebWork'>

      <div className='pHeader'>
        <h2>DESIGN & DEVELOPMENT</h2>
      </div>
      <ul className='webContainer'>
        <li className='webEx'>
          <h3 className='title'>Tarpon Springs Chamber </h3>
          <img src={tarpon} alt='Tarpon Springs Chamber site' />
        </li>
        <li className='webEx'>
          <h3 className='title'>Thomas Promise</h3>
          <img src={thomaspromise} alt='Thomas Promise' />
        </li>
        <li className='webEx'>
          <h3 className='title'>Mount Dora Chamber</h3>
          <img src={mtdora} alt='TMount Dora Chamber site' />
        </li>
      </ul>
    </div>
  }
}

export default WebWork
