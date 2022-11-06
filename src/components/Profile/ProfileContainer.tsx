import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { getUserProfile } from "../../redux/profile-reducer";
import { ProfileType } from "../../redux/store";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";

type PathParamsType = {
  userId: string;
};

type MapStatePropsType = {
  profile: ProfileType | null;
  isAuth: boolean;
};

type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void;
};

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> &
  OwnPropsType;
type OwnPropsType = MapStatePropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "2";
    }
    this.props.getUserProfile(userId);
  }
  render() {
    if (!this.props.isAuth) return <Redirect to={"/login"} />;

    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

export let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profileReducer.profile,
    isAuth: state.authReducer.isAuth,
  };
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
