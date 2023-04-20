
import Navbar from './Components/Navbar'
import  Home from './Components/Home'
import Stock from './Components/Stock'
import { Route, Routes as Switch, } from 'react-router-dom';


const Routing = () => {

  return (
    <Switch>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/stock" element={<Stock />} />
    </Switch>
  )
}

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routing/> 
    </div>
  );
}

export default App;
