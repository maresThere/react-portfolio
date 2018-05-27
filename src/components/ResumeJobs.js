import React, { Component } from 'react'

class ResumeJobs extends Component {
  render () {
    const { title, place, date, bullets } = this.props.details
    const bulletList = bullets.map((bullet) =>
      <li>{bullet}</li>
    )
    return (<div className='resume'>
      <h4>{title}</h4>
      <div className='placeDate'>
        <span className='place'>{place}</span><span className='date'>{date}</span>
      </div>
      <ul className='bullets'>
        {bulletList}
      </ul>
    </div>
    )
  }
}

export default ResumeJobs
