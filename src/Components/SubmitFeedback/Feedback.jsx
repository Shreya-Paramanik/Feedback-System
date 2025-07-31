import  {useState} from "react";
import styles from "./Feedback.module.css";
import { GoLightBulb } from "react-icons/go";
import { IoBugOutline } from "react-icons/io5";
import { FiAlertTriangle } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import  {useFormContext} from "react-hook-form";

function Feedback() {
  const display=[
      {
      icon:<GoLightBulb />,
      label:"Suggestions",
    },
    {
      icon:<IoBugOutline />,
      label:"Bug Report",
    },
    {
      icon:<FiAlertTriangle />,
      label:"Complaint",
    },
    {
      icon:<CiHeart />,
      label:"Praise",
    }
  
  ]

  const{register,setValue} =useFormContext();
  const [selectedType, setSelectedType] = useState(null);
        
  return (
    <>
  <label htmlFor='feedbacktype' className={styles.labels}><b style={{fontSize:'20px'}}>Feedback Type</b></label><br/>
  <div className={styles.feedback}>
    <input type="hidden" {...register('Feedback Type',{required:true})}/>
  { display.map((item,index) => (
  <button
      className={`${styles.box} 
        ${selectedType===item.label? styles.selected : styles.unselected}`}
        onClick={()=>{setSelectedType(item.label);setValue('Feedback Type',item.label);}}
        key={index}>
      <center>
      <big>{item.icon}</big><br/>
      <label>{item.label}</label>
      </center>
    </button>
  ))}
  </div>
    </>
  );
};
export default Feedback;