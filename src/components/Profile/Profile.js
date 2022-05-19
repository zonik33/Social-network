import MyPosts from "./MyPosts/MyPosts";
import "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {updateNewPostText} from "../../redux/store";

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postData = {props.profilePage.postData}
               newPostText = {props.profilePage.newPostText}
               dispatch = {props.dispatch} />
    </div>
  );
};
export default Profile;
