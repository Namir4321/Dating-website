import React from "react";
import './Style.css'
import Homelpage from "./Sahil_f1";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import First_card from "./First_card";
import App_second from "./Namir1/App_second";
import Success_stories from './Success_stories';
import Third_card from "./Third_card";
import Second_card from "./Second_card";
const Home =()=>{
    return(
        <>
       <div className="container-fluid"style={{marginTop:"0rem",fontSize:'10px'}}>
       <div className="row"style={{backgroundColor:' #fff3f3'}}>
       <div className="col-lg-4 col-sm-12 "style={{backgroundColor:'#fff3f3' }}>
     
 {/**first heart */}
 <div className="container-fluid heart_2"style={{backgroundColor:'red',width:'0px',height:'0px',float:'inline-start',left:'10%',position:'relative'}}>
 <img src="https://bieno.fr/themes/love/assets/images/banner/shape-top.png"alt=""/>
 </div>
 
 {/**first heart */}
  {/* box*/ }
       <div className="container-fluid"style={{paddingBottom:'2px'}}>

       <div className="container box"style={{paddingTop:'3rem',marginLeft:'1px',lineheight: '30px',maxWidth:'420px'}}>
       
       <div className="container-fluid">
       <div className="row">
       <div className="col-12">
       <h3 style={{fontSize:'2rem',wordSpacing:'2px'}}>Meet new and interesting people.</h3>

       </div>
       <div className="col-12">
       <h5 className="join" style={{lineHeight:'30px',wordSpacing:'2px'}}>Join Bieno.fr, Love Chat-Love Cam Chat, where you could meet anyone, anywhere!</h5>
   
       </div>
       </div>
       </div>
 


       {/*gender */}
      <div className="container-fluid"style={{paddingtop:'20px'}}>
      <div className="row">
      <div className="col-6">
      <p style={{display:'inline',padding:'20px',fontSize:'medium' }}>  I am a :</p>
      </div>
      <div className="col-6">
      <select style={{width:'8rem',float:'right', marginRight:'15px',marginBottom:'15px', border:'0px',fontSize:'small'}} >
     
      <option  value='male'>Male</option>
      <option value='Female'>Female</option>
      </select>
      </div>
      </div>
      </div>
   {/*gender */}
      {/*partner */}
   <div className="container-fluid"style={{paddingTop:'20px'}}>
   <div className="row">
   <div className="col-6">
   <p style={{display:'inline',fontSize:'medium',padding:'18px'}}> I'm looking for a:</p>
      </div>
   <div className="col-6" >
   <select style={{width:'8rem',float:'right', marginRight:'15px', border:'0px ',fontSize:'small',marginBottom:'15px'}} >
 
   <option style={{width:'20px'}} value='male'>Male</option>
   <option value='Female'>Female</option>
</select>
   </div>
   </div>
   </div>
   {/*partner */}
                      {/* ----------------------------------------------age---------------- */}
                      <div className="container-fluid"style={{paddingTop:'20px'}}>
                      <div className="row">
                      <div className="col-6">
                      <p style={{display:'inline',fontSize:'medium',padding:'20px'}}>Ages:</p>
                      </div>
                      <div className="col-6"style={{textAlign:'center'}}>
                    
                    
                    
                    
                    
                      <div className="container-fluid">
      <div className="row g-0">
      <div className="col-6"style={{padding:'0px',marginbottom:'10px'}}>
      <select style={{width:'4rem' , border:'0px',fontSize:'medium'}} >
                    
                         
      <option value='18'>18</option>
      <option value='19'>19</option>
      <option value='20'>20</option>
      <option value='21'>21</option>
      <option value='22'>22</option>
      <option value='23'>23</option>
      <option value='24'>24</option>
      <option value='25'>25</option>
      <option value='26'>26</option>
      <option value='27'>27</option>
      <option value='28'>28</option>
      <option value='29'>29</option>
      <option value='30'>30</option>
      <option value='31'>31</option>
      <option value='32'>32</option>
      <option value='33'>33</option>
      <option value='34'>34</option>
      <option value='35'>35</option>
      <option value='36'>36</option>
      <option value='37'>37</option>
      <option value='38'>38</option>
      <option value='39'>39</option>
      <option value='40'>40</option>
      <option value='41'>41</option>
      <option value='42'>42</option>
      <option value='43'>43</option>
      <option value='44'>44</option>
      
  </select>

      
      
      </div>
      <div className="col-6"style={{padding:'0px',margin:'0px'}}>
      <select style={{width:'5rem', border:'0px ',fontSize:'medium'}} >
      <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
          <option value='21'>21</option>
          <option value='22'>22</option>
          <option value='23'>23</option>
          <option value='24'>24</option>
          <option value='25'>25</option>
          <option value='26'>26</option>
          <option value='27'>27</option>
          <option value='28'>28</option>
          <option value='29'>29</option>
          <option value='30'>30</option>
          <option value='31'>31</option>
          <option value='32'>32</option>
          <option value='33'>33</option>
          <option value='34'>34</option>
          <option value='35'>35</option>
          <option value='36'>36</option>
          <option value='37'>37</option>
          <option value='38'>38</option>
          <option value='39'>39</option>
          <option value='40'>40</option>
          <option value='41'>41</option>
          <option value='42'>42</option>
          <option value='43'>43</option>
          <option value='44'>44</option>
      </select>


      </div>
      </div>
      </div>

                      
                     
   
                      </div>
                      </div>
                      </div>
                  {/**age */}
                  <div className="container"style={{textAlign:'center',padding:'1cm'}}>
                  <button className="  button_box_last"style={{textAlign:'center',width:'100%'}}>Let's Begin</button>
                  </div>
                  {/**first heart */}
 <div className="container-fluid heart_2"style={{backgroundColor:'red',width:'0px',height:'0px',float:'inline-end',right:'70%',position:'relative'}}>
 <img src="https://bieno.fr/themes/love/assets/images/banner/shape-top.png"alt=""/>
 </div>
 
 {/**first heart */}
                  </div> 



</div>
{/*box*/ }
       </div>
 {/**main image */}
       <div className="col-lg-8 col-sm-12 "style={{}}>
       <div className="container main_image "style={{}}>
       <img style={{}} src="https://bieno.fr/themes/love/assets/images/banner/01.png"className="img-fluid" />
       </div>
       </div>
{/**main image */}
 
       </div>
       </div>
 <First_card/>
 <Second_card/>
 
     <Homelpage/>
 
       
        </>
    )
}
export default Home;