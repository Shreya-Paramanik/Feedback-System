import React, { useState } from 'react';
import { IoShieldOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  

  return (
   <div className="login-container">
      <div className="login-box">
         <a href="/" className="back-link" onClick={()=>{navigate('/')}}> <GoArrowLeft />  Back to Home</a>

           <div className="login-card">
               <div className="login-icon"><IoShieldOutline /></div>
                    <h2>Admin Login</h2>
                    <p className="subtext">Enter your credentials to access the admin dashboard</p>
 
               <div className="input-group">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter your username" style={{borderRadius:'15px'}}/>
               </div>

               <div className="input-group">
                    <label><b>Password</b></label>
                    
                       <input  type={showPassword ? 'text' : 'password'} placeholder="Enter your password" style={{borderRadius:'15px'}} />
                       <span className="toggle-eye" onClick={() => setShowPassword(!showPassword)}> </span>
                    
               </div>

               <button className="sign-in-button" onClick={()=>{navigate('/Dashboard')}}>Sign In</button>

               
           </div>
       </div>
   </div>
  );
};

export default AdminLogin;