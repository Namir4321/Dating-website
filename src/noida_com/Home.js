import React from "react";
import './Style.css'

import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import First_card from "./First_card";
const Home =()=>{
    return(
        <>
        
    <div className="Home_main_container" style={{backgroundColor:'#fff3f3',height:'100vh'}}>
        <div >
           <div className="home_box">
            {/* dill */}
           <div className="home_image_image" >
            </div>

            <div ><br/><br/><br/>
         
            <h3 style={{padding:'10px'}}>Meet new and interesting people.</h3>
            <h6 style={{padding:'10px'}}>Join Bieno.fr, Love Chat-Love Cam Chat, where you could meet anyone, anywhere!</h6>
            </div>

               <div >
                        <p style={{display:'inline' , marginLeft:'15px'}}>  I am a :</p>
                        <select style={{width:'10rem',float:'right', marginRight:'15px', border:'0px '}} >
                      
                            <option  value='male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                    </div><br/>


                    <div >
                        <p style={{display:'inline', marginLeft:'15px'}}> I'm looking for a:</p>
                        <select style={{width:'10rem',float:'right', marginRight:'15px', border:'0px '}} >
                      
                            <option  value='male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                    </div><br/>

                    {/* ----------------------------------------------age---------------- */}
                    <div >
                        <p style={{display:'inline', marginLeft:'15px'}}>Ages:</p>
                        <select style={{width:'4rem',float:'right', marginRight:'15px' , border:'0px '}} >
                      
                           
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


                        <select style={{width:'4rem',float:'right', border:'0px '}} >
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
                    </div><br/><br/><br/><br/>


                       {/* ----------------------------------------------age---------------- */}
                  
            <div className="button_box_last">
            < Link to='/Sahil' className="link_navbar" style={{color:'#210053', textDecoration:'none', marginLeft:'5rem'}}>LET'S BEGIN</Link>

            </div>


           </div>
           

           <div  className="home_image">
           <img style={{display:'inline',height:'100vh'}} src="https://bieno.fr/themes/love/assets/images/banner/01.png"/>
           </div>

           {/* <div className="home_image_image_second" >
            </div> */}
        </div><br/>
        
        
</div>

        {/* --------------------------------------------hhhhhhhhhhh---------------- */}

        <First_card/>
        </>
    )
}
export default Home;