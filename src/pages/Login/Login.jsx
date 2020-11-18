import React from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../../redux/actions/user";

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

const Login = ({ history }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const signIn = useSelector((state) => state.signIn);

  React.useEffect(() => {
    if (signIn && signIn.userInfo && signIn.userInfo.token) {
      history.push("/");
    }

    // eslint-disable-next-line
  }, [signIn]);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginObject = {
      email,
      password,
    };

    dispatch(signInAction(loginObject));

    setEmail("");
    setPassword("");
  };

  return (
    <PageWrapper>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit} className={classes.LoginForm}>
        <TextField
          label="Email Address"
          type="email"
          variant="outlined"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!email || !password ? true : false}
        >
          {signIn && signIn.loading ? "Loading...." : "Login"}
        </Button>
      </form>
    </PageWrapper>
  );
};

export default Login;
