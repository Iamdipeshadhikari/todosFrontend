import React from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { signUpAction } from "../../redux/actions/user";
import { useSelector, useDispatch } from "react-redux";

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

    "& .MuiButton-containedPrimary": {
      width: "25%",
      transform: "translateX(.8rem)",
      fontSize: "1.3rem",
    },
  },
}));

const Signup = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const signUp = useSelector((state) => state.signUp);

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userObject = {
      username,
      email,
      password,
    };

    dispatch(signUpAction(userObject));

    setUsername("");
    setEmail("");
    setPassword("");
    setPassword2("");
  };

  return (
    <PageWrapper>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit} className={classes.LoginForm}>
        <TextField
          label="Username"
          type="text"
          variant="outlined"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Email Address"
          type="email"
          variant="outlined"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          error={password !== password2 ? true : false}
          label="Confirm Password"
          type="password"
          variant="outlined"
          name="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={
            !username || !email || !password || !password2 ? true : false
          }
        >
          {signUp && signUp.loading ? "Loading..." : "Signup"}
        </Button>
      </form>
    </PageWrapper>
  );
};

export default Signup;
