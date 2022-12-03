import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, withRouter } from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { DialogsContainer } from "./components/Dialogs/Message/DialogsContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import { AppStateType } from "./redux/redux-store";
import { Preloader } from "./components/common/preload/Preloader";

class App extends React.Component<AppPropsType, any> {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path={"/dialogs"} render={() => <DialogsContainer />} />
          <Route
            path={"/profile/:userId?"}
            render={() => <ProfileContainer />}
          />
          <Route path={"/news"} render={() => <News />} />
          <Route path={"/music"} render={() => <Music />} />
          <Route path={"/settings"} render={() => <Settings />} />
          <Route path={"/users"} render={() => <UsersContainer />} />
          <Route path={"/login"} render={() => <Login />} />
        </div>
      </div>
    );
  }
}

type MapStatePropsType = {
  initialized: boolean;
};
type MapDispatchPropsType = {
  initializeApp: () => void;
};

type AppPropsType = MapStatePropsType & MapDispatchPropsType;
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  initialized: state.app.initialized,
});

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
