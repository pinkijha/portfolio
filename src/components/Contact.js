import React, { useRef } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoSend } from 'react-icons/io5'; 
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_edym81d', 'template_3l2gac1', form.current, 'wlHaEimVH7c4HpNodVS9f' )
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contactSection' id='contact'>
      <h1 className='contact-heading'>Contact Me</h1>
      <div className='conatct-page'>

       {/* Contact Card for Form */}
       <div className='contact-card'>
          <h2 className='form-title'>Message Me</h2>
          <form className='contact-form'  ref={form} onSubmit={sendEmail}>
            <div className='input-group'>
              <label>Name</label>
              <input type='text' placeholder='Enter your name'  name="your_name" />
            </div>
            <div className='input-group'>
              <label>Email</label>
              <input type='email'  placeholder='Enter your email'  name="your_email" />
            </div>
            {/* <div className='input-group'>
              <label htmlFor='subject'>Subject</label>
              <input type='text' id='subject' placeholder='Enter subject' />
            </div> */}
            <div className='input-group'>
              <label >Describe Project</label>
              <textarea id='message' rows='5' placeholder='Describe your project here' name='message'></textarea>
            </div>
            <button type='submit' className='send-btn' value='send ' >
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
