import React from "react";
import "../Assets/css/Navbar.css"
import { IoSearchSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoIosGift } from "react-icons/io";
const Navbar=()=>{
    return(
      <nav className="nav">
        <div className="button-left">
          <h3>BG</h3>
          <button className="bonus"> Bonuses </button>
          <button className="search-icon"><IoSearchSharp className="search" /></button>


        </div>
        <div className="button-right"> 
        <button className="gift"><IoIosGift className="search" /></button>
        <button className="log-btn">Log in</button>
        <button className="sign-btn">Sign up</button>
        <div className="right-btn">
        <button className="flag-icon"><MdOutlineLanguage className="search" /></button>
        <div></div>
        <button className="set-icon"><IoIosSettings className="search" /></button>
        </div>
        <button className="search-icon"><IoMdNotifications className="search" /></button>
        <button className="search-icon"><IoChatbubbleEllipses className="search" /></button>

        

        </div>
    </nav>
    )
}
export default Navbar