import React from 'react';
import headshot from './styles/myHeadshot.png'
import './styles/Body.css'
import ReactRoundedImage from "react-rounded-image";

const Body = () => {
    return (
        <div className ='headshot'>
            {/* <img src={headshot} alt="myheadshot"/> */}
            <ReactRoundedImage 
                image={headshot} 
                imageWidth="640"
                imageHeight="480"
                roundedSize="0"
            />
        </div>
        
    )
}

export default Body;