import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  AlertContainer: {},
}));

const Alert = () => {
  const classes = useStyles();

  return <div className={classes.AlertContainer}>I am alert</div>;
};

export default Alert;
