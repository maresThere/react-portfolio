import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render () {
    return <footer>
      <ul className='footerLinks'>
        <li className='footerBtn'> <NavLink to='/Intro'>home</NavLink></li>
        <li className='footerBtn'> <NavLink to='/about'>about</NavLink></li>
        <li className='footerBtn'> <NavLink to='/work'>work</NavLink></li>
        <li className='footerBtn'> <NavLink to='/Resume'>resume</NavLink></li>
      </ul>
    </footer>
  }
}

export default Footer
