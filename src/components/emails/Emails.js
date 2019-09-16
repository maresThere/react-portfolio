import React, { Component } from 'react'
import emailSamples from './emailSamples'
import WorkItem from '../WorkItem'
import './emails.scss'

class Emails extends Component {
  render () {
    return (

      <div className='dark-gray-bg'>
          <h2 className='top-title'>Email Design</h2>
          <div className='grid-container emails'>
            {emailSamples.map(item => <WorkItem key={item.name} details={item} />)}
          </div>
      </div>
    )
  }
}

export default Emails
