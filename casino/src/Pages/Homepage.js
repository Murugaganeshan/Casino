import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Tab from "../Components/Tab";
import Footers from "../Components/Footer"
function Homepage(){
    return(
      <div >
        <Navbar/>
        <Banner/>
        <Tab/>
        <Footers/>
      </div>
    )
}
export default Homepage