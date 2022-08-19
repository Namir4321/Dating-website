// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './noida_com/Home';
import Header from './noida_com/Header';
import Menubar from './noida_com/Menubar';
import Sahil from './noida_com/Sahil'
import Footer from './noida_com/Footer';
import About_us from './noida_com/Gp/About_us';
import Contact_us from './noida_com/Gp/Contact_us';
import About_mess from './noida_com/Gp/About_mess';
import Contact_abu from './noida_com/Gp/Contact_abu';
import Terms_of_use from './noida_com/Gp/Terms_of_use';
import Previcy_policies from './noida_com/Gp/Previcy_policies';
import Developers from './noida_com/Gp/Developers';
import Success_stories from './noida_com/Success_stories';
import All from './noida_com/Namir1/All';
function App() {
  return (
    <>
    <div className='container-fluid'>
   <div className=''>
    <BrowserRouter>
    <Header/>
    <Menubar/>
        <div className=''>
          <div className=''>
       
            <Routes>
            
              <Route path='/home' element={<Home/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path='/All' element={<All/>}/>
              <Route path='/Sahil' element={<Sahil/>}/>
              <Route path='/About_us' element={<About_us/>}/>
              <Route path='/Contact_us' element={<Contact_us/>}/>
              <Route path='/Success_stories' element={<Success_stories/>}/>


              <Route path='/About_mess' element={<About_mess/>}/>
              <Route path='/Contact_abu' element={<Contact_abu/>}/>
              <Route path='/Previcy_policies' element={<Previcy_policies/>}/>
              <Route path='/Developers' element={<Developers/>}/>
              <Route path='/Terms_of_use' element={<Terms_of_use/>}/>

            </Routes>

          </div>
          
        </div>
        
    </BrowserRouter>
  
  </div>
  

   
  <Footer/>
  </div>
  </>
  );
}

export default App;
