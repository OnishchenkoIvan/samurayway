import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import {
  getStatus,
  getUserProfile,
  updateStatus,
} from "../../redux/profile-reducer";
import { ProfileType } from "../../redux/store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type PathParamsType = {
  userId: string | undefined;
};

type MapStatePropsType = {
  profile: ProfileType | null;
  status: string;
  authorizedUserId: string | undefined;
  isAuth: boolean;
};

type MapDispatchPropsType = {
  getUserProfile: (userId: string | undefined) => void;
  getStatus: (userId: string | undefined) => void;
  updateStatus: (value: string) => void;
};

type OwnPropsType = MapStatePropsType & MapDispatchPropsType;

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> &
  OwnPropsType;

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

export let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.id,
    isAuth: state.authReducer.isAuth,
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
