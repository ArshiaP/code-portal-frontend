import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/signup/Signup';
import './app.css'
import Home from './pages/home/Home';
import Dashboard from './pages/user-dashboard/Dashboard';
import Signin from './pages/signin/Signin';
import Editor from './pages/editor/Editor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/dashboard' element={<Dashboard/>}></Route>
        <Route exact path='/login' element={<Signin/>}></Route>
        <Route exact path='/code' element={<Editor/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
