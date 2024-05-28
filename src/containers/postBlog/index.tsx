import React from "react";
import { Box } from "@mui/material";

import BigPost from "src/assets/post/BigPost.png";

import classes from "./style.module.scss";

export const BigPostBlog: React.FC = () => {
  return (
    <Box className={classes.root}>
      <img src={BigPost} alt="big post" />
    </Box>
  );
};
