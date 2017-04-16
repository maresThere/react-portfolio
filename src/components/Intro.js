import React, { Component } from 'react'

class Intro extends Component {

  render () {
    return (
      <div className='introBox'>
        <img src={this.props.profile} />
        <div className='introText'>
          <h1>{this.props.name}</h1>
          <p>{this.props.bio}</p>
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
