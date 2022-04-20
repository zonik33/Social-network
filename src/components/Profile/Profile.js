import MyPosts from "./MyPosts/MyPosts";
import "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postData = {props.state.postData}/>
    </div>
  );
};
export default Profile;
