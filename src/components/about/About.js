import React, { Component } from 'react'
import hector from '../../images/hector.jpg'
import river from '../../images/river.jpg'
import mabel from '../../images/mabel.jpg'
import pumpkin from '../../images/pumpkin.jpg'
import './about.scss'

class About extends Component {
  render () {
    return (
    <div className='dark-gray-bg'>
    <div className='about'>
    <section>
    <h4>This is who I am.</h4>
    <div>
    <p><strong>An enthusiastic, passionate problem solver, with a varied and dynamic skill set</strong>.
    </p>
    </div>
    </section>
      <section>
      <h4>The Past</h4>
      <div>
      <p>Many years <strong>managing</strong> multi-family properties. Started out leasing apartments in college. I had a great success leasing up new construction properties. My secret was to <strong>listen</strong> to the customer and <strong>sell</strong> the product based on their individual needs.</p><p> Once I finished college, I decided to stick with it and worked my way up to a management role. Running an apartment community is like being in charge of a small city. My favorite parts of the job were planning <strong>marketing efforts</strong>, creating a monthly newsletter, <strong>training</strong> leasing agents, developing and implementing <strong>sales goals,</strong> reaching those goals, and coordinating unit turn-overs with vendors, in-house maintenance teams, and outside contractors.</p>
      <p>The Real-Estate market recovery brought about changes in the industry. First-time investors began buying up properties and setting unrealistic goals with impossible budgets. I was ready for a completely new career.</p>
      </div>
      </section>
      <section>
      <h4>The Present <br/> Well, the last five years.</h4>

      <div>
      <p> I took interior design courses where I learned the <strong>principles &amp; fundamentals of design</strong>. Although interior design is close to my heart, I needed to think about job opportunities and rate of advancement. Ultimately, I chose to <strong>focus</strong> my energy on learning graphic design and web development.</p>
      <p>
      Not everbody has the ability to start over, at the bottom, in a totally new field. My quest for a new career led me to different sectors of the graphic and web design fields.</p><p>I was able to learn at a small <strong>agency</strong>, where the owner was an artist and graphic design veteran, from the "Mad Men" days of the Chicago advertising world. This agency had a niche market of local Florida Chamber of Commerces. We provided design, <strong>development</strong> and maintenance of their websites, along with annual printed publications. I learned about Google Analytics and SEO from a development perspective. We did sites for popular towns like Tarpon Springs, Mount Dora, and Clearwater Beach.
      </p>
      <p>Next, I worked for a small <strong>retail chain</strong> with ten brick and mortar stores, plus an online store, as well as a big Amazon business. I did graphics for all facets of the organization.</p>
      <p>Today I work for a <strong>Fintech publishing and SaaS</strong> company where I learned all about <strong>email production</strong> and <strong>digital marketing campaigns</strong>. Several weekly editorials, often times with current, up to the hour market information, keep me on my toes. Editorials are finalized within an hour of <strong>deadlines</strong>, and handed to me to <strong>code and deliver</strong> to customers on time.</p>
      <p>I've made <strong>html templates</strong> for landing pages and emails, as well as PDF templates for newsletters. I also designed, developed, and <strong>deliver</strong> a weekly email publication to paid subscribers.
      </p>
      </div>
      </section>
      <section>
      <h4>The Future</h4>
      <div>
      <p>My ideal position is a web and graphic designer in a marketing and/or sales department. I love having a variety of projects on my plate, especially ones where I can be involved in the whole process, from start to deployment.</p><p>  I enjoy working with customers, whether an internal department or external clients. I work best in a team where everyone contributes and enjoys giving feedback and sharing knowledge, all for the sake of making a better end-product.  I'd like to build campaigns for different channels.</p>
      </div>
      </section>
      <section>
      <h4>Life On the Outside</h4>
      <div>
      <p>Much of my time away from work is spent improving my web design and coding skills. But I do find time to do things to give me balance.  Because I sit at a desk all day, I try and make exercise a priority.</p>
      <p>I've recently volunteered for Big Brothers Big Sisters and I have a little sister that I spend time with twice a month. I've had a fairly easy life compared to most people, so it's important to me to give back some way.</p>
      <p>I have a healthy interest in waste free living. I'm far from perfect at it, but I try and reduce and re-use whenever possible.</p><p>Last but not least, I have collected four little animals from my time in animal rescue. I had to give it up because I ran out of room!</p>
      </div>
      </section>
      <section className='pet-section'>
      <img src={hector} className='pets'/>
      <img src={river} className='pets'/>
      <img src={mabel} className='pets'/>
      <img src={pumpkin} className='pets'/>
      </section>

      </div>
    </div>

)

  }
}

export default About
