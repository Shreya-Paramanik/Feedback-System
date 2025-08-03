import {useForm, FormProvider} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Details from "./Details";
import Feedback from "./Feedback";
import Rating from "./Rating";
import About from "./About";
import File from "./File";
import Button from "./Button";
import axios from 'axios';


function Form(){
  const methods = useForm();
  const navigate = useNavigate();

  const handleForm = async(data) => {

    console.log(data);
    navigate("/thankYou");
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("type", data.type);
    formData.append("rate", data.rate);
    formData.append("message", data.message);
    
    if (data.file && data.file.length > 0) {
      formData.append("file", data.file[0]);
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/feedback", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Submitted successfully:", res.data);
      navigate("/thankYou");
    } catch (error) {
      console.log("Submission error", error);
    }
};
  


  return(
    
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleForm)} encType='multipart/form-data'>
      <Details />
      <br/>
      <Feedback />
      <br/>
      <Rating />
      <br/>
      <About />
      <br/>
      <File/>
      <br/>
      <Button/>
      <br/>
      </form>
      </FormProvider>
      
  );
}

export default Form;
