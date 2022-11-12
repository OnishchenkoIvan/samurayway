import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { getUserProfile } from "../../redux/profile-reducer";
import { ProfileType } from "../../redux/store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type PathParamsType = {
  userId: string;
};

type MapStatePropsType = {
  profile: ProfileType | null;
};

type MapStateForRedirectProps = { isAuth: boolean };

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
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
//
// export let mapStateToPropsForRedirect = (
//   state: AppStateType
// ): MapStateForRedirectProps => {
//   return {
//     isAuth: state.authReducer.isAuth,
//   };
// };

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

export let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profileReducer.profile,
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
