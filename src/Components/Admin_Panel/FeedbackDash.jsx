import React from 'react'
import './AdminPanel.css'
import InnerDiv from './InnerDiv'
import Filters from './filterpart/Filters'

const FeedbackDash = ()=> {
  return (
    <div className='Feedback_Dash'>
        <h3 style={{fontWeight:700}}>Feedback Dashboard</h3>
         <Filters/>
        
    </div>
  )
}

export default FeedbackDash
