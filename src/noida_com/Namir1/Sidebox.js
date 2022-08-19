import React from 'react';
import css from './Sidebox.css';
function Sidebox () {
    return(
        <>
<div className='.container sticky'>
<div className='container row profile'>Profile</div>
<div className='container row aboutnow'>About</div>
<div className='container row blog'>Blog </div>
<div className='container row projects'>Project</div>
<div className='container row contact'>Contact</div>
</div>        
        </>
    )
};
export default Sidebox;