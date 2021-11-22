import React from 'react';
import './styles/UvaInfo.css'; 
import uvarotund from './styles/photos/uvarotund.jpeg';
import laxpic from'./styles/photos/laxpic.JPG';
import classpic from './styles/photos/classpic.JPG';

function UvaInfo() {
    return (
        <div className="uvaback2">
            
            <div className="rotun">
                <img id= "uvaro" src={uvarotund} alt="uvaro" />
            </div>

            
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="lax">
                        <img id="laxpic" src={laxpic} alt="laxpics"/>
                    </div>

                    <div class="lax-text">
                        <h2>Division 1 Lacrosse</h2>
                        <p>Played lacrosse for 3 years</p>
                        <p>Position: Defense</p>
                    </div>
                </div>
            </div>

            

            <div className="uvaMajor">
                <h2>Major: Computer Engineering</h2>
                <h3>Minor: Business</h3>
            </div>

            <div className="flip-class">
                <div className="classpic">
                    <img id="classpic" src={classpic} alt="classpic"/>
                </div>
                <dic className="classpic-text">
                    <h2>Classes Taken:</h2>
                    <p>Digital Logic Design</p>
                    <p>Program and Data Representation</p>
                    <p>Fundamentals of Computer Engineering</p>
                </dic>


            </div>

            <div className="gradyear">
                <h3>Graduation Year:</h3>
                <div className="year">
                <h3>2023</h3>
                </div>
                
            </div>

            
            
        </div>
    );
}

export default UvaInfo;
