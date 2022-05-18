import './App.css';
import Login from './pages/Login/Login';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import SignUp from './pages/Login/SignUp';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
    </Routes>
    </div>
  );
}

export default App;
