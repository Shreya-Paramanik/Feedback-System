import React from 'react'

const Records = ({name,type})=> {
  return (
    <div style={{margin:'20px 0'}}>
        <div style={{fontSize:'25px'}}>
        <p>{name}</p>
        <p>{type}</p>
        <p>rating</p>
        <p>Message</p>
        <p>Status</p>
        <p>Date</p>
        <p>Actions</p>
        </div>
    </div>
  )
}

export default Records;