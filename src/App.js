import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Manage from "./pages/Manage/Manage";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import NewPassword from "./pages/NewPassword/NewPassword";
import ProtectedRoute from "./utils/ProtectedRoute";
import UpdateProfile from "./pages/Profile/UpdateProfile";
import { useSelector } from "react-redux";

// React toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const signIn = useSelector((state) => state.signIn);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        newestOnTop={true}
        closeOnClick
        draggable={true}
      />

      <Switch>
        <Route
          path="/signup"
          exact
          render={(routerProps) => <Signup {...routerProps} />}
        />
        <Route
          path="/login"
          exact
          render={(routerProps) => <Login {...routerProps} />}
        />
        <Route
          path="/forget-password"
          exact
          render={(routerProps) => <ForgetPassword {...routerProps} />}
        />
        <Route
          path="/new-password/:resetToken"
          exact
          render={(routerProps) => <NewPassword {...routerProps} />}
        />

        {/* Protected Routes */}
        <ProtectedRoute
          token={signIn && signIn.userInfo && signIn.userInfo.token}
          path="/"
          exact
          component={Home}
        />
        <ProtectedRoute
          token={signIn && signIn.userInfo && signIn.userInfo.token}
          path="/add-todo"
          exact
          component={Add}
        />
        <ProtectedRoute
          token={signIn && signIn.userInfo && signIn.userInfo.token}
          path="/manage-todo"
          exact
          component={Manage}
        />
        <ProtectedRoute
          token={signIn && signIn.userInfo && signIn.userInfo.token}
          path="/profile"
          exact
          component={Profile}
        />

        <ProtectedRoute
          token={signIn && signIn.userInfo && signIn.userInfo.token}
          exact
          path="/update-profile"
          component={UpdateProfile}
        />
      </Switch>
    </>
  );
};

export default App;
