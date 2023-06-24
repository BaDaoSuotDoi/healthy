import React from "react";
import "./Recommend.css";
import PropTypes from 'prop-types';

const recommendItems = [
    {title:"RECOMMENDED COLUMN", desc:"オススメ"},
    {title:"RECOMMENDED DIET", desc:"ダイエット"},
    {title:"RECOMMENDED BEAUTY", desc:"美容"},
    {title:"RECOMMENDED HEALTH", desc:"健康"}
]

const RecommendItem = ({ title, desc }) => {
    return (
      <div className="RecommendItem">   
          <div className="RecommendItem__title">{title}</div>
          <div className="RecommendItem--border"></div>
          <div>{desc}</div>
      </div>
    );
};

const Recommend = () => {
  return (
    <div className="Recommend">   
       {
        recommendItems.map((item,index)=>(
            <div key={index} className="RecommendItem--width">
                <RecommendItem title={item.title} desc={item.desc}/>
            </div>
        ))
       }
    </div>
  );
 
};


RecommendItem.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

export default Recommend;
