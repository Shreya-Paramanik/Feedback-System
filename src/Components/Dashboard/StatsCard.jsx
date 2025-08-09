import React from 'react';
import './StatsCards.css';
import { FiMessageSquare } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";




const StatsCard = ({Data})=> {
  const stats = [
    { label: "Total Feedback", value: Data.totalFeedback, icon: <FiMessageSquare color='blue' />},
    { label: "Pending Review", value: Data.pendingFeedback, icon: <FiClock />},
    { label: "Average Rating", value: Data.averageRating, icon: <FaArrowTrendUp color='green' />},
    { label: "Bug Reports", value: Data.bug_report, icon: <GoPeople  color='purple'/>},
  ];


  return (
    <div className="dash_stats-cards">
    {stats && stats.map((stat, i) => (
      <div className="dash_card" key={i}>
        <div className="dash_value">{stat.value}</div>
        <div className="dash_icon">{stat.icon}</div>
        <div className="dash_label">{stat.label}</div>
      </div>
    ))}
  </div>

  )
};

export default StatsCard
