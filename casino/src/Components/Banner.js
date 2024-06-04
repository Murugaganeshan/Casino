import React from "react";
import Image from "../Assets/Images/GpssZTx.jpg"
import Casimg from "../Assets/Images/bet.jpg"
import "../Assets/css/Banner.css"
const Banner=()=>{
    return(
        <div className="banner-sec">  
    
        <div id="carouselExampleAutoplaying" className="carousel slide homeBackground container-fluid " data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner ">
            <div className="carousel-item active banner">
                
            <img src={Image} className="img-fluid"/>
            </div>
            <div className="carousel-item  banner">
                
                <img src={Image} className="img-fluid"/>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                {/* <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"></li>
                    
                </ol> */}
            </div>
            </div>
            <div className="container-fluid mt-4">
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-1 row-ban-img ">
                    <div className="col mt-1">
                    <img src={Image} className="img-fluid ban-img"/>
                    </div>
                    <div className="col mt-1">
                    <img src={Image} className="img-fluid ban-img"/>
                    </div>
                    <div className="col mt-1">
                    <img src={Image} className="img-fluid ban-img"/>
                    </div>

                </div>

            </div>



            </div>
    )
}
export default Banner