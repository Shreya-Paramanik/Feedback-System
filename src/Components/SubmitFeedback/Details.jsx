import styles  from "./Details.module.css";
import { useFormContext } from 'react-hook-form';
function Details(){
  const {
    register,
    formState:{errors},
  }= useFormContext();
  return(
    <div className={styles.details}> 
      <div className='naming'>
          <label htmlFor='fullname' className={styles.labels}><b style={{fontSize:'20px'}}>Name</b></label><br/>
          <input type='text' placeholder='Your name' name='name' className={styles.inputs}
          {...register('Name',
              { required: true,
                minLength:{value:3,message:"Min characters at least 3"},
                maxLength:{value:50,message:"Max characters at least 50"}})}/>
               {errors.Name && <p style={{color:'red'}}>{errors.Name.message}</p>}
      </div> 
      <div className='mailing'>
          <label htmlFor='email' className={styles.labels}><b style={{fontSize:'20px'}}>Email</b></label><br/>
          <input type='email' placeholder='your@email.com' name='email' className={styles.inputs}
          {...register('Email', 
          { required: true ,
            pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,message: "Invalid email address"}})}/>
            {errors.Email &&<p style={{color:'red'}}>{errors.Email.message}</p>}
      </div>
    </div>
  );
};

export default Details;