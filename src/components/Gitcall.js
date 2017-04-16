import React, { Component } from 'react'

class Gitcall extends Component {
  render () {
    const links = this.props.work.map((repo, i) => {
      return <a className={`pic${i + 1}`} href={repo.html_url} key={i}>
        <img src={`https://raw.githubusercontent.com/maresThere/${repo.name}/master/screenshot.png`} />{repo.description}
      </a>
    })
    return (
      <div>
        {links}
      </div>  
    )
  }
}

export default Gitcall
