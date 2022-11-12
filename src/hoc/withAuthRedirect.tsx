import React, { ComponentType } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../redux/redux-store";

type MapStatePropsType = {
  isAuth: boolean;
};

const mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => {
  return { isAuth: state.authReducer.isAuth };
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: MapStatePropsType) => {
    const { isAuth, ...restProps } = props;
    if (!isAuth) return <Redirect to={"/login"} />;
    return <Component {...(restProps as T & {})} />;
  };

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
