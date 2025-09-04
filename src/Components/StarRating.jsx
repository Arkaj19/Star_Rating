import { useState } from "react";

export const StarRating = ({ stars = 5 }) => {
  const [star, setStars] = useState(0);
  const [hoverVal, setHoverVal] = useState(0);
  console.log("Current star value:", star);
  console.log("Current hover value:", hoverVal);
  return (
    <div>
      {new Array(stars).fill(0).map((value, index) => {
        return (
          <span
            className={
              index < hoverVal || (index < star && hoverVal == 0) ? "gold" : ""
            }
            // index will always be less because it might be 5 and the value will always be 1+ of it
            key={index}
            onClick={() => setStars(index + 1)}
            onMouseEnter={() => setHoverVal(index + 1)}
            onMouseLeave={() => setHoverVal(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};
