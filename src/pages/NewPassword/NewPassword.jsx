import React from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { newPasswordAction } from "../../redux/actions/user";

const useStyles = makeStyles((theme) => ({
  LoginForm: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    "& .MuiFormControl-root": {
      width: "100%",

      "& label": {
        fontSize: "1.2rem",
      },
    },

    "& .MuiInputBase-root": {
      margin: theme.spacing(1),

      "& input": {
        fontSize: "1.8rem",
      },
    },

    "& .MuiFormControlLabel-root": {
      padding: "1rem",

      "& span": {
        fontSize: "1.5rem",
      },
    },

    "& .MuiSvgIcon-root": {
      fontSize: "2.5rem !important",
    },

    "& .MuiButton-containedPrimary": {
      width: "35%",
      transform: "translateX(.8rem)",
      fontSize: "1.3rem",
    },
  },
}));

const NewPassword = ({ history, match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const newPassword = useSelector((state) => state.newPassword);
  const token = match.params.resetToken;

  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(newPasswordAction(token, { password }));

    setPassword("");
    setPassword2("");
  };

  return (
    <PageWrapper>
      <h1>Update Your New Password</h1>

      <form onSubmit={handleSubmit} className={classes.LoginForm}>
        <TextField
          error={password ? false : true}
          label="New Password"
          type="password"
          variant="outlined"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextField
          label="Confirm Your Password"
          type="password"
          variant="outlined"
          name="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />

        <Button
          disabled={!password || password !== password2 ? true : false}
          type="submit"
          variant="contained"
          color="primary"
        >
          {newPassword && newPassword.loading
            ? "Loading..."
            : "Update Password"}
        </Button>
      </form>
    </PageWrapper>
  );
};

export default NewPassword;
