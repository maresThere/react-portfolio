import React, { Component } from 'react'
import WebWork from './WebWork'
import portfolio from '../workSamples'
import currentWork from '../currentSamples'
import printWork from '../printSamples'
import PrintWork from './PrintWork'
class Work extends Component {
  render () {
    return (
      <div className='dark-gray-bg'>
        <h2 className='top-title'>Print Design &amp; Typesetting</h2>
        <div className='light-gray-bg print-row'>
          {printWork.map(item => <PrintWork key={item.name} details={item} />)}
        </div>
        <ul className='light-gray-bg'>
          <h2>Latest Professional Work</h2>
          <p>Production work in the Marketing department mainly consists of creating single landing pages. Styling and javascript are kept on the index page and the bootstrap cdn is linked to code responsively.</p>
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
