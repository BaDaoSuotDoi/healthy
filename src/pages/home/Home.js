import { useState } from "react";
import Button from "../../components/Button/Button";
import MealItem from "../../components/MealItem/MealItem";
import MealSelection from "../../components/MealSelection/MealSelection";
import PracticeProgress from "../../components/PracticeProgress/PracticeProgress";
import ProcessGraph from "../../components/ProcessGraph/ProcessGraph";
import "./Home.css"
import ButtonScrollTop from "../../components/Button/ButtonScrollTop";

const mealSelections = [
  {name: "Morning", icon:"/eat.png"},
  {name: "Lunch", icon:"/eat.png"},
  {name: "Dinner", icon:"/eat.png"},
  {name: "Snack", icon:"/icon_cup.png"},
]


function Home() {
    const [mealItems, setMealItems] = useState([
      {backgroundImage: "/m01.png",desc:"5.21.Morning"},
      {backgroundImage: "/m01.png",desc:"5.21.Morning"},
      {backgroundImage: "/m01.png",desc:"5.21.Morning"},
      {backgroundImage: "/m01.png",desc:"5.21.Morning"},
      {backgroundImage: "/m01.png",desc:"5.21.Morning"},
      {backgroundImage: "/m01.png",desc:"5.21.Morning"},
      {backgroundImage: "/m01.png",desc:"5.21.Morning"},
      {backgroundImage: "/m01.png",desc:"5.21.Morning"},
     
    ])

    return (
      <>
       <div className="Home__record">
        <PracticeProgress backgroundImage={"/practiceProgress.png"}
          taskCompletedNumber={16}
          taskTotal={21}
        />
        <ProcessGraph/>
       </div>
        <div className="Container">
          <div className="Content"> 
              <div className="Content__meal">
                {
                  mealSelections.map((item,index)=>(
                    <div key={index}>
                      <MealSelection name={item.name} iconUrl={item.icon}/>
                    </div>
                  ))
                }
            </div>
            <div className="Content__meal__item">
                {
                  mealItems.map((item,index)=>(
                    <div key={index} className="Content__meal_item__wrap">
                     <MealItem backgroundImage={item.backgroundImage} desc={item.desc}/>
                    </div>  
                  ))
                }
            </div>
            <div style={{width:'30%'}}>
              <Button title={"Hello"} handleClick={()=>{
                  setMealItems([
                    ...mealItems,
                    {backgroundImage: "/m01.png",desc:"5.21.Morning"},
                    {backgroundImage: "/m01.png",desc:"5.21.Morning"},
                    {backgroundImage: "/m01.png",desc:"5.21.Morning"},
                    {backgroundImage: "/m01.png",desc:"5.21.Morning"}
                  ])
              }}/>
            </div>
          </div>
        </div>
        <div className="ButtonScrollTop"  style={{top: window.innerHeight/2, left: window.innerWidth* 10/11}}>
            <ButtonScrollTop/>
          </div>
        <div>
        </div>
      </>
    );
  }
  
  export default Home;
  