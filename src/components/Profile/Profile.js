import "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Navigate} from "react-router-dom";
import React from "react";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile ={props.profile}/>
            <MyPostsContainer
                store={props.store}/>
        </div>
    );
};
export default Profile;
