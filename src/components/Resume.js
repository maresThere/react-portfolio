import React, { Component } from 'react'
// import ReactPDF from 'react-pdf';

class Resume extends Component {
  render () {
    return <div className='resume'>
      <div className='experience'>
        {/* <div className='pdflink'><a href='../images/resume.pdf'>pdf version</a></div> */}
        <h3 className='exp'><span className='resDecor'>&diams;</span> EXPERIENCE</h3>
        <h4>Email Developer</h4>
        <div className='placeDate'>
          <span className='place'>TradeSmith</span><span className='date'>7/2017 - Present</span>
        </div>
        <ul className='bullets'>
          <li>Design, develop &amp; execute responsive emails </li>
          <li>Code, optimize and post editorials to WordPress blog</li>
          <li>Design &amp; build <a href='http://lavish-fan.surge.sh/'>responsive landing pages</a></li>
        </ul>
        <h4>Front End Engineering</h4>
        <div className='placeDate'>
          <span className='place'>The Iron Yard</span><span className='date'>3/2017 - 6/2017</span></div>
        <h4>Graphic Designer</h4>
        <div className='placeDate'>
          <span className='place'>Vitamin Discount Center</span><span className='date'>12/2015 - 3/2017</span>
        </div>
        <ul className='bullets'>
          <li>Optimized images for web and print </li>
          <li>Layout magazine articles; typesetting & graphics</li>
          <li>Created products advertisements in ‘For Life. For Less’ magazine</li>
          <li>Created tri-fold brochures & direct mail pieces</li>
          <li>Created graphics for Vitamindiscountcenter.com/blog</li>
          <li>Created social media graphics</li>
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
