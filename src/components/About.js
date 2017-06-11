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
          {/* <img src={glasses} className='glasses' /> */}
          <p>The Iron Yard coding bootcamp is my latest educational endevour. I took the Front End Engineering course. Twelve intense weeks of learning the latest front end technologies. I reaffirmed my love for CSS and responsive design at The Iron Yard.</p>
        </div>
        <div className='subAbout'>
          {/* <img src={theIronYardLogo} className='TIY' /> */}
          <p>A few things about me; I try to live life from a perspective of gratitude. When I am working, my goals are the goals of my employer. I want nothing more than to do a great job.</p>
        </div>
        <div className='subAbout'>
          {/* <img src={light} className='light' /> */}
          <p>For me, the ideal position offers the ability to grow my technical skillset. Working on a team where I can continually learn and be challenged to solve problems provides me motivation to excel.
          </p>
        </div>
        <div className='deviconContainer'>
          <i className='devicon devicon-html5-plain' />
          <i className='devicon devicon-css3-plain' />
          <i className='devicon devicon-react-original' />
          <i className='devicon devicon-javascript-plain' />
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
