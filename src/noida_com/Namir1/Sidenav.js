import React from 'react';
import Css from './Sidenav.css';
import { FaFacebookSquare} from 'react-icons/fa';
import { AiFillTwitterCircle ,AiFillInstagram,AiFillLinkedin } from "react-icons/ai";
function Sidenav(){
return(
    <>    
    <div className='container intrests'>
    <h4>Interests</h4>
    <p className='para'></p>
    </div>
<div className='social'>
<div className='container '>
<div className='container row'style={{justifycontent:'center'}}>
<div className='col-6 socialicon'style={{justifyContent:'center',marginTop:'-15px'}}><FaFacebookSquare/></div>
<div className='col-6'style={{justifyContent:'center'}}>Facebook</div>
</div>
</div>
<div className='container '>
<div className='container row'style={{justifyContent:'center'}}>
<div className='col-6 socialicon'style={{justifyContent:'center',marginTop:'0px'}}> <AiFillTwitterCircle/> </div>
<div className='col-6'style={{justifyContent:'center',marginTop:'15px'}}>Twitter</div>
</div>
</div>
<div className='container '>
<div className='container row'>
<div className='col-6 socialicon'style={{justifyContent:'center'}}><AiFillInstagram/></div>
<div className='col-6'style={{justifyContent:'center',marginTop:'15px'}}>instagram</div>
</div>
</div>

<div className='container '>
<div className='container row'>
<div className='col-6 socialicon'style={{justifyContent:'center',marginTop:'0px'}}><AiFillLinkedin/></div>
<div className='col-6'style={{justifyContent:'center',marginTop:'15px'}}>linkden</div>
</div>
</div>
</div>
    </>

)
};
export default Sidenav;