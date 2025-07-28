import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import FeedbackDash from "./FeedbackDash";
import "./AdminPanel.css"
import ButtonDiv from "./ButtonDiv";
import styles from "./ButtonDiv.module.css";
import Filters from "./filterpart/Filters";
import { useNavigate } from "react-router-dom";


function AdminPanel() {

  const navigate = useNavigate();

  const handleClick =() =>{
    navigate('/')
  }
  return (
    <>
    <div className="Admin_header">
      <div className="header-left">
        <h2>
          <div style={{height:'fit-content',width:'fit-content', display:'inline',backgroundColor:'#97b1f9ff',padding:'12px',borderRadius:'50px',opacity:'0.3'}}>
            <FiMessageSquare size='40'style={{color:'blue'}}/>
            </div> Admin Panel</h2>
      </div>
      <div className="header-right">
        <button className="item" onClick={handleClick}><FiHome /> Home</button>
        <button className="item"><FiLogOut /> Logout</button>
      </div>
    </div>

    <div className={styles.body}>
      <ButtonDiv/>
    </div>

    <div className="Feedback">
      <FeedbackDash/>
      
    </div>

   
    
    </>
  );
}

export default AdminPanel;