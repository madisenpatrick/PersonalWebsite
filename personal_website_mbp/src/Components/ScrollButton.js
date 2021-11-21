import React, {useState} from 'react'; 
import {FaArrowCircleDown} from 'react-icons/fa'; 
import { Button } from './styles/Button.js'; 

    
const ScrollButton = () =>{ 
    
  const [visible, setVisible] = useState(true) 
    
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 0){ 
      setVisible(false) 
    }  
    else if (scrolled <= 0){ 
      setVisible(true) 
    } 
  }; 
    
  const scrollToBottom = () =>{ 
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'auto'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
    
  window.addEventListener('scroll', toggleVisible); 
    
  return ( 
    <div className ='button'>
    <Button> 
     <FaArrowCircleDown onClick={scrollToBottom}  
     style={{display: visible ? 'inline' : 'none'}} /> 
    </Button> 
    </div>
  ); 
} 
    
export default ScrollButton;