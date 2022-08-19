import React from "react"
import { Link } from "react-router-dom"
const Contact_abu =()=>{
    return(

        <>
         
       
       
           <div style={{ padding:'10rem',backgroundColor:'#fff3f3', marginTop:'-3rem'}} >
          
                            <div style={{display:'inline-block',float:'right'}}>
                                    <input style={{width:'9rem',marginLeft:'-9rem',borderRadius:'15px',border:'0px',height:'3rem',backgroundColor:'rgb(0 0 0 / 5%)',padding:'10px'}}  type='text' placeholder="First Name"/>
                                    <input style={{width:'9rem',marginLeft:'-22rem',borderRadius:'15px',border:'0px',height:'3rem',backgroundColor:'rgb(0 0 0 / 5%)',padding:'10px'}}  type='text' placeholder="Last Name"/><br/>
                                    <input style={{width:'22rem',marginTop:"43px",marginLeft:'-22rem',borderRadius:'15px',border:'0px',height:'3rem',backgroundColor:'rgb(0 0 0 / 5%)',padding:'10px'}}  type='text' placeholder="Enter Your Email"/><br/>
                                    <textarea style={{width:'22rem',marginTop:"43px",marginLeft:'-22rem',borderRadius:'15px',border:'0px',height:'9rem',backgroundColor:'rgb(0 0 0 / 5%)',padding:'10px'}}  type='' placeholder="How can we help?"/>

                            </div>


           <h1 style={{display:'inline-block'}}>Contact Us</h1>
           <br/><br/><br/>
                    <div>
                    
                        <img style={{width:'50%',display:'inline-block'}} src="https://bieno.fr/themes/love/assets/img/undraw.svg"/>
                    </div>
                    
            </div>

           
            </>

)
}
export default Contact_abu