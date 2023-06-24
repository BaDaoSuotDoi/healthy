import React from "react";
import "./BodyRecord.css";
import PropTypes from 'prop-types';
import ProcessGraph from "../ProcessGraph/ProcessGraph";

const Button = ({isSelected, label})=>{
    return (
        <button className={`ButtonRecord ${isSelected ? "Button--clicked": "Button--unclick"}`}
            >
            {label}
        </button>
    )
}

const BodyRecord = ({  }) => {
  return (
    <div className="BodyRecord" >   
        <div className="BodyRecord__header">
            <div className="BodyRecord__header__title">
                <div>BODY</div>
                <div>RECORD</div>
            </div>
            <div className="BodyRecord__header__date">2021.05.21</div>
        </div> 
       <ProcessGraph graphWidth={window.innerWidth * 0.75} graphHeight={200}/>
       <div className="ButtonList">
            <Button label={"日"}/>
            <Button label={"週"}/>
            <Button label={"月"}/>
            <Button label={"年"} isSelected={true}/>
       </div>
    </div>
  );
 
};

BodyRecord.propTypes = {
    title: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default BodyRecord;
