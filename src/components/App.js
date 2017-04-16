import React, { Component } from 'react'
import Gitcall from './Gitcall'
import Nav from './Nav'
import Intro from './Intro'
import About from './About'

class App extends Component {
  state = {
    profile: [],
    name: [],
    location: [],
    bio: [],
    work: [],
    repoName: []
  }

  componentDidMount () {
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
          this.setState({
            work: data
          })
        })
  }

  render () {
    return <div className='wrapper'>
      <div id='color_layer' />
      <div className='bgImage' />
      <div className='mainContainer'>
        <Nav />
        <Intro profile={this.state.profile} name={this.state.name} bio={this.state.bio} />
        <a name='about' />
      </div>
      <About />
      <section className='myWork'>
        <Gitcall work={this.state.work} />
      </section>
    </div>
  }
}

export default App
