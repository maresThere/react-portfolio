import React, { Component } from 'react'
import Menu from '../menu/Menu'
import mareKelly from '../../images/mareKelly.jpeg'
import background from '../../images/officeBG.jpg'
import './intro.scss'
import '../menu/menu.scss'
// Cover/home page - my picture

const sectionStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'center'
}

class Intro extends Component {
  render () {
    return (
      <div style={ sectionStyle }>
          <div className='introContainer'>
          <img src={mareKelly} />
            <div className='introBox'>
            <div className='intro-headline'>
            <div>
            <h2 className='hello'>Hello.<br/> Thank you for visiting.</h2>
<h1>I'm {this.props.name}</h1>
            </div>
            </div>
              <ul className='introText'>
              <li>Web Design</li>
              <li>Print Design</li>
              <li>Marketing</li>
               
              </ul>
              <div className = 'introContact'>
                <p className = 'introCard' >
                <i className = 'fa fa-phone' aria-hidden = 'true' />&nbsp;
                <a href = 'tel:904-442-3282' > 904-442-3282 </a>
                </p >
                <p className = 'introCard' >
                <i className = 'fa fa-paper-plane-o'
                aria-hidden = 'true' / >&nbsp;
                <a href = 'mailto:mareKellyJax@gmail.com' > mareKellyJax@gmail.com < /a></p >
                </div>
          </div>
        </div>
      </div>
    )
  }
}
Intro.propTypes = {
  name: React.PropTypes.array,
  bio: React.PropTypes.array,
  profile: React.PropTypes.array
}

export default Intro
