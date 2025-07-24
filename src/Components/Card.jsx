import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import "./App.css"

const Card = ()=> {
  return (
      <div className="card text-center" style={{height:'200px'}}>
        <div className="card-body">
            <h5 className="card-title">Submit Feedback</h5>
            <p className="card-text">Share your suggestions, report bugs, or tell us what you love</p>
            <a href="#" className="btn btn-primary">Get Started</a>
        </div>
    </div>
  )
}

export default Card;
