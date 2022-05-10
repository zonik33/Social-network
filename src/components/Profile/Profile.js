import MyPosts from "./MyPosts/MyPosts";
import "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postData = {props.profilePage.postData}
               updateNewPostText = {props.updateNewPostText}
               newPostText = {props.profilePage.newPostText}
               addPost = {props.addPost}/>
    </div>
  );
};
export default Profile;
