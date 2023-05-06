import React from "react";

import { Link } from "react-router-dom";

import "./sidebar.css";

import logo from "../../assets/images/jumiaLogo2.png";
import logo1 from "../../assets/images/jumiaIcon2.png";

import sidebar_items from "../../assets/JsonData/sidebar_routes.json";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span className="text_sidebar d-none d-md-flex ">{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );
var boolCheck=true;
  const teggleTheme = () => {
if(boolCheck)
   {
    boolCheck=!boolCheck;
     document.getElementsByClassName("sidebar")[0].classList.add("active");
    var text_sidebar = document.querySelectorAll(".text_sidebar");
    var arrText_sidebar = Array.from(text_sidebar);
    arrText_sidebar.map((element) => {
      element.classList.add("d-md-none");});
    document.querySelectorAll("#logo")[0].src = logo1;
  var layout__content=  document.getElementsByClassName("layout__content")[0]
  layout__content.classList.add("layout__content_padding")
  layout__content.classList.remove("layout__content")
    }
      else{ boolCheck=!boolCheck;
        document.getElementsByClassName("sidebar")[0].classList.remove("active");
        var text_sidebar = document.querySelectorAll(".text_sidebar");
        var arrText_sidebar = Array.from(text_sidebar);
        arrText_sidebar.map((element) => {
          element.classList.remove("d-md-none");});
        document.querySelectorAll("#logo")[0].src = logo;
        var layout__content=  document.getElementsByClassName("layout__content_padding")[0]
  layout__content.classList.remove("layout__content_padding")
  layout__content.classList.add("layout__content")
      }
  };
  return (
    <div className="sidebar">
      <div className="sidebar__logo" onClick={teggleTheme}>
        <img
          src={logo}
          alt="company logo"
          className="d-none d-md-flex"
          id="logo"
        />
        <img src={logo1} alt="company logo" className="d-md-none d-flex" />
      </div>
      {sidebar_items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
