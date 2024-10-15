import React from 'react'
import { BACKGROUND_IMAGE } from '../utils/constant'

const HeaderPage = () => {
  return (
      <div className='mainHeaderSection' id='header'>
      <div className='headerSection'>
        <p  className='headerSectionpara'>Hello 👋 I'm</p>
        <h1 className='headerSection1'>Pinki Jha</h1>
        <h2 className='headerSection2'>And I'm a React.js Developer</h2>
        <button className='needBtn'>Need Website</button>
        <button className='hireBtn'>Hire me</button>
      </div>
      <div className='headerImages'>
        <img className='backgroundImg' src={BACKGROUND_IMAGE} />
      </div>
    </div>
  )
}

export default HeaderPage
