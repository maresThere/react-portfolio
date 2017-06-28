import React, { Component } from 'react'
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
        <div className='starzContainer'>
          <figure className='star'>
            <figure className='star-top' />
            <figure className='star-bottom' />
          </figure>
          <figure className='star2'>
            <figure className='star-top' />
            <figure className='star-bottom' />
          </figure>
          <figure className='star3'>
            <figure className='star-top' />
            <figure className='star-bottom' />
          </figure>
        </div>
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
