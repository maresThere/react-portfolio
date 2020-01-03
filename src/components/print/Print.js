import React, { Component } from 'react'
import maleDraft from '../../../public/images/print/maleDraft.jpg'
import poster from '../../../public/images/print/poster.jpg'
import naturalBeauty2 from '../../../public/images/print/naturalBeauty2.jpg'
import adWide400x259 from '../../../public/images/print/adWide400x259.jpg'
import pink105 from '../../../public/images/print/pink105.jpg'
import kyolicLong from '../../../public/images/print/kyolicLong.jpg'

import './print.scss'

class Print extends Component {
  render () {
    return (

      <div className='dark-gray-bg print'>
          <h2 className='top-title'>Print Design &amp; Typesetting</h2>
          <div className='print-images'>
          <div className='print-desc poster'>
            <div className='print-desc-text'>
              <h3>Gym Posters</h3>
              <div>
              <p>I was asked to make a few posters to place at a local gym near one of the retail locations.</p>
              <p>Gym goers would look at these from a machine or walking by.</p>
              <p>A large, eye catching image and a short message that gym goers might respond to.</p>
              </div>
              <i className='fas fa-arrow-right fa-2x'  aria-hidden='true'></i>

            </div></div>
          <img src={maleDraft} className='responsive poster'/>
          <img src={poster} className='responsive poster'/>
          <img src={naturalBeauty2} className='responsive poster'/>
          <div className='print-desc poster'>
          <div className='print-desc-text'>
            <h3>Garlic Supplements</h3>
            <div>
            <p>When I can do whatever I want, I go bright.</p>
            </div>
            <i className='fas fa-arrow-right fa-2x'  aria-hidden='true'></i>
          </div></div>
            <div className='print-small'>
              <img src={adWide400x259} className='responsive poster'/>
            <img src={pink105} className='responsive poster'/>
            </div>
          <img src={kyolicLong} className='responsive poster'/>
          </div>
      </div>
    )
  }
}

export default Print
