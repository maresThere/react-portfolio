import React, { Component } from 'react'
import WebWork from './WebWork'
import portfolio from '../workSamples'
import currentWork from '../currentSamples'

class Work extends Component {
  render () {
    return (
      <div className='dark-gray-bg'>
        <ul className='light-gray-bg'>
          <h2>Latest Professional Work</h2>
          <h4>Production work in the Marketing department mainly consists of creating single landing pages. styling and javascript are kept on the index page and the bootstrap cdn is linked for responsiveness.</h4>
          {currentWork.map(item => <WebWork key={item.name} details={item} />)}
        </ul>
        <ul className='light-gray-bg'>
          <h2>Personal Development &amp; Past Work</h2>
          {portfolio.map(item => <WebWork key={item.name} details={item} />)}
        </ul>
      </div>
    )
  }
}

export default Work
