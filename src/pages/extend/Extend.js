import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import ButtonScrollTop from "../../components/Button/ButtonScrollTop";
import Recommend from "../../components/Recommend/Recommed";
import VideoRecommend from "../../components/VideoRecommend/VideoRecommend";
import "./Extend.css";

function Extend() {
    const [videoRecommends, setVideoRecommends] = useState([
        {backgroundImage: "/video.png",desc:"5.21.Morning", title:"魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
            tags: ["魚料理","和食","DHA"]
        },
        {backgroundImage: "/r2.png",desc:"5.21.Morning", title:"魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
            tags: ["魚料理","和食","DHA"]
        },
        {backgroundImage: "/r3.png",desc:"5.21.Morning", title:"魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        tags: ["魚料理","和食","DHA"]
        },
        {backgroundImage: "/r4.png",desc:"5.21.Morning", title:"魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        tags: ["魚料理","和食","DHA"]
        },
        {backgroundImage: "/r5.png",desc:"5.21.Morning", title:"魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        tags: ["魚料理","和食","DHA"]
        },
        {backgroundImage: "/r6.png",desc:"5.21.Morning", title:"魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        tags: ["魚料理","和食","DHA"]
        },
        {backgroundImage: "/r7.png",desc:"5.21.Morning", title:"魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        tags: ["魚料理","和食","DHA"]
        },
        {backgroundImage: "/r8.png",desc:"5.21.Morning", title:"魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        tags: ["魚料理","和食","DHA"]
        },
    ])

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });
        },200)
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
                <Button title="コラムをもっと見る"  handleClick={()=>{
                    setVideoRecommends([
                        ...videoRecommends,
                        {backgroundImage: "/video.png",desc:"5.21.Morning", title:"魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
                        tags: ["魚料理","和食","DHA"]
                        },
                        {backgroundImage: "/video.png",desc:"5.21.Morning", title:"魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
                            tags: ["魚料理","和食","DHA"]
                        },
                        {backgroundImage: "/video.png",desc:"5.21.Morning", title:"魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
                        tags: ["魚料理","和食","DHA"]
                        },
                        {backgroundImage: "/video.png",desc:"5.21.Morning", title:"魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
                        tags: ["魚料理","和食","DHA"]
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
  