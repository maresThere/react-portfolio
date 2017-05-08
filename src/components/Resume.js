import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Resume extends Component {
  render () {
    return <div className='Resume'>
      <h2 className='heading'>Resume</h2>
      <div className='education'>
        <div className='edu1'>
          <h2>EDUCATION</h2>
          <h3>Front End Engineering</h3>
          <p>The Iron Yard Completion 6/2017</p>
          <p>HTML5, CSS3, JavaScript, React, MobX, Webpack, Open source technologies, terminal</p>
        </div>

        <div className='edu2'>
          <h3>Associate of Science, Web Development</h3>
          <p>Pasco Hernando State College Completion 7/2015</p>
          <p>networking,software & hardware fundamentals, web design & development</p>
        </div>

        <div className='edu3'>
          <h3>Coursework, Fundamentals of Interior Design</h3>
          <p>Florida State College 2013-2014</p>
        </div>

        <div className='edu4'>
          <h3>Bachelor of Science, Business Administration. Minor: Management Information Systems</h3>
          <p>University of South Florida Completion 5/1999</p>
        </div>

      </div>
    </div>
  }
}

export default Resume
