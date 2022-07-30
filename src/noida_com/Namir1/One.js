import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Namir1/One.css'
function One  (props) {
return(
    <>
      <div className='container-sm how'>
    <div class="card">
       <div class="card-body">
       <img src={props.img} class="card-img" alt="..."/>
      <p class="card-text">{props.text}</p>
      <h5 class="card-title">{props.name}</h5>
      </div>
  </div>
  </div>
    
    
    </>
)
};
export default One;