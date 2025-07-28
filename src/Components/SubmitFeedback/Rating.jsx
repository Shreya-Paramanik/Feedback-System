import {useState} from "react";
import "./Rating.css";
import { GoStar } from "react-icons/go";
const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="rating-div">
        <label className="labels"><b>Rating:</b></label>
        <br/><br/>
        <div className='stars'>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={rating >= star ? 'star filled' : 'star'}
              onClick={() => handleRating(star)}
            >
              <big><GoStar /></big>
            </span>
          ))}
        </div>
      </div>
  );
};
export default Rating;
