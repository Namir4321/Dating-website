import React from "react";
import { Link } from "react-router-dom";
const Header =()=>{
    return(
        <>
                <div className="Header_main">
                   
                        <img style={{display:'inline', marginLeft:'10rem'}} src="https://bieno.fr/themes/love/assets/img/logo.png"/>
                         
                         <button style={{display:'inline', float:'right',border:'0px', backgroundColor:'#df314d',margin:'20px 77px 5px 14px', height:'38px', width:'95px',borderRadius:'6px'}} >
                            < Link to='/Sahil' className="link_navbar" style={{color:'#210053', textDecoration:'none'}}>Register</Link>

                            </button>
                         <button style={{display:'inline', float:'right',border:'0px', backgroundColor:'white',margin:'20px 0px 5px 0px', height:'38px', width:'95px'}} >
                         < Link to='/Sahil' className="link_navbar" style={{color:'#210053', textDecoration:'none'}}>Login</Link>
                          </button>
                        
                           {/* <Button style={{display:'inline' , float:'right', color:'red'}} >Register</Button>                              
                           <Button style={{display:'inline', float:'right'}}  >Login</Button>  */}
                    
                                      
                     </div><br/>
       
        </>
    )
}
export default Header;