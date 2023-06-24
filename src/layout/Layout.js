import { useState } from "react";
import Menu from "../components/Menu/Menu";
import "./Layout.css";

const tabs = [
    {id: 1, icon: "/icon_memo.png", name:"Memo"},
    {id: 2, icon: "/icon_archive.png", name:"Archive"},
    {id: 3, icon: "/icon_info.png", name:"Info"},
]

function Header(){
    const [isShowMenu,setShowMenu] = useState(false);
    const [tabId, setTabId] = useState(0);
    const [menuId, setMenuId] = useState(0);
    
    return (
        <div className="Header">
            <div className="Header__logo">
                <div><img src={"/logo.png"}/></div>
            </div>
            <div className="Header__tab">
                {
                    tabs.map((item,index)=>(
                        <div key={item.id} 
                            onClick={()=>{setTabId(item.id)}}
                            className={`TabItem ${item.id == tabId ?"TabItem__active":"Tab_item"}`}
                        >
                            <div className="TabItem__icon">
                                <img src={item.icon}/>
                            </div>
                            <div className="TabItem__name">{item.name}</div>
                            {item.id ==3 && <div className="TabItem__noti">1</div>}

                        </div>
                    ))
                }
                <div className="Header__menu" onClick={()=>{
                    setShowMenu(!isShowMenu)
                }}>
                    {isShowMenu ? <img src={"/icon_close.png"}/>: <img src={"/icon_menu.png"}/>}
                    <div className="Header__men__show">
                       {isShowMenu &&  <Menu setMenuId={setMenuId} menuId={menuId}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

const footerItems =["会員登録","会員登録","会員登録","会員登録"]
function Footer(){
    return (
        <div className="Footer"  id="footer">
            {
                footerItems.map((item,index)=>(
                    <div className="Footer__item" key={index}>{item}</div>
                ))
            }
        </div>
    )
}

function Layout({children}) {
    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
  }
  
  export default Layout;
  