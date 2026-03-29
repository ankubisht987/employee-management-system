import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddEmployee from './compononts/AddEmployee';
import UpdateEmployee from './compononts/UpdateEmployee';
import EmployeeList from './compononts/EmployeeList';
import Navbar from './compononts/Navbar';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route index element={<EmployeeList/>} />
      <Route path="/" element={<EmployeeList/>} />
      <Route path="/addEmployee" element={<AddEmployee/>} />
      <Route path="/editEmployee/:id" element={<UpdateEmployee/>} />
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
