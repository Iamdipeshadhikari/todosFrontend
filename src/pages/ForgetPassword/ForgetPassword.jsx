import React from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { forgetPasswordAction } from "../../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";

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
      width: "25%",
      transform: "translateX(.8rem)",
      fontSize: "1.3rem",
    },
  },
}));

const ForgetPassword = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const forgetPassword = useSelector((state) => state.forgetPassword);

  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(forgetPasswordAction({ email }));

    setEmail("");
  };

  return (
    <PageWrapper>
      <h1>Password Reset Page</h1>

      <form onSubmit={handleSubmit} className={classes.LoginForm}>
        <TextField
          error={email ? false : true}
          label="Email Address"
          type="email"
          variant="outlined"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          disabled={!email ? true : false}
          type="submit"
          variant="contained"
          color="primary"
        >
          {forgetPassword && forgetPassword.loading
            ? "Loading..."
            : "Send Email"}
        </Button>
      </form>
    </PageWrapper>
  );
};

export default ForgetPassword;
