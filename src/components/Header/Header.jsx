import React from 'react'
import './Header.css'
import Dumb from './Dumb.png'

const Header = () => {
  return (
    <div className='header'>
      <img className="image1" src={Dumb} alt='' />
      
      <ul className='menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why Us</li>
        <li>Plans</li>
      </ul>
    </div>
  )
}

export default Header