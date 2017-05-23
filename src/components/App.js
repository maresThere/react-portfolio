import React, { Component } from 'react'
import { BrowserRouter as Router,
Link,
Switch,
Route } from 'react-router-dom'
import Gitcall from './Gitcall'
import Nav from './Nav'
import Footer from './Footer'
import Intro from './Intro'
import About from './About'
import Resume from './Resume'
import Contact from './Contact'
import Decor from './Decor'

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
    return <Router>
      <div className='App'>
        <div id='color_layer' />
        <div className='bgImage' />
        <div className='mainContainer'>
          <Route exact path='/' render={(props) => {
            return <Intro {...props} profile={this.state.profile} name={this.state.name} bio={this.state.bio} />
          }} />
          <Switch>
            <Route path='/intro' render={(props) => {
              return <Intro {...props} profile={this.state.profile} name={this.state.name} bio={this.state.bio} />
            }} />
            <Route path='/about' component={About} />
            <Route path='/work' render={(props) => {
              return <Gitcall {...props} work={this.state.work} />
            }} />
            <Route path='/resume' component={Resume} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
        <Nav />
        <Footer />
        <Decor />
      </div>
    </Router>
  }
}

export default App
