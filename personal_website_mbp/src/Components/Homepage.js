import React from 'react';
import "./styles/Home.css";
import Headshot from './Headshot.js';
import ScrollButton from './ScrollButton.js';
import AboutMe from './AboutMe.js'


const Header = () => {


    return(
        <div className = 'headerA'>
            <div className ='section1'>


                <div className = 'name'>
                        <p>THIS IS ME</p>
                        <h1>
                            Madisen Patrick

                        </h1>
                        <p> Software and Computer Engineer</p>
                </div>

                <div className = 'body'>
                    <Headshot />
                </div> 

                
            </div>

            <div className = 'learnMore'>
                    <p>Click to learn more about me</p>
                </div>
                
                <div className = 'button'>
                    <ScrollButton/>

                </div>

            <AboutMe/>

            {/* <div className = 'section2'>
                <div className = 'about'>
                    <AboutMe/>
                </div>
            </div> */}
            
           
            {/* <div className = 'section2'>

                <Fader text="Scrolling we rolling"></Fader>
            </div> */}

        </div>
    );
}

export default Header;