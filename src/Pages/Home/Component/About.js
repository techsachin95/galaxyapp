import React from 'react'
import image from '../../../assetes/satelight.jpg'
import image1 from '../../../assetes/partner.jpg'
const About = () => {
  return (
    <>
    <section className='aboutsection'>
        <h1>About Us</h1>
        <div className="aboutcontent">
            <div className="aboutimg"><img src={image} alt="aboutimg" /></div>
            <div className='planning'><br/>
            <h2>Planning:</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel mollitia 
                maiores tempora nesciunt, quia ipsum est doloribus debitis hic. </p>
            <h2>Stratigy:</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel mollitia 
                maiores tempora nesciunt, quia ipsum est doloribus debitis hic. </p>
            </div>
        </div><br/><br/><br/>
        <div className="ourpartner">
            <h1>OUR PERTNER</h1>
            <div className="partner"><img src={image1} alt="partner"/></div>
        </div>
    </section>
    </>
  )
}

export default About