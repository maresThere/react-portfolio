import React, { Component } from 'react'

export default class ToggleRenderProps extends Component {
  state = {
    on: false
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
      })
  }

  render() {
    const { children } = this.props
    return children({
      on: this.state.on,
      toggle: this.toggle

    })
  }
}
<ToggleRenderProps>
  {({on, toggle}) => (
    <div>
      {on && <Nav className='fadeIn' />}
      <button className='toggle-button' onClick={toggle}>
        <div className='bar1' />
        <div className='bar2' />
        <div className='bar3' />
      </button>
    </div>
  )}
</ToggleRenderProps>
