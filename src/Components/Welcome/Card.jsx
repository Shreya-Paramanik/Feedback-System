import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import "./App.css"
import './Welcome.css'
import { FiMessageSquare } from "react-icons/fi";

const Card = (props)=> {
  return (
      <div className="card text-center" style={{height:'250px',width:'400px',backgroundColor:'white'}}>
        {props.children}
    </div>
  )
}

export default Card;
