import React from 'react';
import PropTypes from 'prop-types';
import "./MealItem.css";
const MealItem = ({ backgroundImage,desc }) => {

  return (
    <div className='MealItem'>   
      <img src={backgroundImage} width={"100%"}/>
        <div className='MealItem__desc'>
            {desc}
        </div>
    </div>
  );
};

MealItem.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default MealItem;
