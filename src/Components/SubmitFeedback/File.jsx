import styles from "./File.module.css";
import { useFormContext } from "react-hook-form";

function File(){
  const { register,watch,formState:{errors}} = useFormContext();

  const fileSize = watch("file")
  return(
    <>
    <label htmlFor='uploadfile' className={styles.labels}><b style={{fontSize:'20px'}}>Upload File</b></label>
    <div className={styles.file}>
        <input type="file" placeholder="Select file" name="uploadfile"  className="inputs"
        accept=".png, .jpg, .jpeg, .pdf, .doc, .docx"{...register('file', {
          validate: (fileList) => {
            const file = fileList[0];
            if (!file) return true; // File is optional
            const maxSizeInBytes = 10 * 1024 * 1024; // 10MB
            return file.size <= maxSizeInBytes || 'File must be 10MB or less';
          },
        })}
      />
      {errors.file && <p style={{ color: 'red' }}>{errors.file.message}</p>}
  </div>
    <p className={styles.text}>Supported formats: Images,PDF,Word documents (Max 10MB)</p>
    </>
  );
};

export default File;