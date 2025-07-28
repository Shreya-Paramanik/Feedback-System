import React, { useState } from 'react';
import { IoShieldOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClick =()=>{
     navigate('/Dashboard')
  }

  return (
   <div className="login-container">
      <div className="login-box">
         <a href="#" className="back-link"> <GoArrowLeft />  Back to Home</a>

           <div className="login-card">
               <div className="login-icon"><IoShieldOutline /></div>
                    <h2>Admin Login</h2>
                    <p className="subtext">Enter your credentials to access the admin dashboard</p>
 
               <div className="input-group">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter your username" />
               </div>

               <div className="input-group">
                    <label><b>Password</b></label>
                    <div className="password-wrapper">
                       <input  type={showPassword ? 'text' : 'password'} placeholder="Enter your password" />
                       <span className="toggle-eye" onClick={() => setShowPassword(!showPassword)}> </span>
                    </div>
               </div>

               <button className="sign-in-button" onClick={handleClick}>Sign In</button>

               <div className="demo-credentials">
                     <p><strong>Demo Credentials:</strong></p>
                     <small>Username: <code>admin</code> | Password: <code>password</code></small>
               </div>
           </div>
       </div>
   </div>
  );
};

export default AdminLogin;