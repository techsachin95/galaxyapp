import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import About from './Component/About'
import CalltoAction from './Component/CalltoAction'
import Faq from './Component/Faq'
import Hero from './Component/Hero'
import Service from './Component/Service'
import Footer from '../../Component/Footer/Footer'
import './Home.css'
const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <CalltoAction/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default Home