import {useState} from "react";
import "./Rating.css";
import { useFormContext } from "react-hook-form";
import { GoStar } from "react-icons/go";
const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  const {register,setValue} =useFormContext();

  return (
    <div className="rating-div">
        <label className="labels"><b style={{fontSize:'20px'}}>Rating:</b></label>
        <br/>
        <div className='stars'>
          <input type="hidden" {...register("rate",{required:true})}/>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={rating >= star ? 'star filled' : 'star'}
              onClick={() => {handleRating(star);setValue('rate',star);}}
            >
              <big><GoStar /></big>
            </span>
          ))}
        </div>
      </div>
  );
};
export default Rating;
