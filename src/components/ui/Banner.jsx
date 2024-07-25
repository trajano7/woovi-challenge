import React from "react";
import { Box, Typography } from "@mui/material";
import "./Banner.css";

const Banner = ({children}) => {
  return <div className="ribbon">{children}</div>;
};

export default Banner;
