import React from "react";
import "./MealSelection.css";

const MealSelection = ({ name, iconUrl }) => {
  return (
    <div className="MealSelection" 
    >
      <img src={"selection.png"} width={"45%"}/>
      <div className="MealSelection__wrap_data">
        <div className="MealSelection__wrap__icon">
          <img src={iconUrl} className="MealSelection__icon"/>
        </div>
        <div className="MealSelection__name">{name}</div>
      </div>
    </div>
  );
};

export default MealSelection;
