import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/signup/Signup';
import './app.css'
import Home from './pages/home/Home';
import Dashboard from './pages/user-dashboard/Dashboard';
import Signin from './pages/signin/Signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/dashboard' element={<Dashboard/>}></Route>
        <Route exact path='/login' element={<Signin/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
