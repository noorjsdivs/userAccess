import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imgOne from "../assets/images/banner/1.jpg";
import imgTwo from "../assets/images/banner/2.jpg";
import imgThree from "../assets/images/banner/5.jpg";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="w-full">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={3000}
        >
          <div>
            <img
              className="w-full h-xl"
              loading="lazy"
              src={imgOne}
              alt="imgOne"
            />
          </div>
          <div>
            <img
              className="w-full h-xl"
              loading="lazy"
              src={imgTwo}
              alt="imgTwo"
            />
          </div>
          <div>
            <img
              className="w-full h-xl"
              loading="lazy"
              src={imgThree}
              alt="imgThree"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
