import React from "react";
import "./thankYouPage.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiHomeAlt } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const thankYouPage = () => {

    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate('/')
        
    }

    const handleClick2 = ()=>{
        navigate('/SubmitFeedback')
    }
    return (
        <div className="container">
            <div className="box">
                <div className="success-icon">
                    <IoMdCheckmarkCircleOutline />
                </div>
                <h2 className="thanks_h2"><b>Thank you for your feedback!</b></h2>
                <p className="thanks">We appreciate you taking the time to share your thoughts with us. Your feedback helps us improve our services and create better experiences.</p>
                <div className="btn-group">
                    <button className="primary" onClick={handleClick}><BiHomeAlt /> Return to Homepage</button>
                    <button className="secondary" onClick={handleClick2}><FiMessageSquare /> Submit Another Feedback</button>
                </div>
            </div>
        </div>
    )
}

export default thankYouPage;