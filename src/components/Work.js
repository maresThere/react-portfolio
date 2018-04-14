import React, { Component } from 'react'
import WebWork from './WebWork'
import workSamples from '../workSamples'

class Work extends Component {
  state = {
    work: []
  }

  loadWorkSamples = () => {
    this.setState({ work: workSamples })
  }

  render () {
    return (
      <div>
        <ul>
          {Object.keys(workSamples).map(key => <WebWork key={key} />)}
        </ul>
        <button onClick={this.loadWorkSamples}>load work</button>
      </div>
    )
  }
}

export default Work
