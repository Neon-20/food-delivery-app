import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  const { name, subMenus, iconClassName, onClick, to } = props;
  const [expand, setExpand] =useState(false);

  return (
    <li onClick={onClick}>
      <NavLink to={to} onClick={() => setExpand(!expand)} className="menu-item">
        <div className="menu-icon">
          <i className={iconClassName}></i>
        </div>
        <span>{name}</span>
      </NavLink>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu ${expand ? 'active' : ''}`}>
          {subMenus.map((menu) => (
            <li key={menu.name}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
