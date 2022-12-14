import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { HeaderLoginType } from "../../redux/store";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = {
  id: string | undefined;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type MapDispatchPropsType = {
  // setAuthUserData: (id: string, email: string, login: string) => void;
  // getAuthUserData: () => void;
};

type HeaderProps = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderProps> {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType): HeaderLoginType => ({
  id: state.authReducer.id,
  email: state.authReducer.email,
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
