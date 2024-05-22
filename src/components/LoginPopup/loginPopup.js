import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

import './loginPopup.css'

const LoginPopup = ({setShowLogin}) => {

    const [currentAuthentication, setCurrentAuthentication] = useState("Login")
    
    return(
        <div className="login-popup">
            <form>
                <div className="login-popup-title">
                    <h1>{currentAuthentication}</h1>
                    <IoCloseSharp onClick={() => setShowLogin(false)} className="form-close" />
                </div>
                <div className="login-popup-input-fields">
                    {currentAuthentication !== "Login" && <input type="text" placeholder="Write your name" required />}
                    <input type="email" placeholder="Write your Email" required />
                    <input type="password" placeholder="Enter password" required />
                </div>
                <button type="submit">{currentAuthentication}</button>
                <div className="login-popup-conditions">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
                {currentAuthentication === "Login"
                ?<p className="redirect">Create new account ?<span onClick={() => {setCurrentAuthentication("Sign up")}} >Click here</span></p>
                :<p className="redirect">Already have an account ?<span onClick={() => {setCurrentAuthentication("Login")}} >Login here</span></p>
                }  
            </form>
        </div>
    )
}

export default LoginPopup