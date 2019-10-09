import React, { Component } from 'react'
import ResumeJobs from './ResumeJobs'
import roles from './jobs'
import ResumeSchools from './ResumeSchools'
import schools from './education'
import SKILL_DATA from './skillsets'
import SkillItem from './SkillItem'

class Resume extends Component {
  render () {
    return <div className='dark-gray-bg'>
    <div className='resume'>

      <div className='experience'>
      <h3 className='headline'>Experience</h3>
        {roles.map(item => <ResumeJobs key={item.title} details={item} />)}
      </div>
      <div className='skillsEducation'>
        <h3 className='headline'>Skills</h3>
        <div className='skillset'>
          {SKILL_DATA.map(item => <SkillItem key={item.title} details={item} />)}
        </div>
        <div className='education'>
          <h3 className='headline'>Education</h3>
          <div className='edu'>
            {schools.map(item => <ResumeSchools key={item.degree} details={item} />)}
          </div>
        </div>
      </div>
    </div>
    </div>
  }
}

export default Resume
