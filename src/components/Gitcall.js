import React, { Component } from 'react'

class Gitcall extends Component {
  render () {
    const links = this.props.work.map((repo, i) => {
      return <div className='project'>
        {/* <a className={`pic${i + 1}`} href={repo.html_url} key={i}>
          {repo.description}
        </a> */}
        <img src={`https://raw.githubusercontent.com/maresThere/${repo.name}/master/Kapture.gif`} className='Kapture' />
      </div>
    })
    return (<div className='projects'>
      <h2>- IRON YARD PROJECTS -</h2>
      <p>My education at The Iron Yard included building always working on improving css and more efficient code.</p>
      <ul className='myWork'>
        <li className='work'>{links[0]}</li>
        <li className='work'>{links[1]}</li>
        <li className='work'>{links[2]}</li>
      </ul>
    </div>
    )
  }
}

export default Gitcall
