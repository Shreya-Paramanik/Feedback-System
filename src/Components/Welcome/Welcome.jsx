import React, { useState } from 'react'
import Header from './Header';
import './Welcome.css'
import StatisticalCard from './StatisticalCard';
import Card from './Card';
import { FiMessageSquare } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { GoPeople } from "react-icons/go";



const Welcome = ()=> {

    const [icon,setIcon] = useState('message');
  return (
    <>
      <Header/>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center', gap:'1rem',height:'300px',marginTop:'20px'}}>
        <Card>
            
            <div className="card-body" style={{marginTop:'5%'}}>
                <div className='icon_div2'>
                 <FiMessageSquare className='icon2'/>
               </div>
             <h5 className="card-title" style={{fontSize: '28px', marginTop:'50px'}}>Submit Feedback</h5>
             <p className="card-text" style={{fontSize: '16px'}}>Share your suggestions, report bugs, or tell us what you love</p>
             <button className="btn btn-primary" type="button" id='card_button' style={{width:'100%',height:'45px',borderRadius:'25px'}}>Get Started</button>
            </div>
        </Card>
        <Card>
            <div className="card-body" style={{marginTop:'10%'}}>
                <div className='icon_div2' style={{backgroundColor:'rgb(235, 150, 233,0.4)',padding: '8px',borderRadius: '15px'}}>
                 <IoSettingsOutline className='icon2' style={{color:'purple'}}/>
                </div>
             <h5 className="card-title" style={{fontSize: '28px',marginTop:'50px'}}>Admin Dashboard</h5>
             <p className="card-text" style={{fontSize: '16px'}}>Manage and review feedback submssion from user.</p>
             <button className="btn btn-outline-primary" type="button" id='card_button2'  style={{width:'100%',height:'45px',borderRadius:'25px'}}>Admin Access</button>
            </div>
        </Card>
    </div>

    <div style={{display:'flex',justifyContent:'center',alignContent:'center',gap:'1rem',marginTop:'20px'}}>
        <StatisticalCard>
            <div className="card-body">
                <div className='icon_div3'>
                    <GoPeople className='icon3'/>
                </div>
                <h5 className="card-title" style={{fontSize: '28px',marginTop:'5px'}}>1234</h5>
                <p>Happy users</p>
            </div>
        </StatisticalCard>
        
        <StatisticalCard>
            <div className="card-body">
                <div className='icon_div3'>
                 <FiMessageSquare className='icon3'/>
                </div>
                
                <h5 className="card-title" style={{fontSize: '28px',marginTop:'5px'}}>567</h5>
                <p>Feedback Received</p>
            </div>
        </StatisticalCard>
        <StatisticalCard>
            <div className="card-body">
                <div className='icon_div3'>
                    <IoIosStarOutline className='icon3'/>
                </div>
                <h5 className="card-title" style={{fontSize: '28px',marginTop:'5px'}}>4.8</h5>
                <p>Average Rating</p>
            </div>
        </StatisticalCard>
    </div>
    </>
  )
}

export default Welcome;

