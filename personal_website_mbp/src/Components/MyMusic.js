import React from 'react'
import './styles/MyMusic.css'
import guitarpng from './styles/photos/guitarpng.png'
import trumpetpng from './styles/photos/trumpetpng.png'
import pianopng from './styles/photos/pianopng.png'
import lemonade from './styles/photos/lemonade.png'
import laurynhill from './styles/photos/laurynhill.jpg'
import her from './styles/photos/HER.jpg'
import {AiFillCustomerService} from "react-icons/ai"


const MyMusic = () => {
        return (
            <div className="myMusic">
                <h1>MUSIC</h1>
               <div className="all-music">
                   
                   <div className="fav-artist">
                        <h2> Favorite Artist:</h2>
                        <div className="lemonade">
                            <div><img id="lemonade" src={lemonade}/></div>
                            <p>BEYONCE!</p>
                        </div>
                        <div className="lauryn">
                            <div><img id="lauryn" src={laurynhill}/></div>
                            <p>Lauryn Hill</p>
                        </div>
                        <div className="her">
                            <div><img id="her" src={her}/></div>
                            <p>H.E.R.</p>
                        </div>

                   </div>
                   <div className="instruments">
                        <h2>Instruments and the songs I love to play:</h2>
                        
                        <div className="guitar-box">
                            <img id="guitarpng" src={guitarpng}/>
                            <p>All Along the Watch Tower- Jimi Hendrix</p>
                        </div>

                        <div className="trumpet-box">
                            <img id="trumpetpng" src={trumpetpng}/>
                            <p>Feels So Good- Chuck Mangione</p>
                        </div>
                        <div className="piano-box">
                            <img id="pianopng" src={pianopng}/>
                            <p></p>
                        </div>
                        
                   </div>
               </div>
            </div>
        )
    }



export default MyMusic;
