import React from "react";
import "./RecordSelection.css";
import PropTypes from 'prop-types';

const RecordSelection = ({ title, desc, backgroundImg }) => {
  return (
    <div className="RecordSelection">
       <div className="RecordSelection__background">
            <img src={backgroundImg} className="RecordSelection__image"/>
       </div>
       <div className="RecordSelection__content">
            <div className="RecordSelection__content__title">{title}</div>
                <div className="RecordSelection__content__desc">{desc}</div>
        </div>
    </div>
  );
};

RecordSelection.propTypes = {
    title: PropTypes.string.isRequired,
    backgroundImg: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

export default RecordSelection;
