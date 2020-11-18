import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Navbar/Navbar";
import ProfileBar from "../ProfileBar/ProfileBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Content: {
    backgroundColor: "#3180f2",
    width: "100%",
    height: "100vh",
    padding: "3rem 0rem 0 3rem",
    color: "#fff",
    fontFamily: "Roboto Condensed",
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={0}>
      <Grid item xs={1}>
        <Navbar />
      </Grid>

      <Grid item xs={3}>
        <ProfileBar />
      </Grid>

      <Grid item xs={8}>
        <div className={classes.Content}>{props.children}</div>
      </Grid>
    </Grid>
  );
};

export default Layout;
