import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';

class NavbarLanding extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
      }    

    render() {

        const loginRegLink = (
            <ul className="nav">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Create an Account
                </Link>
              </li>
            </ul>
          )
      
          const userLink = (
            <ul className="nav">
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  User
                </Link>
              </li>
              <li className="nav-item">
                <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                  Logout
                </a>
              </li>
            </ul>
          )

        return (
            <nav className="navbar">
                <Link to="/"><div className="navbar-brand">Voyit</div></Link>
                {localStorage.usertoken ? userLink : loginRegLink}
            </nav>
        )
    }
}

export default withRouter(NavbarLanding)
