import React from 'react'
import { Link } from 'react-router-dom';
import aud from '../img/australia.svg';

function Navbar() {

    return (
        <nav className="navbar">
            <Link to="/"><div className="navbar-brand">Voyit</div></Link>
            <ul className="nav">
                <li className="nav-item">
                    <button type="button" className="nav-link" id="myBtn">
                        <img className="flag" src={aud} height="20px" width="20px" alt="flag" />
                         English (AU)</button>
                </li>

                <li className="nav-item">
                    <button type="button" className="nav-link" id="myBtn">Sign up</button>
                </li>
                <li className="nav-item">
                    <button type="button" className="nav-link" id="myBtn">Login</button>
                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <div className="text-center">Voyit</div>
                            <hr />
                            <label>Email</label>
                            <input type="text" className="email-form-control" placeholder="Enter Email" />
                            <label>Password</label>
                            <input type="text" className="password-form-control" placeholder="Enter Password" />										
                            <a href="/#"><p>Forgot Password?</p></a>
                            <button className="signin-btn" id="loginBtn">Sign In</button> 
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;