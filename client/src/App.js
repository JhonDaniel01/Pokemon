import './App.css';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {Route } from 'react-router-dom'
import Home from './views/home/Home';
import Create from './views/create/Create';
import Detail from './views/detail/Detail';
import Landing from './views/landing/Landing';
import Navbar from './components/navbar/Navbar';
//import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  //location=useLocation();  
  //{location.pathname!=="/" && <NatBar/>}   
  return (
    <div className="App">
      <Route exact path="/" render={()=><Landing/>}/>
      <Route exact path="/home" render={()=><Home/>}/>
      <Route path="/home/:id" render={()=><Detail/>}/>
      <Route path="/create" render={()=><Create/>}/>
      
    </div>
  );
}

export default App;
