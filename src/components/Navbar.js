import React from 'react';
import logo from "../assets/portfolio-logo.png";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <Link className='port'>Port<span className='folio'>Folio</span></Link>
        <div className='desktopMenu'>
            <Link className=' desktopMenuListItem'>Home </Link>
            <Link className=' desktopMenuListItem'>About </Link>
            <Link className=' desktopMenuListItem'>Skills </Link>
            <Link className=' desktopMenuListItem'>Projects </Link>

        </div>
        <button className='desktopMenuBtn'>
            <img className='desktipMenuImg' src="" /> Contact 
        </button>
      </nav>
    </div>
  )
}

export default Navbar
