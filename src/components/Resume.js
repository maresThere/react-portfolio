import React, { Component } from 'react'
import ResumeJobs from './ResumeJobs'
import roles from '../jobs'

class Resume extends Component {
  render () {
    return <div className='resume'>
      <h3 className='exp'><span className='resDecor'>&diams;</span> EXPERIENCE</h3>
      <div className='experience'>
        {roles.map(item => <ResumeJobs key={item.title} details={item} />)}
      </div>

      <div className='skillsEducation'>
        <div className='skillset'>
          <h3 className='sedu'><span className='resDecor'>&diams;</span> SKILLS</h3>
          <p className='skills'>HTML5, CSS3, Sass, React,<br />
           Javascript, Bootstrap, GraphQL,<br />
          MobX, Git, GitHub, webpack,
          Adobe Creative Suite,<br />
          Amazon.com Seller Central,<br />
         Yardi, Realpage, 3Dcart</p>
        </div>
        <div className='education'>
          <h3 className='sedu'><span className='resDecor'>&diams;</span> EDUCATION</h3>
          <div className='edu'>
            <h4>Front End Engineering</h4>
            <div className='placeDate'>
              <span className='place'>The Iron Yard</span><span className='date'>6/2017</span></div>
          </div>
        </div>
        <div className='edu'>
          <h4>Associate of Science, Web Development</h4>
          <div className='placeDate'>
            <span className='place'>Pasco Hernando State College</span><span className='date'>7/2015</span></div>
          <span>Project Management,  networking, hardware fundamentals, web design & development</span>
        </div>
        <h4>Bachelor of Science, Business Administration
Minor: Management Information  Systems</h4>
        <div className='placeDate'>
          <span className='place'>University of South Florida </span><span className='date'>5/1999</span></div>
      </div>
      <div className='otherExp'>
        <h3 className='addExp'><span className='resDecor'>&diams;</span> ADDITIONAL EXPERIENCE</h3>
        <div className='placeDate'>
          <span className='place'>Business Manager, Pinnacle Family of Companies</span><span className='date'>4/2013 - 1/2014</span>
        </div>
        <div className='placeDate'>
          <span className='place'>Business Manager, Franklin Street Residential Services</span><span className='date'>12/2010 - 3/2013</span>
        </div>
        <div className='placeDate'>
          <span className='place'>Property Manager, Whitney Management</span><span className='date'>6/2003 - 11/2010</span>
        </div>
        <ul className='bullets'>
          <li>Monitored, evaluated, revised and executed operational processes to improve performance</li>
          <li>Increased revenue, occupancy and Net Operating Income substantially for each property over previous year’s performance under a different Manager</li>
          <li>Prepared, implemented and managed budgets up to $3,000,000</li>
          <li>Monitored all spending to evaluate cost effectiveness and implement changes as needed</li>
          <li>Negotiated contracts for recurring services and capital expenditures</li>
          <li>Supervised up to 14 staff members: hiring, training, payroll reporting, performance and salary reviews, disciplinary warnings, promotions and terminations</li>
          <li>Received Whitney Management’s “Best Community of the Year” award</li>
        </ul>
      </div>
    </div>
  }
}

export default Resume
