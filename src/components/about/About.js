import React, { Component } from 'react'
import hector from '../../images/hector.jpg'
import river from '../../images/river.jpg'
import mabel from '../../images/mabel.jpg'
import pumpkin from '../../images/pumpkin.jpg'
import team from '../../images/team.png'
import process from '../../images/process.png'
import enterprise from '../../images/enterprise.png'
import manager from '../../images/manager.png'
import './about.scss'

class About extends Component {
  render () {
    return (
    <div className='main'>
      <header>

        <div className='header-content'>
          <h4>A History of Guiding the Customer Experience</h4>
          <p>My previous career involved spotting and solving problems everyday. As a Manager, everyone was a customer. It was important to balance the goals of the owners and the needs of the renters. </p>
          <h4>A Tireless Search for the Right Fit</h4>
          <p>I left the Property Management industry to find a career that would satisfy my love for design, creativity, and technology. I began with obtaining an A.S. degree in Web Development which gave me an understanding of a broad field.</p>
          <p>From there I did graphic and web design internship at a small agency. Then a retail chain and did graphic design and marketing. Then a coding bootcamp, and then a digital production role in the marketing department at a saas and publishing business.</p>
          <p>My search was not constricted to the 40 hour work week. Nights and weekends are for practicing code and design skills, as well as keeping up with the ever evolving industry.</p>
          <h4>Finding a Career I Love</h4>
          <p>The reason I love User Experience is because its mission is to satisfy customers. With that, I get to use my embedded skills.</p><p>Most of all, I can be involved in the product develpoment process from end to end.</p>
          <p>I am obsessed with order and efficiency when it comes to any activity involving a customer.</p>
        </div>
        <img src={manager} className='header-image'/>
      </header>
      <section className='past'>
      <div className='past-content'>
      <h4><b>Career 1.0:</b><br/> Property Management Industry</h4>
      <p>My experience in the Property Management business strengthens my UX design skills. I had to understand everything from the small details to the big picture to do my job well.</p>
      <ul>
      <li>
      <div className='past-title'>
      <img src={team} className='past-icons'/>
      <h5>Sales</h5>
      </div>
      <p>Became a top leasing agent by mastering the sales process and leasing hundreds of apartments. Completed accompanying administrative tasks with efficiency and care. Followed processes to ensure consistency.</p>
      </li>
      <li>
      <div className='past-title'>
        <img src={process} className='past-icons'/>
      <h5>Troubleshooter</h5>
      </div>
      <p>Optimized performance at properties across Florida.

        Observed and interviewed staff.
        Suggested improvements.
        Implemented efficient administrative and sales process flows.
    </p>
      </li>
      <li>
      <div className='past-title'>
        <img src={enterprise} className='past-icons'/>
        <h5>Property Manager</h5>
      </div>
      <p>Improved performance of 5 properties in all aspects of the business. Improved property income  and resident satisfaction year over year, resulting in profitable sales of each property .</p>
      </li>
      </ul>
        </div>
      </section>
      <section className='present'>
        <div className='present-content'>
          <h4>UX Strengths</h4>
          <ul className="ux-strengths">
            <li className="client-facing">
              <h5>Client-Facing</h5>
            </li>
            <li className="customer-focused">
              <h5>Customer Focused</h5>
            </li>
            <li className="customer-focused">
              <h5>Prioritization</h5>
            </li>
            <li className="facilitator">
              <h5>Facilitator</h5>
            </li>
            <li>
              <h5>
              Information Architecture
              </h5>
            </li>
            <li>
                <h5>
                Content Modeling
                </h5>
            </li>
            <li>
                <h5>
                Journey Mapping
                </h5>
            </li>
            <li>
                <h5>
                Active Listener
                </h5>
            </li>
        </ul>
        </div>
      </section>
      <section className='pet-section'>
        <img src={hector} className='pets'/>
        <img src={river} className='pets'/>
        <img src={mabel} className='pets'/>
        <img src={pumpkin} className='pets'/>
      </section>
  </div>
  )
}
}
export default About
