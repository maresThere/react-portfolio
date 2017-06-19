import React, { Component } from 'react'

class codePen extends Component {
  render () {
    return <div className='CSScontainer'>
      <div className='five animated infinite flash'> hello </div>
      <div className='heart animated infinite pulse'> llo </div>
      <div className='triContainer'>
        <div className='topTriangles'>
          <div className='one animated infinite fadeIn'> hello </div>
          <div className='two animated infinite fadeIn'> hello </div>
          <div className='three animated infinite fadeIn'> hello </div>
        </div>
        <div className='bottomTriangles'>
          <div className='four'> hello </div>
        </div>
      </div>
    </div>
  }
}

export default codePen
