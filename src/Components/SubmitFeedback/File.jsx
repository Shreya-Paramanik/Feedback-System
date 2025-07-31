import styles from "./File.module.css";
import { useFormContext } from "react-hook-form";

function File(){
  const { register,formState:{errors}} = useFormContext();
  return(
    <>
    <label htmlFor='uploadfile' className={styles.labels}><b style={{fontSize:'20px'}}>Upload File</b></label>
    <div className={styles.file}>
        <input type="file" placeholder="Select file" name="uploadfile"  className="inputs"
        accept=".png, .jpg, .jpeg, .pdf, .doc, .docx"
        {...register('FileUpload', {
          required: true,
          validate: {
            fileSize: (value) => {
              const file = value[0];
              return file && file.size <= 10 * 1024 * 1024 || 'Max file size is 10MB';
            },
            fileType: (value) => {
              const file = value[0];
              const allowedTypes = [
                'image/png',
                'image/jpeg',
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
              ];
              return file && allowedTypes.includes(file.type) || 'Unsupported file type';
            },
          },
        })}
      />

      {errors.fileUpload && (
        <p style={{ color: 'red' }}>{errors.fileUpload.message}</p>
      )}
    </div>
    <p className={styles.text}>Supported formats: Images,PDF,Word documents (Max 10MB)</p>
    </>
  );
};

export default File;