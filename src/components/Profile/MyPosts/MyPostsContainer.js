import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
let state = props.store.getState();

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  }
  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
      props.store.dispatch(action);
  }
    return (
    <MyPosts  updateNewPostText = {onPostChange}
              addPost = {onAddPost}
              newPostText = {state.profilePage.newPostText}
              postData = {state.profilePage.postData}
    />
    )
};
export default MyPostsContainer;
