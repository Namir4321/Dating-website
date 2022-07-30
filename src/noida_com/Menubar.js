import React from "react";
import { Link } from "react-router-dom";
const Menubar =()=>{
    return(
        <>
       
       <div >
          <div style={{backgroundColor:'#fff3f3',color:'#210053', height:'5rem', textDecoration:'none'}} >
            < Link to='/Home' className="link_navbar"  style={{color:'#210053',marginLeft:'10rem',textDecoration:'none'}}>Home</Link>
            < Link to='/Home' className="link_navbar" style={{color:'#210053', textDecoration:'none'}}>Blog</Link>
            < Link to='/Home' className="link_navbar" style={{color:'#210053', textDecoration:'none'}}>Success stories</Link>
            < Link to='/Home' className="link_navbar" style={{color:'#210053', textDecoration:'none'}}>About Us</Link>
            < Link to='/Home' className="link_navbar" style={{color:'#210053', textDecoration:'none'}}>Contact Us</Link>
           
          </div>
        </div>
  
       
        </>
    )
}
export default Menubar;