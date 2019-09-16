import React, { Component } from 'react'
import printSamples from './printSamples'
import WorkItem from '../WorkItem'
import './print.scss'

class Print extends Component {
  render () {
    return (

      <div className='dark-gray-bg'>
          <h2 className='top-title'>Print Design &amp; Typesetting</h2>
          <div className='grid-container print'>
            {printSamples.map(item => <WorkItem key={item.name} details={item} />)}
          </div>
      </div>
    )
  }
}

export default Print
