import React, { Component } from 'react'

class SkillItem extends Component {
  render () {
    const { id, title, bullets } = this.props.details
    const bulletList = bullets.map((bullet) =>
    <li>{bullet} </li>
    )
    return (<ul className='bullets skills'>
    <h3 className='sedu'>
    <span className='resDecor'>&diams;</span>
    {title}</h3>
        {bulletList}
      </ul>

    )
  }
}
export default SkillItem
