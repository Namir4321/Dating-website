import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Circlecard.css';

function Circlecard () {
return(
    <>
    <div className="heading" style={{marginTop:'60px'}}>
    <h3 style={{fontSize:'23px',fontWeight:'700'}}>How Bieno.fr : Love Chat - Love Cam Chat Works</h3>
    <h2 style={{fontWeight:'700'}}>You’re Just 3 Steps Away From A Great Date</h2>
    </div>
    <div className="container">
    <div className="container-lg main">
   <div className="row rowone">
   <div className="col-4 nail ">
   <div className="container one">
   <div className="container top">
   <h6 style={{paddingTop:'10px'}} >Step</h6>
   <h6 style={{paddingTop:'-10px'}}>01</h6>
   </div>
   <img src= '	https://bieno.fr/themes/love/assets/images/work/03.png' /> 
   <div className="des">
   <h5 style={{paddingTop:'20px'}}>Create Account</h5>
   </div>
   <p>Register for free & create up your good looking Profile.</p>
   </div> 
   </div>
   <div className="col-4 nail ">

   <div className="container one">
   <div className="container top">
   <h6 style={{paddingTop:'10px'}} >Step</h6>
   <h6 style={{paddingTop:'-10px'}}>01</h6>
   </div>
   <img src= '	https://bieno.fr/themes/love/assets/images/work/02.png' /> 
   <div className="des">
   <h5 style={{paddingTop:'20px'}}>Find Matches</h5>
   </div>
   <p>Search & Connect with Matches which are perfect for you.</p>
   </div>

   </div>
   <div className="col-4 nail">
   
   <div className="container one">
   <div className="container top">
   <h6 style={{paddingTop:'10px'}} >Step</h6>
   <h6 style={{paddingTop:'-10px'}}>01</h6>
   </div>
   <img src='https://bieno.fr/themes/love/assets/images/work/01.png' /> 
   <div className="des">
   <h5 style={{paddingTop:'20px'}}>Start Dating</h5>
   </div>
   <p>Start doing conversations and date your best match</p>
   </div>
   
   </div>
   </div>
   </div>
   </div>
   </>
)
}
export default Circlecard;