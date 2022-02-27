import React from "react";
import SidebarOption from "./SidebarOption";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LaptopIcon from '@mui/icons-material/Laptop';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import HomeIcon from '@mui/icons-material/Home';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

const menuItems = [
  { iconName: IndeterminateCheckBoxIcon, title: "Electronics", subMenus: ["Lenovo", "Asus"] },
  { iconName: CameraAltIcon, title: "Cameras" },
  { iconName: LaptopIcon, title: "Laptop" },
  { iconName: BookmarkIcon, title: "Accessories" },
  { iconName: HeadphonesIcon, title: "Headphones" },
  { iconName: BedtimeIcon, title: "Beauty" },
  { iconName: HomeIcon, title: "Home" },
];

const SideMenu = () => {

  const clickHandler = () => {
    console.log('Clicked')
  }
  return (
    <div className="sidebar_container">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Categories</h2>
          {/* <h3>
            <FiberManualRecordIcon />
          </h3> */}
        </div>
        {/* <CreateIcon /> */}
      </div>
      {menuItems
        ? menuItems.map((menuItem, index) => (
            <SidebarOption onClick={clickHandler} key={index} Icon={menuItem.iconName} menuItem={menuItem}  />
          ))
        : null}

      <hr />
    </div>
  );
};

export default SideMenu;
