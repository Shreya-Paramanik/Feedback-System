import styles from "./Chaticon.module.css";
import { FiMessageSquare } from "react-icons/fi";

function HeaderField(){
  return(
    <>
    <center>
      <div className={styles.iconBox}>
                <FiMessageSquare  size={40} />
      </div>
    <h2 style={{fontSize:'40px',fontWeight:'700'}}>Submit Feedback</h2>
    <p>We value your input! Please share your thoughts with us.</p><br/>
    </center>
    </>
  );
};

export default HeaderField;