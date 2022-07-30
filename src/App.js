// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './noida_com/Home';
import Header from './noida_com/Header';
import Menubar from './noida_com/Menubar';
import Sahil from './noida_com/Sahil'
function App() {
  return (
    <>
    
   <div className=''>
    <BrowserRouter>
    <Header/>
    <Menubar/>
        <div className=''>
          <div className=''>
       
            <Routes>
              <Route path='/Home' element={<Home/>}/>
             <Route path='/Sahil' element={<Sahil/>}/>
            </Routes>

          </div>
        </div>
    </BrowserRouter>
  </div>

   
 
    </>
  );
}

export default App;
