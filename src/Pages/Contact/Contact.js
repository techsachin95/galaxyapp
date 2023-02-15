import React from 'react'
import Footer from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'
import Navbar from '../../Component/Navbar/Navbar'
import Contactform from './Component/Contactform'
import './Contact.css'
const Contact = () => {
  return (
    <>
    <Navbar/>
    <Header heading='Contact Page'/>
    <Contactform/>
    <Footer/>
    </>
  )
}

export default Contact