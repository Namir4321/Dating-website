import React from "react";
import { Link } from "react-router-dom";
import About_us from "./About_us";
const Contact_us =()=>{
    return(

        <>
        <div className="container" style={{backgroundColor:'#fff3f3', marginTop:'3rem',borderRadius:'20px',padding:'20px'}}>
        <div className="row">
         <h1>Contact Us</h1> 
        <div className="col-lg-6 col-sm-12"style={{marginBottom:'20px',marginTop:'100px'}}>
        
        
        <img style={{width:'70%',display:'inline-block'}} src="https://bieno.fr/themes/love/assets/img/undraw.svg"/>
                   

        </div>
        <div className="col-lg-6 col-sm-12">
        
        <div class="row">
        <div class="col">
          <input type="text" class="form-control " placeholder="First name" aria-label="First name"style={{borderRadius:'10px'}}/>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"style={{borderRadius:'10px'}}/>
        </div>
      </div> 
      <div class="form-floating mb-3"style={{marginTop:'10px'}}>
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"style={{borderRadius:'10px'}}/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"style={{height:'90px',borderRadius:'10px'}}></textarea>
    <label for="floatingTextarea">How can we help</label>
  </div>
  <button className='btn' style={{backgroundColor:'#df314d',width:'100px',borderRadius:'15px',marginTop:'10px',padding:'8px'}}>Send</button>
    </div>
      </div>
        </div>
        
     
           
            </>

)
}
export default Contact_us