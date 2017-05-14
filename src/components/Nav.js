import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render () {
    return <ul className='navLinks'>
      <li className='navBtn'> <NavLink to='/Intro'>home</NavLink></li>
      <li className='navBtn'> <NavLink to='/about'>about</NavLink></li>
      <li className='navBtn'> <NavLink to='/work'>work</NavLink></li>
      <li className='navBtn'> <NavLink to='/Resume'>resume</NavLink></li>
    </ul>
  }
}

export default Nav
