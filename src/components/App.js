import React, { Component } from 'react'
import { BrowserRouter as Router,
Switch,
Route } from 'react-router-dom'
import Nav from './Nav'
import Intro from './Intro'
import About from './About'
import Resume from './Resume'
import Contact from './Contact'
import Work from './Work'

class App extends Component {
  state = {
    name: [],
    bio: []
  }

  componentDidMount () {
    const user = 'https://api.github.com/users/maresThere'
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
  }

  render () {
    return <Router>
      <div className='App'>
        <Nav />
        <div className='mainContainer'>
          <Route exact path='/' render={(props) => {
            return <Intro {...props} profile={this.state.profile} name={this.state.name} bio={this.state.bio} />
          }} />
          <Switch>
            <Route path='/intro' render={(props) => {
              return <Intro {...props} profile={this.state.profile} name={this.state.name} bio={this.state.bio} />
            }} />
            <Route path='/about' component={About} />
            <Route path='/work' component={Work} />
            <Route path='/resume' component={Resume} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  }
}

export default App
