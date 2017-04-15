import React, { Component } from 'react'

class Gitcall extends Component {

  render () {
    return <div>
      <div><a href={this.props.repos[0]}>{this.props.repoName[0]}</a></div>
      <div><a href={this.props.repos[1]}>assignments</a></div>
    </div>
  }
}

export default Gitcall
