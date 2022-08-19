import React from 'react';
import Css from './profile.css';
function Profile(){
return(
    <>
    <div className='container mainp'>
    <div className='container data'>
    <div className='container row'>
    <div className=' col-lg-4 col-sm-12 images '>
    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" class="img-fluid photo" alt="..."></img>

    </div>
    <div className='col-lg-8 col-8 col-sm-12 name'><h1>Sophia,19</h1>
    <p>California</p>
    </div>
    </div>
    </div>
    </div>
    
    </>
)
};
export default Profile;
