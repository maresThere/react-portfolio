import React, { Component } from 'react'
import theIronYardLogo from '../images/theIronYardLogo.png'
import glasses from '../images/glasses.png'
import light from '../images/light.png'

class About extends Component {
  render () {
    return <div>
      <section className='aboutMe'>
        <div className='subAbout'>
          <img src={glasses} className='glasses' />
          <p>I try to live on the grateful side of the street. Please don't attempt confirm that with my gym coach. There is beauty in everything around us. Animals are heaven. </p>
        </div>
        <div className='subAbout'>
          <img src={theIronYardLogo} className='TIY' />
          <p>I am currently a Front End Development student at The Iron Yard in St. Petersburg, Florida. My completion date is June 2, 2017.</p>
        </div>
        <div className='subAbout'>
          <img src={light} className='light' /><p>Everyone wants visual appeal. Everyone wants function. I want to give people what they want.</p>
        </div>
      </section>
    </div>
  }
}

export default About
