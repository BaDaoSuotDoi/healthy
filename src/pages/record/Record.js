import { useState } from "react";
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
            <MyDiary/>
       </div>
       <div className="Record__comp">
            <div style={{ width:'20%'}}>
                <Button title="Record"/>
            </div>
       </div>
       <div className="ButtonScrollTop" style={{top: window.innerHeight/2, left: window.innerWidth* 8/9}}>
            <ButtonScrollTop/>
        </div>
      </>
    );
  }
  
  export default Record;
  