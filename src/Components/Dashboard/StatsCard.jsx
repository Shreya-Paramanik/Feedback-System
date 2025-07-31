import React from 'react';
import './StatsCards.css';
import { FiMessageSquare } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";


const stats = [
  { label: "Total Feedback", value: 5, icon: <FiMessageSquare color='blue' />},
  { label: "Pending Review", value: 3, icon: <FiClock />},
  { label: "Average Rating", value: "3.2", icon: <FaArrowTrendUp color='green' />},
  { label: "Bug Reports", value: 1, icon: <GoPeople  color='purple'/>},
];

const StatsCards = () => (
  <div className="dash_stats-cards">
    {stats && stats.map((stat, i) => (
      <div className="dash_card" key={i}>
        <div className="dash_value">{stat.value}</div>
        <div className="dash_icon">{stat.icon}</div>
        <div className="dash_label">{stat.label}</div>
      </div>
    ))}
  </div>
);

export default StatsCards;