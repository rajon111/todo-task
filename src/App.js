import './App.css';
import Login from './pages/Login/Login';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import SignUp from './pages/Login/SignUp';
import Navbar from './pages/Shared/Navbar';
import Todo from './pages/Todo/Todo';

function App() {
  return (
    <div>
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/todo' element={<Todo></Todo>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
    </Routes>
    </div>
  );
}

export default App;
