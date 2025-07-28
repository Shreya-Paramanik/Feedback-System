import styles from "./Button.module.css";

function Button(){
  return(
    <center>
    <button className={styles.btn}><b>Submit Feedback</b></button>
    </center>
  );
};

export default Button;