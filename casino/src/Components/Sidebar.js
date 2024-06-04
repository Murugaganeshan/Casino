import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { GiPokerHand } from "react-icons/gi";
import { FaBasketballBall } from "react-icons/fa";
import { GiTrade } from "react-icons/gi";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";

import { NavLink } from 'react-router-dom';
import "../Assets/css/Sidebar.css";


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
   

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdownOpen1, setDropdownOpen1] = useState(false);
    const [isDropdownOpen2, setDropdownOpen2] = useState(false);


    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const toggleDropdown1 = () => {
        setDropdownOpen1(!isDropdownOpen1);
    };
    const toggleDropdown2 = () => {
        setDropdownOpen2(!isDropdownOpen2);
    };
    return (
        <div className="container-fluid sidebar-container" style={{padding:"0px", position:"absolute"}}>
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
               <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">BG GROUND</h1>
                  
               </div>
              
                 <div style={{width: isOpen ? "220px" : "50px", transition:"0.5s"}}  className="menu-item" onClick={toggleDropdown}>
                    <div className='icon-text'> 
                 <GiPokerHand className='icon-pok'/>
                 <div style={{display: isOpen ? "block" : "none"}} className="link_text">CASINO GAMES</div>
                 </div>
                <span className='mb-1 dropicon' style={{display: isOpen ? "block" : "none"}}>{isDropdownOpen ?  <IoMdArrowDropupCircle />:<IoMdArrowDropdownCircle/> }</span>
            </div>
            {isDropdownOpen && (
                <div className='total-drop'style={{width: isOpen ? "220px" : "50px", transition:"0.5s"}}> 
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">KATZNO Originals</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Live Casino</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Slots Machine</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Flip The Coin</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Crash</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Table Games</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">NFT Loot Box</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">BlackJack</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Routlette</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Poker</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Spin 2 WIN</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Drop & Win</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Dice</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Add Game Shortcode</a>
                 </div>
                </div>
                
                </div>
            )}
              <div className="menu-item mt-2" onClick={toggleDropdown1} style={{width: isOpen ? "220px" : "50px", transition:"0.5s"}} >
                    <div className='icon-text'> 
                 <GiPokerHand className='icon-pok'/>
                 <div style={{display: isOpen ? "block" : "none"}} className="link_text">SPORTS BET</div>
                 </div>
                <span className='mb-1 ' style={{display: isOpen ? "block" : "none"}}>{isDropdownOpen1 ?  <IoMdArrowDropupCircle />:<IoMdArrowDropdownCircle/>}</span>
            </div>
            {isDropdownOpen1 && (
                <div className='total-drop' style={{width: isOpen ? "220px" : "50px", transition:"0.5s"}}> 
              
              
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Flip The Coin</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Crash</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Table Games</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">NFT Loot Box</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">BlackJack</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Routlette</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Poker</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Spin 2 WIN</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Drop & Win</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Dice</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Add Game Shortcode</a>
                 </div>
                </div>
                
                </div>
            )}
              <div className="menu-item mt-2" onClick={toggleDropdown2} style={{width: isOpen ? "220px" : "50px", transition:"0.5s"}}>
                    <div className='icon-text'> 
                 <GiPokerHand className='icon-pok'/>
                 <div style={{display: isOpen ? "block" : "none"}} className="link_text">CRYPTO TRADE</div>
                 </div>
                <span className='mb-1' style={{display: isOpen ? "block" : "none"}}>{isDropdownOpen2 ?  <IoMdArrowDropupCircle />:<IoMdArrowDropdownCircle/>}</span>
            </div>
            {isDropdownOpen2 && (
                <div className='total-drop'style={{width: isOpen ? "220px" : "50px", transition:"0.5s"}}> 
              
              
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">KATZNO Originals</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Slots Machine</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Live Casino</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Table Games</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Providers</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Swap</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">Future</a>
                 </div>
                </div>
                <div className="dropdown">
                    <div className='icon-text-drop'> 
                 <GiPokerHand className='icon-pok-drop'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text-drop">NFT Lootbox</a>
                 </div>
                </div>
              
             
              
                
                </div>
            )}

                    {/* <div className="menu-item-link mt-2">
                    <div className='icon-text-link'> 
                 <GiPokerHand className='icon-pok-link'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text">Refer & Earn</a>
                 </div>
            </div>    
                     
                    <div className="menu-item-link mt-2">
                    <div className='icon-text-link'> 
                 <GiPokerHand className='icon-pok-link'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text">Promotion</a>
                 </div>
            </div>  
            
            <div className="menu-item-link mt-2">
                    <div className='icon-text-link'> 
                 <GiPokerHand className='icon-pok-link'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text">Daily Rewards</a>
                 </div>
            </div>  
                    <div className="menu-item-link mt-2">
                    <div className='icon-text-link'> 
                 <GiPokerHand className='icon-pok-link'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text">VIP Club</a>
                 </div>
            </div>  
                    <div className="menu-item-link mt-2">
                    <div className='icon-text-link'> 
                 <GiPokerHand className='icon-pok-link'/>
                 <a href='/' style={{display: isOpen ? "block" : "none"}} className="link_text">Leaderboard</a>
                 </div>
            </div>   */}
            <div className="menu-item mt-2" style={{width: isOpen ? "220px" : "50px", transition:"0.5s", backgroundColor:"transparent"}}>
                    <div className='icon-text-2'> 
                    <a href='/'> 
                 <GiPokerHand className='icon-pok'/>
                 <div style={{display: isOpen ? "block" : "none"}} className="link_text-1">Refer & Earn</div>
                 </a>
                 </div>
            </div>
            <div className="menu-item mt-2" style={{width: isOpen ? "220px" : "50px", transition:"0.5s", backgroundColor:"transparent"}}>
                    <div className='icon-text-2'> 
                    <a href='/'> 
                 <GiPokerHand className='icon-pok'/>
                 <div style={{display: isOpen ? "block" : "none"}} className="link_text-1">Promotion</div>
                 </a>
                 </div>
            </div>
            <div className="menu-item mt-2" style={{width: isOpen ? "220px" : "50px", transition:"0.5s", backgroundColor:"transparent"}}>
                    <div className='icon-text-2'> 
                    <a href='/'> 
                 <GiPokerHand className='icon-pok'/>
                 <div style={{display: isOpen ? "block" : "none"}} className="link_text-1">Daily Rewards</div>
                 </a>
                 </div>
            </div>
            <div className="menu-item mt-2" style={{width: isOpen ? "220px" : "50px", transition:"0.5s", backgroundColor:"transparent"}}>
                    <div className='icon-text-2'> 
                    <a href='/'> 
                 <GiPokerHand className='icon-pok'/>
                 <div style={{display: isOpen ? "block" : "none"}} className="link_text-1"><span>VIP</span> Club</div>
                 </a>
                 </div>
            </div>
            <div className="menu-item mt-2" style={{width: isOpen ? "220px" : "50px", transition:"0.5s", backgroundColor:"transparent"}}>
                    <div className='icon-text-2'> 
                    <a href='/'> 
                 <GiPokerHand className='icon-pok'/>
                 <div style={{display: isOpen ? "block" : "none"}} className="link_text-1">Leaderboard</div>
                 </a>
                 </div>
            </div>
          
           


           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;