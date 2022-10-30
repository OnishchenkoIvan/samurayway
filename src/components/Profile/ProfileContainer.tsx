import React from "react";
import { Profile } from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { setUserProfile } from "../../redux/profile-reducer";
import { ProfileType } from "../../redux/store";

type MapStatePropsType = {
  // posts: Array<PostsType>;
  // newPostText: string;
  profile: ProfileType | null;
};

type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileType) => void;
};
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
    // posts: state.profileReducer.posts,
    // newPostText: state.profileReducer.newPostText,
    profile: state.profileReducer.profile,
  };
};

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
