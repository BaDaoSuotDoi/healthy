import React from "react";
import "./MyDiary.css";
import PropTypes from 'prop-types';

const diaryItems = [
    {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
    {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
    {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
    {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
    {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
    {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
    {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
    {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
]

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
const MyDiary = () => {
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
   
};

export default MyDiary;
