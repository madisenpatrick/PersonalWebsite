import React from 'react';
import Homepage from './Homepage.js'
import './styles/TopHeader.css'
import "./styles/Home.css";
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import ContactMe from './ContactMe.js';
import UvaInfo from './UvaInfo.js';
import logo from "./styles/photos/MPLogo.png"; 
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Skills from './Skills.js';
import Me from './Me.js';


function TopHeader() {
    return (
      
        <Router>
          < div className = "everybody">
            <div className= 'a'>
    
                <div className = 'Name'>
                
                  <Link to="/">
                    <div className = "mplogo">
                      <img src={logo} alt="MPLogo"/>
                    </div>
                  </Link>
                </div>
    
                <div className = 'aboutMe'>
                    {/* <Link to="/aboutMe"><AboutMe/></Link> */}
                    <div className = "dropdown">
                      <button className="dropbtn"><h3>About Me</h3>
                        <i class="fa fa-caret-down"></i>
                      </button>
                      <div className="dropdown-content">
                         <Link to="/aboutMe">Me</Link>
                         <Link to="uvainfo">UVA Info</Link>
                      </div>
                    </div>
                    {/* <Link to="/aboutMe"><h3>About Me</h3></Link> */}
                </div>
    
                <div className = 'talent'>
                    <Link to="/projects"><h3>Projects/ Skills </h3></Link>
                </div>
    
                <div className = 'contact'>
                    <Link to="/contact"><h3>Contact Me</h3></Link>
                </div>
    
              
    
            </div>
    
            <Routes>
              <Route path = "" element = {<Homepage/>} />
            </Routes>
    
            {/* <div className = 'about'>
              <AboutMe/>
            </div> */}
    
            <Routes>
              {/* <Route path = "" element = {<Header/>} /> */}
              <Route path="aboutMe" element={<Me />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<ContactMe />} />
            </Routes>
            
            <Routes>
              <Route path = "me" element={<Me/>}/>
              <Route path = "uvainfo" element={<UvaInfo/>}/>
              <Route path = "skills" element={<Skills/>}/>
            </Routes>
            
            
          </div>
        </Router>
      );
    }


export default TopHeader
