import React, { Component } from 'react'
import Gitcall from './Gitcall'
import Nav from './Nav'
import Intro from './Intro'

class App extends Component {
  state = {
    profile: [],
    name: [],
    location: [],
    bio: [],
    repos: [],
    repoName: []
  }

  // When this react component mounts
  componentDidMount () {
    // the URL to "get" todo items
    const user = 'https://api.github.com/users/maresThere'
    const assignments = 'https://api.github.com/users/maresThere/starred'
    window.fetch(user)
      .then(r => r.json())
      .then(data => {
        this.setState({
          profile: data.avatar_url,
          bio: data.bio,
          name: data.name
        })
        console.log(data)
      })
    window.fetch(assignments)
        .then(r => r.json())
        .then(data => {
          for (let i = 0; i < data.length; i++) {
            this.setState({
              repos: [...this.state.repos, data[i].html_url],
              repoName: [...this.state.repoName, data[i].description]
            })
          }
        })
  }

  render () {
    return <div className='wrapper'>
      <div id='color_layer' />
      <div className='bgImage' />
      <div className='mainContainer'>
        <Nav navTitle='subject1' />
        <Gitcall repos={this.state.repos} repoName={this.state.repoName} />

        <Intro profile={this.state.profile} name={this.state.name} bio={this.state.bio} />
      </div>
      <section className='aboutMe'>
        <p>More about me goes here</p>
      </section>
    </div>
  }
}

export default App
