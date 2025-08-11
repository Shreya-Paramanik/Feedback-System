import React, { useEffect, useState } from 'react';
import FeedbackRow from './FeedbackRow';
import './FeedbackTable.css';
import { GoDownload } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoFunnelOutline } from "react-icons/io5";
import axios from 'axios';



const FeedbackTable = () => {


  const [search,setSearch] = useState("");
  const [types,setType] = useState("");
  const [rate,setRate] = useState("");
  const [status,setStatus] = useState("");

  const [debouncedQuery,setDebouncedQuery] = useState("");
  const [Data,setData]=useState([]);


  useEffect(()=>{
   
    const handler = setTimeout(() =>{
      setDebouncedQuery(search);
    },500);

    return() =>{
      clearTimeout(handler);
    }

  },[search]);

  useEffect(()=>{
    
    const handleChange = async()=>{
      
      let query = [];
      if (search)
        query.push(`q=${encodeURIComponent(search)}`);
      if (types)
        query.push(`type=${types}`);
      if (rate)
        query.push(`rate=${rate}`);
      if(status)
        query.push(`status=${status}`); 
       
      const Urlstring = query.length>0 ?`${query.join("&")}`:""
      // console.log(Urlstring);
      try {
        const response = await axios.get(`http://127.0.0.1:8000/dashboard/feedback?${Urlstring}`);
        // console.log(response.request.status);
        if(response.request.status === 200)
        {
          setData(response.data);
        }
        else if(response.request.status === 500){
          alert("Server Error");
        }
        else{
          alert("Cannot display feedbacks");
        }

      } catch (error) {
        console.log(error);
      }
    }

    console.log(Data);
    handleChange();
  },[debouncedQuery,types,rate,status]);




 
    const handleStatusChange = async (id, newStatus) => {
    try {
      
        const results =  await axios.put(`http://localhost:8000/feedback/${id}/updatestatus?status=${newStatus}`)

        //console.log(results);
        if(results.status === 200){
          const updatedData = Data.map(item => item.id===id ? {...item, status: newStatus} : item);
          setData(updatedData);
          }
        else if(results.status === 500){
          alert("Internal Server Error");
        }
        else{
          alert("Feedback is not updated");
        }
        
        
    } catch (error) {
      console.error('Error updating status:', error);
      alert("Couldn't update status");
      
    }
      
  };

  const handleClick = async ()=> {
   
    let query = [];
      if (search)
        query.push(`q=${encodeURIComponent(search)}`);
      if (types)
        query.push(`type=${types}`);
      if (rate)
        query.push(`rate=${rate}`);
      if(status)
        query.push(`status=${status}`); 
       
      const Urlstring = query.length>0 ?`${query.join("&")}`:""
      // console.log(Urlstring);
      try {
    const response = await axios.post(`http://127.0.0.1:8000/download_csv?${Urlstring}`, null, {
      responseType: 'blob', // Important: expect a file
    });

    // Create download link
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'feedback_data.csv'); // Filename
    document.body.appendChild(link);
    link.click();
    link.remove();

  } catch (error) {
    console.log("Can't Download the file ", error);
    alert("Error downloading CSV");
  }

  }

  
  return(

    
  <div className="feedback-dashboard">
    <div className="dashboard-header">
      <h2>Feedback Dashboard</h2>
      <button className="export-btn" onClick={handleClick}> <GoDownload  size={25}/> Export CSV</button>
    </div>

    <div className="filters">
      <div className='search_wrapper'>
        <CiSearch size={30} className='search_icon'/>
      <input type="text" placeholder="Search feedback..." style={{paddingLeft:'40px'}} onChange={(e)=>setSearch(e.target.value)} />
      </div>
      <select onChange={(e)=>setType(e.target.value=== "All Types"?"":e.target.value)}>
        <option>All Types</option>
        <option>Bug</option>
        <option>Suggestions</option>
        <option>Complaint</option>
        <option>Praise</option>
      </select>
      <select onChange={(e)=>setRate(e.target.value === "All Ratings"?"":e.target.value)}>
        <option>All Ratings</option>
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
      <select onChange={(e)=>setStatus(e.target.value === "All Status"?"":e.target.value)}>
        <option>All Status</option>
        <option>pending</option>
        <option>reviewed</option>
      </select>
      <IoFunnelOutline size={30}/>
      <span style={{fontWeight:'500'}}>{Data.length} results</span>
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
        {Data.map((item, index) => (
          <FeedbackRow key={index} {...item} onStatusChange ={handleStatusChange} />
        ))}
      </tbody>
    </table>
  </div>
  )
};

export default FeedbackTable;