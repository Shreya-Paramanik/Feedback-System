import {useForm, FormProvider} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Details from "./Details";
import Feedback from "./Feedback";
import Rating from "./Rating";
import About from "./About";
import File from "./File";
import Button from "./Button";

function Form(){
  const methods = useForm();
  const navigate = useNavigate();

  return(
    <>
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data)=>{console.log("Form Submitted:",data);
        navigate("/thankYou");
      })}>
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
      </>
  );
};
export default Form;