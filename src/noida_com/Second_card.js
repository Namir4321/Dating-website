import React from "react";
import Card from 'react-bootstrap/esm/Card'
import Button from "react-bootstrap/esm/Button";
import Third_card from "./Third_card";
const Second_card =()=>{
    return(
        <>
        <div className="container-fluid"style={{textAlign:'center'}}>
        <div className="row">
        <div className="container"style={{paddingTop:'20px',textAlign:'center'}}>
        
        <div className="Second_h2_h1">
        <h4 >About Our bieno.fr</h4><br/>
    
</div>
<div className="Second_h2_h1">
        <h1 >It All Starts With A Date</h1><br/>
    
</div>


        </div>
        <div className="col-lg-4 col-sm-12"style={{justifycontent:'center'}}>
        
        <div className="second_card" style={{display:'flex',justifyContent:'center',textAlign:'center'}}>
    
                
        <div className="click" style={{margin:'2rem' ,boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        <Card style={{ padding:'10px',display:'inline-block' }}>
                        <Card.Img variant="top" src="https://bieno.fr/themes/love/assets/images/story/01.jpg"className="click" />
                        <Card.Body>
                            <Card.Title style={{color:'#210053',padding:'5px',textAlign:'center'}}>Image Post...</Card.Title>
                            <Card.Text style={{fontSize:'15px',paddingTop:'15px',textAlign:'center'}}
                    >Seamlesly evolve unique web-readiness with Collabors atively fabricate best of breed and apcations through
                                         </Card.Text>
                        
                        </Card.Body>
                        </Card>
                        </div>
        

        </div>
        </div>
        <div className="col-lg-4 col-sm-12">
        <div className=" click" style={{margin:'2rem' ,boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
        <Card style={{ padding:'10px',display:'inline-block'}}>
        <Card.Img variant="top" src="https://bieno.fr/themes/love/assets/images/story/02.jpg" className="click"/>
        <Card.Body>
            <Card.Title style={{color:'#210053',padding:'5px'}}>Image Post...</Card.Title>
            <Card.Text style={{fontSize:'15px',paddingTop:'15px'}}>
            Seamlesly evolve unique web-readiness with Collabors atively fabricate best of breed and apcations through
                       </Card.Text>
        
        </Card.Body>
        </Card>
        </div>
        
        </div>
        <div className="col-lg-4 col-sm-12 ">
 
                        <div className="click" style={{margin:'2rem' ,boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        <Card style={{ padding:'10px',display:'inline-block',float:'left' }}>
                        <Card.Img variant="top" src="https://bieno.fr/themes/love/assets/images/story/03.jpg"className="click" />
                        <Card.Body>
                            <Card.Title style={{color:'#210053',padding:'5px'}}>Image Post...</Card.Title>
                            <Card.Text style={{fontSize:'15px',paddingTop:'15px'}}>
                            Seamlesly evolve unique web-readiness with Collabors atively fabricate best of breed and apcations through
                                      </Card.Text>
                        
                        </Card.Body>
                        </Card>
                        </div>
                        
       
        
        </div>
        </div>
        </div>
        
<Third_card/>
    
        </>
    )
}
export default Second_card;