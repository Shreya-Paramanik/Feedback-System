import React from 'react'
import Records from './Records'
import "./AdminPanel.css"

const InnerDiv = ()=> {

  const records=[{name:"abcd@gmail.com",Type:"suggestion",Rating:"4star",Message:"dfghg"}]
  return (
    <div className='Inner_div'>
     
     <div className='p_div'>
      <div>
          <p className='User'>User</p>
          <p className='Type'>Type</p>
          <p className='Rating'>Rating</p>   
          <p className='Message'>Message</p>
      </div>

      <div>
          <p className='Status'>Status</p>
          <p className='Date'>Date</p>
          <p className='Actions'>Actions</p>
      </div>
     </div>
     
    {/* {records.map((items,index)=>{
      <Records key={index} name={items.name} Type={items.Type} Rating={items.Rating} Message={items.Message}/>

    })}  */}
    <Records name="shreya@gmail.com" type="suggestion" rating/>
    <Records name="shreya@gmail.com" type="suggestion" rating/>
    <Records name="shreya@gmail.com" type="suggestion" rating/>
    <Records name="shreya@gmail.com" type="suggestion" rating/>
    <Records name="shreya@gmail.com" type="suggestion" rating/>
    </div>
  )
}

export default InnerDiv;