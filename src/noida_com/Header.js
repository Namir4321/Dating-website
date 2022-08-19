import React from "react";
import { Link } from "react-router-dom";
import './header.css';
const Header =()=>{
 
  return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light  sticky-top"style={{backgroundColor:' '}}>
        <div class="container-fluid">
<a class="navbar-brand" href="#"> < Link to='/Home' className="link_navbar"><img src="https://bieno.fr/themes/love/assets/img/logo.png" alt="" width="80" height="34" class="d-inline-block align-text-top"/></Link>
          
          </a>        
  <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar" ></span>
            <span class="toggler-icon bottom-bar"></span>           
          </button>
          <div class="collapse navbar-collapse text-center " id="navbarNav" >
            <ul class="navbar-nav ">
              <li class="nav-item ">
              <a class="nav-link" href="#">< Link to='/Home' className="link_navbar"  style={{color:'#210053',marginLeft:'0rem',textDecoration:'none'}}>Home</Link> </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> < Link to='/All' className="link_navbar" style={{color:'#210053', textDecoration:'none'}}>Blog</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">  < Link to='/Success_stories' className="link_navbar" style={{color:'#210053', textDecoration:'none'}}>Success stories</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
                < Link to='/About_us' className="link_navbar" style={{color:'#210053', textDecoration:'none'}}>About Us</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"> < Link to='/Contact_us' className="link_navbar" style={{color:'#210053', textDecoration:'none'}}>Contact Us</Link>
                </a>
              </li>
              </ul>
          </div>
        </div>
      


  <div class="container-fluid">
        <div class="collapse navbar-collapse justify-content-end text-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
          <a class="nav-link" href="#">
          <button className="btn" style={{border:'none'}} >
            < Link to='/Sahil' className="link_navbar" style={{color:'#210053', textDecoration:'none'}}>Login</Link>
             </button></a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#">
          <button  className="btn" style={{border:'0px', backgroundColor:'#df314d'}} >
          < Link to='/Sahil' className="link_navbar" style={{color:'#210053', textDecoration:'none'}}>Register</Link>
          </button> </a>
          </li>
          </ul>
          </div>
        </div>
        </nav>
      
        </>
    )
}
export default Header;







