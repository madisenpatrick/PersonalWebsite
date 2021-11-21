import React from 'react';
import headshot from './styles/photos/myHeadshot.png'
import './styles/headshot.css'
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