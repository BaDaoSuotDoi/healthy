import React, { useState } from "react";
import "./Menu.css";
import PropTypes from 'prop-types';

const menus =[
  {id:1, name:"自分の記録"},
  {id:2, name:"自分の記録"},
  {id:3, name:"自分の記録"},
  {id:4, name:"自分の記録"},
  {id:5, name:"自分の記録"},
  {id:6, name:"自分の記録"}
]
const Menu = ({menuId, setMenuId}) => {

  return (
    <div className="Menu">   
        {
          menus.map((item,index)=>(
            <div key={item.id}  
                onClick={()=>{setMenuId(item.id)}}
                className={` Menu__item ${menuId == item.id ? 'Menu__item--active': 'Menu__item--unactive' }`}>
                <div>{item.name}</div>
            </div>
          ))
        }
    </div>
  );
 
};

Menu.propTypes = {
  menuSelected: PropTypes.object.isRequired,
  menuId: PropTypes.func.isRequired
};

export default Menu;
