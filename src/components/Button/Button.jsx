import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  Button: {
    color: "#fff",
    fontSize: "1.5rem",
    border: "none",
    backgroundColor: "#E53A40",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontFamily: "Roboto Condensed",
    fontWeight: 400,
    padding: "1rem 3rem",
    outline: "none",

    "&:hover": {
      color: "#E53A40",
      backgroundColor: "#fff",
    },
  },
  LinkButton: {
    color: "#fff",
    backgroundColor: "#3180f2",
    padding: "1rem 3rem",
    fontFamily: "Roboto Condensed",
    fontWeight: 400,
    fontSize: "1.6rem",
    textDecoration: "none",
    borderRadius: "10rem",
    transition: "all 0.3s",

    "&:hover": {
      transform: "translateY(-.3rem)",
    },
  },
  LinkButtonFlat: {
    color: "#fff",
    backgroundColor: "#3180f2",
    padding: "1rem 3rem",
    fontFamily: "Roboto Condensed",
    fontWeight: 400,
    fontSize: "1.6rem",
    textDecoration: "none",
    transition: "all 0.3s ease",

    "&:hover": {
      transform: "translateY(-.3rem)",
    },
  },
}));

const Button = (props) => {
  const classes = useStyles();

  if (props.link) {
    return (
      <Link
        to={props.to}
        style={props.style}
        className={
          props.type === "rounded" ? classes.LinkButton : classes.LinkButtonFlat
        }
      >
        {props.text}
      </Link>
    );
  } else {
    return (
      <button
        onClick={props.onClick}
        style={props.style}
        className={classes.Button}
      >
        {props.text}
      </button>
    );
  }
};

export default Button;
