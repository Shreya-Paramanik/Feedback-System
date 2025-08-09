import styles from "./About.module.css";
import { useFormContext } from "react-hook-form";

function About(){

  const { register } = useFormContext();
  return(
    <>
    <label htmlFor='message' className={styles.labels}><b style={{fontSize:'20px'}}><p style={{display:'inline',color:"red"}}>* </p>Feedback Message</b></label><br/>
    <div className="about">
    <textarea placeholder="Please share your feedback..." name="message" cols="73" rows="6" className={styles.textarea}{...register('message', { required: true })}></textarea>
    </div>
    </>
  );
};
export default About;