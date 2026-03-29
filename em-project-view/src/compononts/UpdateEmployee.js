import React, {useState , useEffect} from 'react'
import {useNavigate ,  useParams} from "react-router-dom";
import  EmployeeService from '../service/EmployeeService';

const UpdateEmployee = () => {

    const {id} =useParams();
      const navigate = useNavigate();
  const [employee, setEmployee] = React.useState({
    id : id,
    name: "",
    phone: "",
    email: ""
  }); 

  const handelChange = (e) => {
    const value = e.target.value;
    setEmployee({...employee, [e.target.name]: value});
  }

  useEffect(()=> {
      const fetchData = async () =>{
        try {
          const response = await EmployeeService.getEmployeeById(employee.id);
          setEmployee(response.data);
        }
        catch(error){
          console.log(error);
        }
      };  
      fetchData();
    }, [])

  const updateEmployee = (e) =>{
    e.preventDefault();
    EmployeeService.updateEmployee(employee,id)
    .then((response) => {
      console.log("save",response);
      navigate("/");
    })
    .catch((error) =>{
      console.log(error)
    })
  }


  return (
    <div className ='max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8'>
      <div className='text-4xl tracking-wider font-bold text-center py-4 px-8'>
        <p>Update Employee</p>
      </div>
       <div className='mx-10 my-2'>
      <input 
      type='text'
      name='name'
      value = {employee.name}
      onChange={(e)=> handelChange(e)}
      className='w-full py-2 my-4 text-slate-800'  placeholder='Name'></input>
      <input 
      type='number'
      name='phone'
      value = {employee.phone}
      onChange={(e)=> handelChange(e)}
      className='w-full py-2 my-4 text-slate-800' placeholder='Phone'></input>
      <input 
      type='email'
      name='email'
      value = {employee.email}
      onChange={(e)=> handelChange(e)}
      className='w-full py-2 my-4 text-slate-800' placeholder='Email' required></input>
      </div>
       <div className='flex my-4 space-x-4 px-20'>
      <button 
      onClick={updateEmployee}
      className='bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-6 rounded'>Update</button>
      
      <button 
      onClick={()=> navigate("/")}
      className='bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-6 rounded'>Cancel</button>
      </div>
    </div>
  )
}

export default UpdateEmployee
