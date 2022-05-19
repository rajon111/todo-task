import './App.css';
import Login from './pages/Login/Login';
import { Routes, Route } from "react-router-dom";
import SignUp from './pages/Login/SignUp';
import Navbar from './pages/Shared/Navbar';
import Todo from './pages/Todo/Todo';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer} from 'react-toastify';
import NotFound from './pages/Shared/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<RequireAuth><Todo></Todo></RequireAuth>}></Route>
      <Route path='/todo' element={<RequireAuth><Todo></Todo></RequireAuth>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='/*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
