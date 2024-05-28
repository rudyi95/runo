import React from "react";

import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import classes from "./style.module.scss";

export const SubFooter: React.FC = () => {
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.column}>
          <Typography variant="subtitle3">Contact the Publisher</Typography>
          <Box>
            <Typography variant="body1">rudyi95@icloud.com</Typography>
            <Typography variant="body1">+1 (239) 412-24-35</Typography>
          </Box>
        </Box>
        <Box className={classes.column}>
          <Typography variant="subtitle3">Explorate</Typography>
          <Box>
            <Typography variant="body1">About</Typography>
            <Typography variant="body1">Partners</Typography>
            <Typography variant="body1">Job Opportunities</Typography>
            <Typography variant="body1">Advertise</Typography>
            <Typography variant="body1">Membership</Typography>
          </Box>
        </Box>
        <Box className={classes.column}>
          <Typography variant="subtitle3">Headquarter</Typography>
          <Box>
            <Typography variant="body1">191 Middleville Road, NY 1001, Sydney Australia</Typography>
          </Box>
        </Box>
        <Box className={classes.column}>
          <Typography variant="subtitle3">Connections</Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <FacebookIcon />
            <TwitterIcon />
            <YouTubeIcon />
            <PinterestIcon />
            <LinkedInIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
