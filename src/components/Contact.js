import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contactSection'>
      <h1 className='contact-heading'>Contact Me</h1>
      <div className='conatct-page'>
        <div className='contact-card'>

        </div>
        <div className='conatct-detail'>
            <h3 style={{fontSize: '22px'}}>Reach Out to me!</h3>
            <p>Discuss a Project or just want to say Hi? My inbox is open for all.</p>

            <div className='iconsContact'>
                <div  className='icons'><FaUserAlt /></div>
                <div className='userInfo'>
                    <h3>Name</h3>
                    <p>Pinki Jha</p>
                </div>
            </div>

            <div className='iconsContact'>
                <div className='icons'><FaMapMarkerAlt /></div>
                <div className='userInfo'>
                    <h3>Address</h3>
                    <p>Pune, Maharashtra</p>
                </div>
            </div>

            <div className='iconsContact'>
                <div className='icons'><IoIosMail /></div>
                <div className='userInfo'>
                    <h3>Email</h3>
                    <p>commonuse2021@gmail.com</p>
                </div>
            </div>
            <div className=''>
                <h4 style={{fontSize: '20px', fontWeight: 800, marginTop: '25px'}}>Stay Connected</h4>
                <div className='socialIcons'>
                <a href='https://www.linkedin.com/in/pinkijha/'  target='_blank'><FaLinkedin /></a>
                <a href='https://github.com/pinkijha' target='_blank'><FaGithub /></a>
                </div>
            </div>
            
        </div>

      

      </div>
    </div>
  )
}

export default Contact
