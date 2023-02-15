import React from 'react'
import Footer from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'
import Navbar from '../../Component/Navbar/Navbar'
import About from '../Home/Component/About'
const Training = () => {
  return (
    <>
      <Navbar />
      <Header heading='Training Page'/>
      <About/>
      <Footer/>
    </>
  )
}

export default Training