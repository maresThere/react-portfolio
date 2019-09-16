import React, { Component } from 'react'
import CodepenEmbedded from "../web/WebSamples"
// import WebSamples from './WebSamples'

import './web.scss'

let hashes = ['qvgGNy','gELXjG', 'vPyaVx']

class Web extends Component {
  render () {
    return (

      <div className='dark-gray-bg'>
          <h2 className='top-title'>Web Design</h2>
          <ul className="pens">
          {hashes.map(hash => <CodepenEmbedded key={hash} hash={hash}/>)}

          </ul>


      </div>
    )
  }
}

export default Web
