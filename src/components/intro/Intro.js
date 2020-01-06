import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Menu from '../menu/Menu'
import mareKelly from '../../images/mareKelly.jpeg'
import background from '../../images/office.svg'
import './intro.scss'
import '../menu/menu.scss'
// Cover/home page - my picture

const sectionStyle = {
  // backgroundImage: `url(${background})`,
  // backgroundPosition: 'center',
  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat',
  // backgroundAttachment: 'fixed',
  // width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start'
  // position: 'absolute'

}

class Intro extends Component {
  render () {
    return (
      <div style={ sectionStyle }>
          <div className='introContainer'>
            <div className='introBox'>
              <div className='intro-headline'>
                <div className='hello'>
                  <h2>Hello. <span className='light'>Thank you for visiting.</span></h2>
                  <h1><span className='light'>I'm</span> {this.props.name}, <br/> <span className='light'>an aspiring</span> UX design unicorn</h1>
                </div>
              </div>
              <div className='ctas'>
              <div className='cta-1'>
              <NavLink to = '/about'> <img src={mareKelly} className='intro-icon' /></NavLink>
              <h2>About me</h2>
                <p>My background</p>
              </div>
              <div className='cta-2'>
              <NavLink to = '/UseCase'> <i className='fas fa-brain fa-3x' aria-hidden='true'></i></NavLink>
                <h2>Use Case</h2>
                <p> Here is an example of a project I recently developed and designed.</p>
              </div>
              <div className='cta-3'>
                <a href='https://codepen.io/maresThere/'target='_blank'><i className='fab fa-codepen fa-3x' aria-hidden='true' /></a>
                <h2>dev sandbox</h2>
                <p>I like to work on code here. </p>
              </div>
            </div>
          </div>
        </div>
        <img src={background} className='office-background' />
          <div className='yellow-line'></div>
      </div>
    )
  }
}
Intro.propTypes = {
  name: React.PropTypes.array,
  bio: React.PropTypes.array,
  profile: React.PropTypes.array
}

export default Intro
