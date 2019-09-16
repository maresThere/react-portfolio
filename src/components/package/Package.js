import React, { Component } from 'react'
import packageSamples from './packageSamples'
// import DigitalWork from './DigitalWork'
import WorkItem from '../WorkItem'

import './package.scss'

class Package extends Component {
  render () {
    return (

      <div className='dark-gray-bg'>
          <h2 className='top-title'>Package Design</h2>
          <div className='package'>
            {packageSamples.map(item => <WorkItem key={item.name} details={item} />)}
          </div>

      </div>
    )
  }
}

export default Package
