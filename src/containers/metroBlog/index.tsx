import React from "react";

import { Box, Typography } from "@mui/material";

import classes from "./style.module.scss";
import { REGULAR_DATA } from "src/utils/constants/regular";

export const MetroBlog: React.FC = () => {
  const data = REGULAR_DATA.filter((item) => item.category === "fashion");
  return (
    <Box className={classes.root}>
      <Typography variant="h4" fontWeight="bold" textAlign="left">
        Editor's pick
      </Typography>
      <Box className={classes.imgRow}>
        {data.map((item) => {
          return <img src={item.img} alt={item.category} />;
        })}
      </Box>
    </Box>
  );
};
