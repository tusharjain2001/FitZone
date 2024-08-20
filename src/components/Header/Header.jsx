import React from 'react'
import './Header.css'
import Dumb from './Dumb.png'
import { Link } from "react-scroll" 

const Header = () => {
  return (
    <div className='header'>
      <img className="image1" src={Dumb} alt='' />
      
      <ul className='menu'>
        <li>Home</li>
        <li><Link to="programs" smooth={true} duration={500}>Programs</Link>  </li>
        <li><Link to="reasons" smooth={true} duration={500}>Why Us</Link></li>
        <li><Link to="plans" smooth={true} duration={500}>Plans</Link></li>
        <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
      </ul>
    </div>
  )
}

export default Header