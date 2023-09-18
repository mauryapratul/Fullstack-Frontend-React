import React,{useState , useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {toast} from "react-toastify"



export default function Home() {

  const [users,setUsers] = useState([]);
  useEffect( () => {
    loadUsers();
  },[])

  const loadUsers = async() => {
    const result = await axios.get("http://localhost:8080/getalluser").catch(
      (err) => {
        console.log(err);

      }
    );
    setUsers(result.data);

  }

  const deleteFunction = async (id) => {
     await axios.delete(`http://localhost:8080/delete/${id}`).then(
      res => {console.log(res.data)
              notification(res.data)
        loadUsers();
      }
     ).catch(
        err => console.log(err)
      )
  }

  const notification = (msg) => {
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
    <div className='container ' >
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col "className='text-center'>User Id</th>
      <th scope="col"  className='text-center'>Name</th>
      <th scope="col" className='text-center'>Username</th>
      <th scope="col" className='text-center'>Email Id</th>
      <th scope="col" className='text-center'>Action</th>
      
    </tr>
  </thead>
  <tbody>
    {users.map((user,index) => (
        <tr className='text-center' key ={ user.id}>
        <th scope="row">{index+1}</th>
        <td className='text-center'>{user.name}</td>
        <td className='text-center'>{user.username}</td>
        <td className='text-center'>{user.email}</td>
       
        <td>
          <Link className='btn btn-secondary mx-2' to ={ `/viewuser/${user.id}`}>View</Link>
          <Link to = {`/edituser/${user.id}`} className='btn btn-outline-primary mx-2' >Edit</Link>
          <button className='btn btn-danger mx-2' onClick={() => deleteFunction(user.id)}>Delete</button>
        </td>
        </tr>
         )
    )}
  
   
  </tbody>
</table>
        </div>
    </div>
  )
}
