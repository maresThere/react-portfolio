import React, { Component } from 'react'
import me22017 from '../images/me22017.jpg'

class Contact extends Component {
  render () {
    return <div className='contactWrapper'>
      <img src={me22017} className='me22017' />
      <div className='contact'>
        <div className='wrapper'>
          <h2 className='cardName'>&diams; Marianne Kelly</h2>
          <p className='card'><i className='fa fa-phone' aria-hidden='true' />
            <span> phone:&nbsp; </span>
            <a href='tel:904-442-3282'> 904-442-3282</a></p>
          <p className='card'>
            <i className='fa fa-paper-plane-o' aria-hidden='true' />
            <span> email:&nbsp;</span>
            <a href='mailto:mareKellyJax@gmail.com'> mareKellyJax@gmail.com</a></p>
        </div>
        <ul className='smLinks'>
          <li><a href='https://www.linkedin.com/in/marianne-kelly-72990761/'><i className='fa fa-linkedin-square fa-lg' aria-hidden='true' /></a></li>
          <li><a href='https://www.instagram.com/marekellymk/'><i className='fa fa-instagram fa-lg' aria-hidden='true' /></a></li>
          <li><a href='https://github.com/maresThere'><i className='fa fa-github-square fa-lg' aria-hidden='true' /></a></li>
          <li><a href='https://twitter.com/mareKellyWebDev'><i className='fa fa-twitter-square fa-lg' aria-hidden='true' /></a></li>
        </ul>
      </div>
    </div>
  }
}

export default Contact
