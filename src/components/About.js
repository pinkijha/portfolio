import React from 'react';
import bg from "../assets/banner-img.jpg"

const About = () => {
  return (
    <div className='aboutMain'> 
      <div className='aboutSection'>
        <h1 className='aboutHeading'>About Me</h1>
        <p className='aboutPara'>Hello! I'm Pinki Jha, a passionate front-end developer with over 2.5 years of experience building responsive and user-friendly web applications.I specialize in React.js, HTML5, CSS3, JavaScript, and have hands-on experience with Bootstrap, Redux, and Tailwind CSS.

        Throughout my career, I’ve worked on a variety of projects, including e-commerce websites and enterprise-level applications, focusing on enhancing user experiences through clean and efficient code. I enjoy transforming complex problems into intuitive, visually appealing designs.<br/>

        <span className='aboutBuildPara'>Let’s build something great together!</span>
</p>
      </div>

        <div className='bgImages'>
            <img className='aboutBg' src={bg} />
        </div>
    </div>
  )
}

export default About
