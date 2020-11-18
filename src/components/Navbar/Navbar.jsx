import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import { logoutAction } from "../../redux/actions/user";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  NavContainer: {
    backgroundColor: "#3180f2",
    height: "100vh",
    padding: "2rem 1rem",
  },
  NavList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  NavItem: {
    color: "#fff",
    listStyle: "none",
    height: "7rem",
    width: "7rem",
    borderRadius: "50%",
    backgroundColor: "#015fe6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",

    "& button": {
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
    },
  },
  NavLink: {
    color: "#fff",
    fontSize: "2rem",
  },
}));

const NavTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#fff",
    color: "#015fe6",
    boxShadow: theme.shadows[1],
    fontSize: 20,
  },
}))(Tooltip);

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <div className={classes.NavContainer}>
      <ul className={classes.NavList}>
        <NavTooltip title="Home" placement="right">
          <li className={classes.NavItem}>
            <Link to="/" className={classes.NavLink}>
              <i className="fas fa-house-user"></i>
            </Link>
          </li>
        </NavTooltip>

        <NavTooltip title="Manage Todo" placement="right">
          <li className={classes.NavItem}>
            <Link to="/manage-todo" className={classes.NavLink}>
              <i className="fas fa-book"></i>
            </Link>
          </li>
        </NavTooltip>

        <NavTooltip title="Profile" placement="right">
          <li className={classes.NavItem}>
            <Link to="/profile" className={classes.NavLink}>
              <i className="fas fa-user-shield"></i>
            </Link>
          </li>
        </NavTooltip>

        <NavTooltip title="Add Todo" placement="right">
          <li className={classes.NavItem}>
            <Link to="/add-todo" className={classes.NavLink}>
              <i className="fas fa-pen"></i>
            </Link>
          </li>
        </NavTooltip>

        <NavTooltip title="Logout" placement="right">
          <li onClick={handleLogout} className={classes.NavItem}>
            <button className={classes.NavLink}>
              <i className="fas fa-door-open"></i>
            </button>
          </li>
        </NavTooltip>
      </ul>
    </div>
  );
};

export default Navbar;
