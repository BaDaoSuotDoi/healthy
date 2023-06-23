import React from "react";
import "./MealSelection.css";

const MealSelection = ({ name, iconUrl }) => {
  return (
    <div className="MealSelection" style={{background: "url(/selection.png)"}}
    >
      <img src={iconUrl} className="MealSelection__icon"/>
      <div className="MealSelection__name">{name}</div>
    </div>
  );
 
};

export default MealSelection;
