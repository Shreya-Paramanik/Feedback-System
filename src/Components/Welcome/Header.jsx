import React from 'react'
import { FiMessageSquare } from "react-icons/fi";
import styles from "./Welcome.module.css"



const Header = ()=> {
  return (
    <center className={styles.header}>
        <div className={styles.icon_div} style={{marginTop:'100px'}}>
          <FiMessageSquare className={styles.icon}/>
        </div>
        <h1 style={{fontSize:'50px',fontWeight:'700',color:'white'}}>Welcome to our Feedback System</h1>
        <p style={{fontSize:'20px',color:'white'}}>Help us improve by sharing your thoughts and experiences. Your<br/> feedback drives our innovation.</p>
    </center>
  )
}

export default Header;
