import React from "react";
import Card from 'react-bootstrap/esm/Card'
import Button from "react-bootstrap/esm/Button";
import Third_card from "./Third_card";
const Second_card =()=>{
    return(
        <><br/><br/><br/><br/><br/><br/>
                <div className="Second_h2_h1">
                        <h4 >About Our bieno.fr</h4><br/>
                    
                </div>
                <div className="Second_h2_h1">
                        <h1 >It All Starts With A Date</h1><br/>
                    
                </div>

            {/* ---------------------------------------------------------------- */}
<div className="Second_card" style={{display:'flex',justifyContent:'center',borderLeft:'0px slod'}}>
    
                
<div style={{margin:'2rem' ,boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <Card style={{ width: '18rem' ,height:'25rem',display:'inline-block',float:'left'}}>
                <Card.Img variant="top" src="https://bieno.fr/themes/love/assets/images/story/01.jpg" />
                <Card.Body>
                    <Card.Title style={{color:'#210053',padding:'0px'}}>Image Post...</Card.Title>
                    <Card.Text style={{padding:'0px' , marginLeft:'0px'}}>
                    Seamlesly evolve unique web-readiness with Collabors atively fabricate best of breed and apcations through
                    </Card.Text>
                
                </Card.Body>
                </Card>
                </div>

                <div style={{margin:'2rem' ,boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <Card style={{ width: '18rem' ,height:'25rem',display:'inline-block',float:'left'}}>
                <Card.Img variant="top" src="https://bieno.fr/themes/love/assets/images/story/02.jpg" />
                <Card.Body>
                    <Card.Title style={{color:'#210053',padding:'0px'}}>Image Post...</Card.Title>
                    <Card.Text style={{padding:'0px'}}>
                    Seamlesly evolve unique web-readiness with Collabors atively fabricate best of breed and apcations through
                    </Card.Text>
                
                </Card.Body>
                </Card>
                </div>


                <div style={{margin:'2rem' ,boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <Card style={{ width: '18rem' ,height:'25rem',display:'inline-block',float:'left'}}>
                <Card.Img variant="top" src="https://bieno.fr/themes/love/assets/images/story/03.jpg" />
                <Card.Body>
                    <Card.Title style={{color:'#210053',padding:'0px'}}>Image Post...</Card.Title>
                    <Card.Text style={{padding:'0px'}}>
                    Seamlesly evolve unique web-readiness with Collabors atively fabricate best of breed and apcations through
                    </Card.Text>
                
                </Card.Body>
                </Card>
                </div>
</div>

<Third_card/>
    
        </>
    )
}
export default Second_card;