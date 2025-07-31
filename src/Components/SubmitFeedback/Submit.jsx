import HeaderField from "./Header";
import Form from './Form';
import styles from "./Submit.module.css";
import { Link ,useNavigate} from "react-router-dom";


function Submit(){

  const navigate = useNavigate();

  const handleClick = (e)=>{

    e.preventDefault();
    navigate("/");
  }
  return(
    <>
    <Link href="/" className="back-link" onClick={handleClick} style={{fontSize:'20px'}}>← Back to Home</Link>
    <div className={styles.container}>
        <br/>
        <HeaderField/>
      <Form />
    </div>
    </>
  );
};
export default Submit;
