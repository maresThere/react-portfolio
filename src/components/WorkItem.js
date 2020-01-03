import React, { Component } from 'react'

class WorkItem extends Component {
  render () {
    const { title, image, name, size } = this.props.details

    return (
<div>
<h3>{title}</h3>
      <ul>
      <li>
  <img src={image} alt={name} className={size} />
      </li></ul>
</div>


    )
  }
}

export default WorkItem
