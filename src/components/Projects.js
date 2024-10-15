import React from 'react';
import kk from '../assets/p7.jpg';
import dashboard from '../assets/p5.jpg'
import tyre from '../assets/p8.jpg'
import calci from '../assets/p3.jpg'
import ageCalci from '../assets/p6.jpg'
import ticToc from '../assets/p1.jpg'
import stonePaper from '../assets/p2.jpg'
import amazon from '../assets/p4.jpg'

const Projects = () => {
  return (
    <div className='projectSection' id='projects'>
      <h1 className='projectHeading'>My Projects</h1>

      <div className='projectCrads'>
        <div className='cardsProjects'>
            <h2 className='react-heading'>React Projects</h2>
            <div className='reactImg'>
                <div className='cards'>  
                 <a href="https://khao-khilao-pinki-jha.netlify.app/" target="_blank" rel="noopener noreferrer">                     
                <img className='reactProjectImg' src={kk} />
                <p>KhaoKhilao App</p>
                <p>React, Tailwind, Parcel</p>
                </a>
                </div>

                
                <div className='cards'> 
                <a href="https://dashboard-react-pinki-jha.netlify.app/" target="_blank" rel="noopener noreferrer">                  
                <img className='reactProjectImg' src={dashboard} /> 
                <p>Dashboard App</p>
                <p>React, Tailwind, Parcel</p></a> 
                </div>

                
                <div className='cards'>   
                <a href="https://tyreplex-pinki-jha.netlify.app/" target="_blank" rel="noopener noreferrer">                     
                <img className='reactProjectImg' src={tyre} />
                <p>Tyreplex App</p>
                <p>React, Tailwind, Parcel</p></a>
                </div>                         
            </div>
        </div>

        <div className='cardsProjects'>
            <h2 className='react-heading'>JavaScript Projects</h2>
            <div className='reactImg'>
                <div className='cards'>
                <a href="https://simple-calculator-v02.netlify.app/" target="_blank" rel="noopener noreferrer">                       
                <img className='reactProjectImg' src={calci} />
                <p>Simple Calculator</p>
                <p>HTML5, CSS3, JavaScript</p></a>
                </div>

                
                <div className='cards'>
                <a href="https://age-calci-app.netlify.app/" target="_blank" rel="noopener noreferrer">                       
                <img className='reactProjectImg' src={ageCalci} /> 
                <p>Age Calculator</p>
                <p>HTML5, CSS3, JavaScript</p></a>
                </div>

                
                <div className='cards'>                    
                <a href="https://tic-tac-toe-app01.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img className='reactProjectImg' src={ticToc} />
                <p>Tic Tac Toe</p>
                <p>HTML5, CSS3, JavaScript</p></a>
                </div> 

                <div className='cards'>                    
                <a href="https://stone-paper-scissor-app.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img className='reactProjectImg' src={stonePaper} />
                <p>Stone Paper Scissor</p>
                <p>HTML5, CSS3, JavaScript</p></a>
                </div> 

            </div>
        </div>

        <div className='cardsProjects'>
            <h2 className='react-heading'>HTML5 / CSS3 Projects</h2>
            <div className='reactImg'>
                <div className='cards'>  
                <a href="https://amazon-landing-page1.netlify.app/" target="_blank" rel="noopener noreferrer">                  
                <img className='reactProjectImg' src={amazon} />
                <p>Amazon landing Page</p>
                <p>HTML5, CSS3</p></a>
                </div>                        
            </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
