import { addPostActionCreator, profileReducer } from "./profile-reducer";
import { v1 } from "uuid";

it("length of posts should be incremented", () => {
  const action = addPostActionCreator("it-kamasutra.com");
  let state = {
    posts: [
      { id: v1(), message: "Hi, how are you?", likesCount: 6 },
      { id: v1(), message: "It's my first post", likesCount: 23 },
    ],
    profile: null,
    status: "",
  };
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
  expect(newState.posts[4].message).toBe("it-kamasutra.com");
});
