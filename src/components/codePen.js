import React, { Component } from 'react'

class codePen extends Component {
  render () {
    return <div className='CSScontainer'>
      <div className='five animated infinite flash' />
      <div className='heart animated infinite pulse' />
      <div className='triContainer'>
        <div className='topTriangles'>
          <div className='one animated infinite fadeIn' />
          <div className='two animated infinite fadeIn' />
          <div className='three animated infinite fadeIn' />
        </div>
        <div className='bottomTriangles'>
          <div className='four' />
        </div>
      </div>
    </div>
  }
}

export default codePen
