import React, { Component } from 'react'
import '../styles/HeaderStyles.css'

export class Header extends Component {
  render() {
    return (
      <h1 className="header" style={headerStyle}>Task App</h1>
    )
  }
}

const headerStyle = {
    background:'#333',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '6vh'
}

export default Header