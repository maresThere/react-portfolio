import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render () {
    return <ul className='navLinks'>
      <li className='navBtn'> <NavLink to='/Intro'><span className='hov'>&diams; </span>home<span className='hov'> &diams;</span></NavLink></li>
      <li className='navBtn'> <NavLink to='/about'><span className='hov'>&diams; </span>about<span className='hov'>  &diams; </span></NavLink></li>
      <li className='navBtn'> <NavLink to='/work'><span className='hov'>&diams; </span>work<span className='hov'> &diams; </span></NavLink></li>
      <li className='navBtn'> <NavLink to='/Resume'><span className='hov'>&diams; </span>resume<span className='hov'> &diams; </span></NavLink></li>
      <li className='navBtn'> <NavLink to='/Contact'><span className='hov'>&diams; </span>contact<span className='hov'> &diams;</span></NavLink></li>
    </ul>
  }
}

export default Nav
