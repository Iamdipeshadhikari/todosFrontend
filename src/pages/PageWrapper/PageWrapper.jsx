import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BackgroundImage from "../../assets/backgroun.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  PageWrapper: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#fdfdfd",
    display: "flex",

    "& h1": {
      fontFamily: "Roboto Condensed",
      fontSize: "4rem",
      padding: "1.5rem",
      color: "#999",
      fontWeight: "400",
      textTransform: "capitalize",
    },
  },
  MainBox: {
    height: "100%",
    width: "70%",
    position: "relative",
  },
  Sidebar: {
    height: "100%",
    width: "30%",
    overflow: "hidden",
    position: "relative",

    "& img": {
      height: "100%",
      width: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      objectFit: "cover",
    },

    "& h1": {
      position: "absolute",
      top: "0",
      left: "50%",
      transform: "translateX(-50%)",
      padding: "1rem 0",
      fontSize: "3rem",
      color: "#fff",
      textTransform: "uppercase",
      fontFamily: "Roboto Condensed",
    },

    "& ul": {
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      padding: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      listStyle: "none",
      fontSize: "1.5rem",
    },

    "& a": {
      color: "#eee",
      fontFamily: "Roboto Condensed",
      textDecoration: "none",
    },

    "& p": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      padding: "1rem",
      textAlign: "center",
      color: "#fff",
      fontFamily: "Roboto Condensed",
      letterSpacing: "2px",
      lineHeight: "1.4",
    },
  },
}));

const PageWrapper = ({ children }, props) => {
  const classes = useStyles();

  return (
    <div className={classes.PageWrapper}>
      <div className={classes.Sidebar}>
        <img src={BackgroundImage} alt="Background" />
        <h1>
          <Link to="/">Todos</Link>
        </h1>

        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/signup">Signup</Link>
          </li>

          <li>
            <Link to="/forget-password">Reset Password</Link>
          </li>
        </ul>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          sequi eaque! Quibusdam eum, dolorem odit illo placeat unde quasi
          incidunt maiores, possimus expedita odio doloribus, voluptas porro
          adipisci iusto nemo!
        </p>
      </div>
      <div className={classes.MainBox}>{children}</div>
    </div>
  );
};

export default PageWrapper;
