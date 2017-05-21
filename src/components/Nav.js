import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render () {
    return <ul className='navLinks'>
      <li className='navBtn'> <NavLink to='/Intro'>home</NavLink></li>
      <span className='decor'>&diams;</span>
      <li className='navBtn'> <NavLink to='/about'>about</NavLink></li>
      <span className='decor'>&diams;</span>
      <li className='navBtn'> <NavLink to='/work'>work</NavLink></li>
      <span className='decor'>&diams;</span>
      <li className='navBtn'> <NavLink to='/Resume'>resume</NavLink></li>
    </ul>
  }
}

export default Nav
