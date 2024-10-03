import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <h3>Sign up</h3>
            <input id="wd-new-username" placeholder="username" 
            className="form-control mb-2"/>
            <input id="wd-new-password" placeholder="password" type="password" 
            className="form-control mb-2"/>
            <input id="wd-verify-password" placeholder="verify password" type="password" 
            className="form-control mb-2"/>
            <Link id="wd-signup-btn"
                to="/Kanbas/Account/Signup"
                className="btn btn-primary w-100">
                Sign up 
                </Link> 
               
            <Link id="wd-signup-link" to="/Kanbas/Account/Signin"
            >
                Sign in
                </Link>
        </div>
    );
}