import React from "react";
import { useSelector } from "react-redux";

import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { isAuth, isLoading } = useSelector((state) => state.authReducer);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!isAuth) {
    return <Redirect to="/login" />;
  } else return <Route path={path} component={Component} {...rest} />;
};

export default PrivateRoute;
