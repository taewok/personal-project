/* eslint-disable react/jsx-pascal-case */
import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import Home_Login from './component/Home_Login';
import IdConfirm from "./component/IdConfirm";
import PhoneConfirm from "./component/PhoneConfirm";
import PwdConfirm from "./component/PwdConfirm";
import PwdReset from "./component/PwdReset";
import Register from "./component/Register";
import ToDoList from "./component/ToDoList";
import "./css/App.css"

function App() {
  return (
    <BrowserRouter>
    <h1 className="Home_Login_title"><Link to="/" className="Home_Login_title">To Do List</Link></h1>
    <Routes>
      <Route path='/' element={<Home_Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/ToDoList' element={<ToDoList/>}/>
      <Route path='/IdConfirm' element={<IdConfirm/>}/>
      <Route path='/PhoneConfirm' element={<PhoneConfirm/>}/>
      <Route path='/PwdConfirm' element={<PwdConfirm/>}/>
      <Route path='/PwdReset' element={<PwdReset/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
