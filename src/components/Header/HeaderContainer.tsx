import React from "react";
import { Header } from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { HeaderLoginType } from "../../redux/store";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = {
  id: string | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type MapDispatchPropsType = {
  setAuthUserData: (id: string, email: string, login: string) => void;
};

type HeaderProps = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderProps> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }

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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
