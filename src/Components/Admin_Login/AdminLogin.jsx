import React, { useState } from 'react';
import { IoShieldOutline} from "react-icons/io5";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GoArrowLeft } from "react-icons/go";
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  
  const onSubmit = async (data) => {
     

    console.log(data); 
    try {
      const response = await axios.post("http://127.0.0.1:8000/Admin_Login",data);
      // console.log(response);

      if(response.status === 200){
        alert("Login Successful");
        navigate('/Dashboard');
      }
      } catch (error) {
      alert("Login Failed");
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <a href="/" className="back-link" onClick={() => navigate('/')}>
          <GoArrowLeft /> Back to Home
        </a>
        <div className="login-card">
          <div className="login-icon"><IoShieldOutline /></div>
          <h2>Admin Login</h2>
          <p className="subtext">Enter your credentials to access the admin dashboard</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <label><b>Username</b></label>
              <input
                type="text"
                placeholder="Enter your username"
                style={{ borderRadius: '15px' }}
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && <p style={{color:'red'}} className="error-text">{errors.username.message}</p>}
            </div>

            <div className="input-group">
              <label><b>Password</b></label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                style={{ borderRadius: '15px' }}
                {...register("password", { required: "Password is required", minLength:{value : 6,message:"Minimum 6 characters" }})}
              />
              <span className="toggle-eye" onClick={() => setShowPassword(!showPassword)}>
               {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              
              {errors.password && <p style={{color:'red'}} className="error-text">{errors.password.message}</p>}
            </div>

            <button className="sign-in-button" type="submit" onSubmit={()=>navigate("/Dashboard")}>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
