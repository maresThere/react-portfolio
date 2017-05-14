import React, { Component } from 'react'

class Resume extends Component {
  render () {
    return <div className='Resume'>
      <h2 className='heading'>Resume</h2>
      <div className='education'>
        <h2>EDUCATION</h2>
        <div className='edu1'>
          <h3>Front End Engineering</h3>
          <p>The Iron Yard 6/2017</p>
          <p>HTML5, CSS3, JavaScript, React, MobX, Webpack, Open source technologies, terminal</p>
        </div>

        <div className='edu2'>
          <h3>Associate of Science, Web Development</h3>
          <p>Pasco Hernando State College 7/2015</p>
          <p>Project Management,  networking, software & hardware fundamentals, web design & development.</p>
        </div>

        <div className='edu3'>
          <h3>Coursework, Fundamentals of Interior Design</h3>
          <p>Florida State College 2013-2014</p>
        </div>

        <div className='edu4'>
          <h3>Bachelor of Science, Business Administration. Minor: Management Information Systems</h3>
          <p>University of South Florida 5/1999</p>
        </div>
      </div>
      <div className='experience'>
        <h2>EMPLOYMENT HISTORY</h2>
        <h3>Graphic Designer & Marketing Associate</h3> <p>Vitamin Discount Center 12.2015 - 3.2017</p>

        <ul>
          <li>Updated taxonomy & categorized 5,300 products on VitaminDiscountCenter.com.</li>
          <li>Created marketing email weekly with Constant Contact.</li>
          <li>Monitered email effectiveness by reviewing sales reports in 3Dcart eCommerce tool.</li>
          <li>Created A+ content (images & text) for Amazon.com</li>
          <li>Optimized images for web and print.
   Layout magazine articles; typesetting & graphics.</li>
          <li>Created advertisement for products in magazine (For Life. For Less.)
   Created tri-fold brochures & direct mail pieces.</li>
          <li>Created graphics for blog (Vitamindiscountcenter.com/blog)
   Created graphics for Facebook.com/vitamindiscountcenter</li>
          <li>Focused building a consistent message & graphic story throughout all platforms.</li>
          <li>Contributed ideas to marketing planning meetings.</li>
        </ul>

        <h3>Web Developer/Graphic Designer</h3> <p>The Visual Spectrum 8.2015 – 12.2015</p>
        <ul>
          <li>Maintain websites using Bootstrap, HTML5 CSS and PHP include files.</li>
          <li>Add or modify web pages for sites such as westpasco.com and zephyrhillschamber.org.</li>
          <li>Assisted in development of mountdora.com, Clearwater-vacation.com</li>
          <li>Use Photoshop and Illustrator to create and modify web graphics and images.</li>
          <li>Create print ads with InDesign and Photoshop </li>
          <li>Use Schema tags, geo-location tags, register sites with Google and Bing.</li>
        </ul>

        <h3>Web Design Intern</h3> <p>The Visual Spectrum 5/2015 -7/2015</p>
        <ul>
          <li>Converted standard websites to responsive sites using Bootstrap, CSS.</li>
          <li>Used Illustrator, Photoshop and InDesign to create or re-size print advertisements</li>
          <li>Updated information for clients on existing web sites.</li>
        </ul>
      </div>
    </div>
  }
}

export default Resume
