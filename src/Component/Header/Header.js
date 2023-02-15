import React from 'react'
import './Header.css'
const Header = ({heading}) => {
  return (
    <div className="header">
        <div className="headercontaint">
        <h1>{heading}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, error?</p>
        </div>
    </div>
    )
}

export default Header 