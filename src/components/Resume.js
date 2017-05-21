import React, { Component } from 'react'
import resumeImage from '../images/resumeImage.jpg'

class Resume extends Component {
  render () {
    return <div className='ResumeImg'>
      <img src={resumeImage} alt='' width='500px' />
    </div>
  }
}

export default Resume
