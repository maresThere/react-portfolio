import React, { Component } from 'react'
import mareKelly from '../images/mareKelly.jpeg'

class Intro extends Component {
  render () {
    return (
      <div className='introContainer bggg'>
        <div className='introBox'>
          <h2 className='hello'>HELLO</h2>
          <img src={mareKelly} />
          <div className='introText'>
            <h1>{this.props.name}</h1>
            <p>{this.props.bio}</p>
          </div>
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
