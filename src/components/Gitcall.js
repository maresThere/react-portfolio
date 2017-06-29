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
      <div className='CSScontainer topMar60'>
        <div className='five animated infinite flash' />
        <div className='heart animated infinite pulse' />
        <div className='triContainer'>
          <div className='topTriangles'>
            <div className='one animated infinite fadeIn' />
            <div className='two animated infinite fadeIn' />
            <div className='three animated infinite fadeIn' />
          </div>
          <div className='bottomTriangles'>
            <div className='four' />
          </div>
        </div>
      </div>
      <div className='pHeader'>
        <h2> REACT PROJECTS</h2>
        <p>The Iron Yard taught me how to program with React components. Each assignment was an opportunity to improve css skills and organize code more efficiently.</p>
      </div>
      <ul className='myWork'>
        <div className='ingredereader'>
          <h3 className='xyz'>ingredereader</h3>
        </div>
        <li className='work'>{links[0]}
        </li>
        <li className='work'>{links[1]}</li>
        <li className='work'>{links[2]}</li>
      </ul>
      <WebWork />
      <codePen />
    </div>
    )
  }
}

export default Gitcall
