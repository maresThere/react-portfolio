import React, { Component } from 'react'

class ResumeSchools extends Component {
  render () {
    const { degree, school, year } = this.props.details

    return (<div className='resume'>
      <h4>{degree}</h4>
      <div className='placeDate'>
        <span className='place'>{school}</span><span className='date'>{year}</span>
      </div>
    </div>
    )
  }
}

export default ResumeSchools
