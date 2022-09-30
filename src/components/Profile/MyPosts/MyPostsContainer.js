import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postData: state.profilePage.postData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newTextMessage) => {
            dispatch(addPostActionCreator(newTextMessage));
        },

    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;