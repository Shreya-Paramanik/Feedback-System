import React, { useState } from 'react'
import Header from './Header';
import styles from './Welcome.module.css'
import StatisticalCard from './StatisticalCard';
import Card from './Card';
import { FiMessageSquare } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import Icon from './Icon';



const Welcome = ()=> {

    const [icon,setIcon] = useState('message');
    const navigate = useNavigate();


    
  return (
    <div className={styles.app_gradient}>
      <Header/>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center', gap:'1rem',height:'300px',marginTop:'20px'}}>
        <Card>
            
            <div className="card-body" style={{marginTop:'5%'}}>
                
            <Icon icon={FiMessageSquare} color='blue' size={30} bgColor="rgba(188, 188, 236, 1)"/>
             <h5 className="card-title" style={{fontSize: '28px', marginTop:'50px'}}>Submit Feedback</h5>
             <p className="card-text" style={{fontSize: '16px'}}>Share your suggestions, report bugs, or tell us what you love</p>
             <button className="btn btn-primary" type="button" id={styles.card_button} style={{width:'100%',height:'45px',borderRadius:'25px'}} onClick={()=>{navigate('/SubmitFeedback')}}>Get Started</button>
            </div>
        </Card>
        <Card>
            <div className="card-body" style={{marginTop:'10%'}}>
                
                 <Icon icon={IoSettingsOutline} color='purple' size={30} bgColor="rgba(238, 196, 238, 1)"/>
                
             <h5 className="card-title" style={{fontSize: '28px',marginTop:'50px'}}>Admin Dashboard</h5>
             <p className="card-text" style={{fontSize: '16px'}}>Manage and review feedback submssion from user.</p>
             <button className="btn btn-outline-primary" type="button" id={styles.card_button2}  style={{width:'100%',height:'45px',borderRadius:'25px'}} onClick={()=>{navigate('/adminLogin')}}>Admin Access</button>
            </div>
        </Card>
    </div>

    <div style={{display:'flex',justifyContent:'center',alignContent:'center',gap:'1rem',marginTop:'20px'}}>
        <StatisticalCard>
            <div className="card-body">
                <div className={styles.icon_div3}>
                    <GoPeople className={styles.icon3}/>
                </div>
                <h5 className="card-title" style={{fontSize: '28px',marginTop:'5px'}}>1234</h5>
                <p>Happy users</p>
            </div>
        </StatisticalCard>
        
        <StatisticalCard>
            <div className="card-body">
                <div className={styles.icon_div3}>
                 <FiMessageSquare className={styles.icon3}/>
                </div>
                
                <h5 className='card-title' style={{fontSize: '28px',marginTop:'5px'}}>567</h5>
                <p>Feedback Received</p>
            </div>
        </StatisticalCard>
        <StatisticalCard>
            <div className="card-body">
                <div className={styles.icon_div3}>
                    <IoIosStarOutline className={styles.icon3}/>
                </div>
                <h5 className='card-title' style={{fontSize:'28px',marginTop:'5px'}}>4.8</h5>
                <p>Average Rating</p>
            </div>
        </StatisticalCard>
    </div>
    </div>
  )
}

export default Welcome;

