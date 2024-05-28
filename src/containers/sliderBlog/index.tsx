import React from "react";

import { Box } from "@mui/material";
import Slider from "react-slick";

import BlogSlider1 from "src/assets/slider/BlogSlider.png";
import BlogSlider2 from "src/assets/slider/BlogSlider2.png";
import BlogSlider3 from "src/assets/slider/BlogSlider3.png";
import BlogSlider4 from "src/assets/slider/BlogSlider4.png";

import classes from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderBlog: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <Box className={classes.root}>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={BlogSlider1} alt="Blog Slide 1" />
          </div>
          <div>
            <img src={BlogSlider2} alt="Blog Slide 2" />
          </div>
          <div>
            <img src={BlogSlider3} alt="Blog Slide 3" />
          </div>
          <div>
            <img src={BlogSlider4} alt="Blog Slide 4" />
          </div>
        </Slider>
      </div>
    </Box>
  );
};
