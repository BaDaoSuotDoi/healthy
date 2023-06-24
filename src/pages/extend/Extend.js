import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import ButtonScrollTop from "../../components/Button/ButtonScrollTop";
import Recommend from "../../components/Recommend/Recommed";
import VideoRecommend from "../../components/VideoRecommend/VideoRecommend";
import "./Extend.css";

function Extend() {
    const [videoRecommends, setVideoRecommends] = useState([
        {backgroundImage: "/video.png",desc:"5.21.Morning", title:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle",
            tags: ["AAA","BBB","CCC"]
        },
        {backgroundImage: "/video.png",desc:"5.21.Morning", title:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle",
            tags: ["AAA","BBB","CCC"]
        },
        {backgroundImage: "/video.png",desc:"5.21.Morning", title:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle",
        tags: ["AAA","BBB","CCC"]
        },
        {backgroundImage: "/video.png",desc:"5.21.Morning", title:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle",
        tags: ["AAA","BBB","CCC"]
        },
        {backgroundImage: "/video.png",desc:"5.21.Morning", title:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle",
        tags: ["AAA","BBB","CCC"]
        },
        {backgroundImage: "/video.png",desc:"5.21.Morning", title:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle",
        tags: ["AAA","BBB","CCC"]
        },
        {backgroundImage: "/video.png",desc:"5.21.Morning", title:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle",
        tags: ["AAA","BBB","CCC"]
        },
        {backgroundImage: "/video.png",desc:"5.21.Morning", title:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle",
        tags: ["AAA","BBB","CCC"]
        },
    ])

    useEffect(()=>{
        document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });
      },[videoRecommends])

    return (
      <>
        <div className="Extend__comp">
            <div style={{ width:window.innerWidth*0.75}}>
                <Recommend/>
            </div>
        </div>

        <div className="Extend__comp">
            <div style={{ width:window.innerWidth*0.75}}>
                <VideoRecommend videoRecommends={videoRecommends}/>
            </div>
        </div>
        <div className="Extend__comp">
            <div style={{ width:'30%', marginBottom:'65px'}}>
                <Button title="Extend"  handleClick={()=>{
                    setVideoRecommends([
                        ...videoRecommends,
                        {backgroundImage: "/video.png",desc:"5.21.Morning", title:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle",
                        tags: ["AAA","BBB","CCC"]
                        },
                        {backgroundImage: "/video.png",desc:"5.21.Morning", title:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle",
                            tags: ["AAA","BBB","CCC"]
                        },
                        {backgroundImage: "/video.png",desc:"5.21.Morning", title:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle",
                        tags: ["AAA","BBB","CCC"]
                        },
                        {backgroundImage: "/video.png",desc:"5.21.Morning", title:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle",
                        tags: ["AAA","BBB","CCC"]
                        },
                    ]);
                }}/>
            </div>
       </div>
       <div className="ButtonScrollTop" style={{top: window.innerHeight * 3/4, left: window.innerWidth* 8/9}}>
            <ButtonScrollTop/>
        </div>
      </>
    );
  }
  
  export default Extend;
  