import React from "react";
import "./ButtonScrollTop.css";
import PropTypes from 'prop-types';

function scroll() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const ButtonScrollTop = () => {
  return (
    <div className="ButtonScrollTop" onClick={()=>{scroll()}}>   
        <img src={"/component_scroll.png"} />
    </div>
  );
 
};


export default ButtonScrollTop;
