import React from "react";
import "./MyExercise.css";
import PropTypes from 'prop-types';

const exercises = [
    {name:"家事全般（立位・軽い）", kcal:"26kcal", time:"10 min"},
    {name:"家事全般（立位・軽い）", kcal:"26kcal", time:"10 min"},
    {name:"家事全般（立位・軽い）", kcal:"26kcal", time:"10 min"},
    {name:"家事全般（立位・軽い）", kcal:"26kcal", time:"10 min"},
    {name:"家事全般（立位・軽い）", kcal:"26kcal", time:"10 min"},
    {name:"家事全般（立位・軽い）", kcal:"26kcal", time:"10 min"},
    {name:"家事全般（立位・軽い）", kcal:"26kcal", time:"10 min"},
    {name:"家事全般（立位・軽い）", kcal:"26kcal", time:"10 min"},
    {name:"家事全般（立位・軽い）", kcal:"26kcal", time:"10 min"},
    {name:"家事全般（立位・軽い）", kcal:"26kcal", time:"10 min"},
    {name:"家事全般（立位・軽い）", kcal:"26kcal", time:"10 min"},
    {name:"家事全般（立位・軽い）", kcal:"26kcal", time:"10 min"},
]

const ExerciseItem = ({item})=>{
    return (
       <div className="ExerciseItem">
            <div className="ExerciseItem__body">
                <div className="ExerciseItem__body__dot"></div>
                <div className="ExerciseItem__body_content">
                    <div className="ExerciseItem__body__name">{item.name}</div>
                    <div className="ExerciseItem--primary">{item.kcal}</div>
                </div>
                <div className="ExerciseItem--primary">{item.time}</div>
            </div>
            <div className="ExerciseItem__body_border"></div>
       </div>
    )
}
const MyExercise = ({  }) => {
  return (
    <div className="MyExercise" style={{ width:window.innerWidth*0.75}}>   
       <div className="MyExercise__title">
            <div className="MyExercise__title__name">
                <div>MY</div>
                <div>EXERCISE</div>
            </div>
            <div className="MyExercise__title__date">2021.05.21</div>
        </div>
        <div className="MyExercise__content" id="scroll">
            {
                exercises.map((item,index)=>(
                    <div key={index} className="MyExercise__item--width">
                        <ExerciseItem item={item}/>
                    </div>
                ))
            }
        </div>
    </div>
  );
};

MyExercise.propTypes = {
    title: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default MyExercise;
