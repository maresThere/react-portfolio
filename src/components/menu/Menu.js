import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { navItems } from './navItems'

import menu from './menu.scss'
import ToggleButton from '../../styles/ToggleButton.scss'

class Menu extends Component {

    render () {
      return (

      <div className='top-menu'>
      <ul  className='menu'>
        {navItems.map(item => (
          <li key={item.label} className=''>
            <NavLink to={item.link}>{item.label}</NavLink>
          </li>
          ))}
          </ul>
          </div>
    )
  }
}

export default Menu
