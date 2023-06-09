import './App.css';
import {Route } from 'react-router-dom'
import Home from './views/home/Home';
import Create from './views/create/Create';
import Detail from './views/detail/Detail';
import Landing from './views/landing/Landing';

//import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  //location=useLocation();  
  //{location.pathname!=="/" && <NatBar/>}   
  return (
    <div className="App">
      <Route exact path="/" render={()=><Landing/>}/>
      <Route exact path="/home" render={()=><Home/>}/>
      <Route path="/create" render={()=><Create/>}/>
      <Route path="/home/:id" render={()=><Detail/>}/>
      
    </div>
  );
}

export default App;
