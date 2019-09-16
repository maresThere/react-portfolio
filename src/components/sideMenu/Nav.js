import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import ContactIcons from './ContactIcons'
import {navItems} from '../menu/navItems'

import  '../../styles/screen.scss'

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false
    }
  }

  handleMenuButtonClick = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }
  render() {
    console.warn('state', this.state)
    const {
      isMenuOpen
    } = this.state
    return ( <div>
      <button className = 'toggle-button'
      onClick = {
        this.handleMenuButtonClick
      } >
      <div className = {`bar1 ${isMenuOpen ? 'change' : ''}`
      }
      />
      <div className = {`bar2 ${isMenuOpen ? 'change' : ''}`
      }
      />
      <div className = {`bar3 ${isMenuOpen ? 'change' : ''}`
      }
      />
      </button>
      <nav className = {`${isMenuOpen ? 'show' : ''}`
      }>
      <ul className = 'navLinks' > {
        navItems.map(item => ( <li key={item.label}
          className = 'navBtn'>
          <NavLink to = {item.link}> {item.label} </NavLink>
          </li>
        ))
      } </ul>

      <div className = 'contact'>
        <h2> Marianne Kelly < /h2>
        <p className = 'card' >
        <i className = 'fa fa-phone' aria-hidden = 'true' />
        <a href = 'tel:904-442-3282' > 904-442-3282 </a>
        </p >
        <p className = 'card' >
        <i className = 'fa fa-paper-plane-o'
        aria-hidden = 'true' / >
        <a href = 'mailto:mareKellyJax@gmail.com' > mareKellyJax @gmail.com < /a></p >
        <ContactIcons / >
      </div>
      </nav>
      </div>

    )
  }
}

export default Nav
