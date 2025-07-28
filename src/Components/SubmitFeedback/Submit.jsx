import Chaticon from "./Chaticon";
import HeaderField from "./Header";
import Form from './Form';
import styles from "./Submit.module.css";

function Submit(){
  return(
    <>
    <a href="/home" className="back-link">← Back to Home</a>
    <div className={styles.container}>
        <br/>
        <Chaticon />
        <br/>
        <HeaderField/>
      <Form />
    </div>
    </>
  );
};
export default Submit;
