import React from 'react'


function Popup(props) {
    return (
        <div className='popup'>  
            <div className='popup_inner'>    
                <span className="close" onClick={props.closePopup}>&times;</span>
                <div className="text-center">Voyit</div>
                <hr />
                <input type="text" className="email-form-control" placeholder="Enter Email" />
                <input type="text" className="password-form-control" placeholder="Enter Password" />										
                <a href="/#"><p>Forgot Password?</p></a>
                <button className="signin-btn" id="loginBtn">Sign In</button> 
            </div>  
        </div> 
    )
}

export default Popup;
