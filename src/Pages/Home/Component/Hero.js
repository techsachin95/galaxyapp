import React from 'react'
import video from '../../../assetes/space1.mp4'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero'>
        <video src={video} autoPlay loop muted></video>
        <div className="herocontent">
            <h1>Galaxy.Travel.</h1>
            <p>WORLD FIRST CIVILIAN SPACE TRAVEL.</p><br/>
            <Link to='/training' className='herobtn1'>TRAINING</Link><Link to='/contact' className='herobtn2'>LUNCH</Link>
        </div>
    </div>
  )
}

export default Hero