import React from "react";
import "./thankYouPage.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiHomeAlt } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";


const thankYouPage = () => {
    return (
        <div className="container">
            <div className="box">
                <div className="success-icon">
                    <IoMdCheckmarkCircleOutline />
                </div>
                <h2><b>Thank you for your feedback!</b></h2>
                <p>We appreciate you taking the time to share your thoughts with us. Your feedback helps us improve our services and create better experiences.</p>
                <div className="btn-group">
                    <button className="primary"><BiHomeAlt /> Return to Homepage</button>
                    <button className="secondary"><FiMessageSquare /> Submit Another Feedback</button>
                </div>
            </div>
        </div>
    )
}

export default thankYouPage;