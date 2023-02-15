import React from 'react'

const Contactform = () => {
    return (
    <>
    <div className="mdiv">
        <h1>Contact Form</h1>
    <div className="s2mdiv">
            <form className="form" action="#">
                <input type="text" className="name" placeholder="Full Name" required/><br/>
                <input type="email" className="email" placeholder="Email" required/><input type="text" className="number"
                    placeholder="Phone" required/><br/>
                <input type="text" className="company" placeholder="Company"/><br/>
                <input type="checkbox"/><label>Video</label><input type="checkbox"/><label>Digital</label>
                <input type="checkbox"/><label>Design</label><input type="checkbox"/><label>Content</label>
                <input type="checkbox"/><label>Website</label><input type="checkbox"/><label>Sound</label><b/>
                <input type="checkbox"/><label>Cloud</label><input type="checkbox"/><label>Consultation</label>
                <input type="checkbox"/><label>Other</label><br/>
                <textarea cols="30" rows="5" className="msg" placeholder="Write a message" required></textarea>
                <button src="#">send &#8594;</button>
            </form>
    </div>
    </div>
    </>
    )};

export default Contactform