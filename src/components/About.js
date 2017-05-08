import React, { Component } from 'react'
import theIronYardLogo from '../images/theIronYardLogo.png'
import glasses from '../images/glasses.png'
import light from '../images/light.png'

class About extends Component {
  render () {
    return <div>
      <div className='quote'>Do What You Believe.</div>
      <section className='aboutMe'>
        <p><img src={glasses} height='40px' width='80px' />My background is in Property Management where I became skilled in sales, marketing and business operations. The characteristics I will bring to my employer are a positive attitude and a willingness to help as well as learn from others.</p><p><img src={theIronYardLogo} height='70px' width='70px' />
        I am currently a Front End Development student at The Iron Yard in St. Petersburg, Florida. My completion date is June 2, 2017.</p>
        <p><img src={light} height='70px' width='78px' />I enjoy design and development. Creating an application that is both delightfully functional and aesthetically pleasing is very exciting to me.</p>
      </section>
    </div>
  }
}

export default About
