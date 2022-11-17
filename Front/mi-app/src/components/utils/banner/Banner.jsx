import React from "react";
import banner from "../img/image1.png";

function Banner() {
  return (
    <div className="banner">
      <img className="banner-image" src={banner} alt="banner" />
    </div>
  );
}

export default Banner;
