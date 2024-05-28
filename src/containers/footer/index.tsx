import { Box, Typography } from "@mui/material";
import React from "react";

import classes from "./style.module.scss";

export const Footer: React.FC = () => {
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Typography variant="body1">2024 | RUNO Publisher Studio</Typography>
        <Typography variant="body1">Subscribe Now</Typography>
      </Box>
    </Box>
  );
};
