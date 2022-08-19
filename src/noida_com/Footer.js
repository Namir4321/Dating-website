import React from "react";
const Footer =()=>{
    return(
        <>
     <div className="container-fluid">
     <div className=" row">
     <div className="container col-lg-4 col-sm-12" style={{padding:'1cm',textAlign:'center'}}>
     
     <  img className="img-fluid" src="	https://bieno.fr/themes/love/assets/images/footer/icons/01.png"/>
     <h6 > Phone Number : +880123 456 789</h6>


     </div>
     <div className="container col-lg-4 col-sm-12" style={{padding:'1cm',textAlign:'center'}}>
     
     <  img className="img-fluid" src="https://bieno.fr/themes/love/assets/images/footer/icons/02.png"/>
     <h6 style={{textAlign:'center'}}> Email : contact@Bieno.fr</h6>
     
     
     </div>
     <div className="container col-lg-4 col-sm-12" style={{padding:'1cm',textAlign:'center'}}>
     
     <img  className=" img-fluid" style={{}} src="https://bieno.fr/themes/love/assets/images/footer/icons/03.png"/>
            <h6 > Address : 30 North West New York 240</h6>
      
     
     </div>
     </div>
     </div>
     <div className="container-fluid"style={{backgroundColor:'black', padding:'.5cm', marginTop:'0rem',margin:'0px'}}>
     <div className="row"style={{margin:'0px',padding:'0px'}}>
     <div className="col-lg-6 col-sm-12" style={{textAlign:'center'}}>
     <h6  style={{ color:'white'}}> Copyright © 2022 Bieno.fr. All rights reserved.</h6>
      </div>
     <div className="col-lg-6 col-sm-12" style={{textAlign:'center'}}> <h6  style={{color:'white',textAlign:'center' }}> - Terms - Privacy Policy - Contact  </h6>
     </div>
     
     </div>
     </div>
        </>
    )
}
export default Footer