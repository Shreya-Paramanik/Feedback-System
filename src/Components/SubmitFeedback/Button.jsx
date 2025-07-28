import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

function Button(){

  const Navigate = useNavigate();

  const handleClick = ()=>{
    Navigate('/thankYou')
  }
  return(
    <center>
    <button className={styles.btn} onClick={handleClick}><b>Submit Feedback</b></button>
    </center>
  );
};

export default Button;