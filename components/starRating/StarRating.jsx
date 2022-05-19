import React, { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { StyledStarBlock } from "./styledStarRating";

const StarRating = () => {
  const stars = Array(5).fill(0);

  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeave = (value) => {
    setHoverValue(undefined);
  };
  return (
    <StyledStarBlock>
      {stars.map((item, index) => {
        return (
          <BsLightningChargeFill
            key={index}
            color={
              (hoverValue || currentValue) > index ? colors.orange : colors.grey
            }
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </StyledStarBlock>
  );
};

export default StarRating;
