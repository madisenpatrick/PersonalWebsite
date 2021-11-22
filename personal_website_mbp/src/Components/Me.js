import React from 'react';
import './styles/Me.css';
import norway from './styles/photos/norway.jpg';
import panaCanal from './styles/photos/panaCanal.JPG'
import pana from './styles/photos/pana.JPG'
import isrealmo from './styles/photos/isrealmo.JPG'
import isreal from './styles/photos/Isreal.JPG'
import winery from './styles/photos/winery.png'
import norwayfriend from './styles/photos/norwayfriend.JPG'
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import MyMusic from './MyMusic.js'

const slideImages = [
    norwayfriend,
    panaCanal,
    pana,
    isreal,
    isrealmo
];

function NewLineText(props){
    const text = props.text;
    return text.split('\n').map(str => <div className="white-space">{text}</div>);
}


function Me() {
    return (
        <div className="allMe">
            <div className='me' style={{ backgroundImage: `url(${winery})`} }>
                <div className= 'title'>
                    <h1>
                        About Me 
                    </h1>
                </div>
            </div>
            <div className="meTopInfo">
                <h1>MADISEN PATRICK</h1>
                <p> I am from Virginia Beach, Virginia. </p>
            </div>

            <div className="travelHeader">
                <h1>TRAVEL</h1>
            </div>

            <div className="slides">
                <Slide easing="ease">
                    
                    
                    <div className="each-slide">
                        <div className="backimage">
                            <img id="panacanal" src={panaCanal} alt="panacanal"/> 
                        </div>
                        
                           <p>
                                PANAMA CANAL:
                                Visited the Panama Canal and learned 
                                about how the canal improved the transportation
                                from the east and west coast of North America. 
                            </p> 
                            
                    </div>
                    <div className="each-slide">
                        <div className="backimage">
                            <img id="pana" src={slideImages[2]} alt="panacanal"/> 
                        </div>
                        <p>PANAMA RAIN FOREST: Visited the Panama rain forest where I worked
                            along side the National Smithsonian to improve wild life. 
                        </p>
                    </div>

                    <div className="each-slide">
                        <div className="backimage">
                            <img id="israel" src={slideImages[3]} alt="israel"/> 
                        </div>
                        <p>JERUSALEM, ISRAEL: Visited Jerusalem, Isreal and learned about
                            the cities religious history. 
                        </p>
                    </div>
                    <div className="each-slide">
                        <div className="backimage">
                            <img id="israelmo" src={slideImages[4]} alt="israelmo"/> 
                        </div>
                        <p>TEL AVIV, ISRAEL: Explored the city with my sister and enjoyed
                            learning more about the citizen's culture and indulging in delicious 
                            food.
                        </p>
                    </div>

                    <div className="each-slide">
                        <div className="backimage">
                            <img id="norway" src={slideImages[0]} alt="norway"/> 
                        </div>
                        <p>NORWAY: Partnered with a Norwegian high school and learned about 
                            the countries government system and cultures/traditions. 
                        </p>
                    </div>

                </Slide>
            </div>

            <div className="meMusic">
                <MyMusic/>
            </div>
        </div>
    )
}

export default Me;
