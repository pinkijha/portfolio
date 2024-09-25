import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {


 

  return (
    <div>
      <nav   className='navbar'>
        <Link className='port'>Port<span className='folio'>Folio</span></Link>
        <div className='desktopMenu'>
            <Link className=' desktopMenuListItem' to="/home" >Home </Link>
            <Link className=' desktopMenuListItem' to="/home" >About </Link>
            <Link className=' desktopMenuListItem' to="/home" >Skills </Link>
            <Link className=' desktopMenuListItem' to="/home" >Projects </Link>
            {/* <div className=''onClick={showMenu} ><GiHamburgerMenu /></div> */}

        </div>
        <button className='desktopMenuBtn'>
             Contact Me
        </button>
      </nav>
    </div>
  )
}

export default Navbar
