
import React from "react";
import styles from "./ButtonDiv.module.css";
const ButtonDiv = ()=>{
  const values=[
          {
          val:"5",
          label:"Total Feedback",
        },
        {
          val:"3",
          label:"Pending Review",
        },
        {
          val:"3.2",
          label:"Average Rating",
        },
        {
          val:"1",
          label:"Bug Report",
        }
      ]
  return (
    <div className={styles.review}>
     { values.map((item,index) => (
      <div className={styles.box}
      key={index}>
      <b>{item.val}</b><br/>  
      {item.label}
      </div>
     ))}
    </div>

  );
};
export default ButtonDiv;