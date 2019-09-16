import React, { Component } from 'react'
import digitalSamples from './digitalSamples'
// import DigitalWork from './DigitalWork'
import WorkItem from '../WorkItem'

import './digital.scss'

class Digital extends Component {
  render () {
    return (

      <div className='dark-gray-bg'>
          <h2 className='top-title'>Digital Design</h2>
          <div className='digital'>
            {digitalSamples.map(item => <WorkItem key={item.name} details={item} />)}
          </div>

      </div>
    )
  }
}

export default Digital
