import React from 'react';
import One from './One';
import Circlecard from './Circlecard';
import '../Namir1/App_Second.css'
const App_second = (props) => {
return(
    <>
    <div className='container heading'>
    <h5>What our Customers Say</h5>
    <h2>Client’s Feed back Latest Reviews From My  Bieno.fr</h2>
    </div>
    
  <One
  img="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
  name="jessica"
  text="I am looking for new acquaintances on the site for a month or so and I like it very much. I have faced no glitches or troubles yet. Pretty satisfied."
 />
 <One
 img="https://images.pexels.com/photos/638700/pexels-photo-638700.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
 name="Pearl"
 text="Hey, if u seek ways to meet & d8 pretty fems livin nearby, this way! I have met a dozen of cute locals via this site. Its no big deal to use it. Good design, simple navigation. Awesome! "
/>
<One
 img="https://images.pexels.com/photos/531139/pexels-photo-531139.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
 name="KELLIE"
 text="I like the site because its not a bot site, the profiles are varied and lively. I regularly meet local women through this service."
/>
<Circlecard/>
  </>
  
)
};
export default App_second;