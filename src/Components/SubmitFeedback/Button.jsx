import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

function Button(){

  //const navigate = useNavigate();

  return(
    <center>
    <button  type="submit" className={styles.btn}><b>Submit Feedback</b></button>
    </center>
  );
};

export default Button;