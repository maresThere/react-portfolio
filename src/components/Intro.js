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

          <div className='deviconContainer'>
            <i className='devicon devicon-html5-plain' />
            <i className='devicon devicon-css3-plain' />
            <i className='devicon devicon-react-original' />
            <i className='devicon devicon-javascript-plain' />
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
