import React, { Component } from 'react'
import maleDraft from '../../../public/images/print/maleDraft.jpg'
import poster from '../../../public/images/print/poster.jpg'
import naturalBeauty2 from '../../../public/images/print/naturalBeauty2.jpg'
import personaAd1 from '../../images/personaAd1.jpg'
import personaAd2 from '../../images/personaAd2.jpg'
import personaAd3 from '../../images/personaAd3.jpg'

import './print.scss'

class Print extends Component {
  render () {
    return (

      <div className='dark-gray-bg print'>
          <h2 className='top-title'>Print &amp; Composition</h2>
          <div className='print-images'>
          <div className='print-desc poster'>
            <div className='print-desc-text'>
              <h3>Gym Posters</h3>
              <div>
              <p>I was asked to make a few posters to place at a local gym near a retail store.</p>
              <p>Gym goers would look at these from a machine or walking by.</p>
              <p>A large, eye catching image and a short message that gym goers might respond to.</p>
              </div>
              <i className='fas fa-arrow-right fa-2x'  aria-hidden='true'></i>

            </div></div>
          <img src={maleDraft} className='poster'/>
          <img src={poster} className='poster'/>
          <img src={naturalBeauty2} className='poster'/>
          <div className='print-desc-short'>
            <div className='print-desc-text'>
              <h3>Campaign Ideas</h3>
              <div>
              <p>Visualizing the feeling of safety and security with our product.</p>
              <p>Different life stages and milestones.</p>
              </div>
              <i className='fas fa-arrow-right fa-2x'  aria-hidden='true'></i>
            </div>
          </div>
            <img src={personaAd1} className='half-page'/>
            <img src={personaAd2} className='half-page'/>
            <img src={personaAd3} className='half-page'/>
          </div>
      </div>
    )
  }
}

export default Print
