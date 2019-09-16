import React, { Component } from 'react'

class WorkItem extends Component {
  render () {
    const { image, name, size } = this.props.details

    return (

        <img src={image} alt={name} className={size} />


    )
  }
}

export default WorkItem
