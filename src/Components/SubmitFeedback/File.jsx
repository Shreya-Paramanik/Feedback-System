import styles from "./File.module.css";

function File(){
  return(
    <>
    <label htmlFor='uploadfile' className={styles.labels}><b>Upload File</b> (Optional)</label><br/><br/>
    <div class={styles.file}>
        <input type="file" placeholder="Select file" name="uploadfile"  className="inputs"></input>
    </div>
    <p className={styles.text}>Supported formats: Images,PDF,Word documents (Max 10MB)</p>
    </>
  );
};

export default File;