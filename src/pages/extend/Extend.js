import Button from "../../components/Button/Button";
import ButtonScrollTop from "../../components/Button/ButtonScrollTop";
import Recommend from "../../components/Recommend/Recommed";
import VideoRecommend from "../../components/VideoRecommend/VideoRecommend";
import "./Extend.css";

function Extend() {
    return (
      <>
        <div className="Extend__comp">
            <div style={{ width:window.innerWidth*0.75}}>
                <Recommend/>
            </div>
        </div>

        <div className="Extend__comp">
            <div style={{ width:window.innerWidth*0.75}}>
                <VideoRecommend/>
            </div>
        </div>
        <div className="Extend__comp">
            <div style={{ width:'30%'}}>
                <Button title="Extend"/>
            </div>
       </div>
       <div className="ButtonScrollTop" style={{top: window.innerHeight * 3/4, left: window.innerWidth* 8/9}}>
            <ButtonScrollTop/>
        </div>
      </>
    );
  }
  
  export default Extend;
  