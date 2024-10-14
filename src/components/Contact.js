import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoSend } from 'react-icons/io5'; 

const Contact = () => {
  return (
    <div className='contactSection'>
      <h1 className='contact-heading'>Contact Me</h1>
      <div className='conatct-page'>
        
       {/* Contact Card for Form */}
       <div className='contact-card'>
          <h2 className='form-title'>Message Me</h2>
          <form className='contact-form'>
            <div className='input-group'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' placeholder='Enter your name' />
            </div>
            <div className='input-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' placeholder='Enter your email' />
            </div>
            <div className='input-group'>
              <label htmlFor='subject'>Subject</label>
              <input type='text' id='subject' placeholder='Enter subject' />
            </div>
            <div className='input-group'>
              <label htmlFor='message'>Describe Project</label>
              <textarea id='message' rows='5' placeholder='Describe your project here'></textarea>
            </div>
            <button type='submit' className='send-btn'>
              Send Message <IoSend />
            </button>
          </form>
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
