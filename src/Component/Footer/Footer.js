import React from 'react'
import { Link } from 'react-router-dom'
import {FaGoogle,FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa'

import './Footer.css'
const Footer = () => {
  return (
      <div className="footer">
        <h1>GLX TRAVEL</h1>
        <div className="links">
          <h1>Quick Links</h1>
          <div className="link">
          <Link to='/'>Home</Link>
          <Link to='/pricing'>Pricing</Link>
          <Link to='/training'>Training</Link>
          <Link to='/Contact'>Contact</Link>
          </div>
        </div>
        <div className="social">
          <h1>Social links</h1>
          <div className="socials">
          <Link to=''><FaGoogle/></Link>
          <Link to=''><FaFacebook/></Link>
          <Link to=''><FaInstagram/></Link>
          <Link to=''><FaTwitter/></Link>
          <Link to=''><FaWhatsapp/></Link>
          </div>
        </div>
      </div>
    )
}

export default Footer