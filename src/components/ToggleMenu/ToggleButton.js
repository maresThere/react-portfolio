import React, { Component } from 'react'

const ToggleButton = props => (

      <button onclick={props.toggle}>
         <div className="bar1"></div>
         <div className="bar2"></div>
         <div className="bar3"></div>
      </button>

    )


export default ToggleButton
