import React from "react";
import "./Button.css";
import PropTypes from 'prop-types';

const Button = ({ title, handleClick }) => {
  return (
    <div className="Button" onClick={handleClick}>   
        <div className="Button_title">{title}</div>
    </div>
  );
 
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default Button;
