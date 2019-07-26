import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const NavBar = () => {

  return(
    <nav className="navbar ">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-size-1 has-text-centered">E</Link>
      </div>
      <div className="navbar-end">
        <Link to="/register" className="navbar-item is-size-6">Register</Link>
        <Link to="/login" className="navbar-item is-size-5">Log In</Link>
        <Link to="/cars/new" className="navbar-item is-size-4 is-italic">Create Car</Link>
        <Link to="/cars" className="navbar-item is-size-3">Showroom</Link>
      </div>
    </nav>
  )

}

export default NavBar
