import React, { Component } from 'react'
import Codepen from "ts-react-codepen-embed";

import '../digital/digital.scss'

class CodepenEmbedded extends Component {
  render () {
    const { hash } = this.props.hash

    return (

      <li className='pen'>
      <Codepen className='codepen' hash={this.props.hash} user="maresThere" defaultTab="result" height="400"
      />
      </li>


    )
  }
}
export default CodepenEmbedded
