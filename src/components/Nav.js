import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render () {
    return <ul className='navLinks'>

      <li className='navBtn grn'> <NavLink to='/Intro'>home</NavLink></li>
      <li className='navBtn grn'> <NavLink to='/about'>about</NavLink></li>
      <li className='navBtn grn'> <NavLink to='/work'>work</NavLink></li>
      <li className='navBtn grn'> <NavLink to='/Resume'>resume</NavLink></li>
    </ul>
  }
}

export default Nav
