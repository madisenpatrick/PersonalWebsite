import React from 'react';
import './styles/Aboutme.css';
import winery from './styles/photos/winery.png';

import {Link} from 'react-router-dom'

const AboutMe = () => {
    return (
            <div className="c">
                <div>
                <Link to="/me">
                    <div className='me' style={{ backgroundImage: `url(${winery})`} }>
                        <div className= 'title'>
                            
                                <h1>
                                    About Me 
                                </h1>
                        </div>
                    </div>
                </Link>

                <Link to="/uvainfo">
                    <div className='uvaback'>
                        
                        <div className='uvaInfo'>
                                <h1> UVA Info</h1>
                                <p>Learning and Coding with Passion </p>
                            
                            </div>

                    </div>
                </Link>
            
                
                {/* <Link to="/skills">
                    <div className= 'skills'>
                        <h1>Skills</h1>
                        <p>Coding with Passion while exploring the world</p>
                    </div>
                </Link> */}

                {/* <div classNams= 'funFacts'>
                    <h1>Fun Facts about me</h1>
                </div> */}
                </div>

            </div>
    );
}

export default AboutMe;