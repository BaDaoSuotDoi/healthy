import React from "react";
import "./VideoRecommend.css";
import PropTypes from 'prop-types';
import MealItem from "../MealItem/MealItem";


const VideoRecommend = ({videoRecommends}) => {
  return (
    <div className="VideoRecommend" >  
        {
            videoRecommends.map((item,index)=>(
                <div key={index} className="VideoRecommend__item">
                     <MealItem desc={item.desc} backgroundImage={item.backgroundImage}/>
                    <div className="VideoRecommend__item__title">{item.title}</div>
                    <div className="VideoRecommend__item__tags">
                    {
                        item.tags.map((tag,index)=>(
                            <div key={tag} className="VideoRecommend__item__tag">#{tag}</div>
                        ))  
                     }
                    </div>
                </div>
            ))
        } 
    </div>
  ); 
};

VideoRecommend.propTypes = {
    videoRecommends:  PropTypes.array.isRequired,
};

export default VideoRecommend;
