import React, { Component } from 'react'

class Decor extends Component {
  render () {
    return <ul className='smLinksB'>
      <li>
        <a href='https://www.linkedin.com/in/marekelly'target='_blank'>
          <i className='fa fa-linkedin-square fa-lg' aria-hidden='true' />
        </a>
      </li>
      <li>
        <a href='https://codepen.io/maresThere/'target='_blank'>
          <i className='fa fa-codepen fa-lg' aria-hidden='true' />
        </a>
      </li>
      <li>
        <a href='https://github.com/maresThere'target='_blank'>
          <i className='fa fa-github-square fa-lg' aria-hidden='true' />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/marekellymk/'target='_blank'>
          <i className='fa fa-instagram fa-lg' aria-hidden='true' /></a>
      </li>
      <li>
        <a href='https://twitter.com/mareKellyWebDev' target='_blank'>
          <i className='fa fa-twitter-square fa-lg' aria-hidden='true' /></a>
      </li>
    </ul>
  }
}

export default Decor
