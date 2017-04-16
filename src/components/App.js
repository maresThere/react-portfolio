import React, { Component } from 'react'
import Gitcall from './Gitcall'
import Nav from './Nav'
import Intro from './Intro'
import theIronYardLogo from '../images/theIronYardLogo.png'
import glasses from '../images/glasses.png'
import light from '../images/light.png'

class App extends Component {
  state = {
    profile: [],
    name: [],
    location: [],
    bio: [],
    repos: [],
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
        <Intro profile={this.state.profile} name={this.state.name} bio={this.state.bio} />
      </div>
      <section className='aboutMe'>
        <a name='about' />
        <p><img src={theIronYardLogo} height='70px' width='70px' />
        I am currently a Front End Development student at The Iron Yard in St. Petersburg, Florida. My completion date is June 2, 2017.</p> <p><img src={glasses} height='40px' width='80px' />My background is in Property Management where I became skilled in sales, marketing and business operations. The characteristics I will bring to my employer are a positive attitude and a willingness to help as well as learn from others.</p>
      <p><img src={light} height='70px' width='78px' />I enjoy design and development. Creating an application that is both delightfully functional and aesthetically pleasing is very exciting to me.</p>
      </section>
      <section className='myWork'>
        <Gitcall repos={this.state.repos} repoName={this.state.repoName} />
      </section>
    </div>
  }
}

export default App
