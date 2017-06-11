import React, { Component } from 'react'
import tarpon from '../images/tarpon.jpg'
import thomaspromise from '../images/thomaspromise.jpg'
import mtdora from '../images/mtdora.jpg'

class WebWork extends Component {
  render () {
    return <div className='WebWork'>

      <div className='pHeader'>
        <h2>DESIGN & DEVELOPMENT</h2>
        <p>A few projects where worked on design and development.</p>
      </div>
      <ul className='webContainer'>
        <li className='webEx'>
          <h3 className='title'>Tarpon Springs Chamber </h3>
          <a href='http://tarponspringschamber.com/'target='_blank'><img src={tarpon} alt='Tarpon Springs Chamber site' /></a>
        </li>
        <li className='webEx'>
          <h3 className='title'>Thomas Promise</h3>
          <a href='http://www.thethomaspromise.org/'target='_blank'><img src={thomaspromise} alt='Thomas Promise' /></a>
        </li>
        <li className='webEx'>
          <h3 className='title'>Mount Dora Chamber</h3>
          <a href='https://mountdora.com/'target='_blank'><img src={mtdora} alt='Mount Dora Chamber site' /></a>
        </li>
      </ul>
    </div>
  }
}

export default WebWork
