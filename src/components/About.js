import React, { Component } from 'react'
import theIronYardLogo from '../images/theIronYardLogo.png'
import glasses from '../images/glasses.png'
import light from '../images/light.png'

class About extends Component {
  render () {
    return <div>
      {/* <div className='quote'>Do What You Believe.</div> */}
      <section className='aboutMe'>
        <p><img src={glasses} height='40px' width='80px' />I try to live on the grateful side of the street. Please don't attempt confirm that with my gym coach. Finding beauty in everything around me</p><p><img src={theIronYardLogo} height='70px' width='70px' />
        I am currently a Front End Development student at The Iron Yard in St. Petersburg, Florida. My completion date is June 2, 2017.</p>
        <p><img src={light} height='70px' width='78px' />Everyone wants visual appeal. Everyone wants function.</p>
      </section>
    </div>
  }
}

export default About
