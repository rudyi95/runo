import React from "react";

import { Box, Button, Typography } from "@mui/material";

import { CustomCard } from "src/components";
import { REGULAR_DATA } from "src/utils/constants/regular";

import classes from "./style.module.scss";

export const RegularBlog: React.FC = () => {
  return (
    <Box className={classes.root}>
      <Typography variant="h4" fontWeight="bold" textAlign="left">
        Popular topics
      </Typography>
      <Box>
        <Box className={classes.contentHeader}>
          <Box className={classes.categories}>
            <Button>All</Button>
            <Button>Adventure</Button>
            <Button>Travel</Button>
            <Button>Fashion</Button>
            <Button>Technology</Button>
            <Button>Branding</Button>
          </Box>
          <Box className={classes.view}>
            <Button>View all</Button>
          </Box>
        </Box>
        <Box className={classes.content}>
          {REGULAR_DATA.map((item) => {
            return (
              <CustomCard media={{ image: item.img, title: item.category }} content={item} />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
