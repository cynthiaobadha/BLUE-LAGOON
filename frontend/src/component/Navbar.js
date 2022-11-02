import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'
import '../component/cssfiles/Navbar.css'

const Navbar =() =>{
const[click,setClick]=useState(false)

const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt='logo'/>
            </div>
        <ul className={click ? ('nav-menu active'): ('nav-menu')}>
            
         <li> <NavLink to='/' activeClassName = 'is-active' id='nav-item' exact={true}>Home</NavLink></li>
         <li> <NavLink to='/About Us' activeClassName = 'is-active' id='nav-item'>About Us</NavLink></li>
         <li> <NavLink to='/LoginForm' activeClassName = 'is-active' id='nav-item'>Doctors</NavLink></li>
         <li> <NavLink to='/CreateUser' activeClassName = 'is-active' id='nav-item'>Book Appointment</NavLink></li>
         <li> <NavLink to='/Contact Us' activeClassName = 'is-active' id='nav-item'>Contact Us</NavLink></li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{color:'#f8f8f8'}}/>):(< FaBars size={30} style={{color:'#f8f8f8'}}/>)}
        </div>
        </div>
    )
}


export default Navbar