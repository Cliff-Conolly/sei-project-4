import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/Auth'

class NavBar extends React.Component {

  constructor() {
    super()

    this.state = {}
    // this.toggleNavbar = this.toggleNavbar.bind(this)
    this.logout = this.logout.bind(this)
  }

  logout() {
    Auth.logout()
    this.props.history.push('/')

  }


  render() {
    return(
      <nav className="navbar ">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item has-text-centered" id="Tor">ÞTor</Link>
        </div>
        <div className="navbar-brand navbar-end">
          {/* <Link to="/register" className="navbar-item ">Create Account</Link> */}
          {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Sign In</Link>}
          {Auth.isAuthenticated() && <Link to="/cars/new" className="navbar-item ">Forge</Link>}
          <Link to="/cars" className="navbar-item ">Stable</Link>
          {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.logout}>Logout</a>}
        </div>
      </nav>
    )
  }

}

export default withRouter(NavBar)
