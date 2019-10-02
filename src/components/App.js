import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Menu from './menu/Menu'
import Nav from './sideMenu/Nav'
import Intro from './intro/Intro'
import Resume from './resume/Resume'
import About from './about/About'
import Print from './print/Print'
import Web from './web/Web'
import Package from './package/Package'
import Emails from './emails/Emails'

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
      <Menu/>
      <Nav/>

          <Route exact path='/' render={(props) => {
            return <Intro {...props} profile={this.state.profile} name={this.state.name} bio={this.state.bio} />
          }} />
          <Switch>
            <Route path='/intro' render={(props) => {
              return <Intro {...props} profile={this.state.profile} name={this.state.name} bio={this.state.bio} />
            }} />
              <Route path='/about' component={About} />
            <Route path='/print' component={Print} />
            <Route path='/package' component={Package} />
            <Route path='/web' component={Web} />
            <Route path='/emails' component={Emails} />
            <Route path='/resume' component={Resume} />

          </Switch>

      </div>
    </Router>
  }
}

export default App
