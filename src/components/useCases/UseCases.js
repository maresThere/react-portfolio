import React, { Component } from 'react'
import heroimageport from '../../images/heroimageport.jpg'
import contentBox from '../../images/contentBox.jpg'
import journeyMap from '../../images/journeyMap.png'
import retiredMan from '../../images/retiredMan.png'
import sectorIcons from '../../images/sectorIcons.jpg'
import billionIcons from '../../images/billionIcons.jpg'

import './UseCases.scss'

class UseCases extends Component {
  render () {
    return (
      <main className='case-study'>
          <section className='intro'>
            <h1>Weekly Email Subscription Product</h1>
            <div>
              <img src={heroimageport} className='placeholder'/>
            </div>
            <p className="intro-question">How might we acquire long-term customers for our high priced investment software products?
            </p>
            <div className='overview'>
              <div className='overview-text'>
                <h4>Project Summary</h4>
                <p>Owners wanted to acquire subscribers by offering a low priced subscription product. The product is to deliver a snap shot of what subscribers would have access to in a higher priced offering.</p>
                <p>We pulled a feature from a product that gives stock ideas based on a multitude of filters.</p>
              </div>
              <div className='myrole'>
                <h3>My Role</h3>
                <ul>
                  <li>
                  Content creation
                  </li>
                  <li>
                  Template design and development
                  </li>
                  <li>
                  Coordinated scheduling
                  </li>
                  <li>
                  User Research
                  </li>
                </ul>
              </div>
            <div className='team'>
              <h3>Team</h3>
              <ul>
              <li>
              Product Manager
              </li>
              <li>
              Managing Editor
              </li>
              </ul>
            </div>

          </div>
          </section>
            <section className='process'>
            <div className="persona">
              <div className="persona-text">
                <h3>Personas</h3>
                <h4>Retired Rich</h4>
                <p><b>Goals: </b>Generate enough income to live comfortably and simultaneously build savings.</p>
              </div>

              <figure className="persona-image">
                  <img src={retiredMan} className='placeholder'/>
                  <figcaption>Retired Rich</figcaption>
              </figure>
              <ul className='persona-demographics'>
                  <h6>Demographics:</h6>
                  <li><b>Age:</b> 66</li>
                  <li><b>Gender:</b> male</li>
                  <li><b>Location:</b> US</li>
              </ul>
              <div className='persona-data'>
                    <h6>Behaviors:</h6>
                    <p>Conservative, Responds to fear based marketing, reads financial newsletters</p>
                    <h6>Tech:</h6>
                    <p>desktop, Ipad. somewhat comfortable on internet</p>
              </div>
            </div>
            <div className="strategy-pages">
              <div className="strategy-page-text">
                <h3 className='blue'>Map Journey | Content Strategy</h3>
                <h4 blue>Find opportunities to engage customers</h4>
                <p>The weekly email contains links to a knowledge base to explain more about each filter. Users should click on these links at least once if they want to understand the research behind the filter.
                </p>
                <h6>Engage the user with free content</h6>
                  <p>Because this product should be inexpensive to create, we can use existing content and offers.
                  </p>
                </div>
                    <figure className="strategy-page-image">
                    <img src={journeyMap} className='placeholder' />
                    </figure>
                    <ul className='engagement-list'>
                      <li><b>Trial offers</b> <br/>Link ad to 30 day free trial offers</li>
                      <li><b>3rd party marketing</b> <br/> Affiliate offers </li>
                      <li><b>Webinar replays</b> <br/> Post recent marketing webinars</li>
                      <li><b>Blog</b> <br/> Links to relevent articles</li>
                    </ul>
                  </div>
          <div className="table-design">
            <div className="table-design-text">
            <h3>Choose Content | Design Table</h3>
            <p>The higher priced program provides a list of stocks chosen by algorithms created from a particular investment strategy filter.</p>
            <p> We took the top stock from each of the filters to deliver to subscribers.  Each stock item includes the ticker symbol and several data points about the stock.</p>
            <p>My task was to decide what content to pull from the main product.
            </p>
              <p>I consulted with the Product Manager to determine which data points would provide the most insight to the customer.</p>
            </div>
            <figure className="table-design-image">
              <img src={contentBox} className='placeholder'/>
            </figure>
            <ul className='table-design-considerations'>
            <h6>Design Considerations</h6>
              <li>Strategy name at the top</li>
              <li>Ticker symbol is the predominant data point</li>
              <li>Some education about the strategy with a link to read more</li>
              <li>"Read more" takes the user to content discussing each strategy.</li>
            </ul>
          </div>
          <div className="content-development">
            <div className="content-development-text">
              <h3 className='blue'>Information Design | Content Development</h3>
              <h6>Opportunities to visualize copy</h6>
              <p>The information provided is somewhat complicated and visual references will help keep the customer engaged with the page.
              </p>

              </div>

                <div className='content-development-example-1'>
                  <h6>Create Iconography to help users recognize common subject matter</h6>
                  <p>Industry Sectors are often discussed in the investment world. Standard icons could be used across all channels.
                  </p>
                  <figure className="content-development-example-1-image">
                    <img src={sectorIcons} className='placeholder' />
                  </figure>
                  </div>
                  <div className='content-development-example-2'>
                    <h6>Break up text with visual examples</h6>
                    <p>Compelling information should be highlighted visually.
                    </p>
                    <figure className="content-development-example-2-image">
                      <img src={billionIcons} className='placeholder' />
                    </figure>
                    </div>
                </div>
          </section>
      </main>
    )
  }
}

export default UseCases
