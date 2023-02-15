import React from 'react'
import './Navbar.css'
import {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const [click,setClick]=useState(false);
    const handleClick=()=>{
        setClick(!click);
    }
    return (
        <nav>
            <div className='logo'>
            <Link to='/'><h1>Glx Travel</h1></Link>
            </div>
            <div className={click ? "menulink active":"menulink"}>
            <Link to='/'>Home</Link>
            <Link to='/pricing'>Pricing</Link>
            <Link to='/training'>Training</Link>
            <Link to='/contact'>Contact</Link>
            </div>
            <div className="hamberger" onClick={handleClick}>
                {
                    click ? <FaTimes style={{color:"white"}}/>:<FaBars style={{color:"white"}}/>
                }
            </div>
        </nav>
            )
}

export default Navbar