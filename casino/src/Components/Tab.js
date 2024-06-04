import React, { useState } from "react";
import "../Assets/css/Tab.css" 
import { IoIosStar } from "react-icons/io";
import { FaBasketball } from "react-icons/fa6";
import { MdSportsSoccer } from "react-icons/md";
import { PiHockeyBold } from "react-icons/pi";
const Tab=()=>{
    const [toggle, setToggle]=useState(1)
    function updateToggle(id){
      setToggle(id)
    }
  
    return(
        <div className="container-fluid tab">
      



            <div className="tab-content">
            <div className="Tabbar">  
       
   
            <div className="Tabs">
          
            <h5><IoIosStar className="star-icon" /> Top Games</h5>
            <ul>   
          
  <li onClick={()=> updateToggle(1)}> <button className="btn baseketball "><FaBasketball className="btn-icon" /> Basketball</button></li>
  <li onClick={()=> updateToggle(2)} > <button className="btn"><MdSportsSoccer className="btn-icon" /> Soccer</button> </li>
  <li onClick={()=> updateToggle(2)} > <button className="btn"><PiHockeyBold className="btn-icon" /> Hockey</button> </li>
  </ul>
</div>
<div className= {toggle ===1 ? "show-content" : "content"}> 
 <div className="price" >
   <div className="deal">
    {/* <h3> Deal of the Day</h3>
    <h3> Save 25% Hurry, ends soon </h3> */}

   </div>  
    </div>  
   </div>  
   <div className= {toggle ===2 ? "show-content" : "content"}> 
 <div className="price" >
   {/* <div className="deal">
    <h3> Deal of the Day</h3>
    <h3> Save 25% Hurry, endsdsfsdfsdfsdf soon </h3>

   </div>   */}
    </div>  
   </div> 
</div>    

            </div>

        </div>
       
    )
}
export default Tab