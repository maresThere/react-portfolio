import React, { Component } from 'react'
import GitHub from '../images/GitHub.png'
class Gitcall extends Component {
  render () {
    const links = this.props.work.map((repo, i) => {
      return <div className='project'>
        <a className={`pic${i + 1}`} href={repo.html_url} key={i}>
          <img src={GitHub} className='github' />
        </a>
        <img src={`https://raw.githubusercontent.com/maresThere/${repo.name}/master/Kapture.gif`} className='Kapture' />
      </div>
    })
    return (<div className='projects'>
      <div className='pHeader'>
        <h2> IRON YARD PROJECTS</h2>
        <p>The Iron Yard taught me how to program with React components. Each assignment was an opportunity to improve css skills and organize code more efficiently.</p>
      </div>
      <ul className='myWork'>
        <li className='work'>{links[0]}
        </li>
        <li className='work'>{links[1]}</li>
        <li className='work'>{links[2]}</li>
      </ul>
      <div><img src={GitHub} /></div>
    </div>
    )
  }
}

export default Gitcall
