import React from "react";
import "./Button.css";
import PropTypes from 'prop-types';

const Button = ({ title }) => {
  return (
    <div className="Button">   
        <img src={"button.png"} width={"20%"}/>
        <div className="Button_title">{title}</div>
    </div>
  );
 
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Button;
