import React from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import About_mess from "./About_mess";
const About_us =()=>{
    return(
        <>
       
    <div  >
        <div className="container" >
            <div className="row" >
                <div className="col-12" >
                   <div>
                   <Navbar bg="#fff3f3" expand="lg">
                            <Container>
                                
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    
                                    <Nav.Link href="/Terms_of_use">Terma of use</Nav.Link>
                                    <Nav.Link href="/Previcy_policies">Previcy policies</Nav.Link>
                                    <Nav.Link href="/Developers">Developers</Nav.Link>
                                    
                                    
                                </Nav>
                                </Navbar.Collapse>
                            </Container>
                    </Navbar>
                   </div>
                   <About_mess/>

                </div>

            </div>



          {/* <Terms_of_use/>
          <Previcy_policies/>
            <About_mess/>
            <Developers/>
            <Contact_us/> */}

        </div>
    </div>
        </>
    )
}
export default About_us;



