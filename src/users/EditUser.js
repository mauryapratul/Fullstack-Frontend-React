import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditUser() {

    const navigate = useNavigate();
    const {id} = useParams();


    const [user,setUser] = useState({
        id : "",
        name : "",
        username : "",
        email : ""
    })

    const updateFunction = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/edituser/${id}`,user).then(
          res => {console.log(res.data)
                    notification(res.data);
                    navigate("/")        
        }
        ).catch(
          err => console.log(err)
        )
    }
    const notification = (msg) => {
            toast(msg,{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
    }

    const loadUser = () => {
         axios.get(`http://localhost:8080/getuser/${id}`).then(
            res => {setUser(res.data)
            console.log(res.data)}
        ).catch(err => console.log(err))
        
    
      }
      useEffect(() => {
        loadUser();
      },[])

      const handleChange = (e) => {
        const {name ,value}  = e.target;
        setUser({...user,[name] : value})
      }
  return (
    <div className='container d-flex justify-content-center'>
        <div className='card w-50 mt-5'>
            <div className='card-header text-center '>Edit User</div>
            <div className='card-body'>
                <div>
                    <form type = "submit">
                        <label className='form-label'>Name</label>
                        <input className='form-control' type='text'
                        readOnly
                        value = {user.name}/>
                        <label className='form-label'>Username</label>
                        <input className='form-control' type="text"
                        name = "username"
                        onChange={handleChange}
                        value = {user.username}/>
                        <label className='form-label'>Email</label>
                        <input className='form-control' type='email'
                        name = "email"
                        onChange={handleChange}
                        value = {user.email}/>
                        <div className='my-2'>
                            <button className='btn btn-secondary w-100'
                            onClick={updateFunction}>Submit</button></div>
                            
                        <div className=''>
                        <button className='btn btn-outline-danger w-100'
                        onClick={() => navigate("/")}
                        >Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}
