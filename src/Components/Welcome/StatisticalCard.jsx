import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const StatisticalCard = (props)=> {
  return (
    <div className="card text-center mb-3" style={{width: "260px",height:'130px',backgroundColor:'white'}}>
       {props.children} 
    </div>
  )
}

export default StatisticalCard;
