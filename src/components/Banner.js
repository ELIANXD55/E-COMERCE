import React from "react";
import banner from '../image/image1.png'

function Banner(){
    return(
        <div className="banner">
            <img className="banner-image" src={banner} alt=""/>            
        </div>
    );
}

export { Banner }
