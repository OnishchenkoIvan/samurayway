import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { ProfileType } from "../../redux/store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type PathParamsType = {
  userId: string;
};

type MapStatePropsType = {
  profile: ProfileType | null;
  status: string;
};

type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void;
  getStatus: (userId: string) => void;
  updateStatus: (value: string) => void;
};

type OwnPropsType = MapStatePropsType & MapDispatchPropsType;

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> &
  OwnPropsType;

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "26246";
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
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
