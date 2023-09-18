import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function ViewUser() {
    const {id} = useParams();
    const [user,setUser] = useState({
        id : "",
        name : "",
        username : "",
        email : ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8080/getuser/${id}`).then(
            res => {
                setUser(res.data)
            
            }
        ).catch(err => console.log(err))
    },[])
    
  return (
    <div className='container d-flex justify-content-center'>
        <div className='card w-50 mt-5'>
            <div className='card-header text-center'>User Deatils</div>
            <div className='card-body'>
                <ul className='list-group '>
                    <li className='list-group-item'>
                        <b>Name :</b>{user.name}
                    </li>
                    <li className='list-group-item'>
                        <b>Username:</b>{user.username}
                    </li>
                    <li className='list-group-item'>
                        <b >Email:</b>{user.email}
                    </li>
                </ul>
            </div>
            <div className='card-footer d-flex justify-content-center'>
                <Link className='btn btn-primary' to = "/">Back to Home</Link>
            </div>
        </div>
    </div>
  )
}
