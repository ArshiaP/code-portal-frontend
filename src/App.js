import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/signup/Signup';
import './app.css'
import Home from './pages/home/Home';
import Component2 from './pages/home-component2/Component2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
