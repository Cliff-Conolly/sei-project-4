import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const NavBar = () => {

  return(
    <nav className="navbar ">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item has-text-centered">E</Link>
      </div>
      <div className="navbar-end">
        <Link to="/register" className="navbar-item ">Create Account</Link>
        <Link to="/login" className="navbar-item ">Log In</Link>
        <Link to="/cars/new" className="navbar-item ">Create Car</Link>
        <Link to="/cars" className="navbar-item ">Showroom</Link>
      </div>
    </nav>
  )

}

export default NavBar
