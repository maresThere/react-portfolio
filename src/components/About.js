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
          <p>A few things about me; I try to live life from a perspective of gratitude. Please don't attempt confirm that with my gym coach. There is beauty in everything around us. Pets are a gift.</p>
        </div>
        <div className='subAbout'>
          <img src={theIronYardLogo} className='TIY' />
          <p>The Iron Yard coding bootcamp is my latest educational endevour. I took the Front End Engineering course. Twelve intense weeks of learning the latest front end technologies.</p>
        </div>
        <div className='subAbout'>
          <img src={light} className='light' /><p>Everyone wants visual appeal. Everyone wants function. I want to give people what they want.</p>
        </div>
      </section>
    </div>
  }
}

export default About
