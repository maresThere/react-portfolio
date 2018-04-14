import React, { Component } from 'react'
// import theIronYardLogo from '../images/theIronYardLogo.png'
import me2017 from '../images/me2017.jpg'
import mebw2017 from '../images/mebw2017.jpg'

class About extends Component {
  render () {
    return <div className='aboutContainer'>
      <ul className='aboutMe'>
        <li>
          <img src={mebw2017} className='mypics' />
        </li>
        <li className='subAbout border expand1'>
          <p><span className='bigger'>The Iron Yard</span> coding bootcamp is my latest educational endevour. I took the Front End Engineering course. Twelve intense weeks of learning the latest front end technologies. I reaffirmed my love for css and responsive design at The Iron Yard.</p>
        </li>
        <li className='subAbout rotateR expand2 border'>
          <div className='about2'>
            <p><span className='bigger'>A few things about me;</span> Web Development is my 2nd career. I have a background in Property Management, where I became well versed in marketing and sales. Those skills come in handy with UI and UX.</p>
          </div>
        </li>
        <li>
          <img src={me2017} className='mypics' />
        </li>
        <li className='subAbout border expand3'>
          <p><span className='bigger'>My ideal position</span> offers the ability to grow my technical skillset. Working on a team where I can continually learn and be challenged to solve problems provides me motivation to excel.
          </p>
        </li>
        <li className='deviconContainer'>
          <i className='devicon devicon-html5-plain' />
          <i className='devicon devicon-css3-plain' />
          <i className='devicon devicon-react-original' />
          <i className='devicon devicon-javascript-plain' />
        </li>
      </ul>
    </div>
  }
}

export default About
