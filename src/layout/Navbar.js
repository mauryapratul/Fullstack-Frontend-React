import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
            <Link className='navbar-brand' to='/'>
                Fullstack Application
            </Link>
          <Link
           to = "/adduser"
           className='btn btn-outline-light'
          >
            Add User
          </Link>

        </div>
    </nav>
    </>
  )
}
