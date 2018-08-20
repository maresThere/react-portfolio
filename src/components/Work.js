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

        <div className='light-gray-bg'>
          <h2 className='top-title'>Print Design &amp; Typesetting</h2>
          <div className='print-row'>
            {printWork.map(item => <PrintWork key={item.name} details={item} />)}
          </div>
          <span><a href='https://github.com/maresThere/Graphic-Design-Work/blob/master/printAdsAndTypesetting.jpg'>View more print examples</a></span>

        </div>

        <ul className='light-gray-bg'>
          <h2>Latest Professional Work</h2>
          <p className='bigger-font'>My work in the Marketing department includes coding & sending HTML emails, designing digital & print PDF files, editing copy & creating landing pages. </p>
          <p className='bigger-font'>
          Above are conference flyers I created with InDesign for 2 financial management software products. </p>
          <p className='bigger-font'> Below are pages I made with Bootstrap to keep it responsive. Each new page I get to design and develop is an opportunity to do better than the last one. </p>
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
