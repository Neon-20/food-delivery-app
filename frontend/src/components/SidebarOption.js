import React from "react";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link } from "react-router-dom";

function SidebarOption({ Icon, menuItem }) {
  const [clickState, setClickState] = useState(false);

  const clickHandler = () => {
    setClickState(!clickState);
  };

  const clickHandler2 = (e) => {
    console.log(menuItem.title, e.target.text);
  }
  return (
    <div>
      <div className="sidebarOptionContainer" onClick={clickHandler}>
        {Icon && <Icon fontSize="small" />}
        {Icon ? (
          <h3>{menuItem.title}</h3>
        ) : (
          <div className="sidebar_option_channel">
            <span>#</span> {menuItem.title}
          </div>
        )}
        {clickState ? (
          <ExpandLessIcon fontSize="medium" style={{marginLeft: '10px'}} />
        ) : (
          <ExpandMoreIcon fontSize="medium" style={{marginLeft: '10px'}} />
        )}
      </div>
      <div className={clickState ? `sub_menu_items active` : `sub_menu_items`}>
        {/* {subMenus ? (
          subMenus.map((menu, index) => (
            <Link onClick={(e) => clickHandler2(e)} to="/" key={index} className="sub_menu_link" >{menu}</Link>
          ))
        ) : null} */}
        {
          menuItem && menuItem.subMenus ? (
            menuItem.subMenus.map((menu, index) => (
              <Link onClick={(e) => clickHandler2(e)} to="/" key={index} className="sub_menu_link" >{menu}</Link>
            ))
          ) : null
        }
      </div>
    </div>
  );
}

export default SidebarOption;
