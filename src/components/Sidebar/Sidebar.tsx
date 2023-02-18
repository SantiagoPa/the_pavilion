import { useState } from "react";
import { Box, Grid } from "@mui/material";

import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

import "./Slider.css";

export const Sidebar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <Grid
      container
      aria-label="slider-sidebar"
      sx={{ height: "calc(100vh - 80px)", width: "100vw" }}
    >
      <Grid
        container
        aria-label="container-images"
        sx={{
          width: "300vw",
          height: "100%",
          transform: `translateX(-${currentSlide * 100}vw)`,
          transition: 'all 1s ease',
          position: "relative",
        }}
        flexDirection="row"
        wrap="nowrap"
      >
        <img src={data[0]} alt="img-slider_1" className="img-slider" />
        <img src={data[1]} alt="img-slider_1" className="img-slider" />
        <img src={data[2]} alt="img-slider_1" className="img-slider" />
      </Grid>
      <Grid
        container
        aria-label="icons"
        sx={{
          position: "absolute",
          left: "0",
          right: "0",
          bottom: "100px",
          margin: "auto",
          width: "fit-content",
        }}
        flexDirection="row"
        gap={1}
      >
        <Box
          onClick={prevSlide}
          sx={{
            width: "50px",
            height: "50px",
            border: "1px solid #999",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: '5px'
          }}
        >
          <WestOutlinedIcon />
        </Box>
        <Box
          onClick={nextSlide}
          sx={{
            width: "50px",
            height: "50px",
            border: "1px solid #999",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: '5px'

          }}
        >
          <EastOutlinedIcon />
        </Box>
      </Grid>
    </Grid>
  );
};
