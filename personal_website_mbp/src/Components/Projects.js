import React from 'react';
 import Collapsible from './Collapsible.js'
 import './styles/Projects.css'
 import codeBack from './styles/photos/codeback.jpeg'

const Talent = () => {
    return (
        <div className="allProject">
            <div className="c1" style={{backgroundImage: `url(${codeBack})`}}>
                <Collapsible label="Coding Languages:">
                    <h2>Coding Languages go here</h2>
                    <p>Java, C++, python, and ReactJS, JavaScript, CSS, HTML</p>
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