import React, { Component } from 'react'

class Contact extends Component {
  render () {
    return <div className='contact'>
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
    </div>
  }
}

export default Contact
