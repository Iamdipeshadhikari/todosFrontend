import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routerProps) => {
        if (token) {
          return <Component {...rest} {...routerProps} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: routerProps.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
