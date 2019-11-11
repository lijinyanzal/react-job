import React from 'react'
import logoImg from './job.png'
import './logo.css'

class Logo extends React.Component {
  render() {
    return (
      <div className="logo-container">
        <img className="logo-img" alt="" src={logoImg} />
      </div>
    )
  }
}

export default Logo
