import React from 'react';
 import Collapsible from './Collapsible.js'
 import './styles/Projects.css'
 import codeBack from './styles/photos/codeback.jpeg'
import java from './styles/photos/java.png'
import C1 from './styles/photos/C1.png'
import python from './styles/photos/python.png'
import matlab from './styles/photos/Matlab_Logo.png'
import reactLogo from './styles/photos/reactLogo.png'

const Talent = () => {
    return (
        <div className="allProject">
            <div className="c1" style={{backgroundColor: '#dcc7aa'}}>
                <Collapsible label="Coding Languages +">
                    {/* <h2>Coding Languages go here</h2> */}
                    {/* <p>Java, C++, python, and ReactJS, JavaScript, CSS, HTML</p> */}
                    
                    <div className = "CodedAll">
                    <div className = "CodeAll">
                        <div className = "codePic">
                            <img id = "java" src={java}></img>   
                        </div>
                        <div className= "codeText">
                            <p> Java </p>
                        </div>
                    </div>

                    <div className = "CodeAll">
                        <div className = "codePic">
                            <img id = "C1" src={C1}></img>
                        </div>
                        <div className= "codeText">
                            <p> C++ </p>
                        </div>
                    </div>

                    <div className = "CodeAll">
                        <div className = "codePic">
                            <img id = "python" src = {python}></img>
                        </div>
                        <div className= "codeText">
                            <p> Python </p>
                        </div>
                    </div>


                    <div className = "CodeAll">
                        <div className = "codePic">
                            <img id = "matlab" src = {matlab}></img>
                        </div>
                        <div className= "codeText">
                            <p> Matlab </p>
                        </div>
                    </div>

                    <div className = "CodeAll">
                        <div className = "codePic">
                            <img id = "reactLogo" src = {reactLogo}></img>
                        </div>
                        <div className= "codeText">
                            <p> ReactJS </p>
                        </div>
                    </div>
                    </div>   
                        

                </Collapsible> 
            </div>
            
            <Collapsible label="Projects I have worked on:">
                <h2> Asurion </h2>
            </Collapsible>
            <Collapsible label="Experiences:">
                <h2>Asurion Soluto Team</h2>
            </Collapsible>
        </div>
    )
}

export default Talent;