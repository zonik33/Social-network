import MyPosts from "./MyPosts/MyPosts";
import "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {addPost} from "../../redux/state";

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postData = {props.state.postData} addPost = {props.addPost}/>
    </div>
  );
};
export default Profile;
