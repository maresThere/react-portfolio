import React, { Component } from 'react'

class PrintWork extends Component {
  render () {
    const { image, name, link } = this.props.details

    return (<div className='print-container'>
      <div className='print-img'>

        <img src={image} alt={name} />
      </div>
    </div>

    )
  }
}

export default PrintWork
