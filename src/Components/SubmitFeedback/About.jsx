import styles from "./About.module.css";

function About(){
  return(
    <>
    <label htmlFor='message' className={styles.labels}><b>Feedback Message</b> (Optional)</label><br/><br/>
    <div class="about">
    <textarea placeholder="Please share your feedback..." name="message" cols="73" rows="6" className={styles.textarea}></textarea>
    </div>
    </>
  );
};
export default About;