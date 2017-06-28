import React, { Component } from 'react'
import Starz from './Starz'
import mareKelly from '../images/mareKelly.jpeg'

class Intro extends Component {
  render () {
    return (
      <div className='introContainer'>
        <h2 className='hello'>HELLO</h2>
        <div className='introBox'>
          <img src={mareKelly} />
          <div className='introText'>
            <h1>{this.props.name}</h1>
            <p>{this.props.bio}</p>
          </div>
        </div>
        <Starz />
      </div>
    )
  }
}
Intro.propTypes = {
  name: React.PropTypes.array,
  bio: React.PropTypes.array,
  profile: React.PropTypes.array
}

export default Intro
