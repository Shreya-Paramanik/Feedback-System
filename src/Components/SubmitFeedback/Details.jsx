import styles  from "./Details.module.css";

function Details(){
  return(
    <div className={styles.details}> 
      <div className='naming'>
          <label htmlFor='fullname' className={styles.labels}><b>Name</b> (Optional)</label><br/><br/>
          <input type='text' placeholder='Your name' name='fullname' className={styles.inputs}></input>
      </div> 
      <div className='mailing'>
          <label htmlFor='email' className={styles.labels}><b>Email</b> (Optional)</label><br/><br/>
          <input type='email' placeholder='your@email.com' name='email' className={styles.inputs}></input>
      </div>
    </div>
  );
};

export default Details;