import React, { Component } from 'react'
import GitHub from '../images/GitHub.png'
import WebWork from './WebWork'
import codePen from './codePen'

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
      <codePen />
      <div className='pHeader topMar60'>
        <h2> REACT PROJECTS</h2>
        <p>The Iron Yard taught me how to program with React components. Each assignment was an opportunity to improve css skills and organize code more efficiently.</p>
      </div>
      <ul className='myWork'>
        <li className='work'>{links[0]}
        </li>
        <li className='work'>{links[1]}</li>
        <li className='work'>{links[2]}</li>
      </ul>
      <WebWork />
    </div>
    )
  }
}

export default Gitcall
