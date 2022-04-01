import MyPosts from "./MyPosts/MyPosts";
import "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"></img>
      </div>
      <div className="item">ava + description</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
