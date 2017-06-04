import React, { Component } from 'react'
import theIronYardLogo from '../images/theIronYardLogo.png'
import glasses from '../images/glasses.png'
import light from '../images/light.png'
import me2017 from '../images/me2017.jpg'
import mebw2017 from '../images/mebw2017.jpg'

class About extends Component {
  render () {
    return <div className='aboutContainer'>
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
          <img src={light} className='light' /><p>Everyone wants visual appeal. Everyone wants function. I want to give people what they want. Give me content and I will make your dreams come true.</p>
        </div>
      </section>
      <section className='mypics'>
        <img src={mebw2017} className='mypics' />
        <img src={me2017} className='mypics' />
      </section>
    </div>
  }
}

export default About
