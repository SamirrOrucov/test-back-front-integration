import React from 'react'
import "./Navbar.scss"
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <p>Logo</p>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/addpage"}>Add Page</NavLink></li>
            <li><NavLink to={"/basket"}>Basket</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar