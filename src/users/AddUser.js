import React,{useState} from 'react'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";
 
export default function AddUser() {
    const navigate = useNavigate()
   const [user,setUser] = useState({
    name : "",
    username : "",
    email : ""
   });

   const handleChange  = (e) => {
    const {name,value} = e.target;
    setUser({...user,[name] : value});
    console.log(value,name);

   }

   


   const handleSubmit = (e) => {

            e.preventDefault();
             if(user.name !== "" && user.username !== "" && user.email !== ""){
             axios.post("http://localhost:8080/adduser",user).then(
              res => {
                notify("User added Successfully");
                console.log(res.data)
                navigate("/");
              }
             )
            
            }
            else{
                alert("Enterr ther data")
            }

   }

        const notify = (msg) => {
              toast.success(msg, {
              position: "top-right",
              autoClose: 5000,
             hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
             progress: undefined,
            theme: "colored",
      });
   }

  return (
   <div className='container d-flex justify-content-center '>
     <div className='card w-50 mt-5'>
       <div className='card-header text-center'>
         Register User
       </div>
       <div className='card-body'>
       <form type = "submit">
            <label htmlFor = "name" className='form-label text-center'>Enter your Name</label>
            <input  type = " text"
            name = "name"
            className='form-control '
            placeholder='Enter your name'
            value = {user.name}
            onChange={handleChange}
            required/>
            <label  htmlFor = "username"className='form-label text-center'>Enter your username</label>
            <input type='text'
            name='username'
            className='form-control' 
            placeholder='Enter a username'
            value={user.username}
            onChange={handleChange}
            required
            />
            <label htmlFor= "email"className='form-label text-center'>Enter your Email</label>
            <input type = "email"
            className='form-control'
            name='email'
            placeholder='enter your email'
            value={user.email}
            onChange={handleChange}
            required
            />
            <div className=' mt-2 '>
                <button  className='btn btn-secondary btn-lg btn-block w-100'
                onClick={handleSubmit}
                >Submit</button>
                <Link   className='btn btn-outline-danger btn-lg btn-block w-100 mt-2'
                    to = "/"
                >Cancel</Link>
            </div>
        </form>
       </div>
    </div>
   </div>
  )
}
