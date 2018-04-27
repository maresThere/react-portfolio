import React, { Component } from 'react'
import WebWork from './WebWork'
import portfolio from '../workSamples'

class Work extends Component {
  render () {
    return (
      <div className='dark-gray-bg'>
        <ul className='light-gray-bg'>
          {portfolio.map(item => <WebWork key={item.name} details={item} />)}
        </ul>
      </div>
    )
  }
}

export default Work
