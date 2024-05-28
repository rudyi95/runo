import React from "react";

import { AppBar, Box, Toolbar, Tooltip, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";

import classes from "./style.module.scss";

export const Header: React.FC = () => {
  return (
    <AppBar className={classes.root} position="relative">
      <Toolbar className={classes.toolbar}>
        <Box>
          <Tooltip title="Go homepage" placement="bottom">
            <Typography>RUNO</Typography>
          </Tooltip>
        </Box>
        <Box className={classes.navContainer}>
          <Box className={classes.nav}>
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Articles</Typography>
            <Typography>Contact Us</Typography>
          </Box>
          <Box className={classes.links}>
            <FacebookIcon />
            <TwitterIcon />
            <YouTubeIcon />
            <PinterestIcon />
            <LinkedInIcon />
          </Box>
          <Box className={classes.searchBlock}>
            <SearchIcon />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
