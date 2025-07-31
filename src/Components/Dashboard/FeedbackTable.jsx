import React from 'react';
import FeedbackRow from './FeedbackRow';
import './FeedbackTable.css';
import { GoDownload } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoFunnelOutline } from "react-icons/io5";



const feedbackData = [
  {
    user: "eegeg",
    email: "dvdsfvbvg@adcfsf.com",
    type: "suggestion",
    rating: 4,
    message: "gsergsergv",
    status: "pending",
    date: "7/21/2025"
  },
  {
    user: "Anonymous",
    email: "No email",
    type: "complaint",
    rating: 1,
    message: "The loading times are too slow and the inter...",
    status: "pending",
    date: "7/21/2025"
  },
  {
    user: "Mike Johnson",
    email: "mike@example.com",
    type: "praise",
    rating: 5,
    message: "Excellent service! The new features are wor...",
    status: "reviewed",
    date: "7/21/2025"
  },
  {
    user: "Jane Smith",
    email: "jane@example.com",
    type: "bug",
    rating: 2,
    message: "The submit button is not working properly o...",
    status: "reviewed",
    date: "7/21/2025"
  },
  {
    user: "John Doe",
    email: "john@example.com",
    type: "suggestion",
    rating: 4,
    message: "It would be great if you could add a dark mo...",
    status: "pending",
    date: "7/21/2025"
  }
];

const FeedbackTable = () => (
  <div className="feedback-dashboard">
    <div className="dashboard-header">
      <h2>Feedback Dashboard</h2>
      <button className="export-btn"> <GoDownload  size={25}/> Export CSV</button>
    </div>

    <div className="filters">
      <div className='search_wrapper'>
        <CiSearch size={30} className='search_icon'/>
      <input type="text" placeholder="Search feedback..." style={{paddingLeft:'40px'}} />
      </div>
      <select>
        <option>All Types</option>
        <option>Bug</option>
        <option>Suggestion</option>
        <option>Complaint</option>
        <option>Praise</option>
      </select>
      <select>
        <option>All Ratings</option>
        <option>5 stars</option>
        <option>4 stars</option>
        <option>3 stars</option>
        <option>2 stars</option>
        <option>1 star</option>
      </select>
      <select>
        <option>All Status</option>
        <option>Pending</option>
        <option>Reviewed</option>
      </select>
      <IoFunnelOutline />
      <span>{feedbackData.length} results</span>
    </div>

    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Type</th>
          <th>Rating</th>
          <th>Message</th>
          <th>Status</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {feedbackData.map((data, index) => (
          <FeedbackRow key={index} {...data} />
        ))}
      </tbody>
    </table>
  </div>
);

export default FeedbackTable;