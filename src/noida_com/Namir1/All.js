import React from "react";
import Profile from './Profile';
import Box from './Box'
import Sidenav from "./Sidenav";
import Sidebox from './Sidebox';
const All =()=>{
    return(
<>
<Profile/>
<div className="container">
<div className="container row">
<div className="col-lg-3 col-sm-12 sidemenu"><Sidenav/></div>
<div className="col-lg-9 col-sm-12 rightmenu"><Box/></div>
</div>
</div>



</>
    )
};
export default All;