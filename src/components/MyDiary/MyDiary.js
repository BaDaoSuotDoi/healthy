import React from "react";
import "./MyDiary.css";
import PropTypes from 'prop-types';


const DiaryItem = ({date, time, title, content})=>{
    return (
        <div className="DiaryItem">
            <div className="DiaryItem__date">{date}</div>
            <div className="DiaryItem__time">{time}</div>
            <div className="DiaryItem__title">{title}</div>
            <div className="DiaryItem__content">{content}</div>
        </div>
    )
}
const MyDiary = ({diaryItems}) => {
  return (
    <div className="MyDiary" style={{ width:window.innerWidth*0.75}} >   
       <div className="MyDiary__title">MY DIARY</div>
       <div className="MyDiary__content">
            {
                diaryItems.map((item, index)=>(
                    <div key={index} className="MyDiary__item">
                       <DiaryItem date={item.date} time={item.time} title={item.title} content={item.content}/>
                    </div>
                ))
            }
       </div>
    </div>
  );
 
};

MyDiary.propTypes = {
    diaryItems:  PropTypes.array.isRequired,
};

export default MyDiary;
