import React from 'react'
import { Link } from 'react-router-dom'
const SingleCard = ({ plans, rs, food, access, training, video, project }) => {
    return (
        <>
            <div className="singlecard">
                <div className="center">
                    <h2>{plans}</h2>
                    <h4>{rs}</h4>
                </div>
                <div className="containt">
                    <span>{training}</span><br />
                    <span>{video}</span><br />
                    <span>{access}</span><br />
                    <span>{project}</span><br />
                    <span>{food}</span><br />
                </div>
                <div className="btn">                
                <Link to=''>Book Now</Link>
                </div>
            </div>
        </>
    )
}

export default SingleCard