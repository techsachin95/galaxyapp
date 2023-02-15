import React from 'react'
import { useState } from 'react'
import Model from './Model';
const CalltoAction = () => {
    const [model, SetModel] = useState(false);
    const handleClick = () => {
        SetModel(!model);
    }
    return (
        <>
            <section className="call-to-action">
                <h2>BOOK YOUR TICKET NOW!</h2><br />
                <button onClick={handleClick}>know more!</button>
            </section>
            {
                model && <Model handleClick={handleClick}/>
            }
        </>
    )
}

export default CalltoAction