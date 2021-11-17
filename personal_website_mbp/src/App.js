import React from 'react';
import Header from './Components/Header.js'
import './Components/styles/App.css'
import "./Components/styles/Header.css";
import AboutMe from './Components/AboutMe.js';
import Talent from './Components/Talent.js';
import ContactMe from './Components/ContactMe.js';
import logo from "./Components/styles/MPLogo.png"; 
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"


function App() {
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
                <Link to="/aboutMe"><h3>About Me</h3></Link>
            </div>

            <div className = 'talent'>
                <Link to="/talent"><h3>Projects</h3></Link>
            </div>

            <div className = 'contact'>
                <Link to="/contact"><h3>Contact Me</h3></Link>
            </div>


        </div>

        <Routes>
                <Route path = "" element = {<Header/>} />
                <Route path="aboutMe" element={<AboutMe />} />
                <Route path="talent" element={<Talent />} />
                <Route path="contact" element={<ContactMe />} />
            </Routes>
      </div>
    </Router>
  );
}

export default App;
