import React, { Component } from 'react'

class Resume extends Component {
  render () {
    return <div className='resume'>
      <div className='experience'>
        <h3 className='exp'>EXPERIENCE</h3>
        <h4>Front End Engineering</h4>
        <div className='placeDate'>
          <span className='place'>The Iron Yard</span><span className='date'>3/2017 - 6/2017</span></div>
        <h4>Graphic Designer & Marketing Associate</h4>
        <div className='placeDate'>
          <span className='place'>Vitamin Discount Center</span><span className='date'>12/2015 - 3/2017</span>
        </div>
        <span className='asa'>As a Grapich Designer:</span>
        <ul className='bullets'>
          <li>Optimized images for web and print </li>
          <li>Layout magazine articles; typesetting & graphics</li>
          <li>Created products advertisements in ‘For Life. For Less’ magazine</li>
          <li>Created tri-fold brochures & direct mail pieces</li>
          <li>Created graphics for Vitamindiscountcenter.com/blog</li>
          <li>Created graphics for Facebook.com/vitamindiscountcenter</li>
        </ul>
        <span className='asa'>As a Marketing Associate:</span>
        <ul className='bullets'>
          <li>Updated taxonomy & categorized 5,300 products on retail web site </li>
          <li>Created weekly marketing email </li>
          <li>Reviewed sales reports in eCommerce tool to measure email impact</li>
          <li>Created A+ content for Amazon.com</li>
          <li>Focused on a consistent message & graphic story across all platforms</li>
          <li>Contributed ideas to marketing planning meetings</li>
        </ul>
        <h4>Graphic Designer & Web Developer</h4>
        <div className='placeDate'>
          <span className='place'>The Visual Spectrum</span><span className='date'>5/2015 - 12/2015</span>
        </div>
        <ul className='bullets'>
          <li>Maintained websites using Bootstrap, HTML5 CSS, JQuery</li>
          <li>Updated web pages for sites including West Pasco Chamber of Commerce &  Zephyrhills Chamber of Commerce</li>
          <li>Designed & developed tarponspringschamber.com</li>
          <li>Assistant designer & developer of Clearwater-vacation.com,  Mount Dora Chamber of Commerce, thethomaspromise.org & theconcourse.org
</li>
          <li>Used Photoshop and Illustrator to create & modify web graphics</li>
          <li>Used geo-location tags, schema.org, registered sites with Google & Bing</li>
        </ul>
      </div>
      <div className='skillsEducation'>
        <div className='skillset'>
          <h3 className='sedu'>SKILLS</h3>
          <p className='skills'>HTML5, CSS3, Sass, React,<br />
           Javascript, Bootstrap, GraphQL,<br />
          MobX, Git, GitHub, webpack,
          Adobe Creative Suite,<br />
          Amazon.com Seller Central,<br />
         Yardi, Realpage, 3Dcart</p>
        </div>
        <div className='education'>
          <h3 className='sedu'>EDUCATION</h3>
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
        <h3 className='exp'>ADDITIONAL EXPERIENCE</h3>
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
