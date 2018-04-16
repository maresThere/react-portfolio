import React, { Component } from 'react'
import WebWork from './WebWork'
import portfolio from '../workSamples'

class Work extends Component {
  state = {
    work: []
  }

  componentDidMount = () => {
    this.setState({ work: portfolio })
  }

  loadWorkSamples = () => {
    this.setState({ work: portfolio })
  }

  render () {
    return (
      <div className='dark-gray-bg'>
        <ul className='light-gray-bg'>
          {Object.keys(portfolio).map(key => <WebWork key={key} details={this.state.work[key]} />)}
        </ul>
        {/* <button onClick={this.loadWorkSamples}>load work</button> */}
      </div>
    )
  }
}

export default Work
