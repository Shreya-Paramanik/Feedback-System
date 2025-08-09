import React, { useEffect, useState } from "react";
import './DashboardHeader.css';
import { FiMessageSquare } from "react-icons/fi";
import StatsCards from "./StatsCard";
import FeedbackTable from "./FeedbackTable";
import FeedbackRow from "./FeedbackRow";
import { useNavigate } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import axios from "axios";


const DashboardHeader = () => {

    const navigate = useNavigate();

    const [Data,setData] = useState([]);    
    
    useEffect(()=>{
        const update_dash = async()=>{

            const result = await axios.get("http://127.0.0.1:8000/api/stats");
            console.log(result);
            
            if(result.request.status === 200){
                setData(result.data);
            }

        }

        update_dash();
    },[]);
    return (
        <div style={{width:'100vw'}}>
        <div className="dash_header">
            <div className="dash_title">
               <h2> 
                <div style={{height:'fit-content',width:'fit-content', display:'inline',backgroundColor:'#97b1f9ff',padding:'12px',borderRadius:'50px',opacity:'0.3'}}>
                    <FiMessageSquare size='40'style={{color:'blue'}}/>
                </div>Admin Panel
                </h2>
            </div>
            <div className="dash_header-buttons">
                <button className="item" onClick={()=>{navigate("/")}}><BiHomeAlt size={25} /> Home</button>
                <button className="item" onClick={()=>{navigate("/")}}><FiLogOut  size={25}/> Logout</button>
            </div>
        </div>
          <div style={{marginTop:'120px'}}>
            <StatsCards Data = {Data}/>
           <FeedbackTable/>
          </div>
        </div>
);
}

export default DashboardHeader;