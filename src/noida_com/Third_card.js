import React from "react";
import Card from 'react-bootstrap/esm/Card'
import App_second from "./Namir1/App_second";
const Third_card =()=>{
    return(
        <><br/><br/>
        <div className="third_main_container">
                <div className="Second_h2_h1">
                        <h4 >Love in Faith Success Stories</h4><br/>
                    
                </div>
                <div className="Second_h2_h1">
                        <h1 >Sweet Stories From Our Lovers</h1><br/>
                    
                </div>

            {/* ---------------------------------------------------------------- */}
<div className="Second_card" style={{display:'flex',justifyContent:'center'}}>
    
                
            <div style={{margin:'2rem',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <Card style={{ width: '15rem' ,height:'25rem',display:'inline-block',float:'left'}}>
                <Card.Img style={{ padding:'2rem'}} variant="top" src="	https://bieno.fr/themes/love/assets/images/about/01.png" />
                <Card.Body>
                    <Card.Title><h2  style={{display:'flex', alignItems:'center',justifyContent:'center' ,color:'#210053'}}>29,991</h2></Card.Title>
                    <Card.Text style={{padding:'0px' , marginLeft:'0px'}}>
                  <h6>Members in Total</h6>
                    </Card.Text>
                
                </Card.Body>
                </Card>
            </div>
                
            <div style={{margin:'2rem',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <Card style={{ width: '15rem' ,height:'25rem',display:'inline-block',float:'left'}}>
                <Card.Img style={{ padding:'2rem'}} variant="top" src="https://bieno.fr/themes/love/assets/images/about/02.png" />
                <Card.Body>
                    <Card.Title><h2  style={{display:'flex', alignItems:'center',justifyContent:'center' ,color:'#210053'}}>29,960</h2></Card.Title>
                    <Card.Text style={{padding:'0px' , marginLeft:'0px'}}>
                    <h6>Members Online</h6>
                    </Card.Text>
                
                </Card.Body>
                </Card>
            </div>
                
            <div style={{margin:'2rem' ,boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <Card style={{ width: '15rem' ,height:'25rem',display:'inline-block',float:'left'}}>
                <Card.Img style={{ padding:'2rem'}} variant="top" src="	https://bieno.fr/themes/love/assets/images/about/03.png" />
                <Card.Body>
                    <Card.Title><h2  style={{display:'flex', alignItems:'center',justifyContent:'center' ,color:'#210053'}}>29,960</h2></Card.Title>
                    <Card.Text style={{padding:'0px' , marginLeft:'0px'}}>
                    <h6>Men Online</h6>
                    </Card.Text>
                
                </Card.Body>
                </Card>
            </div>
                
            <div style={{margin:'2rem' ,boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                
                <Card  style={{ width: '15rem' ,height:'25rem',display:'inline-block',float:'left'}}>
                <Card.Img style={{ padding:'2rem'}} variant="top" src="	https://bieno.fr/themes/love/assets/images/about/04.png" />
                <Card.Body>
                    <Card.Title><h2  style={{color:'#210053', marginLeft:'0px'}} >28,960</h2></Card.Title>
                    <Card.Text style={{padding:'0px' , marginLeft:'0px'}}>
                    <h6>Women Online</h6>
                    </Card.Text>
                
                </Card.Body>
                </Card>
            </div>
                

</div>

</div>


<App_second/>
    
        </>
    )
}
export default Third_card;