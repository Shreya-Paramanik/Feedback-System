import styles from "./Chaticon.module.css";
import { FiMessageSquare } from "react-icons/fi";
function Chaticon(){
        return(
                <>
                <center>
             <div className={styles.iconBox}>
                <FiMessageSquare  size={28} />
             </div>
             </center>
             </>
        );
};

export default Chaticon;