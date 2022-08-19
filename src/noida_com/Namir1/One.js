import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Namir1/One.css'
function One  (props) {
return(
    <>
      <div className='container-sm how'>
    <div class="card now">
       <div  class="card-body">
       <img src={props.img} class="card-img" alt="..."/>
      <p class="card-text word">{props.text}</p>
      <h5 style={{paddingLeft:'125px',textAlign:'center'}} class="card-title">{props.name}</h5>
      </div>
  </div>
  </div>
    
    
    </>
)
};
export default One;