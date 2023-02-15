import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Model = ({handleClick}) => {
  return (
    <section className="layer">
    <div className="maindiv">
        <div className="cross" onClick={handleClick}>
            <FaTimes style={{color:'white'}}/>
        </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    </section>
    )
}

export default Model
