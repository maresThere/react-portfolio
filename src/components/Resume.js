import React, { Component } from 'react'
import ResumeJobs from './ResumeJobs'
import roles from '../jobs'
import ResumeSchools from './ResumeSchools'
import schools from '../education'
import skills from '../skillsets'

class Resume extends Component {
  render () {
    return <div className='resume'>
      <h3 className='exp'>
        <span className='resDecor'>&diams;</span>
        &nbsp;EXPERIENCE
      </h3>
      <div className='experience'>
        {roles.map(item => <ResumeJobs key={item.title} details={item} />)}
      </div>
      <div className='skillsEducation'>
        <div className='skillset'>
          <h3 className='sedu'>
            <span className='resDecor'>&diams;</span>
              &nbsp;SKILLS
          </h3>
          <p>{skills}</p>
        </div>
        <div className='education'>
          <h3 className='sedu'>
            <span className='resDecor'>&diams;</span>
             &nbsp;EDUCATION
          </h3>
          <div className='edu'>
            {schools.map(item => <ResumeSchools key={item.degree} details={item} />)}
          </div>
        </div>
      </div>
      <div className='otherExp'>
        <h3 className='addExp'><span className='resDecor'>&diams;</span> ADDITIONAL EXPERIENCE</h3>
        <div className='placeDate'>
          <span className='place'>Property Manager</span><span className='date'>2003 - 2014</span>
        </div>
        <ul className='bullets'>
          <li>Monitored, evaluated, revised and executed operational processes to improve performance</li>
          <li>Increased revenue, occupancy and Net Operating Income substantially for each property over previous year’s performance</li>
          <li>Prepared, implemented and managed budgets up to $3,000,000</li>
          <li>Monitored all spending to evaluate cost effectiveness and implement changes as needed</li>
          <li>Negotiated contracts for recurring services and capital expenditures</li>
          <li>Supervised up to 14 staff members: hiring, training, payroll reporting, performance and salary reviews, disciplinary warnings, promotions and terminations</li>
        </ul>
      </div>
    </div>
  }
}

export default Resume
