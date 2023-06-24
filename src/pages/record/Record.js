import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import MealItem from "../../components/MealItem/MealItem";
import MealSelection from "../../components/MealSelection/MealSelection";
import PracticeProgress from "../../components/PracticeProgress/PracticeProgress";
import ProcessGraph from "../../components/ProcessGraph/ProcessGraph";
import "./Record.css"
import ButtonScrollTop from "../../components/Button/ButtonScrollTop";
import RecordSelection from "../../components/RecordSelection/RecordSelection";
import BodyRecord from "../../components/BodyRecord/BodyRecord";
import MyExercise from "../../components/MyExercise/MyExercise";
import MyDiary from "../../components/MyDiary/MyDiary";


const recordSelections = [
    {title: "BODY RECORD",desc:"hello my record",backgroundImg:"/recordBody.png"},
    {title: "MY EXERCISE",desc:"hello my record",backgroundImg:"/recordBody.png"},
    {title: "MY DIARY",desc:"hello my record",backgroundImg:"/recordBody.png"},
]

function Record() {

    const [diaryItems, setDiaryItems] = useState([
        {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
        {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
        {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
        {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
        {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
        {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
        {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
        {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
      ])
    
    useEffect(()=>{
      document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });
    },[diaryItems])

    return (
      <>
       <div className="Record__comp">
            <div style={{display:'flex',justifyContent:'space-between', width:window.innerWidth*0.75}}>
            {
                recordSelections.map((item, index)=>(
                    <div key={index}>
                        <RecordSelection title={item.title} desc={item.desc} backgroundImg={item.backgroundImg}/>
                    </div>
                ))
            }
            </div>
       </div>
       <div className="Record__comp">
            <BodyRecord/>
       </div>
       <div className="Record__comp">
            <MyExercise/>
       </div>
       <div className="Record__comp">
            <MyDiary diaryItems={diaryItems}/>
       </div>
       <div className="Record__comp">
            <div style={{ width:'30%',marginBottom:'65px'}}>
                <Button title="Record" handleClick={()=>{
                  setDiaryItems([
                    ...diaryItems,
                    {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
                    {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
                    {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
                    {date:'2021.05.21', time:'23.25',title:'Hello baby', content:"Mattermost Boards combines project management tools with messaging and collaboration for teams of all sizes. To access and use Mattermost Boards, install or upgrade to Mattermost v6.0 or later as a self-hosted server. After logging into Mattermost, select the menu in the top left corner and select Boards."},
                  ])
              }}/>
            </div>
       </div>
       <div className="ButtonScrollTop" style={{top: window.innerHeight/2, left: window.innerWidth* 8/9}}>
            <ButtonScrollTop/>
        </div>
      </>
    );
  }
  
  export default Record;
  