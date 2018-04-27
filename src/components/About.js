import React, { Component } from 'react'
// import theIronYardLogo from '../images/theIronYardLogo.png'
import me2017 from '../images/me2017.jpg'
import mebw2017 from '../images/mebw2017.jpg'

class About extends Component {
  render () {
    return <div className='dark-gray-bg'>
      <div className='aboutMe'>

        <div>
          <img src={mebw2017} />
        </div>

        <div className='subAbout'>
          <p><span className='bigger'>The Iron Yard</span> coding bootcamp is my latest educational endevour. I took the Front End Engineering course. Twelve intense weeks of learning the latest front end technologies. I reaffirmed my love for css and responsive design at The Iron Yard.</p>
        </div>

        <div className='subAbout'>
          <p><span className='bigger'>A few things about me;</span> Web Development is my 2nd career. I have a background in Property Management, where I became well versed in marketing and sales. Those skills come in handy with UI and UX.</p>
        </div>

        <div>
          <img src={me2017} className='mypics' />
        </div>

        <div className='subAbout'>
          <p><span className='bigger'>My ideal position</span> offers the ability to grow my technical skillset. Working on a team where I can continually learn and be challenged to solve problems provides me motivation to excel.</p>
        </div>
        <div className='deviconContainer'>
          <i className='devicon devicon-html5-plain' />
          <i className='devicon devicon-css3-plain' />
          <i className='devicon devicon-react-original' />
          <i className='devicon devicon-javascript-plain' />
        </div>
      </div>
    </div>
  }
}

export default About
