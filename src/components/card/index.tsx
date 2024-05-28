import React from "react";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import classes from "./style.module.scss";

interface IProps {
  media: {
    image: string;
    title?: string;
  };
  content: {
    title?: string;
    text?: string;
  };
}
export const CustomCard: React.FC<IProps> = ({ media, content }) => {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} {...media} />
      <CardContent className={classes.content}>
        {content.title && <Typography variant="subtitle3">{content.title}</Typography>}
        {content.text && <Typography variant="body2">{content.text}</Typography>}
      </CardContent>
    </Card>
  );
};
