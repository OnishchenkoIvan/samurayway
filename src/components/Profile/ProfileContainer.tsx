import React from "react";
import { Profile } from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { setUserProfile } from "../../redux/profile-reducer";
import { ProfileType } from "../../redux/store";
import { Route, RouteComponentProps, withRouter } from "react-router-dom";

type PathParamsType = {
  userId: string;
};

type MapStatePropsType = {
  profile: ProfileType | null;
};

type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileType) => void;
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
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

export let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profileReducer.profile,
  };
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
);
