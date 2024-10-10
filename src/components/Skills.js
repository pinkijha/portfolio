import React from 'react';
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import angular from '../assets/angular.png'
import BT from '../assets/bootstrap.png'
import figma from '../assets/figma.png'

const Skills = () => {
  return (
    <section className='skillSection'>

    <div className='headingSkills' >
       <h1>Skill Set</h1>
     </div>
     
     <div className='container'>
      <div className='skill-items'>
          <img src={html}  className='skill-img' />
          <div className='skill-content'>
            <div className='skillPara'>
            <p>HTML</p>
            <p>90%</p> 
            </div> 
            <div className='progress-line' data-percent="90%">
              <span style={{width: "90%"}}></span>
              </div>        
          </div>        
      </div>

      
      <div className='skill-items'>
          <img src={css}  className='skill-img' />
          <div className='skill-content'>
            <div className='skillPara'>
            <p>CSS</p>
            <p>85%</p> 
            </div> 
            <div className='progress-line' data-percent="85%">
              <span style={{width: "85%"}}></span>
              </div>        
          </div>        
      </div>

     
      <div className='skill-items'>
          <img src={js}  className='skill-img' />
          <div className='skill-content'>
            <div className='skillPara'>
            <p>Javascript</p>
            <p>71%</p> 
            </div> 
            <div className='progress-line' data-percent="71%">
              <span style={{width: "71%"}}></span>
              </div>        
          </div>        
      </div>

     
      <div className='skill-items'>
          <img src={react}  className='skill-img' />
          <div className='skill-content'>
            <div className='skillPara'>
            <p>React</p>
            <p>78%</p> 
            </div> 
            <div className='progress-line' data-percent="78%">
              <span style={{width: "78%"}}></span>
              </div>        
          </div>        
      </div>

      
      
      <div className='skill-items'>
          <img src={angular}  className='skill-img' />
          <div className='skill-content'>
            <div className='skillPara'>
            <p>Angular</p>
            <p>62%</p> 
            </div> 
            <div className='progress-line' data-percent="62%">
              <span style={{width: "62%"}}></span>
              </div>        
          </div>        
      </div>

      
      
      <div className='skill-items'>
          <img src={BT}  className='skill-img' />
          <div className='skill-content'>
            <div className='skillPara'>
            <p>Bootstrap</p>
            <p>89%</p> 
            </div> 
            <div className='progress-line' data-percent="89%">
              <span style={{width: "89%"}}></span>
              </div>        
          </div>        
      </div>

      
      
      <div className='skill-items'>
          <img src={tailwind}  className='skill-img' />
          <div className='skill-content'>
            <div className='skillPara'>
            <p>Tailwind</p>
            <p>80%</p> 
            </div> 
            <div className='progress-line' data-percent="90%">
              <span style={{width: "80%"}}></span>
              </div>        
          </div>        
      </div>

      <div className='skill-items'>
          <img src={figma}  className='skill-img' />
          <div className='skill-content'>
            <div className='skillPara'>
            <p>Figma</p>
            <p>70%</p> 
            </div> 
            <div className='progress-line' data-percent="90%">
              <span style={{width: "70%"}}></span>
              </div>        
          </div>        
      </div>

     </div>
    </section>
  )
}

export default Skills
