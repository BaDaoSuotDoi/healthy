import "./PracticeProgress.css"
import PropTypes from 'prop-types'
import ProgressBar from "./ProgressBar";

function PracticeProgress({backgroundImage,taskCompletedNumber, taskTotal }) {
    return (
      <div className="PracticeProgress">
        <img src={backgroundImage}  className="PracticeProgress__img"/>
        <div className="PracticeProgress__container">
          <ProgressBar percentage={Math.round(taskCompletedNumber/taskTotal *100)} />
          <div className="PracticeProgress__text">
            <div>{taskCompletedNumber}/{taskTotal}</div>
            <div className="PracticeProgress__text__precent">{Math.round(taskCompletedNumber/taskTotal *100)}%</div>
          </div>
        </div>
    </div>
    ); 
  }
  
  PracticeProgress.propTypes = {
    backgroundImage: PropTypes.string,
    taskCompletedNumber: PropTypes.number,
    taskTotal: PropTypes.number,
  }

  export default PracticeProgress;
  